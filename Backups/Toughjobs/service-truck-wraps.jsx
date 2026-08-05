import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Truck & Cargo Van Wraps | Toughjobs';
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
<title>Truck & Cargo Van Wraps | Toughjobs</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: "Archivo", sans-serif; color: #fff; background: url('assets/blueprint-background.webp') fixed center/cover no-repeat; background-color: #001a4a; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
  :root{
    --ink:#0A0F1C; --navy:#002768; --navy-2:#001a4a; --red:#C8262A; --red-2:#A90100;
    --accent:#C8262A; --accent-ink:#FFFFFF; --white:#FFFFFF; --smoke:#5B6471;
    --nav-height:120px; --container:1240px;
  }
  
  /* Navigation */
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-section {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: #fff;
  }
  .logo-section img {
    height: 60px;
    width: 90px;
  }
  .logo-text span:first-child { color: #C8262A; }
  .logo-text span:last-child { color: #fff; }
  
  nav { display: flex; gap: 32px; }
  nav a {
    font-family: "Archivo", sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    padding: 8px 0;
    border-bottom: 2px solid transparent;
    transition: all 0.15s ease;
  }
  nav a:hover {
    border-bottom-color: #C8262A;
    color: #C8262A;
  }
  .nav-right a {
    font-family: "Archivo", sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.04em;
    color: #fff;
    text-decoration: none;
  }
  .btn-quote {
    background: #000000;
    color: #fff;
    padding: 12px 24px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
  }
  .btn-quote:hover { filter: brightness(1.1); }
  
  h1 { font-family: "Archivo Black"; font-size: clamp(48px, 6vw, 72px); text-transform: uppercase; margin-bottom: 20px; color: #C8262A; text-shadow: 0 4px 12px rgba(200,38,42,.4); }
  .hero { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; padding: 80px 0; }
  .hero img { max-width: 100%; height: auto; display: block; }
  .hero-text h2 { font-size: 28px; margin-bottom: 20px; color: #fff; }
  .hero-text p { font-size: 16px; line-height: 1.6; color: rgba(255,255,255,.85); margin-bottom: 24px; }
  .btn { display: inline-block; background: #C8262A; color: #fff; padding: 16px 32px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; text-decoration: none; border: none; cursor: pointer; transition: filter .2s; }
  .btn:hover { filter: brightness(0.9); }
  .section { padding: 80px 0; border-top: 1px solid rgba(200,38,42,.15); }
  .section h3 { font-size: 32px; font-family: "Archivo Black"; text-transform: uppercase; margin-bottom: 32px; color: #C8262A; text-shadow: 0 2px 8px rgba(200,38,42,.3); }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin: 40px 0; }
  .stat { background: rgba(200,38,42,.1); padding: 24px; border: 1px solid rgba(200,38,42,.2); }
  .stat-number { font-size: 42px; font-weight: 900; color: #C8262A; }
  .stat-label { font-size: 14px; text-transform: uppercase; letter-spacing: 0.04em; opacity: .8; margin-top: 8px; }
  ul { list-style: none; margin: 20px 0; }
  ul li { font-size: 16px; line-height: 1.8; color: rgba(255,255,255,.85); padding-left: 24px; position: relative; margin-bottom: 12px; }
  ul li:before { content: "→"; position: absolute; left: 0; color: #C8262A; }
  footer { background: #C8262A; padding: 40px 0; margin-top: 80px; text-align: center; }
  
  .go-back-btn {
    display: inline-block;
    margin: 4px 0 0;
    background: #C8262A;
    color: white;
    border: none;
    padding: 12px 20px;
    font-family: "Archivo", sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 999;
    transition: filter 0.2s ease;
    border-radius: 4px;
  }
  .go-back-btn:hover {
    filter: brightness(0.9);
  }

  /* Translucent content panels for contrast against the blueprint backdrop */
  .hero > .container,
  .section > .container {
    background: rgba(8, 13, 26, 0.78);
    border: 1px solid rgba(200,38,42,0.22);
    border-radius: 10px;
    padding: 56px;
    box-shadow: 0 24px 60px rgba(0,0,0,0.45);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
  .section { border-top: none; }
  .stat {
    background: rgba(200,38,42,0.16);
    border: 1px solid rgba(200,38,42,0.4);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
  }
  .stat-number { text-shadow: 0 2px 10px rgba(200,38,42,0.45); }
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>
  <div id="nav-root"></div>
  <div style="display:flex; justify-content:flex-end; margin-top:8px; position:sticky; top:70px; z-index:30;">
    <button class="go-back-btn" onclick="window.location.href='jobs.html#branding'">← Go Back</button>
  </div>

  <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h1 style="margin-top: 0;">Truck & Cargo Van Wraps</h1>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Why Vehicle Wraps Win</h2>
          <p>A wrapped truck, trailer, or van gets seen by 40,000+ people every single day in a metro market. That's $0.002 per impression vs. $0.04 for PPC ads. The math wins.</p>
          <p style="margin-bottom: 32px;">We handle design, printing, and installation. You get a professional wrap that homeowners remember long enough to call.</p>
          
          <div class="stats">
            <div class="stat">
              <div class="stat-number">40K+</div>
              <div class="stat-label">Daily Impressions</div>
            </div>
            <div class="stat">
              <div class="stat-number">3–7 yr</div>
              <div class="stat-label">Vinyl Warranty</div>
            </div>
            <div class="stat">
              <div class="stat-number">$0.002</div>
              <div class="stat-label">Cost Per Impression</div>
            </div>
          </div>
          
          <a href="contact.html" class="btn">Get a Wrap Quote</a>
        </div>
        
        <div>
          <img src="assets/wrap-truck-erik.png" alt="Erik Electrical truck wrap" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>What We Do</h3>
      <ul>
        <li>Custom design that matches your branding</li>
        <li>High-quality vinyl that lasts 3–7 years</li>
        <li>Professional installation on trucks, trailers, vans</li>
        <li>Warranty on materials and workmanship</li>
        <li>Fast turnaround: Design approval → installed in 48 hours</li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>The Bottom Line</h3>
      <p style="font-size: 18px; line-height: 1.8; color: rgba(255,255,255,.85); margin-bottom: 24px;">Your trucks are already on the road. Make them work for you. A wrap is a one-time investment that keeps generating impressions 365 days a year.</p>
      <a href="contact.html" class="btn">Request a Quote</a>
    </div>
  </section>

  <footer>
    <div class="container">
      <p style="color: #0A0F1C;">&copy; 2026 Toughjobs Digital Marketing. (309) 233-9004</p>
    </div>
  </footer>
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<script src="trade-data.js"></script>
<script type="text/babel" src="components.jsx"></script>
<script type="text/babel">
  ReactDOM.createRoot(document.getElementById('nav-root')).render(<Nav />);
</script>
<script src="sticky-cta.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
