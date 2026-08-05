// components.jsx — Toughjobs homepage components
// All components consume CSS custom properties set on <body> by app.jsx.

const { useState, useEffect, useRef } = React;

// ── Striped photo / image placeholder ──────────────────────────────────────
function Placeholder({ children, dark, style, ratio, label }) {
  const s = { ...(ratio ? { aspectRatio: ratio } : {}), ...style };
  return (
    <div className={"placeholder" + (dark ? " dark" : "")} style={s}>
      <span className="meta">{label || children || "image"}</span>
    </div>);

}

// ── Lightning-style accent glyph (geometric, not the Kickcharge bolt) ──────
function Voltage({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2 L4 14 L11 14 L10 22 L20 10 L13 10 Z" fill={color} />
    </svg>);

}

// ── TJ monogram mark ──────────────────────────────────────────────────────
// ── TJ monogram mark ───────────────────────────────────────────────────────
// Final mark: a user-supplied PNG with the black background stripped to
// transparency so it sits cleanly on any nav/footer color.
function TJMark({ size = 40 }) {
  return (
    <img
      src="assets/toughjobs-monogram.png"
      alt="Toughjobs"
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size, objectFit: "contain" }} />);


}

// ── Top nav ────────────────────────────────────────────────────────────────
function Nav() {
  const links = ["Services", "Work", "About", "Insights", "Contact"];
  return (
    <header style={{
      background: "var(--ink)",
      color: "var(--white)",
      position: "sticky", top: 0, zIndex: 40
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--white)" }}>
          <img
            src="assets/toughjobs-logo-static.png"
            alt="Toughjobs logo"
            style={{ display: "block", height: 42 }} />
          
          <span style={{
            fontFamily: '"Archivo Black",sans-serif',
            fontSize: 18, letterSpacing: ".02em", textTransform: "uppercase"
          }}>
            Tough<span style={{ color: "var(--accent)" }}>jobs</span>
          </span>
        </a>
        <nav style={{ display: "flex", gap: 24, flexWrap: "nowrap" }}>
          {links.map((l) =>
          <a key={l} href="#" style={{
            fontFamily: '"Archivo",sans-serif',
            fontWeight: 700, fontSize: 12, letterSpacing: ".08em",
            textTransform: "uppercase", color: "var(--white)", textDecoration: "none",
            padding: "8px 0",
            borderBottom: "2px solid transparent",
            transition: "border-color .15s ease, color .15s ease"
          }}
          onMouseEnter={(e) => {e.currentTarget.style.borderColor = "var(--accent)";e.currentTarget.style.color = "var(--accent)";}}
          onMouseLeave={(e) => {e.currentTarget.style.borderColor = "transparent";e.currentTarget.style.color = "var(--white)";}}>
              {l}
            </a>
          )}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href="tel:3097414599" style={{
            color: "var(--white)", textDecoration: "none",
            fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 13,
            letterSpacing: ".04em", whiteSpace: "nowrap"
          }}>
            (309) 741-4599
          </a>
          <a className="btn" href="#contact">Request a Quote</a>
        </div>
      </div>
    </header>);

}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero({ heroStyle }) {
  if (heroStyle === "geometric-typographic") {
    return (
      <section data-screen-label="01 Hero" style={{
        background: "var(--bg-dark)",
        color: "var(--white)",
        paddingBlock: 0,
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container" style={{ paddingBlock: 120, position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Integrated marketing • For the trades</span>
          <h1 className="display split" style={{
            fontSize: "clamp(64px, 9vw, 132px)",
            margin: "24px 0 32px",
            maxWidth: 1100
          }}>
            <span className="a" style={{ color: "var(--white)" }}>Built for the </span>
            <span className="b">jobs nobody else</span>
            <span className="a" style={{ color: "var(--white)" }}> wants to do.</span>
          </h1>
          <p style={{
            maxWidth: 640, fontSize: 18, lineHeight: 1.55,
            color: "rgba(255,255,255,.72)", margin: "0 0 40px"
          }}>
            Toughjobs is a Peoria-based marketing agency for HVAC, plumbing, electrical and roofing
            companies that have outgrown their last website and are tired of being a vendor's afterthought.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn" href="#">See the work</a>
            <a className="btn btn-dark" href="#" style={{ background: "transparent", border: "2px solid rgba(255,255,255,.3)", padding: "14px 24px" }}>
              <Voltage size={16} color="var(--accent)" /> Free site teardown
            </a>
          </div>
        </div>
        {/* Giant decorative outlined word */}
        <div aria-hidden="true" style={{
          position: "absolute", right: -40, bottom: -30,
          fontFamily: '"Archivo Black",sans-serif',
          fontSize: "clamp(220px, 28vw, 420px)",
          color: "transparent",
          WebkitTextStroke: "2px rgba(255,255,255,.06)",
          lineHeight: .85, letterSpacing: "-0.02em",
          pointerEvents: "none"
        }}>
          TOUGH
        </div>
        {/* Diagonal accent stripe */}
        <div aria-hidden="true" style={{
          position: "absolute", top: 0, right: "20%",
          width: 8, height: "100%", background: "var(--accent)",
          transform: "skewX(-12deg)", transformOrigin: "top right"
        }} />
      </section>);

  }

  // photo-fullbleed (default)
  return (
    <section data-screen-label="01 Hero" style={{ position: "relative", padding: 0 }}>
      <div style={{ position: "relative", height: "min(82vh, 760px)", minHeight: 560, overflow: "hidden" }}>
        <img src="assets/electrician-hero.png" alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        {/* Scrim — left to right dark fade so headline reads */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, var(--bg-dark) 0%, color-mix(in oklab, var(--bg-dark), transparent 35%) 45%, color-mix(in oklab, var(--bg-dark), transparent 85%) 80%)",
          opacity: .92
        }} />
        {/* Diagonal red accent bar */}
        <div aria-hidden="true" style={{
          position: "absolute", top: 0, left: "72%",
          width: 10, height: "100%", background: "var(--accent)",
          transform: "skewX(-10deg)"
        }} />
        <div className="container" style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          justifyContent: "center"
        }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Marketing for the trades</span>
          <h1 className="display split" style={{
            fontSize: "clamp(59px, 8.4vw, 126px)",
            margin: "20px 0 28px",
            maxWidth: 1050
          }}>
            <span className="a" style={{ color: "var(--white)" }}>Powerful </span>
            <span className="b">marketing</span><br />
            <span className="a" style={{ color: "var(--white)" }}>for the </span>
            <span className="b">trades.</span>
          </h1>
          <p style={{
            maxWidth: 600, fontSize: 18, lineHeight: 1.5,
            color: "rgba(255,255,255,.85)", margin: "0 0 36px"
          }}>
            Websites, SEO and lead generation built for HVAC, plumbing, electrical and roofing
            contractors across Central Illinois.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn" href="#">See the work</a>
            <a className="btn" href="#" style={{
              background: "transparent", color: "var(--white)",
              border: "2px solid rgba(255,255,255,.45)",
              padding: "14px 24px"
            }}>
              <Voltage size={16} color="var(--accent)" /> Free site teardown
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ── Trust marquee ──────────────────────────────────────────────────────────
function TrustMarquee() {
  const items = [
  "EAST PEORIA HVAC", "MORTON PLUMBING CO.", "WASHINGTON ELECTRIC SVC",
  "DUNLAP ROOFING", "GERMANTOWN HILLS AIR & HEAT", "EUREKA MECHANICAL",
  "BLOOMINGTON TRADES GROUP", "NORMAL GARAGE"];

  const row =
  <div style={{ display: "flex", gap: 80 }}>
      {items.map((i) =>
    <span key={i} className="eyebrow" style={{ fontSize: 13, color: "var(--white)" }}>
          {i}
        </span>
    )}
    </div>;

  return (
    <section style={{ padding: "32px 0", background: "var(--accent)" }}>
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)" }}>
        <div className="marquee-track">
          {row}{row}
        </div>
      </div>
    </section>);

}

// ── Service icon set ───────────────────────────────────────────────────────
// Single-stroke geometric line icons, sized 48×48, drawn with currentColor so
// they inherit each card's hover-state ink.
const ServiceIcons = {
  websites:
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="42" height="32" stroke="currentColor" strokeWidth="2.5" />
      <line x1="3" y1="17" x2="45" y2="17" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="9" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="14" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="19" cy="12.5" r="1.4" fill="currentColor" />
      <path d="M 12 25 L 24 25 M 12 31 L 36 31 M 12 36 L 30 36"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>,

  seo:
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2.5" />
      <line x1="30" y1="30" x2="44" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <line x1="15" y1="25" x2="15" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="20" y1="25" x2="20" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="25" y1="25" x2="25" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>,

  paid:
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <path d="M 24 1 L 24 9 M 24 39 L 24 47 M 1 24 L 9 24 M 39 24 L 47 24"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>,

  branding:
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Voltage / lightning glyph — ties to the "power up the trades" voice */}
      <path d="M 27 4 L 10 26 L 22 26 L 19 44 L 38 20 L 25 20 L 27 4 Z"
    stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    </svg>

};

