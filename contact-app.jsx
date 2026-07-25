// contact-app.jsx — Contact page layout

const { useState } = React;

function ContactApp() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <ContactHero />
        <ContactForm />
        <LocationInfo />
        <CtaBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// ── Contact Hero ───────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <section data-screen-label="Hero" className="bg-blueprint-dark" style={{
      position: "relative", color: "var(--white)", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center"
    }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="CNT-01" title="CONTACT" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Let's talk</span>
            <h1 className="display split" style={{ fontSize: "clamp(64px, 9vw, 132px)", margin: "20px 0 32px", maxWidth: 1100 }}>
              <span className="a" style={{ color: "var(--white)" }}>Increase your</span><br />
              <span className="b" style={{ color: "var(--accent)", textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}>business</span><br />
              <span className="c" style={{ color: "var(--white)" }}>AND your </span><br />
              <span className="m" style={{ color: "var(--accent)", textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}>profit.</span>
            </h1>
            <p style={{ maxWidth: 680, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: "0 0 40px" }}>
              Call us at <a href="tel:+13092339004" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 700 }}>(309) 233-9004</a> or
              fill out the form below. We'll get back to you within 24 hours with a ballpark quote and
              next steps.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minWidth: 0, overflow: "visible" }}>
            <img
              src="assets/woman-jackhammer-transparent.webp"
              alt="Tradeswoman operating a jackhammer"
              style={{
                width: "165%",
                maxWidth: "none",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,.45))"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ───────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    trade: '',
    interest: [],
    budget: '',
    timeline: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interest: checked 
          ? [...prev.interest, value]
          : prev.interest.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In production: send to backend/email service
  };
  
  const inputStyles = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 15,
    fontFamily: 'inherit',
    border: '2px solid var(--hairline)',
    background: 'var(--white)',
    color: 'var(--ink)',
    transition: 'border-color 0.2s ease',
  };
  
  const labelStyles = {
    display: 'block',
    fontFamily: '"Archivo"',
    fontWeight: 700,
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: 8,
    color: 'var(--white)',
  };
  
  if (submitted) {
    return (
      <section data-screen-label="Form" className="section-equal bg-blueprint-light" style={{ position: "relative" }}>
        <BlueprintMarks color="rgba(0,39,104,.32)" />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ background: "var(--accent)", padding: "48px 40px", color: "var(--white)" }}>
            <div className="display" style={{ fontSize: 64, marginBottom: 20 }}>✓</div>
            <h2 className="display" style={{ fontSize: 42, marginBottom: 20 }}>Got it.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
              We'll call you within 24 hours to discuss your project. Keep an eye on (309) 233-9004.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section data-screen-label="Form" className="bg-blueprint-light" style={{ position: "relative", paddingBlock: 100 }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="CNT-02" title="INTAKE FORM" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Project intake</span>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4vw, 56px)", marginBottom: 40, color: "var(--white)" }}>
            Tell us about <span style={{ color: "var(--accent)", textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}>your business.</span>
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Name + Company */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyles}>Your name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyles} />
              </div>
              <div>
                <label style={labelStyles}>Company name *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required style={inputStyles} />
              </div>
            </div>
            
            {/* Phone + Email */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyles}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyles} placeholder="(309) 555-1234" />
              </div>
              <div>
                <label style={labelStyles}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyles} />
              </div>
            </div>
            
            {/* Trade */}
            <div>
              <label style={labelStyles}>Trade *</label>
              <select name="trade" value={formData.trade} onChange={handleChange} required style={{ ...inputStyles, cursor: 'pointer' }}>
                <option value="">Select your trade</option>
                <option value="hvac">HVAC</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="roofing">Roofing</option>
                <option value="general-contractor">General Contractor</option>
                <option value="landscaping">Landscaping</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Interest (checkboxes) */}
            <div>
              <label style={labelStyles}>What are you interested in? *</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 12 }}>
                {['Website', 'SEO', 'Paid Ads', 'Branding', 'Fleet Wraps', 'All of the above'].map(item => (
                  <label key={item} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 15, color: "var(--white)" }}>
                    <input type="checkbox" name="interest" value={item} checked={formData.interest.includes(item)} onChange={handleChange} style={{ width: 18, height: 18, cursor: "pointer" }} />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            
            {/* Budget + Timeline */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyles}>Budget range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} style={{ ...inputStyles, cursor: 'pointer' }}>
                  <option value="">Select a range</option>
                  <option value="under-5k">Under $5K</option>
                  <option value="5k-10k">$5K–$10K</option>
                  <option value="10k-25k">$10K–$25K</option>
                  <option value="25k-plus">$25K+</option>
                </select>
              </div>
              <div>
                <label style={labelStyles}>Timeline</label>
                <select name="timeline" value={formData.timeline} onChange={handleChange} style={{ ...inputStyles, cursor: 'pointer' }}>
                  <option value="">When do you need this?</option>
                  <option value="asap">ASAP (1–2 weeks)</option>
                  <option value="1-month">1 month</option>
                  <option value="2-3-months">2–3 months</option>
                  <option value="just-exploring">Just exploring</option>
                </select>
              </div>
            </div>
            
            {/* Message */}
            <div>
              <label style={labelStyles}>Tell us about your project</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={6} style={{ ...inputStyles, resize: 'vertical', fontFamily: 'inherit' }} placeholder="What problem are you trying to solve? What's your current marketing situation?" />
            </div>
            
            <button type="submit" className="btn" style={{ alignSelf: "flex-start", fontSize: 14, padding: "18px 32px" }}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ── Location Info ──────────────────────────────────────────────────────────
