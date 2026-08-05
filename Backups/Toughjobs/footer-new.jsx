// ── Premium Footer with Video Background ──────────────────────────────────────

function FooterNew() {
  const trades = [
    "HVAC", "PLUMBING", "ELECTRICAL", "MASONRY", "ROOFING", "JANITORIAL",
    "CARPET CLEANING", "PAINTING", "CONCRETE", "LANDSCAPING", "WELDING", "EXCAVATION"
  ];

  const footerLinks = {
    company: [
      { label: "About", href: "about.html" },
      { label: "Services", href: "services.html" },
      { label: "Partnerships", href: "partnerships.html" },
      { label: "Contact", href: "contact.html" }
    ],
    resources: [
      { label: "Free Tools", href: "intake-landing.html" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" }
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Sitemap", href: "#" },
      { label: "Citations", href: "#" }
    ]
  };

  return (
    <footer style={{
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--ink) 0%, var(--navy) 100%)",
      color: "var(--white)",
      borderTop: "3px solid var(--accent)"
    }}>
      <style>{`
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .footer-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          z-index: 0;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }

        .footer-ticker {
          display: flex;
          gap: 0;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,.1);
          border-bottom: 1px solid rgba(255,255,255,.1);
          background: rgba(0,0,0,.2);
          padding: 24px 0;
          margin-bottom: 64px;
        }

        .ticker-track {
          display: flex;
          gap: 60px;
          white-space: nowrap;
          animation: tickerScroll 60s linear infinite;
        }

        .ticker-item {
          font-family: "Archivo Black", sans-serif;
          text-transform: uppercase;
          font-size: 16px;
          letter-spacing: .02em;
          color: rgba(200,38,42,.8);
          font-weight: 900;
          flex-shrink: 0;
        }

        .ticker-item::after {
          content: "●";
          margin-left: 60px;
          color: rgba(255,255,255,.3);
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2.5fr 1.2fr 1.2fr 1.2fr;
          gap: 48px;
          padding: 64px 0;
          margin-bottom: 48px;
        }

        .footer-section h3 {
          font-family: "Archivo Black", sans-serif;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: -.01em;
          margin: 0 0 28px;
          font-weight: 900;
        }

        .footer-section h4 {
          font-family: "Archivo", sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          font-weight: 800;
          color: var(--accent);
          margin: 0 0 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-section a {
          color: rgba(255,255,255,.75);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all .2s ease;
          display: inline-block;
        }

        .footer-section a:hover {
          color: var(--accent);
          transform: translateX(4px);
        }

        .footer-brand p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,.75);
          margin: 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,.1);
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-bottom-copy {
          font-size: 13px;
          color: rgba(255,255,255,.55);
        }

        .footer-contact {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .footer-phone {
          text-align: right;
        }

        .footer-phone-label {
          font-family: "Archivo", sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 700;
          color: rgba(255,255,255,.6);
          margin-bottom: 4px;
        }

        .footer-phone-number {
          font-family: "Archivo Black", sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: var(--accent);
          text-decoration: none;
          letter-spacing: -.01em;
          transition: all .2s ease;
        }

        .footer-phone-number:hover {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Video background */}
      <video
        className="footer-video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="uploads/audio-visualizer.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(10,15,28,.85) 0%, rgba(0,39,104,.8) 100%)",
        zIndex: 0
      }} />

      <div className="footer-content">
        <div className="container">
          {/* Trade ticker */}
          <div className="footer-ticker">
            <div className="ticker-track">
              {[...trades, ...trades, ...trades].map((trade, i) => (
                <span key={i} className="ticker-item">
                  {trade}
                </span>
              ))}
            </div>
          </div>

          {/* Main footer grid */}
          <div className="footer-main">
            {/* Brand column */}
            <div className="footer-section footer-brand">
              <h3>TOUGHJOBS</h3>
              <p>
                Marketing & branding solutions built for the trades. We help service businesses get found, win jobs, and grow their revenue through integrated digital strategies.
              </p>
            </div>

            {/* Company links */}
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                {footerLinks.resources.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Citations */}
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-copy">
              © 2026 Toughjobs Digital Marketing · 140 Oakmoor Dr, East Peoria, IL 61611
            </div>
            <div className="footer-contact">
              <div className="footer-phone">
                <div className="footer-phone-label">Call us</div>
                <a href="tel:3092339004" className="footer-phone-number">
                  (309) 233-9004
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