// ── Services grid (4-up) ───────────────────────────────────────────────────
function Services() {
  const items = [
  { n: "01", icon: "websites", title: "Websites", body: "WordPress builds engineered to convert, not just look pretty. Fast, secure, and yours to own." },
  { n: "02", icon: "seo", title: "SEO", body: "Local rankings for the searches that actually book jobs. Built into the foundation, not bolted on." },
  { n: "03", icon: "paid", title: "Paid", body: "Google, Bing and Meta campaigns that respect your CPL. We optimize keyword sets weekly, not monthly." },
  { n: "04", icon: "branding", title: "Branding", body: "Names, logos, voice and truck wraps that make a one-truck operation look like a fleet." }];

  return (
    /* Section has overflow:visible so the girl's hat can peek above the top edge.
       chev-bot clip is moved to an inner background layer so it doesn't clip her. */
    <section data-component="Services" data-screen-label="02 Services" style={{
      position: "relative", color: "var(--white)",
      background: "transparent", overflow: "visible"
    }}>
      {/* ── black background with the diagonal bottom cut ── */}
      <div className="chev-bot" style={{
        position: "absolute", inset: 0,
        background: "#000000", zIndex: 0, pointerEvents: "none"
      }} />
      
      {/* Red tilted divider at bottom — painted above the black bg, slopes
             downward left-to-right. Taller on the right (160px) and tapers to
             shorter on the left (40px) for a more dramatic wedge. */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "var(--accent)",
        clipPath: "polygon(0 75%, 100% 0, 100% 100%, 0 100%)",
        zIndex: 1, height: "40px"
      }} />

      {/* ── girl with cut-saw — LEFT side, still facing right ── */}
      <img src="assets/girl-saw.png" alt=""
      style={{
        position: "absolute",
        left: 0,
        top: "-40px",
        height: "calc(100% - 40px)",
        width: "auto",
        maxWidth: "44%",
        objectFit: "contain",
        objectPosition: "top left",
        pointerEvents: "none",
        zIndex: 1,
        filter: "drop-shadow(8px 0 24px rgba(0,0,0,.6))"
      }} />

      {/* ── text RIGHT-aligned, cards on top ── */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 64 }}>
          <div />{/* left col empty — girl lives here */}
          <div style={{ textAlign: "right" }}>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>What we do</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 0", color: "var(--white)" }}>
              <span className="a" style={{ color: "var(--white)" }}>Four levers</span><br />
              <span className="b">Every one </span>
              <span className="m">pulled hard</span>
              <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}> WITH PURPOSE</span>
            </h2>
          </div>
        </div>
        {/* Cards grid — z-index 3 puts them in FRONT of the girl */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          position: "relative", zIndex: 3,
          background: "rgba(255,255,255,.08)",
          border: "1px solid rgba(255,255,255,.08)"
        }}>
          {items.map((it, i) =>
          <ServiceCard key={it.n} item={it} />
          )}
        </div>
      </div>
    </section>);

}

