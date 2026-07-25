// about-app.jsx — About page layout

function AboutPageCTA() {
  return (
    <section data-screen-label="CTA-1" style={{ 
      background: "var(--accent)", 
      position: "relative", 
      overflow: "hidden",
      paddingBlock: 100,
      color: "var(--white)"
    }}>
      <video autoPlay muted loop playsInline aria-hidden="true" style={{
        position: "absolute", 
        inset: 0, 
        width: "100%", 
        height: "100%", 
        objectFit: "cover", 
        opacity: 0.25, 
        zIndex: 0, 
        pointerEvents: "none"
      }}>
        <source src="assets/audio-visualizer.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay to keep text readable */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(10,15,28,0.7) 0%, rgba(168,1,0,0.5) 100%)",
        zIndex: 0.5
      }}></div>
      
      <div className="container" style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: 40, alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left column - 3/4 width */}
        <div>
          <h2 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 48, textTransform: "uppercase", color: "var(--white)", margin: "0 0 24px", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
            Ready to build<br />your own operation?
          </h2>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.9)", margin: "0 0 40px", lineHeight: 1.6 }}>
            Let's talk about how Toughjobs can set you up for success. One truck. Your knowledge. Our infrastructure.
          </p>
          <a href="intake.html" className="btn" style={{ background: "var(--white)", color: "var(--accent)", fontWeight: 700, padding: "16px 48px", textDecoration: "none", display: "inline-block", borderRadius: 4 }}>
            Start Your Partnership
          </a>
        </div>
        
        {/* Right column - 1/4 width with spinning logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .team-logo-spinner {
              animation: spin 14s linear infinite;
            }
            .team-logo-ring {
              position: relative;
              width: clamp(140px, 15vw, 240px);
              aspect-ratio: 1;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
          <div className="team-logo-ring">
            <svg className="team-logo-spinner" viewBox="0 0 200 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }}>
              {/* Outer circle with text path */}
              <defs>
                <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="none" />
              </defs>
              <text style={{ fontSize: 15, fontWeight: 700, fill: "rgba(255,255,255,0.95)", fontFamily: "'Archivo Black', sans-serif", textTransform: "uppercase" }}>
                <textPath href="#circlePath" startOffset="0%" textLength="534" lengthAdjust="spacingAndGlyphs">
                  TEAM TOUGHJOBS • TEAM TOUGHJOBS •
                </textPath>
              </text>
            </svg>
            
            {/* Center logo */}
            <img src="assets/toughjobs-monogram-logo.webp" alt="Toughjobs" style={{ width: "58%", height: "auto", position: "relative", zIndex: 3 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutApp() {
  return (
    <React.Fragment>
      <Header activePage="about" />
      <main>
        <AboutHero />
        <Philosophy />
        <Capabilities />
        <WhyTrades />
        <AboutPageCTA />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// ── About Hero ─────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section data-screen-label="Hero" className="section-equal bg-blueprint-dark" style={{
      position: "relative", color: "var(--white)", overflow: "hidden", paddingBottom: "60px"
    }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="ABT-01" title="ABOUT" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "stretch" }}>
        <div style={{ alignSelf: "center" }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Who we are</span>
          <h1 className="display split" style={{ fontSize: "clamp(64px, 9vw, 132px)", margin: "20px 0 32px", maxWidth: 1100 }}>
            <span className="a" style={{ color: "var(--white)" }}>Marketing </span>
            <span className="b" style={{ color: "var(--accent)" }}>built</span><br />
            <span className="m" style={{ color: "var(--white)" }}>for the <span style={{ color: "var(--accent)" }}>trades.</span></span>
          </h1>
          <p style={{ maxWidth: 720, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: "0 0 40px" }}>
            We build websites, run ads, and design wraps for HVAC, plumbing, electrical, and roofing
            contractors in the Quad Cities. We speak job-site, not boardroom. And we measure success
            in booked jobs, not impressions.
          </p>
        </div>

        {/* Right column: Woman with power drill */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", position: "relative" }}>
          <img src="assets/woman-drill-philosophy.webp" alt="Toughjobs tradeswoman with drill" style={{ height: "82vh", width: "auto", maxWidth: "none", objectFit: "contain", objectPosition: "bottom center", display: "block", marginLeft: "-100px", filter: "drop-shadow(0 30px 50px rgba(0,0,0,.45))" }} />
        </div>
      </div>
    </section>
  );
}

// ── Philosophy ─────────────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section data-screen-label="Philosophy" className="section-equal bg-blueprint-red" style={{
      position: "relative", color: "var(--white)", paddingTop: "60px"
    }}>
      <BlueprintMarks color="rgba(0,0,0,.35)" />
      <DrawingStamp no="ABT-02" title="OPERATING PRINCIPLE" scale="1:1" color="rgba(0,0,0,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "flex-start", maxWidth: "1400px", padding: "0 48px" }}>
        {/* Left column: Operating principle */}
        <div style={{ textAlign: "left" }}>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", marginBottom: 36, lineHeight: 1.1, fontWeight: 900, letterSpacing: "-0.02em" }}>
            <span style={{ color: "var(--accent)", display: "block" }}>If the phone</span>
            <span style={{ color: "var(--accent)" }}>doesn't ring,</span>
            <span style={{ color: "var(--white)", display: "block" }}>we didn't do our job.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,.88)", maxWidth: "100%", margin: "0", fontWeight: 500, letterSpacing: "-0.3px" }}>
            Most agencies sell you a website and disappear. We treat every project like it's ours — because if your trucks aren't full, our work failed. Simple as that.
          </p>
        </div>

        {/* Right column: Our story */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: 32, lineHeight: 1.15, color: "var(--white)", fontFamily: '"Archivo Black", sans-serif', textTransform: "uppercase", letterSpacing: "-0.01em", fontWeight: 900 }}>Our story</h3>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,.82)", maxWidth: "100%", margin: "0 0 28px", fontWeight: 500 }}>
            Toughjobs started when a small team of marketers and developers—tired of watching contractors get left behind by big agencies—decided to build something different. We'd spent years in the trades sector, watching talented plumbers, electricians, HVAC techs, and roofers lose bids to competitors with better online presence.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,.82)", maxWidth: "100%", margin: "0", fontWeight: 500 }}>
            So we came together with one mission: create a marketing partner that speaks the language of trades, understands the urgency of booked jobs, and measures success the way you do. <span style={{ color: "var(--accent)" }}>Not vanity metrics. Not impressions. Booked jobs. Growth. Real revenue.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Capabilities ───────────────────────────────────────────────────────────
