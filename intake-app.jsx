// intake-app.jsx — Toughjobs guided business intake wizard.
// One question per screen · progress + autosave · summary + book-a-call.

const { useState, useEffect, useRef, useCallback } = React;
const { CATEGORIES, QUESTIONS, TRADES } = window.INTAKE;

const STORE_KEY = "tj-intake-v1";
const catById = (id) => CATEGORIES.find((c) => c.id === id);

// ── Persistence ──────────────────────────────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) { return null; }
}
function saveState(state) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
}

// ── Wizard-local styles ────────────────────────────────────────────────────
const WIZ_STYLE = `
  .wiz-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
  @media (max-width:680px){ .wiz-grid, .wiz-dual{ grid-template-columns:1fr !important; } }

  .wiz-opt{
    position:relative; text-align:left; cursor:pointer;
    background:rgba(255,255,255,.04);
    border:2px solid rgba(255,255,255,.16);
    color:var(--white); padding:18px 20px; display:flex; flex-direction:column; gap:4px;
    transition:border-color .18s ease, background .18s ease, transform .12s ease;
    font-family:"Archivo",sans-serif;
  }
  .wiz-opt:hover{ border-color:var(--accent); background:rgba(255,255,255,.07); }
  .wiz-opt:active{ transform:translateY(1px); }
  .wiz-opt[data-on="1"]{ background:var(--accent); border-color:var(--accent); }
  .wiz-opt-lbl{ font-weight:700; font-size:16px; letter-spacing:.01em; line-height:1.25; }
  .wiz-opt-sub{ font-size:13px; line-height:1.4; color:rgba(255,255,255,.6); }
  .wiz-opt[data-on="1"] .wiz-opt-sub{ color:rgba(255,255,255,.85); }
  .wiz-opt .tick{
    position:absolute; top:14px; right:14px; width:20px; height:20px;
    border:2px solid rgba(255,255,255,.3); border-radius:50%;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .wiz-opt.box .tick{ border-radius:4px; }
  .wiz-opt[data-on="1"] .tick{ border-color:var(--white); background:var(--white); }
  .wiz-opt .tick svg{ width:12px; height:12px; opacity:0; }
  .wiz-opt[data-on="1"] .tick svg{ opacity:1; }

  .wiz-field-lbl{
    font-family:"Archivo",sans-serif; font-weight:800; font-size:12px;
    letter-spacing:.08em; text-transform:uppercase; color:var(--accent);
    margin-bottom:10px; display:block;
  }
  .wiz-select, .wiz-input, .wiz-textarea{
    width:100%; padding:16px 18px; font-size:16px;
    background:rgba(255,255,255,.05); color:var(--white);
    border:2px solid rgba(255,255,255,.16); outline:none;
    transition:border-color .18s ease, background .18s ease;
  }
  .wiz-select:focus, .wiz-input:focus, .wiz-textarea:focus{
    border-color:var(--accent); background:rgba(255,255,255,.08);
  }
  .wiz-select{ cursor:pointer; appearance:none;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23C8262A' d='M0 0h12L6 8z'/></svg>");
    background-repeat:no-repeat; background-position:right 18px center; padding-right:44px; }
  .wiz-select option{ background:#0A0F1C; color:#fff; }
  .wiz-input::placeholder, .wiz-textarea::placeholder{ color:rgba(255,255,255,.35); }
  .wiz-textarea{ resize:vertical; min-height:150px; line-height:1.5; }

  .wiz-bar-track{ height:5px; background:rgba(255,255,255,.12); overflow:hidden; }
  .wiz-bar-fill{ height:100%; background:var(--accent); transition:width .45s cubic-bezier(.2,.8,.2,1); }

  .wiz-dots{ display:flex; gap:6px; flex-wrap:wrap; }
  .wiz-dot{ width:22px; height:6px; background:rgba(255,255,255,.16); transition:background .25s ease; }
  .wiz-dot[data-on="1"]{ background:var(--accent); }
  .wiz-dot[data-done="1"]{ background:rgba(255,255,255,.5); }

  .wiz-sumrow{ display:flex; gap:20px; padding:18px 0; border-top:1px solid rgba(255,255,255,.12); align-items:flex-start; }
  .wiz-sumrow:last-child{ border-bottom:1px solid rgba(255,255,255,.12); }
  .wiz-sum-q{ flex:1; }
  .wiz-edit{ background:none; border:0; color:var(--accent); font-family:"Archivo",sans-serif;
    font-weight:800; font-size:11px; letter-spacing:.08em; text-transform:uppercase; cursor:pointer;
    padding:4px 0; flex-shrink:0; }
  .wiz-edit:hover{ text-decoration:underline; }
`;