// Individual card — manages its own hover state so we can drive the
// "accent panel slides up from below" reveal without a global stylesheet rule.
function ServiceCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" data-component="ServiceCard"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{
      position: "relative",
      padding: "40px 32px 48px",
      textDecoration: "none", color: "var(--white)",
      background: "#000000",
      display: "flex", flexDirection: "column", gap: 18,
      minHeight: 380,
      overflow: "hidden",
      transition: "color .25s ease"
    }}>
      {/* Sliding accent reveal — sits behind content, grows from bottom on hover */}
      <span aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        height: hover ? "100%" : 6,
        background: "var(--accent)",
        transition: "height .35s cubic-bezier(.2,.8,.2,1)",
        zIndex: 0
      }} />
      {/* Watermark number — big outlined display char in the background */}
      <span aria-hidden="true" style={{
        position: "absolute", right: -8, top: -16, zIndex: 1,
        fontFamily: '"Archivo Black", sans-serif',
        fontSize: 160, lineHeight: 1, letterSpacing: "-0.04em",
        color: "transparent",
        WebkitTextStroke: hover ? "2px rgba(255,255,255,.18)" : "2px rgba(255,255,255,.06)",
        transition: "-webkit-text-stroke .25s ease",
        pointerEvents: "none"
      }}>
        {item.n}
      </span>

      {/* Content (above the slide reveal) */}
      <div style={{ position: "relative", zIndex: 2, color: hover ? "var(--white)" : "var(--accent)", width: 48, height: 48, transition: "color .25s ease" }}>
        {ServiceIcons[item.icon]}
      </div>
      <h3 className="display" style={{ position: "relative", zIndex: 2, fontSize: 32, margin: "6px 0 0", color: "var(--white)" }}>{item.title}</h3>
      <p style={{
        position: "relative", zIndex: 2,
        fontSize: 15, lineHeight: 1.55,
        color: hover ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.6)",
        transition: "color .25s ease",
        margin: 0, flex: 1
      }}>
        {item.body}
      </p>
      <span className="eyebrow" style={{
        position: "relative", zIndex: 2,
        color: "var(--white)",
        display: "inline-flex", alignItems: "center", gap: 10
      }}>
        Learn more
        <span aria-hidden="true" style={{
          display: "inline-block",
          transform: hover ? "translateX(6px)" : "translateX(0)",
          transition: "transform .25s ease"
        }}>→</span>
      </span>
    </a>);

}

