import os
import sys
import json
from flask import Flask, render_template, request, redirect, url_for, session
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

app = Flask(__name__)
app.secret_key = 'change-this-in-production'

CREDENTIALS_FILE = r'C:\Users\abigr\Documents\Toughjobs\GoogleAuth\client_secret_2_666401400557-tsvanfnemvma8k82r6hbtltli88d9sb0.apps.googleusercontent.com.json'
SCOPES = [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive.file',
]

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

COUNTER_FILE = os.path.join(os.path.dirname(__file__), 'invoice_counter.json')
LOGO_CACHE   = os.path.join(os.path.dirname(__file__), 'logo_drive_cache.json')
LOGO_SOURCE  = r'C:\Users\abigr\Documents\Toughjobs\Logos\toughjobs_digital_marketing_logo.png'

BUSINESS_NAME = 'Toughjobs Digital Marketing'
BIZ_INFO_TEXT = (
    'Toughjobs Digital Marketing\n'
    '140 Oakmoor Dr.\n'
    'East Peoria, IL 61611\n'
    '(309) 233-9004\n'
    'info@toughjobs.org'
)

DARK_BLUE = {'red': 0.067, 'green': 0.094, 'blue': 0.408}
MID_GRAY  = {'red': 0.55,  'green': 0.55,  'blue': 0.55}
WHITE     = {'red': 1.0,   'green': 1.0,   'blue': 1.0}


# ── helpers ───────────────────────────────────────────────────────────────────

def get_next_invoice_number():
    if os.path.exists(COUNTER_FILE):
        with open(COUNTER_FILE) as f:
            return json.load(f)['next']
    return 576


def increment_invoice_number():
    n = get_next_invoice_number()
    with open(COUNTER_FILE, 'w') as f:
        json.dump({'next': n + 1}, f)


def get_logo_url(drive_service):
    if os.path.exists(LOGO_CACHE):
        with open(LOGO_CACHE) as f:
            d = json.load(f)
        return d['url'], d['width_pt'], d['height_pt']

    sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'libs'))
    from PIL import Image
    img = Image.open(LOGO_SOURCE)
    iw, ih = img.size
    width_pt  = 153.0
    height_pt = round((ih / iw) * width_pt, 2)

    media = MediaFileUpload(LOGO_SOURCE, mimetype='image/png')
    file  = drive_service.files().create(
        body={'name': 'toughjobs-invoice-logo.png'}, media_body=media, fields='id'
    ).execute()
    fid = file['id']
    drive_service.permissions().create(fileId=fid, body={'type': 'anyone', 'role': 'reader'}).execute()

    url = f'https://drive.google.com/uc?id={fid}'
    with open(LOGO_CACHE, 'w') as f:
        json.dump({'url': url, 'width_pt': width_pt, 'height_pt': height_pt}, f)
    return url, width_pt, height_pt


def _tx(start, end, bold=None, size=None, color=None):
    style, fields = {}, []
    if bold  is not None: style['bold'] = bold;                                   fields.append('bold')
    if size  is not None: style['fontSize'] = {'magnitude': size, 'unit': 'PT'}; fields.append('fontSize')
    if color is not None: style['foregroundColor'] = {'color': {'rgbColor': color}}; fields.append('foregroundColor')
    return {'updateTextStyle': {
        'range': {'startIndex': start, 'endIndex': end},
        'textStyle': style, 'fields': ','.join(fields),
    }}


def _para(start, end, align=None, space_above=None, space_below=None):
    style, fields = {}, []
    if align       is not None: style['alignment'] = align;                                    fields.append('alignment')
    if space_above is not None: style['spaceAbove'] = {'magnitude': space_above, 'unit': 'PT'}; fields.append('spaceAbove')
    if space_below is not None: style['spaceBelow'] = {'magnitude': space_below, 'unit': 'PT'}; fields.append('spaceBelow')
    return {'updateParagraphStyle': {
        'range': {'startIndex': start, 'endIndex': end},
        'paragraphStyle': style, 'fields': ','.join(fields),
    }}