const Check = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M2.5 7.5 6 11 11.5 4" fill="none" stroke="var(--accent)" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Controls ────────────────────────────────────────────────────────────────
function OptionTile({ label, sub, on, box, onClick }) {
  return (
    <button type="button" className={"wiz-opt" + (box ? " box" : "")} data-on={on ? "1" : "0"} onClick={onClick}>
      <span className="tick"><Check /></span>
      <span className="wiz-opt-lbl">{label}</span>
      {sub ? <span className="wiz-opt-sub">{sub}</span> : null}
    </button>
  );
}

function SingleQ({ q, value, note, onChange, onNote }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="wiz-grid">
        {q.options.map((o) => (
          <OptionTile key={o.value} label={o.label} sub={o.sub}
            on={value === o.value} onClick={() => onChange(o.value)} />
        ))}
      </div>
      {q.note ? (
        <div>
          <label className="wiz-field-lbl">{q.note}</label>
          <input className="wiz-input" type="text" value={note || ""}
            onChange={(e) => onNote(e.target.value)} placeholder="Type a short note…" />
        </div>
      ) : null}
    </div>
  );
}

function MultiQ({ q, value, onChange, onNote }) {
  const sel = (value && value.selected) || [];
  const toggle = (v) => {
    const next = sel.includes(v) ? sel.filter((x) => x !== v) : [...sel, v];
    onChange({ ...(value || {}), selected: next });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="wiz-grid">
        {q.options.map((o) => (
          <OptionTile key={o.value} label={o.label} sub={o.sub} box
            on={sel.includes(o.value)} onClick={() => toggle(o.value)} />
        ))}
      </div>
      {q.other ? (
        <div>
          <label className="wiz-field-lbl">Something else?</label>
          <input className="wiz-input" type="text" value={(value && value.other) || ""}
            onChange={(e) => onChange({ ...(value || {}), other: e.target.value })}
            placeholder="Add your own…" />
        </div>
      ) : null}
      {q.note ? (
        <div>
          <label className="wiz-field-lbl">{q.note}</label>
          <textarea className="wiz-textarea" style={{ minHeight: 110 }} value={(value && value.note) || ""}
            onChange={(e) => onChange({ ...(value || {}), note: e.target.value })}
            placeholder="Type a short note…" />
        </div>
      ) : null}
    </div>
  );
}

function DualQ({ q, value, onChange }) {
  const v = value || {};
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
      className="wiz-dual">
      {q.fields.map((f) => (
        <div key={f.id}>
          <label className="wiz-field-lbl">{f.label}</label>
          <select className="wiz-select" value={v[f.id] || ""}
            onChange={(e) => onChange({ ...v, [f.id]: e.target.value })}>
            <option value="">Select…</option>
            {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      ))}
    </div>
  );
}

function TextQ({ q, value, onChange }) {
  return (
    <textarea className="wiz-textarea" value={value || ""}
      onChange={(e) => onChange(e.target.value)} placeholder={q.placeholder} autoFocus />
  );
}

// ── Answer completeness + summary formatting ─────────────────────────────────
function isAnswered(q, a) {
  if (q.kind === "single") return !!a;
  if (q.kind === "multi") return a && a.selected && a.selected.length > 0;
  if (q.kind === "dual") return a && q.fields.every((f) => a[f.id]);
  if (q.kind === "text") return true; // text is optional
  return true;
}

function summarize(q, a) {
  if (!a && q.kind !== "text") return "—";
  if (q.kind === "single") {
    const o = q.options.find((x) => x.value === a);
    return o ? o.label : "—";
  }
  if (q.kind === "multi") {
    const labels = (a.selected || []).map((v) => {
      const o = q.options.find((x) => x.value === v);
      return o ? o.label : v;
    });
    if (a.other) labels.push(a.other);
    return labels.length ? labels.join(" · ") : "—";
  }
  if (q.kind === "dual") {
    return q.fields.map((f) => `${f.label}: ${a[f.id] || "—"}`).join("   |   ");
  }
  if (q.kind === "text") return a && a.trim() ? a : "(skipped)";
  return "—";
}

