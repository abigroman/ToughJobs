#!/usr/bin/env python3
"""Rebuild index.html as static HTML:
  - keep <head> (styles, fonts, meta) but drop the tweak-defaults script
  - drop React + ReactDOM + Babel CDN tags and the type="text/babel" tags
  - bake the CSS vars / data-attrs that app.jsx's useEffect used to set
  - inject the server-rendered markup in place of <div id="root">
"""
import re

SRC = '/home/claude/tj/index.html'
RENDERED = '/home/claude/ssr/rendered.html'
OUT = '/home/claude/tj/index.html'

html = open(SRC, encoding='utf-8').read()
body_html = open(RENDERED, encoding='utf-8').read()

# ── the palette app.jsx applied at runtime (red-led + accentHue override) ──
BAKED_VARS = (
    '--accent:#C8262A;'
    '--bg-dark:#0A0F1C;'
    '--headline-mute:#9BA3AF;'
    '--headline-b:#C8262A;'
)
BODY_TAG = (
    f'<body style="{BAKED_VARS}"'
    ' data-palette="red-led"'
    ' data-headline="split"'
    ' data-density="spacious"'
    ' data-chevrons="true">'
)

before = len(html)

# 1. remove the tweak-defaults inline script (whole <script> block containing it)
html = re.sub(
    r'<script>\s*window\.__TWEAK_DEFAULTS__.*?</script>\s*',
    '', html, flags=re.S)

# 2. remove CDN script tags (react, react-dom, babel standalone)
html = re.sub(
    r'<script[^>]*src="https://unpkg\.com/[^"]*"[^>]*>\s*</script>\s*',
    '', html)

# 3. remove the type="text/babel" module tags
html = re.sub(
    r'<script\s+type="text/babel"[^>]*>\s*</script>\s*',
    '', html)

# 4. replace <body ...> opening tag with the baked one
html = re.sub(r'<body[^>]*>', BODY_TAG, html, count=1)

# 5. swap <div id="root"></div> for the rendered markup
if '<div id="root">' in html:
    html = re.sub(r'<div id="root">\s*</div>', body_html, html, count=1)
elif '<div id="root"/>' in html:
    html = html.replace('<div id="root"/>', body_html, 1)
else:
    raise SystemExit('ERROR: could not find <div id="root"> to replace')

open(OUT, 'w', encoding='utf-8').write(html)

print(f'index.html rebuilt: {before} -> {len(html)} bytes')
for probe, label in [
    ('unpkg.com', 'CDN script tags'),
    ('text/babel', 'babel script tags'),
    ('__TWEAK_DEFAULTS__', 'tweak defaults'),
    ('id="root"', 'empty root div'),
]:
    print(f'  {label:<20} remaining: {html.count(probe)}')