def _cell_style(tbl_idx, row, col, row_span=1, col_span=1, bg=None, pad=None, no_border=False):
    no_bdr = {
        'color': {'color': {'rgbColor': WHITE}},
        'width': {'magnitude': 0, 'unit': 'PT'},
        'dashStyle': 'SOLID',
    }
    style, fields = {}, []
    if bg is not None:
        style['backgroundColor'] = {'color': {'rgbColor': bg}}
        fields.append('backgroundColor')
    if pad is not None:
        for side in ('paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'):
            style[side] = {'magnitude': pad, 'unit': 'PT'}
            fields.append(side)
    if no_border:
        for side in ('borderTop', 'borderBottom', 'borderLeft', 'borderRight'):
            style[side] = no_bdr
            fields.append(side)
    return {'updateTableCellStyle': {
        'tableRange': {
            'tableCellLocation': {
                'tableStartLocation': {'index': tbl_idx},
                'rowIndex': row, 'columnIndex': col,
            },
            'rowSpan': row_span, 'columnSpan': col_span,
        },
        'tableCellStyle': style, 'fields': ','.join(fields),
    }}


def _col_width(tbl_idx, col, width_pt):
    return {'updateTableColumnProperties': {
        'tableStartLocation': {'index': tbl_idx},
        'columnIndices': [col],
        'tableColumnProperties': {
            'widthType': 'FIXED_WIDTH',
            'width': {'magnitude': width_pt, 'unit': 'PT'},
        },
        'fields': 'widthType,width',
    }}


def get_para_text(element):
    return ''.join(
        p['textRun']['content']
        for p in element.get('paragraph', {}).get('elements', [])
        if 'textRun' in p
    )


def find_tables(doc_data):
    return [(el['table'], el['startIndex']) for el in doc_data['body']['content'] if 'table' in el]


# ── routes ────────────────────────────────────────────────────────────────────

@app.route('/')
def index():
    return render_template('index.html', next_invoice=get_next_invoice_number())


@app.route('/generate', methods=['POST'])
def generate():
    if 'credentials' not in session:
        session['pending_form'] = {k: request.form.getlist(k) for k in request.form}
        return redirect(url_for('login'))
    return create_invoice(request.form)


@app.route('/login')
def login():
    flow = Flow.from_client_secrets_file(CREDENTIALS_FILE, scopes=SCOPES,
                                          redirect_uri=url_for('oauth2callback', _external=True))
    auth_url, state = flow.authorization_url(prompt='consent')
    session['oauth_state']   = state
    session['code_verifier'] = flow.code_verifier
    return redirect(auth_url)


@app.route('/oauth2callback')
def oauth2callback():
    flow = Flow.from_client_secrets_file(CREDENTIALS_FILE, scopes=SCOPES,
                                          state=session['oauth_state'],
                                          redirect_uri=url_for('oauth2callback', _external=True))
    flow.code_verifier = session.get('code_verifier')
    flow.fetch_token(authorization_response=request.url)
    creds = flow.credentials
    session['credentials'] = {
        'token': creds.token, 'refresh_token': creds.refresh_token,
        'token_uri': creds.token_uri, 'client_id': creds.client_id,
        'client_secret': creds.client_secret,
        'scopes': list(creds.scopes) if creds.scopes else [],
    }
    pending = session.pop('pending_form', None)
    if pending:
        from werkzeug.datastructures import ImmutableMultiDict
        return create_invoice(ImmutableMultiDict([(k, v) for k, vals in pending.items() for v in vals]))
    return redirect(url_for('index'))


# ── invoice creation ──────────────────────────────────────────────────────────