// ── Wraps showcase ─────────────────────────────────────────────────────────────
function Wraps() {
  const tiles = [
  { label: "WRAP \u2014 service truck", aspect: "3/4", featured: true },
  { label: "WRAP \u2014 enclosed trailer", aspect: "3/4" },
  { label: "WRAP \u2014 fleet sedan", aspect: "3/4" }];

  return (
    <section data-component="Wraps" data-screen-label="03 Wraps" style={{ background: "var(--surface)", position: "relative" }} className="chev-bot">
      {/* Red diagonal divider at top — mirrors the black wedge on Statement below */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0,
        background: "var(--accent)",
        clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        zIndex: 0, height: "40px"
      }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Truck, trailer & car wraps</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 0" }}>
              <span className="a">Your fleet is the </span>
              <span className="b">biggest billboard</span><br />
              <span className="a">you'll </span>
              <span className="m">never pay rent on.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 480, marginLeft: "auto" }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--smoke)", margin: 0 }}>
              A wrapped service truck logs <strong style={{ color: "var(--ink)" }}>40,000+ impressions a day</strong> in
              a metro market. We design, print and install the kind of wrap a homeowner remembers
              long enough to actually book the call.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <a className="btn" href="#">See the wrap gallery</a>
              <a className="btn btn-ghost" href="#">Get a wrap quote</a>
            </div>
          </div>
        </div>

        {/* Wrap-format strip: featured trailer on the left, truck + sedan stacked on the right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, alignItems: "stretch" }}>
          <WrapTile label={tiles[1].label} format="Trailer" badge="01" cover="assets/wrap-trailer-guacnroll.png" />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            <WrapTile label={tiles[0].label} format="Service truck" badge="02" cover="assets/wrap-truck-erik.png" compact />
            <WrapTile label={tiles[2].label} format="Fleet car" badge="03" cover="assets/wrap-sedan-herbert.png" compact />
          </div>
        </div>

        {/* Bottom stat strip */}
        <div style={{
          marginTop: 24,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--hairline)"
        }}>
          {[
          { k: "40K+", v: "daily impressions per wrapped truck" },
          { k: "3–7 yr", v: "vinyl warranty on every install" },
          { k: "$0.002", v: "cost per impression vs. $0.04 PPC" },
          { k: "48 hr", v: "average install once the design lands" }].
          map((s, i, arr) =>
          <div key={s.k} style={{
            padding: "24px 20px",
            borderRight: i < arr.length - 1 ? "1px solid var(--hairline)" : 0
          }}>
              <div className="display" style={{ fontSize: 36, color: "var(--ink)", lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 8, fontSize: 13, color: "var(--smoke)", lineHeight: 1.4 }}>{s.v}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// One tile in the wrap gallery. Hover slides a red badge in from the top-left
// so the row feels alive without a heavy hover state.
function WrapTile({ label, format, badge, compact, cover }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#"
    onMouseEnter={() => setH(true)}
    onMouseLeave={() => setH(false)}
    style={{
      position: "relative", display: "block", overflow: "hidden",
      minHeight: compact ? 220 : 460,
      textDecoration: "none", color: "var(--ink)"
    }}>
      {cover ?
      <img src={cover} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", display: "block"
      }} /> :

      <Placeholder dark style={{ position: "absolute", inset: 0 }} label={label} />
      }

      {/* Bottom scrim so the format label always reads */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.7) 100%)"
      }} />

      {/* Top-left red badge — slides in on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        background: "var(--accent)", color: "var(--white)",
        padding: "8px 14px",
        fontFamily: '"Archivo",sans-serif', fontWeight: 800, fontSize: 12,
        letterSpacing: ".1em", textTransform: "uppercase",
        transform: h ? "translateY(0)" : "translateY(-100%)",
        transition: "transform .35s cubic-bezier(.2,.8,.2,1)"
      }}>
        View build →
      </div>

      {/* Resting badge — just the index */}
      <div style={{
        position: "absolute", top: 16, left: 16,
        fontFamily: '"Archivo Black",sans-serif', fontSize: 14,
        color: "var(--white)", letterSpacing: ".15em",
        opacity: h ? 0 : 1,
        transition: "opacity .2s ease"
      }}>
        {badge}
      </div>

      {/* Bottom-left format label */}
      <div style={{
        position: "absolute", left: 20, bottom: 18,
        color: "var(--white)"
      }}>
        <div className="eyebrow" style={{ color: "var(--accent)", opacity: .95 }}>Format</div>
        <div className="display" style={{ fontSize: compact ? 22 : 32, marginTop: 4, color: "var(--white)" }}>{format}</div>
      </div>
    </a>);

}