// ── App shell ────────────────────────────────────────────────────────────────
function IntakeApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  useEffect(() => {
    document.body.style.setProperty("--accent", t.accentHue || "#C8262A");
    document.body.style.setProperty("--headline-b", t.accentHue || "#C8262A");
    document.body.dataset.density = t.density;
  }, [t.accentHue, t.density]);

  const saved = useRef(loadState());
  const [step, setStep] = useState(() => (saved.current ? saved.current.step || 0 : 0));
  const [contact, setContact] = useState(() => (saved.current && saved.current.contact) || {
    name: "", company: "", trade: "", email: "", phone: "",
  });
  const [answers, setAnswers] = useState(() => (saved.current && saved.current.answers) || {});
  const [submitted, setSubmitted] = useState(false);

  // Autosave
  useEffect(() => { saveState({ step, contact, answers }); }, [step, contact, answers]);

  // Scroll to top of wizard on step change
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: Math.max(0, topRef.current.offsetTop - 80), behavior: "smooth" });
    }
  }, [step]);

  const TOTAL = QUESTIONS.length;        // question count
  const CONTACT_STEP = 1;
  const FIRST_Q = 2;
  const SUMMARY_STEP = FIRST_Q + TOTAL;  // after last question

  const setAnswer = useCallback((id, val) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  }, []);

  const goTo = (s) => { setSubmitted(false); setStep(s); };

  const resetAll = () => {
    if (!window.confirm("Clear all your answers and start over?")) return;
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    setContact({ name: "", company: "", trade: "", email: "", phone: "" });
    setAnswers({});
    setSubmitted(false);
    setStep(0);
  };

  const hasProgress = saved.current && (saved.current.step || 0) > 0;

  // ── Internal owner console (hidden from prospects) ──────────────────────
  const [ownerOpen, setOwnerOpen] = useState(false);
  useEffect(() => {
    const check = () => { if (window.location.hash.toLowerCase() === "#owner") setOwnerOpen(true); };
    check();
    window.addEventListener("hashchange", check);
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "O" || e.key === "o")) {
        e.preventDefault(); setOwnerOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("hashchange", check); window.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <React.Fragment>
      <style>{WIZ_STYLE}</style>
      <Nav />
      <main ref={topRef}>
        {step === 0 ? (
          <Intro hasProgress={hasProgress} onStart={() => goTo(hasProgress ? (saved.current.step || CONTACT_STEP) : CONTACT_STEP)}
                 onRestart={resetAll} startFresh={() => goTo(CONTACT_STEP)} />
        ) : step === CONTACT_STEP ? (
          <ContactStep contact={contact} setContact={setContact}
            onNext={() => goTo(FIRST_Q)} onBack={() => goTo(0)} />
        ) : step >= FIRST_Q && step < SUMMARY_STEP ? (
          <QuestionStep
            index={step - FIRST_Q}
            total={TOTAL}
            answers={answers}
            setAnswer={setAnswer}
            progressStyle={t.progressStyle}
            onBack={() => goTo(step - 1)}
            onNext={() => goTo(step + 1)}
          />
        ) : submitted ? (
          <SubmittedStep contact={contact} />
        ) : (
          <SummaryStep
            contact={contact}
            answers={answers}
            onEdit={(qIndex) => goTo(FIRST_Q + qIndex)}
            onEditContact={() => goTo(CONTACT_STEP)}
            onSubmit={() => { setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          />
        )}
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Look" />
        <TweakColor label="Accent" value={t.accentHue}
          options={["#C8262A", "#A90100", "#002768", "#0A0F1C", "#F5C518", "#E25822"]}
          onChange={(v) => setTweak("accentHue", v)} />
        <TweakRadio label="Density" value={t.density}
          options={[{ value: "spacious", label: "Spacious" }, { value: "compact", label: "Compact" }]}
          onChange={(v) => setTweak("density", v)} />
        <TweakSection label="Progress" />
        <TweakRadio label="Indicator" value={t.progressStyle}
          options={[{ value: "bar", label: "Bar" }, { value: "dots", label: "Dots" }]}
          onChange={(v) => setTweak("progressStyle", v)} />
      </TweaksPanel>

      {/* Discreet internal trigger — owner only */}
      <button
        onClick={() => setOwnerOpen(true)}
        title="Internal analysis (owner only)"
        style={{
          position: "fixed", left: 14, bottom: 14, zIndex: 60,
          width: 30, height: 30, borderRadius: "50%",
          background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)",
          color: "rgba(255,255,255,.4)", fontSize: 11, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "ui-monospace, monospace", fontWeight: 700,
        }}>TJ</button>

      {ownerOpen ? (
        <OwnerConsole contact={contact} answers={answers} onClose={() => setOwnerOpen(false)} />
      ) : null}
    </React.Fragment>
  );
}