function Capabilities() {
  const skills = [
    {
      title: "Technical execution",
      items: [
        "WordPress development (PHP, custom themes, WooCommerce)",
        "Google Ads + Bing Ads management (certified)",
        "Local SEO (GBP, citations, schema markup)",
        "Analytics setup (GA4, Google Tag Manager, call tracking)",
      ],
    },
    {
      title: "Creative services",
      items: [
        "Brand identity (names, logos, voice & tone)",
        "Fleet wrap design + installation (trucks, trailers, cars)",
        "Print collateral (door hangers, yard signs, magnets)",
        "Photography + video for social & web",
      ],
    },
    {
      title: "Strategic thinking",
      items: [
        "Market analysis (competitor research, keyword opportunity)",
        "Service pricing models (cost-plus, value-based, subscription)",
        "Customer lifetime value optimization",
        "Referral program design",
      ],
    },
  ];
  
  return (
    <section data-screen-label="Capabilities" className="bg-blueprint-light" style={{ position: "relative", paddingBlock: 100 }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="ABT-03" title="CAPABILITIES" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>What we bring to the table</span>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: 56, maxWidth: 800 }}>
          <span style={{ color: "var(--white)" }}>Three skill sets.</span> <span style={{ color: "var(--accent)" }}>One team.</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {skills.map((skill, i) => (
            <div key={i} style={{ background: "var(--ink)", padding: "32px 28px", color: "var(--white)" }}>
              <div className="display" style={{ fontSize: 22, marginBottom: 20, color: "var(--accent)" }}>
                {skill.title}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {skill.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.88, paddingLeft: 20, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: 700 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Trades ─────────────────────────────────────────────────────────────
function WhyTrades() {
  const reasons = [
    {
      title: "Measurable outcomes",
      desc: "Trades businesses live or die by job count. No vanity metrics. No fluff. Just ROI we can calculate to the penny.",
    },
    {
      title: "Local dominance",
      desc: "A 40-mile service radius means we can actually own the map. We're not fighting for national keywords — we're winning Peoria.",
    },
    {
      title: "Repeat revenue potential",
      desc: "HVAC maintenance contracts. Electrical service plans. Plumbing subscriptions. Trades businesses have built-in recurring revenue models we can amplify.",
    },
    {
      title: "High-margin services",
      desc: "Panel upgrades, mini-split installs, water heater replacements — $3K-$8K jobs with 40%+ margins. Marketing math that actually works.",
    },
  ];
  
  return (
    <section data-screen-label="Why Trades" className="section-equal bg-blueprint-navy" style={{ position: "relative", color: "var(--white)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="ABT-04" title="MARKET FOCUS" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Why we only work with trades</span>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", marginBottom: 48, maxWidth: 900, color: "var(--white)" }}>
          We could serve anyone. <span style={{ color: "var(--accent)", textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.7)" }}>We choose the trades.</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {reasons.map((r, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.06)", padding: "32px", border: "1px solid rgba(255,255,255,.12)" }}>
              <div className="display" style={{ fontSize: 26, marginBottom: 16, color: "var(--accent)" }}>
                {r.title}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, opacity: 0.85 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