// ── Big stat / Case story ─────────────────────────────────────────────────
function CaseStory() {
  return (
    <section data-screen-label="03 Case story" style={{ background: "var(--surface-alt)" }} className="chev-top chev-bot">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Case study · High Tide Plumbing</span>
          <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 32px" }}>
            <span className="a">12 weeks after a </span>
            <span className="b">total rebrand,</span><br />
            <span className="a">revenue was up</span>
          </h2>
          <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 32 }}>
            <span className="display" style={{ fontSize: "clamp(96px, 13vw, 180px)", color: "var(--ink)", lineHeight: .9 }}>$187K</span>
            <span style={{ fontSize: 14, color: "var(--smoke)", maxWidth: 200 }}>
              Same crew. Same trucks. Same service area. New brand and a site that ranks.
            </span>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 560, margin: "0 0 32px" }}>
            We rebuilt their identity, wrote a website that actually loads on rural LTE, and put their
            phone number above the fold in 11 places. The calls started before the site even finished indexing.
          </p>
          <a className="btn btn-dark" href="#">Read the full story</a>
        </div>
        <div style={{ position: "relative" }}>
          <Placeholder style={{ aspectRatio: "4/5" }} label="VAN / TRUCK WRAP — after photo" />
          {/* Stat ribbon overlay */}
          <div style={{
            position: "absolute", left: -24, bottom: 32,
            background: "var(--accent)", color: "var(--accent-ink)",
            padding: "20px 26px"
          }}>
            <div className="eyebrow" style={{ opacity: .9 }}>Avg ticket</div>
            <div className="display" style={{ fontSize: 42, marginTop: 4 }}>+38%</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Yellow / accent statement panel ────────────────────────────────────────
function Statement() {
  return (
    <section data-component="Statement" data-screen-label="04 Statement" style={{
      background: "var(--accent)",
      color: "var(--accent-ink)",
      paddingBlock: 120,
      position: "relative",
      overflow: "hidden"
    }} className="chev-top">
      {/* Black diagonal accent band at the top */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0,
        background: "#000",
        clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)",
        zIndex: 0, height: "40px"
      }} />
      {/* White diagonal wedge at the bottom — reads as the next section
              (ServiceArea) leaking up into this one, instead of body-black */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 56,
        background: "var(--surface)",
        clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        zIndex: 0
      }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow" style={{ color: "var(--accent-ink)", opacity: .8 }}>The Toughjobs principle</span>
        <h2 className="display" style={{
          fontSize: "clamp(48px, 6.5vw, 96px)",
          margin: "20px 0 32px",
          color: "var(--accent-ink)",
          maxWidth: 1100
        }}>
          If your site doesn't rank, doesn't load, or doesn't convert —
          <span style={{ color: "var(--ink)" }}> it's not a website. It's an expense.</span>
        </h2>
        <p style={{
          maxWidth: 680, fontSize: 18, lineHeight: 1.55,
          color: "rgba(255,255,255,.9)",
          marginBottom: 0
        }}>
          We don't sell rented platforms, we don't lock you into a CMS we own, and we don't ghost you after launch.
          You'll know who picks up the phone, and they'll know your fleet by name.
        </p>
      </div>
      {/* Decorative diagonal */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, right: -20, width: 200, height: "100%",
        background: "rgba(0,0,0,.08)",
        clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)"
      }} />
    </section>);

}

// ── Service area / locations ──────────────────────────────────────────────
// Tile data — distance (mi) used by the Pin variant. Distances are nominal.
const CITY_DATA = [
["Peoria", 0], ["East Peoria", 3], ["Morton", 12], ["Washington", 14],
["Dunlap", 8], ["Germantown Hills", 10], ["Eureka", 18], ["Bloomington", 38],
["Normal", 40], ["Pekin", 10], ["Metamora", 16], ["Chillicothe", 15]];


function ServiceArea({ cityStyle = "stamp" }) {
  const Tile = {
    sweep: SweepTile, stamp: StampTile, pin: PinTile, slash: SlashTile
  }[cityStyle] || StampTile;

  const cageStyle = cityStyle === "stamp" ?
  { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 } :
  { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
    border: "1px solid rgba(255,255,255,.4)" };

  return (
    <section data-component="ServiceArea" data-screen-label="05 Service area" style={{ background: "var(--surface)" }} className="chev-bot">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
        <div>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Where we work</span>
          <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 24px" }}>
            <span className="a">Central</span><br />
            <span className="b">Illinois.</span><br />
            <span className="m">Boots on the ground.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--smoke)", maxWidth: 440, margin: "0 0 24px" }}>
            We meet clients on job sites and tailgates, not Zoom calls. If you're inside the I-74 corridor,
            we'll come walk your shop.
          </p>
          <a className="btn btn-ghost" href="#">See all locations</a>
        </div>
        <div style={cageStyle}>
          {CITY_DATA.map(([c, d], i) =>
          <Tile
            key={c}
            city={c}
            distance={d}
            index={i}
            borderRight={(i + 1) % 3 !== 0}
            borderBottom={i < CITY_DATA.length - 3} />

          )}
        </div>
      </div>
    </section>);

}