// ── Intro ────────────────────────────────────────────────────────────────────
function Intro({ hasProgress, onStart, onRestart, startFresh }) {
  return (
    <section className="bg-blueprint-dark" style={{ position: "relative", color: "var(--white)", minHeight: "calc(100vh - 120px)", display: "flex", alignItems: "center", paddingBlock: 80 }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="TJ-INTAKE" title="DISCOVERY" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      <div className="container step-in" style={{ position: "relative", zIndex: 2, maxWidth: 980 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Business discovery · 16 questions · ~4 minutes</span>
        <h1 className="display split" style={{ fontSize: "clamp(48px, 7vw, 104px)", margin: "20px 0 28px" }}>
          <span className="a">Before we pitch you anything,</span>{" "}
          <span className="b">tell us how your business really works.</span>
        </h1>
        <p style={{ maxWidth: 660, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.78)", margin: "0 0 36px" }}>
          No fluff, no obligation. Answer straight and we'll come back with a clear read on where the
          fastest wins are — and whether we're even the right fit. Most answers are pick-a-box, and
          you can leave and come back anytime.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {hasProgress ? (
            <React.Fragment>
              <button className="btn" onClick={onStart}>Resume where I left off →</button>
              <button className="btn btn-ghost" onClick={startFresh}>Start over</button>
            </React.Fragment>
          ) : (
            <button className="btn" onClick={onStart}>Start the intake →</button>
          )}
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 56, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <div key={c.id} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="display" style={{ fontSize: 22, color: "var(--accent)" }}>{c.no}</span>
              <span style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.75)" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Step chrome (progress + headline + nav) ─────────────────────────────────
function StepFrame({ catId, counter, title, help, children, onBack, onNext, nextLabel, nextDisabled, progress }) {
  return (
    <section className="bg-blueprint-dark" style={{ position: "relative", color: "var(--white)", minHeight: "calc(100vh - 120px)", display: "flex", flexDirection: "column", paddingBlock: 0 }}>
      {progress}
      <div className="container step-in" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBlock: 56, maxWidth: 920 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
          {catId ? <span className="eyebrow" style={{ color: "var(--accent)" }}>{catById(catId).no} · {catById(catId).label}</span> : null}
          {counter ? <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, color: "rgba(255,255,255,.45)", letterSpacing: ".1em" }}>{counter}</span> : null}
        </div>
        <h2 className="display" style={{ fontSize: "clamp(30px, 4.4vw, 56px)", margin: "0 0 14px", color: "var(--white)", maxWidth: 880 }}>{title}</h2>
        {help ? <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "rgba(255,255,255,.62)", margin: "0 0 32px", maxWidth: 620 }}>{help}</p> : null}
        <div style={{ marginBottom: 40 }}>{children}</div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button className="btn btn-ghost" onClick={onBack}>← Back</button>
          <button className="btn" onClick={onNext} disabled={nextDisabled}>{nextLabel || "Next →"}</button>
          {nextDisabled ? <span style={{ fontSize: 13, color: "rgba(255,255,255,.4)", marginLeft: 4 }}>Pick an option to continue</span> : null}
        </div>
      </div>
    </section>
  );
}

function Progress({ index, total, style }) {
  // index is 0-based question index; show as 1..total
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 5, background: "rgba(10,15,28,.85)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
      {style === "dots" ? (
        <div className="container" style={{ paddingBlock: 16 }}>
          <div className="wiz-dots">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className="wiz-dot" data-on={i === index ? "1" : "0"} data-done={i < index ? "1" : "0"} />
            ))}
          </div>
        </div>
      ) : (
        <div className="wiz-bar-track"><div className="wiz-bar-fill" style={{ width: pct + "%" }} /></div>
      )}
    </div>
  );
}

