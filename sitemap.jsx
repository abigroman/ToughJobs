import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Sitemap — Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Sitemap — Toughjobs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Archivo+Black&display=swap" rel="stylesheet" />
  <style>
    :root {
      --accent: #C8262A;
      --white: #FFFFFF;
      --ink: #0A0F1C;
      --navy: #002768;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "Archivo", sans-serif;
      background: var(--white);
      color: var(--ink);
      line-height: 1.6;
    }
    
    header h1 {
      font-family: "Archivo Black", sans-serif;
      font-size: 48px;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }
    
    header p {
      font-size: 16px;
      opacity: 0.9;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    main {
      padding: 80px 0;
    }
    
    .section {
      margin-bottom: 64px;
    }
    
    .section h2 {
      font-family: "Archivo Black", sans-serif;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin-bottom: 24px;
      color: var(--navy);
      border-bottom: 3px solid var(--accent);
      padding-bottom: 16px;
    }
    
    .link-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }
    
    .link-card {
      padding: 24px;
      background: #f8f8f8;
      border: 1px solid #e0e0e0;
      text-decoration: none;
      color: var(--ink);
      transition: all 0.2s ease;
      border-left: 4px solid var(--navy);
    }
    
    .link-card:hover {
      border-left-color: var(--accent);
      background: #f0f0f0;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .link-card h3 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--navy);
    }
    
    .link-card p {
      font-size: 13px;
      color: rgba(10, 15, 28, 0.7);
    }
    
    footer {
      background: var(--navy);
      color: var(--white);
      text-align: center;
      padding: 40px 0;
      margin-top: 80px;
      font-size: 13px;
    }
  </style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>
  <main>
    <div class="container">
      <!-- Main Pages -->
      <section class="section">
        <h2>Main Pages</h2>
        <div class="link-grid">
          <a href="index.html" class="link-card">
            <h3>Home</h3>
            <p>Homepage — Services, wraps, locations, insights</p>
          </a>
          <a href="services.html" class="link-card">
            <h3>Services</h3>
            <p>Core services — Websites, SEO, Paid Ads, Branding, Wraps</p>
          </a>
          <a href="work.html" class="link-card">
            <h3>Work</h3>
            <p>Case studies and portfolio examples</p>
          </a>
          <a href="about.html" class="link-card">
            <h3>About</h3>
            <p>Company story and team</p>
          </a>
          <a href="contact.html" class="link-card">
            <h3>Contact</h3>
            <p>Get in touch — form, location, map</p>
          </a>
        </div>
      </section>

      <!-- Trade Services -->
      <section class="section">
        <h2>Trade Services</h2>
        <div class="link-grid">
          <a href="trade-hvac.html" class="link-card">
            <h3>HVAC</h3>
            <p>Heating, ventilation, air conditioning</p>
          </a>
          <a href="trade-plumbing.html" class="link-card">
            <h3>Plumbing</h3>
            <p>Residential and commercial plumbing</p>
          </a>
          <a href="trade-electricians.html" class="link-card">
            <h3>Electrical</h3>
            <p>Electrical installation and repair</p>
          </a>
          <a href="trade-roofing.html" class="link-card">
            <h3>Roofing</h3>
            <p>Roof installation, repair, maintenance</p>
          </a>
          <a href="trade-masonry.html" class="link-card">
            <h3>Masonry</h3>
            <p>Brick, stone, concrete work</p>
          </a>
          <a href="trade-painters.html" class="link-card">
            <h3>Painting</h3>
            <p>Interior and exterior painting</p>
          </a>
          <a href="trade-framing-drywall.html" class="link-card">
            <h3>Framing & Drywall</h3>
            <p>Frame construction and drywall finishing</p>
          </a>
          <a href="trade-general-contractors.html" class="link-card">
            <h3>General Contractors</h3>
            <p>General construction and remodeling</p>
          </a>
          <a href="trade-landscaping.html" class="link-card">
            <h3>Landscaping</h3>
            <p>Landscape design and maintenance</p>
          </a>
          <a href="trade-concrete-paving.html" class="link-card">
            <h3>Concrete & Paving</h3>
            <p>Concrete and asphalt work</p>
          </a>
          <a href="trade-decks-patios.html" class="link-card">
            <h3>Decks & Patios</h3>
            <p>Outdoor deck and patio construction</p>
          </a>
          <a href="trade-fencing.html" class="link-card">
            <h3>Fencing</h3>
            <p>Fence installation and repair</p>
          </a>
          <a href="trade-janitorial.html" class="link-card">
            <h3>Janitorial</h3>
            <p>Cleaning and janitorial services</p>
          </a>
          <a href="trade-carpet-cleaning.html" class="link-card">
            <h3>Carpet Cleaning</h3>
            <p>Professional carpet and upholstery cleaning</p>
          </a>
          <a href="trade-pressure-washing.html" class="link-card">
            <h3>Pressure Washing</h3>
            <p>Commercial and residential pressure washing</p>
          </a>
          <a href="trade-pest-control.html" class="link-card">
            <h3>Pest Control</h3>
            <p>Pest management and prevention</p>
          </a>
          <a href="trade-tree-service.html" class="link-card">
            <h3>Tree Service</h3>
            <p>Tree trimming, removal, stump grinding</p>
          </a>
          <a href="trade-junk-removal.html" class="link-card">
            <h3>Junk Removal</h3>
            <p>Junk hauling and debris removal</p>
          </a>
          <a href="trade-restoration.html" class="link-card">
            <h3>Restoration</h3>
            <p>Water damage and fire restoration</p>
          </a>
          <a href="trade-locksmiths.html" class="link-card">
            <h3>Locksmiths</h3>
            <p>Locksmith and security services</p>
          </a>
          <a href="trade-excavation.html" class="link-card">
            <h3>Excavation</h3>
            <p>Excavation and earthwork services</p>
          </a>
          <a href="trade-auto-repair.html" class="link-card">
            <h3>Auto Repair</h3>
            <p>Vehicle repair and maintenance</p>
          </a>
          <a href="trade-auto-detailing.html" class="link-card">
            <h3>Auto Detailing</h3>
            <p>Professional auto detailing services</p>
          </a>
          <a href="trade-towing.html" class="link-card">
            <h3>Towing</h3>
            <p>Towing and roadside assistance</p>
          </a>
          <a href="trade-appliance-repair.html" class="link-card">
            <h3>Appliance Repair</h3>
            <p>Appliance repair and maintenance</p>
          </a>
          <a href="trade-pools.html" class="link-card">
            <h3>Pools</h3>
            <p>Pool installation, maintenance, repair</p>
          </a>
          <a href="trade-solar.html" class="link-card">
            <h3>Solar</h3>
            <p>Solar panel installation and services</p>
          </a>
        </div>
      </section>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 Toughjobs Digital. All rights reserved.</p>
    </div>
  </footer>
<script src="sticky-cta.js"></script>
<script src="inject-header.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