// ── Variant 1: SWEEP ───────────────────────────────────────────────────────
// The current tile: muted gray field, red panel sweeps in from left on hover,
// red square morphs into a white arrow, label slides right in white.
function SweepTile({ city, borderRight, borderBottom }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#"
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{
      position: "relative", overflow: "hidden",
      padding: "22px 20px", display: "flex", alignItems: "center", gap: 12,
      background: "var(--headline-mute)",
      borderRight: borderRight ? "1px solid rgba(255,255,255,.4)" : 0,
      borderBottom: borderBottom ? "1px solid rgba(255,255,255,.4)" : 0,
      textDecoration: "none", color: "var(--ink)", cursor: "pointer"
    }}>
      <span aria-hidden="true" style={{
        position: "absolute", inset: 0, background: "var(--accent)",
        transform: h ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left center",
        transition: "transform .35s cubic-bezier(.2,.8,.2,1)", zIndex: 0
      }} />
      <span aria-hidden="true" style={{
        position: "relative", zIndex: 1, width: 14, height: 14, flexShrink: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center"
      }}>
        <span style={{
          position: "absolute", inset: 4,
          background: h ? "var(--white)" : "var(--accent)",
          transform: h ? "scale(0)" : "scale(1)", transformOrigin: "center",
          transition: "transform .25s ease, background .25s ease"
        }} />
        <svg viewBox="0 0 14 14" width="14" height="14" style={{
          position: "absolute", inset: 0, opacity: h ? 1 : 0,
          transform: h ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity .25s ease .05s, transform .25s ease .05s"
        }} aria-hidden="true">
          <path d="M 2 7 L 12 7 M 8 3 L 12 7 L 8 11" stroke="var(--white)"
          strokeWidth="2" fill="none" strokeLinecap="square" />
        </svg>
      </span>
      <span style={{
        position: "relative", zIndex: 1,
        fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 14,
        letterSpacing: ".04em", textTransform: "uppercase",
        color: h ? "var(--white)" : "var(--ink)",
        transform: h ? "translateX(4px)" : "translateX(0)",
        transition: "color .25s ease, transform .35s cubic-bezier(.2,.8,.2,1)"
      }}>
        {city}
      </span>
    </a>);

}

// ── Variant 2: STAMP ───────────────────────────────────────────────────────
// Industrial nameplate. Each city is a heavy outlined black card with chamfered
// corner ticks, a tiny zone index ("Z-01"), and the city in chunky display.
// Hover: card flips to solid accent fill, ticks invert, ZIP-style sub-label
// fades in from below. Reads as truck signage / fleet inventory.
function StampTile({ city, index, distance }) {
  const [h, setH] = React.useState(false);
  const zone = `Z-${String(index + 1).padStart(2, "0")}`;
  return (
    <a href="#"
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{
      position: "relative", display: "block", overflow: "hidden",
      padding: "20px 18px",
      minHeight: 96,
      background: h ? "var(--accent)" : "var(--ink)",
      color: h ? "var(--white)" : "var(--white)",
      textDecoration: "none", cursor: "pointer",
      transition: "background .25s ease"
    }}>
      {/* Chamfered corner ticks — 4 corners, drawn as small Ls */}
      {[
      { top: 6, left: 6, rotate: 0 },
      { top: 6, right: 6, rotate: 90 },
      { bottom: 6, right: 6, rotate: 180 },
      { bottom: 6, left: 6, rotate: 270 }].
      map((p, i) =>
      <svg key={i} viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" style={{
        position: "absolute", ...p, transform: `rotate(${p.rotate}deg)`
      }}>
          <path d="M 0 6 L 0 0 L 6 0" stroke={h ? "var(--ink)" : "var(--accent)"}
        strokeWidth="2" fill="none" />
        </svg>
      )}

      {/* Top: zone code */}
      <div style={{
        fontFamily: "ui-monospace, Menlo, Consolas, monospace",
        fontSize: 10, letterSpacing: ".18em",
        color: h ? "var(--ink)" : "var(--accent)",
        marginBottom: 8
      }}>
        {zone} · {distance} MI
      </div>

      {/* City — chunky display */}
      <div className="display" style={{
        fontSize: 22, lineHeight: 1, color: h ? "var(--ink)" : "var(--white)",
        transition: "color .25s ease"
      }}>
        {city}
      </div>

      {/* Hover sub-label */}
      <div style={{
        fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 10,
        letterSpacing: ".15em", textTransform: "uppercase",
        marginTop: 8, color: "var(--ink)",
        opacity: h ? 1 : 0,
        transform: h ? "translateY(0)" : "translateY(6px)",
        transition: "opacity .25s ease, transform .25s ease"
      }}>
        Active service zone →
      </div>
    </a>);

}

