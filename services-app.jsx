// services-app.jsx — Services page layout

const { useEffect } = React;

function ServicesApp() {
  return (
    <React.Fragment>
      <Header activePage="services" />
      <main>
        <ServicesHero />
        <WebsitesDeepDive />
        <SEODeepDive />
        <SocialMediaDeepDive />
        <PaidDeepDive />
        <BrandingDeepDive />
        <LocalSEODeepDive />
        <SoftwareDeepDive />
        <CtaBand />
      </main>
      <Footer />
    </React.Fragment>
  );
}

// ── Services Hero ──────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section data-screen-label="Hero" className="section-equal bg-blueprint-dark" style={{
      position: "relative", color: "var(--white)", overflow: "hidden", paddingTop: "20px", paddingBottom: "40px"
    }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="SVC-01" title="SERVICES" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      {/* Architectural drawing background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(assets/architectural-drawing-transparent.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.5,
        zIndex: 1,
        pointerEvents: "none"
      }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", minHeight: "75vh" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative", height: "100%" }}>
            <img src="assets/woman-trowel-fullbody.webp" alt="Toughjobs construction worker with trowel" style={{
              width: "auto",
              height: "calc(85vh * 1.15)",
              maxHeight: 1035,
              minHeight: 748,
              maxWidth: "none",
              display: "block",
              filter: "drop-shadow(20px 20px 50px rgba(0,0,0,.75))",
              marginBottom: -80,
              objectFit: "contain",
              objectPosition: "bottom center"
            }} />
          </div>
          
          <div style={{ paddingBottom: 60 }}>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>What we build</span>
            <h1 className="display split" style={{ fontSize: "clamp(48px, 6vw, 96px)", margin: "20px 0 32px", lineHeight: 1.0 }}>
              <span className="a" style={{ color: "var(--white)" }}>Ten cylinders.</span><br />
              <span className="b" style={{ 
                color: "var(--accent)", 
                textShadow: "0 8px 16px rgba(0,0,0,.6), 0 4px 8px rgba(0,0,0,.4), -2px 2px 4px rgba(0,39,104,.5)"
              }}>One mission.</span>
            </h1>
            <p style={{ maxWidth: 600, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: "0 0 36px" }}>
              Toughjobs is a digital marketing agency built for the trades. We help HVAC, plumbing, electrical, roofing, and contractor businesses across Illinois, Missouri, Iowa, Wisconsin, and Indiana get found online, win more jobs, and grow profit. Most agencies sell one service and call it a day — we run every cylinder that puts you ahead of your local competition: Websites, SEO, Social Media, Paid Ads, Branding, Local SEO, Business Organization, and AI automations.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn" href="websites.html">Websites</a>
              <a className="btn btn-dark" href="seo.html">SEO</a>
              <a className="btn btn-dark" href="social-media.html">Social Media</a>
              <a className="btn btn-dark" href="paid-ads.html">Paid Ads</a>
              <a className="btn btn-dark" href="branding.html">Branding</a>
              <a className="btn btn-dark" href="ai-automations.html">AI Automations</a>
              <a className="btn btn-dark" href="local-seo.html">Local SEO</a>
              <a className="btn btn-dark" href="software.html">Software</a>
              <a className="btn btn-dark" href="coaching.html">Coaching</a>
              <a className="btn btn-dark" href="database-reactivation.html">RE-MARKETING</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Websites Deep Dive ─────────────────────────────────────────────────────
function WebsitesDeepDive() {
  const deliverables = [
    { label: "WordPress CMS", desc: "Full admin access — you own the code" },
    { label: "Mobile-first", desc: "Loads in <2s on rural LTE" },
    { label: "Lead capture", desc: "Phone, form, chat — 3 ways to convert" },
    { label: "Local schema", desc: "Structured data for every service area" },
  ];
  
  return (
    <section id="websites" data-screen-label="Websites" className="section-equal bg-blueprint-light" style={{ position: "relative" }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="SVC-02" title="WEBSITES" scale="1:2" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Websites that convert</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Websites.</span><br />
              <span className="b" style={{ color: "var(--accent)", textShadow: "0 8px 16px rgba(0,0,0,.6), 0 4px 8px rgba(0,0,0,.4), -2px 2px 4px rgba(0,39,104,.5)" }}>Built to last.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              Whether WordPress, Webflow, or custom code — we choose the platform that makes sense for YOUR
              business, not what's easiest for us. No proprietary platforms. No rental fees. You own the code,
              the data, and the domain. Period.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              Every site is mobile-first, loads in under 2 seconds on rural LTE, and has your phone
              number in 6+ places. Because a pretty site that doesn't convert is just an expensive
              business card.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 32 }}>
              <strong>You own it all:</strong> Analytics access, customer data, and full transparency.
              We work with your existing tools and give you real numbers — not vanity metrics. Quick feedback loops
              keep us aligned. That's how we stay relevant.
            </p>
            <a className="btn" href="../index.html#contact">Get a free teardown</a>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--accent)", padding: "24px 28px", color: "var(--white)" }}>
              <div className="eyebrow" style={{ opacity: 0.9 }}>Typical build</div>
              <div className="display" style={{ fontSize: 48, margin: "8px 0 4px" }}>4 weeks</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Complete Website Development</div>
            </div>
            
            {deliverables.map((d, i) => (
              <div key={i} style={{ background: "var(--ink)", padding: "20px 24px", color: "var(--white)", display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ fontSize: 28, fontFamily: "monospace", color: "var(--accent)", fontWeight: 700 }}>0{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 4 }}>{d.label}</div>
                  <div style={{ fontSize: 13, opacity: 0.75 }}>{d.desc}</div>
                </div>
              </div>
            ))}
            
            {/* Sitelite Code logo */}
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
              <img src="assets/sitelite-code.webp" alt="Sitelite Code" style={{ maxWidth: "100%", height: "auto", maxHeight: 100 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SEO Deep Dive ──────────────────────────────────────────────────────────
function SEODeepDive() {
  return (
    <section id="seo" data-screen-label="SEO" className="section-equal bg-blueprint-dark" style={{ position: "relative", color: "var(--white)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="SVC-03" title="LOCAL SEO" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Local SEO that ranks</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Rank for the </span>
              <span className="b" style={{ color: "var(--accent)" }}>searches</span><br />
              <span className="m" style={{ color: "var(--white)" }}>that book jobs.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              "HVAC repair near me" gets 40X more searches than your company name. We optimize for
              the high-intent, high-volume local searches that fill your calendar — not vanity keywords.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              Google Business Profile optimization, local citations, service-area pages, review
              generation, and monthly keyword tracking. We move the needle every 30 days or we tell
              you why we didn't.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 32 }}>
              <strong>Real data, real results:</strong> We give you access to everything — analytics,
              search performance, customer insights. Monthly reporting shows exactly what's working.
              Your goals drive our strategy. We adjust fast.
            </p>
            <a className="btn" href="../index.html#contact">Book a strategy call</a>
          </div>
          
          <div style={{ background: "var(--accent)", padding: "32px", position: "relative" }}>
            <div className="display" style={{ fontSize: 96, color: "var(--white)", lineHeight: 0.9, marginBottom: 16 }}>60%</div>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(255,255,255,.9)", margin: 0 }}>
              of your local SEO work happens in Google Business Profile. Not your website. We optimize
              both, but GBP is where the war is won.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Social Media Deep Dive ────────────────────────────────────────────────
function SocialMediaDeepDive() {
  return (
    <section id="social" data-screen-label="Social" className="section-equal bg-blueprint-light" style={{ position: "relative" }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="SVC-04B" title="SOCIAL MEDIA" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Social that builds community</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Posts aren't</span><br />
              <span className="b" style={{ color: "var(--accent)" }}>strategy.</span><br />
              <span className="m" style={{ color: "var(--white)" }}>Community is.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              Most agencies post and ghost. We build engagement — responding to comments, building relationships,
              and creating content that gets shared. Consistent, authentic posts keep you top-of-mind when
              someone's AC dies at midnight.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              We develop a content strategy that reflects YOUR voice and values. We create the content
              (or source authentic photos/videos from your team). We post on a schedule that works for
              your audience. And we track what actually drives leads.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 32 }}>
              <strong>You stay in control:</strong> Quick approvals keep posts live when they're relevant.
              We give you the data — which posts drive calls, which comments deserve responses. You decide
              the tone. We handle the execution.
            </p>
            <a className="btn" href="../index.html#contact">Start a social audit</a>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <img src="assets/woman-jackhammer-transparent.webp" alt="Woman with jackhammer" style={{ width: "100%", height: "auto", display: "block", filter: "drop-shadow(12px 12px 32px rgba(0,0,0,.5))" }} />
            
            <div style={{ background: "var(--accent)", padding: "24px 28px", color: "var(--white)" }}>
              <div className="eyebrow" style={{ opacity: 0.9 }}>Posting frequency</div>
              <div className="display" style={{ fontSize: 48, margin: "8px 0 4px" }}>4–6x/wk</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Per platform, optimized for your audience</div>
            </div>
            
            <div style={{ background: "var(--ink)", padding: "20px 24px", color: "var(--white)" }}>
              <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8, color: "var(--accent)" }}>Real engagement</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>Comments, shares, and saved posts drive trust. We don't buy followers.</div>
            </div>
            
            <div style={{ background: "var(--ink)", padding: "20px 24px", color: "var(--white)" }}>
              <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 8, color: "var(--accent)" }}>Monthly reporting</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>Engagement rate, reach, clicks, and leads traced back to posts.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Paid Ads Deep Dive ─────────────────────────────────────────────────────
function PaidDeepDive() {
  const platforms = [
    { name: "Google Ads", focus: "High-intent search (\"emergency plumber\")" },
    { name: "Bing Ads", focus: "20% cheaper CPCs, older homeowners" },
    { name: "Meta (FB/IG)", focus: "Retargeting + awareness in target zip codes" },
  ];
  
  return (
    <section id="paid" data-screen-label="Paid" className="section-equal bg-blueprint-light" style={{ position: "relative" }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="SVC-04" title="PAID MEDIA" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="eyebrow" style={{ color: "var(--accent)" }}>Paid media that performs</span>
        <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 32px", maxWidth: 900 }}>
          <span className="a" style={{ color: "var(--white)" }}>Ads that </span>
          <span className="b" style={{ color: "var(--accent)" }}>respect your CPL</span>
          <span style={{ color: "var(--white)" }}> (Cost Per Lead).</span>
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{ background: "var(--ink)", padding: "28px 24px", color: "var(--white)", minHeight: 180, display: "flex", flexDirection: "column" }}>
              <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 12 }}>Platform {i + 1}</div>
              <div className="display" style={{ fontSize: 24, marginBottom: 12 }}>{p.name}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.82, flex: 1 }}>{p.focus}</div>
            </div>
          ))}
        </div>
        
        <div style={{ background: "var(--accent)", padding: "40px" }}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--white)", margin: 0, fontWeight: 500 }}>
            We optimize keyword sets weekly, not monthly. We pause underperformers daily. We A/B test
            ad copy every 2 weeks. And we cap your spend at whatever you're comfortable losing while
            we dial it in.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.9)", margin: "16px 0 0", fontStyle: "italic" }}>
            Quick approvals and honest feedback keep campaigns live and relevant. We need your business
            goals and honest feedback on what's working — that's how we adjust strategy for better ROI.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── AI Automations Deep Dive ──────────────────────────────────────────────
