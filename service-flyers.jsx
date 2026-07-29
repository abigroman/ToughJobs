import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Flyers & Door Hangers | Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Flyers That Drive Action</h2>
          <p>Door hangers and flyers are the fastest way to reach a neighborhood. New service area? New promotion? Print and distribute. Your message in every mailbox within 48 hours.</p>
          <p style="margin-bottom: 32px;">Full-color, weather-resistant stock. We handle design, printing, and can coordinate distribution if you want.</p>
          
          <h3 style="font-size: 20px; margin: 32px 0 16px; color: #fff;">What's Included</h3>
          <ul>
            <li>Custom design (8.5" x 11" or die-cut door hanger)</li>
            <li>Full-color front and back printing</li>
            <li>Weather-resistant cardstock</li>
            <li>Bulk printing ready to distribute</li>
            <li>Optional: Perforation for coupons or tear-off contact info</li>
            <li>Turnaround: 5–7 business days</li>
          </ul>
          
          <a href="../index.html#contact" class="btn">Order Flyers</a>
        </div>
        
        <div style="background: rgba(200,38,42,.08); padding: 40px; text-align: center;">
          <p style="font-size: 32px; font-family: 'Archivo Black'; color: #C8262A; margin-bottom: 16px;">Fast Neighborhood Reach</p>
          <p style="font-size: 16px; line-height: 1.6; color: rgba(255,255,255,.85);">Get your offer in front of hundreds of qualified homeowners in your service area. Print today, distribute tomorrow.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>When to Use Flyers</h3>
      <ul style="font-size: 18px;">
        <li>Announcing a new service in a neighborhood</li>
        <li>Running a limited-time promotion</li>
        <li>Direct mail blitz to targeted areas</li>
        <li>Seasonal service reminders</li>
        <li>Quick, cost-effective lead generation</li>
      </ul>
      <a href="../index.html#contact" class="btn" style="margin-top: 32px;">Get a Quote</a>
    </div>
  </section>

  <footer>
    <div class="container">
      <p style="color: #0A0F1C;">&copy; 2026 Toughjobs Digital Marketing. 309-928-9080</p>
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