function LocationInfo() {
  return (
    <section data-screen-label="Location" className="bg-blueprint-dark" style={{ position: "relative", color: "var(--white)", paddingTop: 100, paddingBottom: 0 }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="CNT-03" title="LOCATION" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Visit us</span>
            <h2 className="display split" style={{ fontSize: 48, margin: "12px 0 32px", color: "var(--white)" }}>
              <span className="a" style={{ color: "var(--white)" }}>140 Oakmoor Dr</span><br />
              <span className="b" style={{ color: "var(--accent)", textShadow: "0 4px 12px rgba(0, 0, 0, 0.6)" }}>East Peoria, IL</span><br />
              <span className="m" style={{ color: "var(--white)" }}>61611</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              Toughjobs Digital Marketing. Give us a call so we can help you with your business.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.7, marginBottom: 4 }}>Phone</div>
                <a href="tel:+13092339004" style={{ fontSize: 24, fontFamily: '"Archivo"', fontWeight: 700, color: "var(--accent)", textDecoration: "none" }}>(309) 233-9004</a>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.7, marginBottom: 4 }}>Email</div>
                <a href="mailto:team@toughjobs.org" style={{ fontSize: 18, color: "var(--white)", textDecoration: "none", opacity: 0.9 }}>team@toughjobs.org</a>
              </div>
            </div>
          </div>
          
          <div style={{ background: "rgba(255,255,255,.06)", padding: "20px", border: "1px solid rgba(140,170,220,.35)", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div className="eyebrow" style={{ color: "#7DA8FF", letterSpacing: ".1em" }}>Service Territory</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(140,170,220,.7)", letterSpacing: ".05em" }}>DWG. MAP-01 · SCALE 1:205MI</div>
            </div>
            <svg viewBox="0 -370 1010 1170" style={{ width: "100%", height: "auto", display: "block" }} role="img" aria-label="Service territory map of Iowa, Illinois, Indiana, Wisconsin, and Missouri centered on Peoria with major cities within a 205 mile radius">
              <defs>
                <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(140,170,220,.12)" strokeWidth="1" />
                </pattern>
                <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(200,38,42,.10)" />
                  <stop offset="70%" stopColor="rgba(200,38,42,.04)" />
                  <stop offset="100%" stopColor="rgba(200,38,42,0)" />
                </radialGradient>
              </defs>

              <rect x="0" y="-370" width="1010" height="1170" fill="url(#mapGrid)" />

              {/* State silhouettes — projected from detailed real border coordinates */}
              <g stroke="#7DA8FF" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(125,168,255,.06)">
                {/* Iowa */}
                <polygon points="43.7,10.4 459.3,10.4 464.9,51.9 484.8,88.2 503.8,114.1 522.9,139 543.6,168.1 541.2,182.6 529.3,208.6 511,215.8 487.9,223.1 472.8,226.2 471.3,259.4 468.9,289.5 449,308.2 446.6,332 418.8,310.2 317.9,313.4 198.7,314.4 97.7,313.4 92.2,298.8 94.6,269.8 85,250.1 89.8,237.6 78.7,216.9 69.9,199.2 74.7,183.7 51.7,144.2 46.9,115.2 41.3,96.5 35,77.8 31.8,51.9 37.4,31.1" />
                {/* Illinois */}
                <polygon points="505.4,113.3 731.1,113.3 728.7,134.9 740.7,157.7 746.2,177.4 752.6,190.9 752.9,425.4 747,446.2 752.6,463.8 748.6,478.3 754.2,500.1 743,521.9 735.9,532.3 728.7,549.9 713.6,576.9 710.5,592.5 702.5,616.3 681.9,643.3 674.7,654.7 642.9,669.3 622.3,687.9 611.1,668.2 595.2,613.2 583.3,587.3 564.2,552 553.1,512.6 540.4,485.6 503.8,451.4 472.1,428.5 448.2,398.4 443.4,363.2 436.3,348.6 444.2,316.5 467.3,288.5 469.7,259.4 472.8,226.2 487.9,223.1 511,215.8 529.3,208.6 541.2,182.6 543.6,168.1 522.9,139" />
                {/* Indiana */}
                <polygon points="752.9,190.9 768.5,204.4 785.2,202.3 800.3,196.1 809,190.9 969.1,190.9 968.7,381.8 967.9,499.1 948.1,501.2 937.7,509.5 919.5,505.3 902,536.4 894,553 887.7,552 866.2,580 852.7,574.8 845.6,560.3 832.1,576.9 821.7,590.4 809.8,582.1 789.1,601.8 773.2,595.6 747.8,587.3 719.2,604.9 722.4,570.7 728.7,549.9 735.9,532.3 743,521.9 754.2,500.1 748.6,478.3 752.6,463.8 747,446.2 752.9,425.4" />
                {/* Wisconsin */}
                <polygon points="505.4,113.3 503.8,114.1 484.8,88.2 464.9,51.9 459.3,10.4 455.4,-25.9 441.9,-41.5 391,-84 371.9,-98.6 333.8,-119.3 337,-155.6 342.5,-188.8 326.6,-205.4 328.2,-244.9 374.3,-317.5 396.6,-322.7 433.1,-327.9 487.9,-347.6 523.7,-310.2 559.5,-306.1 628.6,-263.6 705.7,-240.7 716,-227.2 732.7,-197.1 746.2,-155.6 720,-119.3 714.4,-95.5 737.5,-113.1 762.9,-151.5 791.5,-175.4 769.3,-113.1 751.8,-75.7 743,-50.8 739.1,-15.6 731.9,21.8 723.2,58.1 732.7,90.3 729.5,105.8 731.1,113.3" />
                {/* Missouri */}
                <polygon points="97.7,313.4 198.7,314.4 317.9,313.4 418.8,310.2 446.6,332 436.3,348.6 443.4,363.2 448.2,398.4 472.1,428.5 503.8,451.4 540.4,485.6 553.1,512.6 564.2,552 583.3,587.3 595.2,613.2 611.1,668.2 622.3,687.9 619.9,723.2 603.2,736.7 592.8,753.3 594.4,788.6 526.9,788.6 526.9,736.7 437.1,736.7 317.9,736.7 189.1,736.7 189.9,632.9 189.9,529.2 189.9,465.9 169.3,397.4 155.8,388.1 134.3,374.6 121.6,350.7 107.3,340.3" />
              </g>

              {/* State labels */}
              <g fontFamily="'Archivo Black', sans-serif" fill="rgba(125,168,255,.45)" textAnchor="middle" style={{ textTransform: "uppercase" }}>
                <text x="230" y="175" fontSize="32" letterSpacing="3">IOWA</text>
                <text x="560" y="475" fontSize="30" letterSpacing="3">ILLINOIS</text>
                <text x="862" y="320" fontSize="26" letterSpacing="2">INDIANA</text>
                <text x="566" y="-110" fontSize="32" letterSpacing="3">WISCONSIN</text>
                <text x="340" y="555" fontSize="32" letterSpacing="3">MISSOURI</text>
              </g>

              {/* 175-mile service ring */}
              <circle cx="588.9" cy="302" r="307.5" fill="url(#ringGlow)" />
              <circle cx="588.9" cy="302" r="307.5" fill="none" stroke="#C8262A" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.85" />
              <text x="588.9" y="-22" textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#C8262A" letterSpacing="1">205 MI RADIUS</text>

              {/* Cities */}
              <g fontFamily="'Archivo', sans-serif" fontWeight="700" fontSize="17" fill="#FFFFFF">
                {[
                  { n: "Chicago", x: 744.6, y: 178.4, a: "start", dx: 11, dy: 5 },
                  { n: "Rockford", x: 628.6, y: 138, a: "middle", dx: 0, dy: -12 },
                  { n: "Springfield", x: 584, y: 394.3, a: "end", dx: -11, dy: 5 },
                  { n: "Bloomington", x: 636.6, y: 323.7, a: "start", dx: 11, dy: -6 },
                  { n: "Champaign", x: 696.1, y: 362.1, a: "start", dx: 11, dy: 5 },
                  { n: "Decatur", x: 639.7, y: 390.1, a: "start", dx: 11, dy: 5 },
                  { n: "Galesburg", x: 526.9, y: 274.9, a: "end", dx: -11, dy: 5 },
                  { n: "Quad Cities", x: 510.2, y: 215.8, a: "end", dx: -11, dy: 5 },
                  { n: "Iowa City", x: 434.7, y: 201.3, a: "end", dx: -11, dy: 14 },
                  { n: "Cedar Rapids", x: 423.5, y: 168.1, a: "end", dx: -11, dy: -2 },
                  { n: "Dubuque", x: 503.9, y: 114.1, a: "middle", dx: 0, dy: -12 },
                  { n: "Lafayette", x: 804.3, y: 329.9, a: "end", dx: -11, dy: 5 },
                  { n: "Terre Haute", x: 762.1, y: 428.5, a: "end", dx: -11, dy: 5 },
                  { n: "Indianapolis", x: 861.5, y: 397.4, a: "end", dx: -11, dy: 5 },
                  { n: "Madison", x: 604, y: 55, a: "end", dx: -11, dy: 5 },
                  { n: "Milwaukee", x: 723.2, y: 58.1, a: "start", dx: 11, dy: 5 },
                  { n: "St. Louis", x: 540.4, y: 515.7, a: "end", dx: -11, dy: 5 },
                  { n: "Columbia", x: 371.1, y: 482.5, a: "end", dx: -11, dy: 5 },
                ].map((c) => (
                  <g key={c.n}>
                    <circle cx={c.x} cy={c.y} r="6" fill="#C8262A" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x={c.x + c.dx} y={c.y + c.dy} textAnchor={c.a}>{c.n}</text>
                  </g>
                ))}
              </g>

              {/* Faded extended-reach cities */}
              <g fontFamily="'Archivo', sans-serif" fontWeight="600" fontSize="15" fill="rgba(255,255,255,.45)">
                {[
                  { n: "Des Moines", x: 268.6, y: 208.6, a: "middle", dx: 0, dy: -11 },
                ].map((c) => (
                  <g key={c.n}>
                    <circle cx={c.x} cy={c.y} r="5" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" />
                    <text x={c.x + c.dx} y={c.y + c.dy} textAnchor={c.a}>{c.n}</text>
                  </g>
                ))}
              </g>

              {/* Peoria home base */}
              <g>
                <circle cx="588.9" cy="302" r="14" fill="none" stroke="#C8262A" strokeWidth="2" opacity="0.6">
                  <animate attributeName="r" values="14;22;14" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <path d="M588.9 288 l4 9 9.5 .8 -7.2 6.2 2.2 9.3 -8.5 -5 -8.5 5 2.2 -9.3 -7.2 -6.2 9.5 -.8 z" fill="#C8262A" stroke="#FFFFFF" strokeWidth="1.2" />
                <text x="588.9" y="338" textAnchor="middle" fontFamily="'Archivo Black', sans-serif" fontSize="18" fill="#FFFFFF" letterSpacing="1">PEORIA</text>
                <text x="588.9" y="357" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#C8262A" letterSpacing="2">HOME BASE</text>
              </g>
            </svg>
            <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "rgba(255,255,255,.7)" }}>
              Headquartered in Peoria, IL — serving the trades across Illinois, Iowa, Indiana, Wisconsin, and Missouri within a 205-mile reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