// ── Contact step ─────────────────────────────────────────────────────────────
function ContactStep({ contact, setContact, onNext, onBack }) {
  const set = (k, v) => setContact((p) => ({ ...p, [k]: v }));
  const valid = contact.name.trim() && contact.company.trim() && contact.trade && (contact.email.trim() || contact.phone.trim());
  return (
    <StepFrame
      title={<React.Fragment><span>First — </span><span style={{ color: "var(--accent)" }}>who are we talking to?</span></React.Fragment>}
      help="So we know whose business we're digging into and how to reach you with the rundown."
      onBack={onBack} onNext={onNext} nextDisabled={!valid}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 720 }}>
        <div>
          <label className="wiz-field-lbl">Your name *</label>
          <input className="wiz-input" value={contact.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <label className="wiz-field-lbl">Company *</label>
          <input className="wiz-input" value={contact.company} onChange={(e) => set("company", e.target.value)} />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label className="wiz-field-lbl">Trade *</label>
          <select className="wiz-select" value={contact.trade} onChange={(e) => set("trade", e.target.value)}>
            <option value="">Select your trade…</option>
            {TRADES.map((tr) => <option key={tr} value={tr}>{tr}</option>)}
          </select>
        </div>
        <div>
          <label className="wiz-field-lbl">Email</label>
          <input className="wiz-input" type="email" value={contact.email} onChange={(e) => set("email", e.target.value)} placeholder="you@company.com" />
        </div>
        <div>
          <label className="wiz-field-lbl">Phone</label>
          <input className="wiz-input" type="tel" value={contact.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(309) 555-1234" />
        </div>
      </div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,.4)", marginTop: 16 }}>* Name, company, trade, and at least one way to reach you.</p>
    </StepFrame>
  );
}

// ── Question step ────────────────────────────────────────────────────────────
function QuestionStep({ index, total, answers, setAnswer, progressStyle, onBack, onNext }) {
  const q = QUESTIONS[index];
  const a = answers[q.id];
  const answered = isAnswered(q, a);
  const last = index === total - 1;

  let control = null;
  if (q.kind === "single") {
    control = <SingleQ q={q} value={a} note={answers[q.id + "__note"]}
      onChange={(v) => setAnswer(q.id, v)} onNote={(n) => setAnswer(q.id + "__note", n)} />;
  } else if (q.kind === "multi") {
    control = <MultiQ q={q} value={a} onChange={(v) => setAnswer(q.id, v)} />;
  } else if (q.kind === "dual") {
    control = <DualQ q={q} value={a} onChange={(v) => setAnswer(q.id, v)} />;
  } else {
    control = <TextQ q={q} value={a} onChange={(v) => setAnswer(q.id, v)} />;
  }

  return (
    <StepFrame
      catId={q.cat}
      counter={`Q${String(index + 1).padStart(2, "0")} / ${total}`}
      title={q.q}
      help={q.help}
      onBack={onBack}
      onNext={onNext}
      nextLabel={last ? "Review answers →" : "Next →"}
      nextDisabled={!answered}
      progress={<Progress index={index} total={total} style={progressStyle} />}
    >
      {control}
    </StepFrame>
  );
}

