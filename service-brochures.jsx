import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Tri-Fold Brochures | Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Brochures That Sell</h2>
          <p>A well-designed tri-fold brochure is the perfect tool for direct mail, job site handouts, or customer presentations. Front and back panels for key info, inside spreads for detailed services.</p>
          <p style="margin-bottom: 32px;">We design, print, and handle folding. Ready to mail or hand out the day they're done.</p>
          
          <h3 style="font-size: 20px; margin: 32px 0 16px; color: #fff;">What's Included</h3>
          <ul>
            <li>Custom 11" x 8.5" tri-fold design</li>
            <li>Full-color printing, front and back</li>
            <li>Professional folding and finishing</li>
            <li>Delivered ready to mail or hand out</li>
            <li>Turnaround: 5–10 business days</li>
          </ul>
          
          <a href="../index.html#contact" class="btn">Design a Brochure</a>
        </div>
        
        <div>
          <img src="assets/taco-truck-menu-1.webp" alt="Tri-fold brochure example" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>Perfect For</h3>
      <ul style="font-size: 18px;">
        <li>Direct mail campaigns to neighborhood</li>
        <li>Job site hand-outs</li>
        <li>Waiting room literature</li>
        <li>Trade shows and events</li>
        <li>Detailed service overviews</li>
      </ul>
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