function AIAutomationsDeepDive() {
  return (
    <section id="ai" data-screen-label="AI Automations" className="section-equal bg-blueprint-dark" style={{ position: "relative", color: "var(--white)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="SVC-06" title="AI AUTOMATIONS" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center", marginBottom: 48 }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>AI Automations</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Let robots </span>
              <span className="b" style={{ color: "var(--accent)" }}>work</span><br />
              <span className="m" style={{ color: "var(--white)" }}>while you sleep.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              Marketing automation, chatbots, review management, lead scoring, and intelligent workflows
              that capture opportunities 24/7. These systems qualify leads, book appointments, send reminders,
              and nurture prospects — without you lifting a finger.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              We build integrations between your website, CRM, calendar, and SMS/email platforms so no lead
              falls through the cracks. One customer interaction syncs everywhere. Reports generate automatically.
              Follow-ups happen on schedule.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 32 }}>
              <strong>The ROI is simple:</strong> A chatbot that books 2–3 appointments/week at a $50 CPL 
              pays for itself in days. Automated review requests generate 15–20% more reviews. Nurture sequences 
              turn cold leads into hot ones while you're doing actual work.
            </p>
            <a className="btn" href="../index.html#contact">Audit your workflows</a>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="assets/woman-trowel-transparent.webp" alt="Woman with trowel" style={{
              width: "100%",
              maxWidth: 480,
              height: "auto",
              display: "block",
              filter: "drop-shadow(12px 12px 32px rgba(0,0,0,.6))"
            }} />
          </div>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          <div style={{ background: "var(--accent)", padding: "24px 28px", color: "var(--white)" }}>
            <div className="eyebrow" style={{ opacity: 0.9 }}>Implementation time</div>
            <div className="display" style={{ fontSize: 42, margin: "8px 0 4px" }}>2–4 weeks</div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>From strategy to full system live</div>
          </div>
          
          <div style={{ background: "rgba(255,255,255,.08)", padding: "24px", border: "1px solid rgba(255,255,255,.15)" }}>
            <div className="display" style={{ fontSize: 28, marginBottom: 12 }}>24/7</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>Systems work nights, weekends, holidays. Leads never go unanswered.</div>
          </div>
          
          <div style={{ background: "rgba(255,255,255,.08)", padding: "24px", border: "1px solid rgba(255,255,255,.15)" }}>
            <div className="display" style={{ fontSize: 28, marginBottom: 12 }}>No coding</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>We set it up. You own it. No custom development required.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Branding Deep Dive ─────────────────────────────────────────────────────
// ── Local SEO Deep Dive
function LocalSEODeepDive() {
  return (
    <section id="local-seo" data-screen-label="Local SEO" className="section-equal bg-blueprint-light" style={{ position: "relative" }}>
      <BlueprintMarks color="rgba(0,39,104,.32)" />
      <DrawingStamp no="SVC-07" title="LOCAL SEO" scale="1:1" color="rgba(0,39,104,.55)" style={{ top: 28, right: 88 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Own your service area</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Local SEO.</span><br />
              <span className="b" style={{ color: "var(--accent)", textShadow: "0 8px 16px rgba(0,0,0,.6), 0 4px 8px rgba(0,0,0,.4), -2px 2px 4px rgba(0,39,104,.5)" }}>Win your zip code.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              We get you to the top of Google for the searches that pay — “plumber near me,” “HVAC repair,”
              and every service term your customers actually type. That’s where the calls come from.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 24 }}>
              We dial in your Google Business Profile, build local citations, manage reviews, and tune
              on-page SEO so you own the map pack. Beat the franchises in your own backyard.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", marginBottom: 32 }}>
              <strong>The ROI is simple:</strong> Rank in the top 3 of the map pack and you capture the
              lion’s share of local clicks. Most clients see a 5–15x return — it pays for itself in 2–4 jobs.
            </p>
            <a className="btn" href="../index.html#contact">Claim your map pack</a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--accent)", padding: "24px 28px", color: "var(--white)" }}>
              <div className="eyebrow" style={{ opacity: 0.9 }}>Typical investment</div>
              <div className="display" style={{ fontSize: 42, margin: "8px 0 4px" }}>$800–2,500</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Per month, per market</div>
            </div>

            <div style={{ background: "var(--ink)", padding: "24px", color: "var(--white)" }}>
              <div className="display" style={{ fontSize: 28, marginBottom: 12, color: "var(--accent)" }}>Top 3</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>Map-pack rankings capture the bulk of local “near me” clicks.</div>
            </div>

            <div style={{ background: "var(--ink)", padding: "24px", color: "var(--white)" }}>
              <div className="display" style={{ fontSize: 28, marginBottom: 12, color: "var(--accent)" }}>60–90 days</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>First moves in 30 days. Real ranking gains in two to three months.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandingDeepDive() {
  const [selectedLightbox, setSelectedLightbox] = React.useState(null);
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  
  const printCollateral = [
    { name: "Truck & Cargo Van Wraps", desc: "40K+ daily impressions. Your truck is a rolling billboard.", id: "wraps", preview: "assets/wrap-truck-erik.webp" },
    { name: "Business Cards", desc: "First impression that fits in a pocket. Leave them everywhere.", id: "cards", preview: "assets/business-card-design.webp" },
    { name: "Tri-Fold Brochures", desc: "Detailed overview. Perfect for customer handouts and direct mail.", id: "brochures", preview: "assets/taco-truck-menu-1.webp" },
    { name: "Lawn Signs", desc: "Job site visibility. Free neighborhood advertising.", id: "signs", preview: "assets/lawn-signs-examples.webp" },
    { name: "Clothing & Apparel", desc: "Polo shirts, hoodies, hats. Your crew becomes walking ads.", id: "apparel", preview: "assets/clothing-apparel.webp" },
    { name: "Stickers & Decals", desc: "Window stickers, toolbox decals, bumper stickers. Cheap & sticky.", id: "stickers", preview: "assets/stickers-decals.webp" },
    { name: "Flyers & Door Hangers", desc: "Neighborhood blitzes. Quick way to announce new service areas.", id: "flyers" }
  ];
  
  const wrapImages = [
    { src: "assets/wrap-truck-erik.webp", label: "Erik Electrical Truck" },
    { src: "assets/wrap-trailer-guacnroll.webp", label: "Guac N Roll Trailer" },
    { src: "assets/wrap-sedan-herbert.webp", label: "Herbert Sedan" }
  ];
  
  const brochureImages = [
    { src: "assets/taco-truck-menu-1.webp", label: "Guac-N-Roll Menu (Front)" },
    { src: "assets/taco-truck-menu-2.webp", label: "Guac-N-Roll Menu (Inside)" }
  ];
  
  const mockups = {
    wraps: { title: "Truck Wrap Example", width: 1200, height: 800, color: "#C8262A" },
    cards: { title: "Business Card Example", width: 1050, height: 600, color: "#002768" },
    brochures: { title: "Tri-Fold Brochure Example", width: 1100, height: 700, color: "#A90100" },
    signs: { title: "Lawn Sign Example", width: 900, height: 600, color: "#0A0F1C" },
    apparel: { title: "Apparel Example", width: 1000, height: 800, color: "#C8262A" },
    stickers: { title: "Stickers & Decals Example", width: 800, height: 600, color: "#002768" },
    flyers: { title: "Flyers & Door Hangers Example", width: 900, height: 1200, color: "#A90100" }
  };
  
  return (
    <section id="branding" data-screen-label="Branding" className="section-equal bg-blueprint-navy" style={{ position: "relative", color: "var(--white)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="SVC-05" title="BRANDING + PRINT" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Branding + print collateral</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
              <span className="a" style={{ color: "var(--white)" }}>Consistent </span>
              <span className="b" style={{ color: "var(--accent)" }}>branding</span><br />
              <span className="m" style={{ color: "var(--white)" }}>across everything you touch.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              Logo design, color palette, fonts, voice & tone guidelines — and the printed materials 
              that bring your brand to life. From job site signs to your crew's shirts, every touchpoint 
              tells the same story.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 24 }}>
              We handle the design, printing, and fulfillment. You get consistent branding that makes a 
              one-person operation look professional. A wrapped truck logs 40,000+ impressions a day at 
              $0.002 per view — vs. $0.04 for PPC.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", marginBottom: 32 }}>
              <strong>Show us your work:</strong> Share authentic photos and videos of your team, trucks, 
              and jobs. That's how we create marketing that actually reflects who you are. Clear goals + 
              your business expertise = strategy that differentiates you from the competition.
            </p>
            <a className="btn" href="../index.html#contact">Get a branding quote</a>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {printCollateral.map((item, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", justifyContent: "space-between", position: "relative" }}
              >
                {/* Slide-out preview from the numbered box */}
                <div style={{
                  position: "absolute",
                  right: "calc(100% + 16px)",
                  top: "50%",
                  transform: hoveredItem === item.id ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(24px)",
                  width: 300,
                  opacity: hoveredItem === item.id ? 1 : 0,
                  visibility: hoveredItem === item.id ? "visible" : "hidden",
                  transition: "opacity .28s ease, transform .28s ease, visibility .28s",
                  zIndex: 50,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 16px 40px rgba(0,0,0,.55))"
                }}>
                  {item.preview ? (
                    <div style={{ background: "#0A0F1C", border: "1px solid rgba(255,255,255,.15)", overflow: "hidden" }}>
                      <img src={item.preview} alt={item.name} style={{ width: "100%", height: "auto", display: "block" }} />
                      <div style={{ padding: "10px 14px", fontFamily: '"Archivo"', fontWeight: 700, fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--white)" }}>{item.name}</div>
                    </div>
                  ) : (
                    <div style={{ background: mockups[item.id].color, aspectRatio: "3 / 2", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08)), linear-gradient(45deg, rgba(255,255,255,.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.08) 75%, rgba(255,255,255,.08))", backgroundSize: "28px 28px", backgroundPosition: "0 0, 14px 14px" }} />
                      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: 20 }}>
                        <div style={{ fontSize: 34, fontFamily: '"Archivo Black"', fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8, textShadow: "0 3px 10px rgba(0,0,0,.35)" }}>Toughjobs</div>
                        <div style={{ fontSize: 13, fontFamily: '"Archivo"', fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", opacity: .92 }}>{item.name}</div>
                      </div>
                    </div>
                  )}
                  {/* Pointer arrow toward the numbered box */}
                  <div style={{ position: "absolute", right: -8, top: "50%", transform: "translateY(-50%) rotate(45deg)", width: 16, height: 16, background: item.preview ? "#0A0F1C" : mockups[item.id].color, borderRight: "1px solid rgba(255,255,255,.15)", borderTop: "1px solid rgba(255,255,255,.15)" }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 24, fontFamily: '"Archivo Black"', color: "var(--accent)", minWidth: 32, textAlign: "center" }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--white)", marginBottom: 4 }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,.75)" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const pageMap = {
                      wraps: "service-truck-wraps.html",
                      cards: "service-business-cards.html",
                      brochures: "service-brochures.html",
                      signs: "service-lawn-signs.html",
                      apparel: "service-apparel.html",
                      stickers: "service-stickers.html",
                      flyers: "service-flyers.html"
                    };
                    window.location.href = pageMap[item.id];
                  }}
                  style={{
                    background: "var(--accent)",
                    color: "var(--white)",
                    border: "none",
                    padding: "8px 14px",
                    fontSize: 12,
                    fontFamily: '"Archivo"',
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    marginLeft: 12,
                    transition: "filter 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.filter = "brightness(0.9)"}
                  onMouseLeave={(e) => e.target.style.filter = "brightness(1)"}
                >
                  View Example
                </button>
              </div>
            ))}
            
            <div style={{ background: "var(--accent)", padding: "20px 24px", marginTop: 12, color: "var(--white)" }}>
              <div className="eyebrow" style={{ color: "var(--white)", opacity: 0.8 }}>Quick turnaround</div>
              <div className="display" style={{ fontSize: 36, margin: "6px 0 2px", color: "var(--white)" }}>5–30 days</div>
              <div style={{ fontSize: 13, opacity: 0.85 }}>Design to print, most items</div>
            </div>
          </div>
          
          {/* Lightbox Modal */}
          {selectedLightbox && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20
            }} onClick={() => { setSelectedLightbox(null); setCarouselIndex(0); }}>
              <div style={{
                position: "relative",
                background: "#F5F5F5",
                borderRadius: 8,
                padding: 40,
                maxWidth: "90vw",
                maxHeight: "90vh",
                overflow: "auto",
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
              }} onClick={(e) => e.stopPropagation()}>
                
                {/* Close button */}
                <button 
                  onClick={() => { setSelectedLightbox(null); setCarouselIndex(0); }}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "var(--accent)",
                    color: "white",
                    border: "none",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    fontSize: 24,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    zIndex: 10
                  }}
                >
                  ✕
                </button>
                
                {/* Show wrap carousel if wraps are selected */}
                {selectedLightbox === "wraps" ? (
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 20, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Fleet Wrap Examples
                    </h2>
                    
                    {/* Image carousel */}
                    <div style={{ position: "relative", marginBottom: 24, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
                      <img 
                        src={wrapImages[carouselIndex].src} 
                        alt={wrapImages[carouselIndex].label}
                        style={{
                          maxWidth: "100%",
                          maxHeight: 500,
                          height: "auto",
                          display: "block"
                        }}
                      />
                      
                      {/* Previous button */}
                      {carouselIndex > 0 && (
                        <button 
                          onClick={() => setCarouselIndex(carouselIndex - 1)}
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "var(--accent)",
                            color: "white",
                            border: "none",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            fontSize: 24,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700
                          }}
                        >
                          ‹
                        </button>
                      )}
                      
                      {/* Next button */}
                      {carouselIndex < wrapImages.length - 1 && (
                        <button 
                          onClick={() => setCarouselIndex(carouselIndex + 1)}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "var(--accent)",
                            color: "white",
                            border: "none",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            fontSize: 24,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700
                          }}
                        >
                          ›
                        </button>
                      )}
                    </div>
                    
                    {/* Image label and counter */}
                    <div style={{ marginBottom: 16 }}>
                      <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", margin: "0 0 8px" }}>
                        {wrapImages[carouselIndex].label}
                      </p>
                      <p style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                        {carouselIndex + 1} of {wrapImages.length}
                      </p>
                    </div>
                    
                    {/* Dot indicators */}
                    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                      {wrapImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            border: "none",
                            background: i === carouselIndex ? "var(--accent)" : "rgba(0,0,0,0.2)",
                            cursor: "pointer",
                            transition: "background 0.2s ease"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : selectedLightbox === "cards" ? (
                  /* Business Card lightbox */
                  <div style={{ textAlign: "center", maxWidth: "100%", overflowX: "auto" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 24, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Business Card Design
                    </h2>
                    <img 
                      src="assets/business-card-design.webp" 
                      alt="Toughjobs Business Card Design"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                ) : selectedLightbox === "brochures" ? (
                  /* Tri-Fold Brochure carousel */
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 20, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Tri-Fold Brochure Examples
                    </h2>
                    
                    {/* Image carousel */}
                    <div style={{ position: "relative", marginBottom: 24, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
                      <img 
                        src={brochureImages[carouselIndex].src} 
                        alt={brochureImages[carouselIndex].label}
                        style={{
                          maxWidth: "100%",
                          maxHeight: 500,
                          height: "auto",
                          display: "block"
                        }}
                      />
                      
                      {/* Previous button */}
                      {carouselIndex > 0 && (
                        <button 
                          onClick={() => setCarouselIndex(carouselIndex - 1)}
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "var(--accent)",
                            color: "white",
                            border: "none",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            fontSize: 24,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700
                          }}
                        >
                          ‹
                        </button>
                      )}
                      
                      {/* Next button */}
                      {carouselIndex < brochureImages.length - 1 && (
                        <button 
                          onClick={() => setCarouselIndex(carouselIndex + 1)}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "var(--accent)",
                            color: "white",
                            border: "none",
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            fontSize: 24,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700
                          }}
                        >
                          ›
                        </button>
                      )}
                    </div>
                    
                    {/* Image label and counter */}
                    <div style={{ marginBottom: 16 }}>
                      <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", margin: "0 0 8px" }}>
                        {brochureImages[carouselIndex].label}
                      </p>
                      <p style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", margin: 0 }}>
                        {carouselIndex + 1} of {brochureImages.length}
                      </p>
                    </div>
                    
                    {/* Dot indicators */}
                    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                      {brochureImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            border: "none",
                            background: i === carouselIndex ? "var(--accent)" : "rgba(0,0,0,0.2)",
                            cursor: "pointer",
                            transition: "background 0.2s ease"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : selectedLightbox === "signs" ? (
                  /* Lawn Signs lightbox */
                  <div style={{ textAlign: "center", maxWidth: "100%", overflowX: "auto" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 24, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Lawn Sign Examples
                    </h2>
                    <img 
                      src="assets/lawn-signs-examples.webp" 
                      alt="Lawn Signs Examples"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                ) : selectedLightbox === "apparel" ? (
                  /* Clothing & Apparel lightbox */
                  <div style={{ textAlign: "center", maxWidth: "100%", overflowX: "auto" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 24, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Clothing & Apparel Options
                    </h2>
                    <img 
                      src="assets/clothing-apparel.webp" 
                      alt="Clothing & Apparel Examples"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                ) : selectedLightbox === "stickers" ? (
                  /* Stickers & Decals lightbox */
                  <div style={{ textAlign: "center", maxWidth: "100%", overflowX: "auto" }}>
                    <h2 style={{ fontSize: 32, color: "var(--ink)", marginBottom: 24, fontFamily: '"Archivo Black"', textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      Stickers & Decals Examples
                    </h2>
                    <img 
                      src="assets/stickers-decals.webp" 
                      alt="Stickers & Decals Examples"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                ) : (
                  /* Generic mockup for other items */
                  <div>
                    {/* Mockup canvas */}
                    <div style={{
                      background: mockups[selectedLightbox].color,
                      width: mockups[selectedLightbox].width,
                      height: mockups[selectedLightbox].height,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      color: "white",
                      position: "relative",
                      overflow: "hidden",
                      margin: "0 auto"
                    }}>
                      {/* Background pattern */}
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1)), linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1))",
                        backgroundSize: "40px 40px",
                        backgroundPosition: "0 0, 20px 20px",
                        zIndex: 1
                      }} />
                      
                      {/* Logo and text */}
                      <div style={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        padding: 40
                      }}>
                        <div style={{
                          fontSize: 64,
                          fontFamily: '"Archivo Black"',
                          fontWeight: 900,
                          marginBottom: 20,
                          textTransform: "uppercase",
                          letterSpacing: "-0.01em",
                          textShadow: "0 4px 12px rgba(0,0,0,0.3)"
                        }}>
                          Toughjobs
                        </div>
                        <div style={{
                          fontSize: 28,
                          fontFamily: '"Archivo"',
                          fontWeight: 700,
                          marginBottom: 12,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em"
                        }}>
                          {mockups[selectedLightbox].title}
                        </div>
                        <div style={{
                          fontSize: 16,
                          fontWeight: 500,
                          opacity: 0.9,
                          marginTop: 20
                        }}>
                          (309) 233-9004 • Quad Cities, IL
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div style={{
                  textAlign: "center",
                  marginTop: 24,
                  color: "var(--ink)",
                  fontSize: 14
                }}>
                  Click outside or press × to close
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Software Deep Dive — Jobber vs Housecall Pro
function SoftwareDeepDive() {
  const tools = [
    {
      name: "Jobber",
      tag: "Best for growing crews",
      price: "$29–249",
      priceNote: "per month, billed annually",
      benefits: [
        "Quoting, scheduling & invoicing in one place",
        "Online booking + automatic client reminders",
        "GPS routing for your whole crew",
        "Get paid faster with built-in card processing",
        "Strong reviews from 1–10 person trade shops"
      ],
      tiers: [
        { label: "Core", cost: "$29/mo", who: "1 user — solo operator" },
        { label: "Connect", cost: "$129/mo", who: "Up to 7 users" },
        { label: "Grow", cost: "$249/mo", who: "Up to 30 users" }
      ]
    },
    {
      name: "Housecall Pro",
      tag: "Best for service & repeat work",
      price: "$49–299",
      priceNote: "per month, billed annually",
      benefits: [
        "Dispatch board + drag-and-drop scheduling",
        "Automated marketing & review requests built in",
        "Consumer financing to close bigger tickets",
        "Recurring service plans for repeat revenue",
        "Great fit for HVAC, plumbing & electrical"
      ],
      tiers: [
        { label: "Basic", cost: "$49/mo", who: "1 user — getting started" },
        { label: "Essentials", cost: "$129/mo", who: "Up to 5 users" },
        { label: "MAX", cost: "$299+/mo", who: "Large teams — custom" }
      ]
    }
  ];

  return (
    <section id="software" data-screen-label="Software" className="section-equal bg-blueprint-navy" style={{ position: "relative", color: "var(--white)" }}>
      <BlueprintMarks color="rgba(140,170,220,.28)" />
      <DrawingStamp no="SVC-08" title="SOFTWARE" scale="1:1" color="rgba(140,170,220,.45)" style={{ top: 28, right: 88 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 48 }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Run a tighter shop</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 0" }}>
              <span className="a" style={{ color: "var(--white)" }}>Get </span>
              <span className="b" style={{ color: "var(--accent)", textShadow: "0 8px 16px rgba(0,0,0,.6), 0 4px 8px rgba(0,0,0,.4), -2px 2px 4px rgba(0,39,104,.5)" }}>organized.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--white)", margin: 0 }}>
            Marketing fills the calendar. Software keeps it from falling apart. We set you up on the
            field-service platform that fits your shop — here's how the two best stack up.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {tools.map((t, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", padding: 32, display: "flex", flexDirection: "column" }}>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>{t.tag}</span>
              <h3 className="display" style={{ fontSize: 40, margin: "8px 0 4px", color: "var(--white)" }}>{t.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
                <span className="display" style={{ fontSize: 32, color: "var(--accent)", textShadow: "0 4px 10px rgba(0,0,0,.5)" }}>{t.price}</span>
                <span style={{ fontSize: 13, opacity: 0.75 }}>{t.priceNote}</span>
              </div>

              <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>Why crews pick it</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {t.benefits.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45, color: "var(--white)" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 800 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>What it costs</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "auto" }}>
                {t.tiers.map((tier, k) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, background: "var(--ink)", padding: "14px 18px" }}>
                    <div>
                      <div style={{ fontFamily: '"Archivo"', fontWeight: 700, fontSize: 15, color: "var(--white)" }}>{tier.label}</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{tier.who}</div>
                    </div>
                    <div className="display" style={{ fontSize: 20, color: "var(--accent)", whiteSpace: "nowrap" }}>{tier.cost}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, opacity: 0.6, marginTop: 20, color: "var(--white)" }}>
          Pricing shown is each vendor's published starting rate and can change — we'll confirm current numbers before you commit.
        </p>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServicesApp />);