// ── Summary ──────────────────────────────────────────────────────────────────
function SummaryStep({ contact, answers, onEdit, onEditContact, onSubmit }) {
  return (
    <section className="bg-blueprint-dark" style={{ position: "relative", color: "var(--white)", paddingBlock: 80, minHeight: "calc(100vh - 120px)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="TJ-SUM" title="REVIEW" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      <div className="container step-in" style={{ position: "relative", zIndex: 2, maxWidth: 920 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Almost done · Review</span>
        <h2 className="display split" style={{ fontSize: "clamp(36px, 5vw, 72px)", margin: "16px 0 12px" }}>
          <span className="a">Here's what </span><span className="b">we heard.</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "0 0 16px", maxWidth: 620 }}>
          Give it a once-over. Edit anything that's off, then send it across and grab a time to talk it through.
        </p>

        {/* Contact recap */}
        <div className="wiz-sumrow" style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wiz-sum-q">
            <div style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>Contact</div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,.9)", lineHeight: 1.5 }}>
              {contact.name} · {contact.company} · {contact.trade}
              <br />{[contact.email, contact.phone].filter(Boolean).join(" · ")}
            </div>
          </div>
          <button className="wiz-edit" onClick={onEditContact}>Edit</button>
        </div>

        {/* Grouped answers */}
        {CATEGORIES.map((cat) => {
          const qs = QUESTIONS.filter((q) => q.cat === cat.id);
          return (
            <div key={cat.id} style={{ marginTop: 36 }}>
              <div className="display" style={{ fontSize: 20, color: "var(--white)", marginBottom: 4 }}>
                <span style={{ color: "var(--accent)" }}>{cat.no}</span> {cat.title}
              </div>
              {qs.map((q) => {
                const qIndex = QUESTIONS.indexOf(q);
                return (
                  <div className="wiz-sumrow" key={q.id}>
                    <div className="wiz-sum-q">
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,.55)", marginBottom: 5 }}>{q.q}</div>
                      <div style={{ fontSize: 16, color: "rgba(255,255,255,.95)", lineHeight: 1.5, fontWeight: 500 }}>{summarize(q, answers[q.id])}</div>
                      {answers[q.id + "__note"] ? <div style={{ fontSize: 14, color: "rgba(255,255,255,.6)", marginTop: 4, fontStyle: "italic" }}>“{answers[q.id + "__note"]}”</div> : null}
                    </div>
                    <button className="wiz-edit" onClick={() => onEdit(qIndex)}>Edit</button>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 44 }}>
          <button className="btn" onClick={onSubmit}>Send & book my call →</button>
          <a className="btn btn-ghost" href="#" onClick={(e) => { e.preventDefault(); onEdit(0); }}>Back to questions</a>
        </div>
      </div>
    </section>
  );
}

// ── Submitted / book-a-call ──────────────────────────────────────────────────
function SubmittedStep({ contact }) {
  return (
    <section className="bg-blueprint-red" style={{ position: "relative", color: "var(--white)", minHeight: "calc(100vh - 120px)", display: "flex", alignItems: "center", paddingBlock: 80, boxShadow: "inset 0 4px 12px rgba(0,0,0,.25)" }}>
      <BlueprintMarks color="rgba(0,0,0,.35)" />
      <DrawingStamp no="TJ-08" title="NEXT STEP" scale="1:1" color="rgba(0,0,0,.45)" style={{ top: 28, right: 88 }} />
      <div className="container step-in" style={{ position: "relative", zIndex: 2, maxWidth: 900, textAlign: "center", margin: "0 auto" }}>
        <span className="eyebrow" style={{ color: "var(--white)", opacity: .85 }}>Got it{contact.name ? `, ${contact.name.split(" ")[0]}` : ""}</span>
        <h2 className="display" style={{ fontSize: "clamp(44px, 6.5vw, 96px)", margin: "16px 0 24px" }}>
          <span style={{ color: "var(--white)" }}>Now let's </span><span style={{ color: "var(--red)" }}>talk it through.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.92)", margin: "0 auto 40px", maxWidth: 600 }}>
          Your answers are in. Book a 30-minute strategy call and we'll walk you through where the
          fastest wins are — no pitch deck, no pressure.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-dark" href="contact.html">Book my strategy call →</a>
          <a className="btn" href="tel:+13099289080" style={{ background: "rgba(0,0,0,.25)", border: "2px solid rgba(255,255,255,.5)" }}>
            <Voltage size={16} /> 309-928-9080
          </a>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", marginTop: 28 }}>
          We'll review everything before the call. Your responses stay saved on this device.
        </p>
      </div>
    </section>
  );
}

// ── Internal owner console — Claude analysis with reasoning ───────────────────
function buildAnalysisPrompt(contact, answers) {
  const lines = [];
  CATEGORIES.forEach((cat) => {
    lines.push(`\n[${cat.title}]`);
    QUESTIONS.filter((q) => q.cat === cat.id).forEach((q) => {
      const ans = summarize(q, answers[q.id]);
      const note = answers[q.id + "__note"];
      lines.push(`Q: ${q.q}\nA: ${ans}${note ? `\nNote: ${note}` : ""}`);
    });
  });
  return `You are a senior strategist at Toughjobs, a marketing + AI-automation agency for blue-collar trades (HVAC, plumbing, electrical, roofing, etc). A prospect just completed our intake. Analyze their answers and produce an INTERNAL diagnosis for our team — blunt, specific, no fluff. Explain your reasoning so we understand WHY you recommend what you do.

PROSPECT
Name: ${contact.name || "—"}
Company: ${contact.company || "—"}
Trade: ${contact.trade || "—"}
Contact: ${[contact.email, contact.phone].filter(Boolean).join(" / ") || "—"}

INTAKE ANSWERS${lines.join("\n")}

Respond with ONLY valid JSON (no markdown fences) in exactly this shape:
{
  "fit": "strong" | "moderate" | "weak",
  "fitWhy": "1-2 sentences on whether they're a good fit for us and why",
  "headline": "one punchy sentence summarizing their core problem",
  "priorities": [
    { "title": "short priority name", "service": "Websites|SEO|Paid|Branding|AI Automation", "why": "the reasoning, tied to their specific answers", "firstMove": "the concrete first action we'd take" }
  ],
  "talkingPoints": ["point to raise on the strategy call", "..."],
  "watchOuts": ["risk, gap, or red flag to keep in mind"]
}
Give 2-4 priorities, ordered by impact. Keep every field tight.`;
}

const OWNER_STYLE = `
  .oc-overlay{ position:fixed; inset:0; z-index:200; background:rgba(6,9,18,.82); backdrop-filter:blur(6px); display:flex; justify-content:flex-end; }
  .oc-panel{ width:min(640px,100%); height:100%; background:#0A0F1C; border-left:3px solid var(--accent); display:flex; flex-direction:column; box-shadow:-30px 0 80px rgba(0,0,0,.5); }
  .oc-head{ padding:22px 26px; border-bottom:1px solid rgba(255,255,255,.1); display:flex; align-items:center; justify-content:space-between; flex-shrink:0; }
  .oc-body{ padding:26px; overflow-y:auto; flex:1; }
  .oc-x{ background:none; border:0; color:rgba(255,255,255,.5); font-size:24px; cursor:pointer; line-height:1; padding:4px 8px; }
  .oc-x:hover{ color:#fff; }
  .oc-card{ border:1px solid rgba(255,255,255,.12); padding:18px 20px; margin-bottom:14px; background:rgba(255,255,255,.02); }
  .oc-lbl{ font-family:"Archivo",sans-serif; font-weight:800; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--accent); }
  .oc-fit{ display:inline-block; padding:4px 12px; font-family:"Archivo",sans-serif; font-weight:800; font-size:12px; letter-spacing:.08em; text-transform:uppercase; }
  .oc-num{ font-family:"Archivo Black",sans-serif; font-size:20px; color:var(--accent); line-height:1; }
  .oc-spin{ width:34px; height:34px; border:3px solid rgba(255,255,255,.15); border-top-color:var(--accent); border-radius:50%; animation:spin 0.8s linear infinite; }
`;

function FitBadge({ fit }) {
  const map = {
    strong: { bg: "#1F8A5B", label: "Strong fit" },
    moderate: { bg: "#C8262A", label: "Moderate fit" },
    weak: { bg: "#5B6471", label: "Weak fit" },
  };
  const m = map[fit] || map.moderate;
  return <span className="oc-fit" style={{ background: m.bg, color: "#fff" }}>{m.label}</span>;
}

function OwnerConsole({ contact, answers, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [result, setResult] = useState(null);
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");

  const hasData = QUESTIONS.some((q) => answers[q.id] != null) || contact.name;

  const run = async () => {
    setStatus("loading"); setError(""); setResult(null);
    try {
      const text = await window.claude.complete(buildAnalysisPrompt(contact, answers));
      setRaw(text);
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        const m = text.match(/\{[\s\S]*\}/);
        if (!m) throw new Error("Could not parse the analysis.");
        parsed = JSON.parse(m[0]);
      }
      setResult(parsed);
      setStatus("done");
    } catch (e) {
      setError(e.message || String(e));
      setStatus("error");
    }
  };

  return (
    <div className="oc-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <style>{OWNER_STYLE}</style>
      <div className="oc-panel">
        <div className="oc-head">
          <div>
            <div className="oc-lbl">Internal · Owner only</div>
            <div style={{ fontFamily: '"Archivo Black",sans-serif', fontSize: 22, color: "#fff", textTransform: "uppercase", letterSpacing: "-.01em", marginTop: 2 }}>Claude Read</div>
          </div>
          <button className="oc-x" onClick={onClose}>×</button>
        </div>
        <div className="oc-body">
          {/* Who */}
          <div style={{ marginBottom: 18, color: "rgba(255,255,255,.85)" }}>
            <span style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 15 }}>
              {contact.company || "Unnamed company"}</span>
            <span style={{ color: "rgba(255,255,255,.45)", fontSize: 14 }}>
              {" "}· {contact.trade || "—"} · {contact.name || "—"}</span>
          </div>

          {!hasData ? (
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.6 }}>
              No submission to analyze yet. Have someone complete the intake (or fill it yourself), then reopen this panel.
            </p>
          ) : status === "idle" ? (
            <React.Fragment>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: 15, lineHeight: 1.6, marginTop: 0 }}>
                Send this prospect's answers to Claude for an internal diagnosis — top priorities, recommended service mix, and the reasoning behind each call.
              </p>
              <button className="btn" onClick={run}>Analyze with Claude →</button>
            </React.Fragment>
          ) : status === "loading" ? (
            <div style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,.7)", paddingTop: 10 }}>
              <div className="oc-spin" /> Reading the intake…
            </div>
          ) : status === "error" ? (
            <div>
              <p style={{ color: "#ff8a8a", fontSize: 14, lineHeight: 1.6 }}>Couldn't generate the analysis: {error}</p>
              {raw ? <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, color: "rgba(255,255,255,.5)", background: "rgba(255,255,255,.03)", padding: 12, maxHeight: 200, overflow: "auto" }}>{raw}</pre> : null}
              <button className="btn" onClick={run} style={{ marginTop: 12 }}>Retry</button>
            </div>
          ) : result ? (
            <React.Fragment>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <FitBadge fit={result.fit} />
              </div>
              {result.headline ? (
                <p style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 19, lineHeight: 1.35, color: "#fff", margin: "0 0 6px" }}>
                  {result.headline}</p>
              ) : null}
              {result.fitWhy ? (
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.65)", margin: "0 0 22px" }}>{result.fitWhy}</p>
              ) : null}

              <div className="oc-lbl" style={{ marginBottom: 10 }}>Priorities & reasoning</div>
              {(result.priorities || []).map((p, i) => (
                <div className="oc-card" key={i}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                    <span className="oc-num">{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 800, fontSize: 16, color: "#fff", flex: 1 }}>{p.title}</span>
                    {p.service ? <span style={{ fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid var(--accent)", padding: "3px 8px", whiteSpace: "nowrap" }}>{p.service}</span> : null}
                  </div>
                  {p.why ? <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,.78)", marginBottom: p.firstMove ? 8 : 0 }}><span style={{ color: "rgba(255,255,255,.4)" }}>Why → </span>{p.why}</div> : null}
                  {p.firstMove ? <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,.6)" }}><span style={{ color: "var(--accent)", fontWeight: 700 }}>First move → </span>{p.firstMove}</div> : null}
                </div>
              ))}

              {result.talkingPoints && result.talkingPoints.length ? (
                <div style={{ marginTop: 18 }}>
                  <div className="oc-lbl" style={{ marginBottom: 8 }}>Talking points for the call</div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.78)", fontSize: 14.5, lineHeight: 1.7 }}>
                    {result.talkingPoints.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
              ) : null}

              {result.watchOuts && result.watchOuts.length ? (
                <div style={{ marginTop: 18 }}>
                  <div className="oc-lbl" style={{ marginBottom: 8, color: "#E5A100" }}>Watch-outs</div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.7)", fontSize: 14.5, lineHeight: 1.7 }}>
                    {result.watchOuts.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
              ) : null}

              <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
                <button className="btn btn-ghost" onClick={run}>Re-run</button>
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.35)", marginTop: 18, lineHeight: 1.5 }}>
                AI-generated for internal use. Sanity-check before acting on it.
              </p>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<IntakeApp />);
