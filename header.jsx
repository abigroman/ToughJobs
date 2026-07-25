// header.jsx — Reusable header component for all pages

function Header({ activePage = "" }) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };

    const handleMouseLeave = () => {
      setTimeout(() => setShowDropdown(false), 100);
    };

    dropdown.addEventListener('mouseenter', handleMouseEnter);
    dropdown.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdown.removeEventListener('mouseenter', handleMouseEnter);
      dropdown.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const isServicePage = activePage === 'services' || activePage === 'website-detail' || activePage === 'seo-detail' || activePage === 'paid-detail';

  return (
    <header>
      <div className="nav-container">
        <a href="index.html" className="logo-link">
          <img src="assets/toughjobs-monogram-logo.webp" alt="Toughjobs" width="150" height="100" />
          <span className="logo-text"><span className="tight">TOUGH</span><span className="light">JOBS</span></span>
        </a>
        <nav className="nav-links">
          <div 
            className="nav-dropdown"
            ref={dropdownRef}
          >
            <a href="#" className="nav-link nav-dropdown-toggle">TRADES</a>
            <div className="nav-dropdown-menu" style={{ display: showDropdown ? 'grid' : 'none' }}>
              {/* Building & Construction */}
              <div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>Building &amp; Construction</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="trade-roofing.html" className="nav-dropdown-item">Roofing Contractors</a>
                  <a href="trade-general-contractors.html" className="nav-dropdown-item">General Contractors</a>
                  <a href="trade-concrete-paving.html" className="nav-dropdown-item">Concrete &amp; Asphalt Pavers</a>
                  <a href="trade-masonry.html" className="nav-dropdown-item">Masonry &amp; Bricklaying</a>
                  <a href="trade-framing-drywall.html" className="nav-dropdown-item">Framing &amp; Drywall</a>
                </div>
              </div>
              {/* Mechanical & Essential */}
              <div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>Mechanical &amp; Essential</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="trade-hvac.html" className="nav-dropdown-item">HVAC Technicians</a>
                  <a href="trade-plumbing.html" className="nav-dropdown-item">Plumbers</a>
                  <a href="trade-electricians.html" className="nav-dropdown-item">Electricians</a>
                  <a href="trade-locksmiths.html" className="nav-dropdown-item">Locksmiths</a>
                  <a href="trade-solar.html" className="nav-dropdown-item">Solar Panel Installers</a>
                </div>
              </div>
              {/* Finishing & Maintenance */}
              <div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>Finishing &amp; Maintenance</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="trade-painters.html" className="nav-dropdown-item">Painters</a>
                  <a href="trade-carpet-cleaning.html" className="nav-dropdown-item">Carpet &amp; Upholstery Cleaners</a>
                  <a href="trade-pressure-washing.html" className="nav-dropdown-item">Pressure Washing &amp; Window Cleaning</a>
                  <a href="trade-janitorial.html" className="nav-dropdown-item">Janitorial &amp; Commercial Cleaning</a>
                  <a href="trade-restoration.html" className="nav-dropdown-item">Restoration (Water/Fire/Mold)</a>
                  <a href="trade-junk-removal.html" className="nav-dropdown-item">Junk Removal</a>
                </div>
              </div>
              {/* General Services & Maintenance */}
              <div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>General Services &amp; Maintenance</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="trade-handyman.html" className="nav-dropdown-item">Handyman Services</a>
                  <a href="trade-appliance-repair.html" className="nav-dropdown-item">Appliance Repair</a>
                </div>
              </div>
              {/* Outdoor & Landscaping */}
              <div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,.15)' }}>Outdoor &amp; Landscaping</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="trade-landscaping.html" className="nav-dropdown-item">Landscaping &amp; Lawn Care</a>
                  <a href="trade-tree-service.html" className="nav-dropdown-item">Tree Removal &amp; Arborists</a>
                  <a href="trade-pest-control.html" className="nav-dropdown-item">Pest Control</a>
                  <a href="trade-pools.html" className="nav-dropdown-item">Pool Construction &amp; Maintenance</a>
                </div>
              </div>
            </div>
          </div>
          <a href="about.html" className={`nav-link ${activePage === 'about' ? 'active' : ''}`}>ABOUT</a>
          <a href="services.html" className={`nav-link ${activePage === 'services' ? 'active' : ''}`}>SERVICES</a>
          <a href="partnerships.html" className={`nav-link ${activePage === 'partnerships' ? 'active' : ''}`}>PARTNERSHIPS</a>
          <a href="intake-landing.html" className={`nav-link ${activePage === 'free-tools' ? 'active' : ''}`}>FREE TOOLS</a>
          <a href="contact.html" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>CONTACT</a>
        </nav>
        <div className="nav-right">
          <a href="tel:3092339004" className="nav-phone">(309) 233-9004</a>
          <a href="contact.html" className="btn">REQUEST A QUOTE</a>
        </div>
      </div>
      {isServicePage && (
        <div style={{ 
          position: 'absolute', 
          top: '120px', 
          right: '40px',
          zIndex: 30 
        }}>
          <a 
            href="services.html"
            aria-label="Go back to the Services page"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--accent)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '24px',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--red-2)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--accent)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ←
          </a>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Header });