// ── Variant 3: PIN ─────────────────────────────────────────────────────────
// Map-pin glyph + distance number; hover, the pin bounces, distance ticker
// gets a thin accent underline, and the row glows faintly.
function PinTile({ city, distance, borderRight, borderBottom }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#"
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{
      position: "relative", overflow: "hidden",
      padding: "20px 18px",
      display: "flex", alignItems: "center", gap: 14,
      background: h ? "var(--ink)" : "var(--surface)",
      color: h ? "var(--white)" : "var(--ink)",
      borderRight: borderRight ? "1px solid var(--hairline)" : 0,
      borderBottom: borderBottom ? "1px solid var(--hairline)" : 0,
      textDecoration: "none", cursor: "pointer",
      transition: "background .25s ease, color .25s ease"
    }}>
      {/* Pin glyph */}
      <svg viewBox="0 0 16 22" width="16" height="22" aria-hidden="true" style={{
        flexShrink: 0,
        transform: h ? "translateY(-3px)" : "translateY(0)",
        transition: "transform .25s cubic-bezier(.34,1.56,.64,1)"
      }}>
        <path d="M 8 0 C 12.4 0 16 3.4 16 7.6 C 16 13.3 8 22 8 22 C 8 22 0 13.3 0 7.6 C 0 3.4 3.6 0 8 0 Z"
        fill="var(--accent)" />
        <circle cx="8" cy="7.6" r="2.6" fill={h ? "var(--ink)" : "var(--surface)"} />
      </svg>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{
          fontFamily: '"Archivo",sans-serif', fontWeight: 700, fontSize: 14,
          letterSpacing: ".04em", textTransform: "uppercase"
        }}>
          {city}
        </span>
        <span style={{
          fontFamily: "ui-monospace, Menlo, Consolas, monospace",
          fontSize: 11, opacity: .65,
          paddingBottom: 2,
          borderBottom: h ? "2px solid var(--accent)" : "2px solid transparent",
          alignSelf: "flex-start",
          transition: "border-color .25s ease"
        }}>
          {distance === 0 ? "HQ" : `${distance} MI · I-74`}
        </span>
      </div>
    </a>);

}

// ── Variant 4: SLASH ───────────────────────────────────────────────────────
// A thick angled red slash sits on the right edge of each resting tile.
// On hover the slash expands diagonally to fill the whole tile, the city
// label flips to white and slides over the new diagonal.
function SlashTile({ city, borderRight, borderBottom }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#"
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{
      position: "relative", overflow: "hidden",
      padding: "22px 22px",
      display: "flex", alignItems: "center",
      minHeight: 76,
      background: "var(--surface)",
      borderRight: borderRight ? "1px solid var(--hairline)" : 0,
      borderBottom: borderBottom ? "1px solid var(--hairline)" : 0,
      textDecoration: "none", cursor: "pointer"
    }}>
      {/* The slash — clip-path parallelogram that grows from a thin slice on
             the right to fully covering the tile on hover. */}
      <span aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "var(--accent)",
        clipPath: h ?
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)" :
        "polygon(85% 0, 100% 0, 100% 100%, 70% 100%)",
        transition: "clip-path .4s cubic-bezier(.2,.8,.2,1)",
        zIndex: 0
      }} />
      {/* City label */}
      <span style={{
        position: "relative", zIndex: 1,
        fontFamily: '"Archivo Black",sans-serif',
        fontSize: 18, letterSpacing: ".02em", textTransform: "uppercase",
        color: h ? "var(--white)" : "var(--ink)",
        transition: "color .25s ease .05s"
      }}>
        {city}
      </span>
    </a>);

}