def create_invoice(form):
    cd = session['credentials']
    creds = Credentials(token=cd['token'], refresh_token=cd['refresh_token'],
                        token_uri=cd['token_uri'], client_id=cd['client_id'],
                        client_secret=cd['client_secret'], scopes=cd['scopes'])

    client_name    = form.get('client_name', '')
    due_date       = form.get('due_date', '')
    invoice_number = form.get('invoice_number', '')
    tax_rate       = 8.5

    line_items, subtotal = [], 0.0
    for desc, qty, price in zip(form.getlist('description'),
                                 [float(q) for q in form.getlist('quantity')],
                                 [float(p) for p in form.getlist('unit_price')]):
        amount = qty * price
        subtotal += amount
        line_items.append({'description': desc, 'quantity': qty, 'unit_price': price, 'amount': amount})

    tax_amount = subtotal * (tax_rate / 100)
    total      = subtotal + tax_amount

    docs  = build('docs',  'v1', credentials=creds)
    drive = build('drive', 'v3', credentials=creds)

    logo_url, logo_w, logo_h = get_logo_url(drive)

    doc    = docs.documents().create(body={'title': f'Invoice #{invoice_number} – {client_name}'}).execute()
    doc_id = doc['documentId']

    pre_text = (
        '\n'
        f'Invoice #{invoice_number}\n'
        f'Due Date: {due_date}\n'
        '\n'
        'BILL TO\n'
        f'{client_name}\n'
        '\n'
    )
    post_text = (
        '\n'
        f'Subtotal: ${subtotal:,.2f}\n'
        f'Tax ({tax_rate:.1f}%): ${tax_amount:,.2f}\n'
        f'Total: ${total:,.2f}\n'
    )

    # Pass 1 — build skeleton:
    # [header table (1×2)] [pre_text] [items table (N+1×4)] [post_text]
    docs.documents().batchUpdate(documentId=doc_id, body={'requests': [
        {'insertText':  {'location': {'index': 1}, 'text': post_text}},
        {'insertTable': {'location': {'index': 1}, 'rows': len(line_items) + 1, 'columns': 4}},
        {'insertText':  {'location': {'index': 1}, 'text': pre_text}},
        {'insertTable': {'location': {'index': 1}, 'rows': 1, 'columns': 2}},
    ]}).execute()

    # GET 1 — find table cell positions
    doc1    = docs.documents().get(documentId=doc_id).execute()
    tables1 = find_tables(doc1)
    hdr_table, hdr_tbl_idx = tables1[0]   # header: left=biz info, right=logo
    itm_table, itm_tbl_idx = tables1[1]   # line items

    hdr_left_idx  = hdr_table['tableRows'][0]['tableCells'][0]['content'][0]['startIndex']
    hdr_right_idx = hdr_table['tableRows'][0]['tableCells'][1]['content'][0]['startIndex']

    # Collect items table cells sorted descending (safe reverse insertion)
    item_cells = []
    for cell, h in zip(itm_table['tableRows'][0]['tableCells'], ['DESCRIPTION', 'QTY', 'UNIT PRICE', 'AMOUNT']):
        item_cells.append((cell['content'][0]['startIndex'], h))
    for item, row in zip(line_items, itm_table['tableRows'][1:]):
        qty_str = str(int(item['quantity'])) if item['quantity'] == int(item['quantity']) else f"{item['quantity']:.2f}"
        for cell, val in zip(row['tableCells'],
                              [item['description'], qty_str,
                               f"${item['unit_price']:,.2f}", f"${item['amount']:,.2f}"]):
            item_cells.append((cell['content'][0]['startIndex'], val))
    item_cells.sort(key=lambda x: x[0], reverse=True)

    # Pass 2 — fill cells
    # Items cells first (high indices → no effect on header table positions)
    # Logo next (right cell, higher index than left cell)
    # Biz text last (left cell, lowest index)
    pass2 = [{'insertText': {'location': {'index': i}, 'text': t}} for i, t in item_cells]
    pass2.append({
        'insertInlineImage': {
            'location': {'index': hdr_right_idx},
            'uri': logo_url,
            'objectSize': {
                'width':  {'magnitude': logo_w, 'unit': 'PT'},
                'height': {'magnitude': logo_h, 'unit': 'PT'},
            },
        }
    })
    pass2.append({'insertText': {'location': {'index': hdr_left_idx}, 'text': BIZ_INFO_TEXT}})
    docs.documents().batchUpdate(documentId=doc_id, body={'requests': pass2}).execute()

    # GET 2 — final positions for formatting (table indices shift after Pass 2 insertions)
    doc2    = docs.documents().get(documentId=doc_id).execute()
    tables2 = find_tables(doc2)
    hdr_tbl_idx2 = tables2[0][1]
    itm_tbl_idx2 = tables2[1][1]

    # Pass 3 — formatting
    docs.documents().batchUpdate(documentId=doc_id, body={
        'requests': build_format_requests(doc2, hdr_tbl_idx2, itm_tbl_idx2)
    }).execute()

    increment_invoice_number()
    return render_template('index.html',
                           doc_url=f'https://docs.google.com/document/d/{doc_id}/edit',
                           next_invoice=get_next_invoice_number())


def build_format_requests(doc_data, hdr_tbl_idx, itm_tbl_idx):
    reqs = []
    content = doc_data['body']['content']
    doc_end = content[-1]['endIndex'] - 1

    # Oswald font + base size throughout
    reqs += [
        {'updateTextStyle': {
            'range': {'startIndex': 1, 'endIndex': doc_end},
            'textStyle': {'weightedFontFamily': {'fontFamily': 'Oswald'}},
            'fields': 'weightedFontFamily',
        }},
        _tx(1, doc_end, size=11),
    ]

    # Style body (non-table) paragraphs
    for el in content:
        if 'paragraph' not in el:
            continue
        text = get_para_text(el).rstrip('\n')
        si, ei = el['startIndex'], el['endIndex']
        if   text.startswith('Invoice #'):
            reqs += [_tx(si, ei-1, bold=True, size=24, color=DARK_BLUE), _para(si, ei, space_above=10)]
        elif text.startswith('Due Date:'):
            reqs.append(_tx(si, ei-1, size=10, color=MID_GRAY))
        elif text == 'BILL TO':
            reqs += [_tx(si, ei-1, bold=True, size=8, color=MID_GRAY), _para(si, ei, space_above=14)]
        elif text.startswith('Subtotal:'):
            reqs += [_tx(si, ei-1, size=10), _para(si, ei, align='END')]
        elif text.startswith('Tax ('):
            reqs += [_tx(si, ei-1, size=10, color=MID_GRAY), _para(si, ei, align='END')]
        elif text.startswith('Total:'):
            reqs += [_tx(si, ei-1, bold=True, size=13, color=DARK_BLUE),
                     _para(si, ei, align='END', space_above=4)]

    tables = find_tables(doc_data)
    hdr_table = tables[0][0]
    itm_table = tables[1][0]

    # ── Header table ──────────────────────────────────────────────────────────

    # Remove borders + padding on both cells
    reqs += [
        _cell_style(hdr_tbl_idx, 0, 0, pad=6, no_border=True),
        _cell_style(hdr_tbl_idx, 0, 1, pad=6, no_border=True),
    ]

    # Column widths: biz info 300pt, logo 168pt
    reqs += [_col_width(hdr_tbl_idx, 0, 300), _col_width(hdr_tbl_idx, 1, 168)]

    # Left cell: first para = business name (bold dark blue), rest = address (gray small)
    left_cell = hdr_table['tableRows'][0]['tableCells'][0]
    for i, para_el in enumerate(left_cell['content']):
        if 'paragraph' not in para_el:
            continue
        si, ei = para_el['startIndex'], para_el['endIndex']
        line_text = get_para_text(para_el).rstrip('\n')
        if i == 0:
            reqs.append(_tx(si, ei-1, bold=True, size=14, color=DARK_BLUE))
        else:
            reqs.append(_tx(si, ei-1, size=9, color=MID_GRAY))
            if '@' in line_text:
                reqs.append({
                    'updateTextStyle': {
                        'range': {'startIndex': si, 'endIndex': ei - 1},
                        'textStyle': {'link': {'url': f'mailto:{line_text}'}},
                        'fields': 'link',
                    }
                })

    # Right cell: right-align logo paragraph
    right_cell = hdr_table['tableRows'][0]['tableCells'][1]
    for para_el in right_cell['content']:
        if 'paragraph' in para_el:
            si, ei = para_el['startIndex'], para_el['endIndex']
            reqs.append(_para(si, ei, align='END'))

    # ── Items table ───────────────────────────────────────────────────────────

    # Header row: dark blue background
    reqs.append(_cell_style(itm_tbl_idx, 0, 0, row_span=1, col_span=4, bg=DARK_BLUE, pad=7))

    # Header text: white bold, right-aligned except description
    for col_idx, cell in enumerate(itm_table['tableRows'][0]['tableCells']):
        for para in cell['content']:
            if 'paragraph' in para:
                si, ei = para['startIndex'], para['endIndex']
                align = 'END' if col_idx > 0 else 'START'
                reqs += [_tx(si, ei-1, bold=True, size=9, color=WHITE), _para(si, ei, align=align)]

    # Item rows: padding + alignment
    for row_idx, row in enumerate(itm_table['tableRows'][1:], start=1):
        for col_idx, cell in enumerate(row['tableCells']):
            reqs.append(_cell_style(itm_tbl_idx, row_idx, col_idx, pad=6))
            for para in cell['content']:
                if 'paragraph' in para:
                    si, ei = para['startIndex'], para['endIndex']
                    align = 'END' if col_idx > 0 else 'START'
                    reqs += [_tx(si, ei-1, size=10), _para(si, ei, align=align)]

    # Column widths: description wide, others narrow
    for col_idx, width in enumerate([220, 50, 99, 99]):
        reqs.append(_col_width(itm_tbl_idx, col_idx, width))

    return reqs


if __name__ == '__main__':
    app.run(debug=True, port=5000)