// ── Insights / Tips & Tools 3-up ──────────────────────────────────────────
function Insights() {
  const cards = [
  { tag: "Field guide", title: "Why your Google Business Profile is doing 60% of your SEO work", read: "6 min read", cover: "assets/insight-teardown.png" },
  { tag: "Teardown", title: "The 4 reasons a $4K WordPress site outperforms a $40K custom build", read: "9 min read", cover: "assets/insight-field-guide.png" },
  { tag: "Playbook", title: "How to spend $1,000/mo on Google Ads without lighting it on fire", read: "7 min read", cover: "assets/insight-playbook.png" }];


  return (
    <section data-screen-label="06 Insights" style={{ background: "var(--ink)", color: "var(--white)" }} className="on-dark chev-top chev-bot">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, gap: 32, flexWrap: "wrap" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Insights from the field</span>
            <h2 className="display split" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "16px 0 0", maxWidth: 760 }}>
              <span className="a" style={{ color: "var(--white)" }}>Plug in. </span>
              <span className="b">Charge up.</span><br />
              <span className="a" style={{ color: "var(--white)" }}>Run hotter.</span>
            </h2>
          </div>
          <a href="#" className="eyebrow" style={{ color: "var(--white)", textDecoration: "none", borderBottom: "2px solid var(--accent)", paddingBottom: 6 }}>
            All articles →
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cards.map((c, i) =>
          <a key={i} href="#" className="lift" style={{
            background: "#11172A",
            padding: 0,
            textDecoration: "none", color: "var(--white)",
            display: "flex", flexDirection: "column",
            minHeight: 420,
            border: "1px solid rgba(255,255,255,.08)"
          }}>
              {c.cover ?
            <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                  <img src={c.cover} alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div> :

            <Placeholder dark style={{ aspectRatio: "16/10" }} label={"COVER — " + c.tag} />
            }
              <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <span className="eyebrow" style={{ color: "var(--accent)" }}>{c.tag}</span>
                <h3 className="display" style={{ fontSize: 22, margin: 0, color: "var(--white)" }}>{c.title}</h3>
                <span style={{ marginTop: "auto", fontSize: 12, color: "rgba(255,255,255,.5)" }}>{c.read}</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

// ── Final CTA band ─────────────────────────────────────────────────────────
function CtaBand() {
  return (
    <section data-component="CtaBand" id="contact" data-screen-label="07 CTA" style={{ background: "var(--accent)", paddingBlock: 120, position: "relative" }} className="chev-top">
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(48px, 6.5vw, 104px)", margin: 0, color: "var(--accent-ink)" }}>
          Ready to <span style={{ color: "var(--ink)" }}>power up?</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <p style={{ color: "rgba(255,255,255,.9)", fontSize: 17, lineHeight: 1.5, margin: 0 }}>
            Tell us about your business. We'll come back with a one-page teardown of your current site
            and three things we'd fix first — free, no pitch deck.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a className="btn btn-dark" href="#">Charge ahead →</a>
            <a className="btn" href="tel:3097414599" style={{ background: "transparent", color: "var(--accent-ink)", border: "2px solid rgba(255,255,255,.4)", padding: "14px 24px" }}>
              <Voltage size={16} /> (309) 741-4599
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer data-screen-label="08 Footer" style={{ background: "var(--ink)", color: "var(--white)", paddingBlock: 80 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <img
                src="assets/toughjobs-logo-static.png"
                alt="Toughjobs logo"
                style={{ display: "block", height: 46 }} />
              
              <span style={{
                fontFamily: '"Archivo Black",sans-serif', fontSize: 22, textTransform: "uppercase"
              }}>
                Tough<span style={{ color: "var(--accent)" }}>jobs</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.6, maxWidth: 300 }}>Digital marketing built for HVAC, Plumbers, Electricians, Masons, Roofing contractors, Janitorial, Carpet Cleaning, and more all across Northern California.

            </p>
          </div>
          {[
          { h: "Services", l: ["Websites", "SEO", "Paid media", "Branding", "Truck wraps"] },
          { h: "Company", l: ["About", "Work", "Insights", "Careers", "Contact"] },
          { h: "Visit", l: ["416 Main St", "Peoria, IL 61602", "(309) 741-4599", "hello@toughjobs.com"] }].
          map((col) =>
          <div key={col.h}>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>{col.h}</span>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map((item) =>
              <li key={item}>
                    <a href="#" style={{ color: "rgba(255,255,255,.78)", textDecoration: "none", fontSize: 14 }}>{item}</a>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
        <div className="hairline" style={{
          borderColor: "rgba(255,255,255,.1)", paddingTop: 32,
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap"
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)" }}>© 2026 Toughjobs Digital. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Sitemap", "Privacy", "Terms", "Legal"].map((l) =>
            <a key={l} href="#" style={{
              fontSize: 11, color: "rgba(255,255,255,.5)", textDecoration: "none",
              textTransform: "uppercase", letterSpacing: ".08em", fontFamily: '"Archivo",sans-serif', fontWeight: 700
            }}>{l}</a>
            )}
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, {
  Placeholder, Voltage, TJMark, Nav, Hero, TrustMarquee, Services,
  Wraps, WrapTile,
  CaseStory, Statement,
  ServiceArea, SweepTile, StampTile, PinTile, SlashTile,
  Insights, CtaBand, Footer
});