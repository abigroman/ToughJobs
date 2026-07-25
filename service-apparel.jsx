import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Clothing & Apparel | Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Branded Apparel</h2>
          <p>Polo shirts, hoodies, hats, jackets—your crew wears your brand every single day. Consistent visual identity on job sites, customer meetings, and everywhere in between.</p>
          <p style="margin-bottom: 32px;">Quality embroidery and screen printing. Professional-looking apparel that makes your team look like a real business.</p>
          
          <h3 style="font-size: 20px; margin: 32px 0 16px; color: #fff;">What We Offer</h3>
          <ul>
            <li>Polos, t-shirts, hoodies, jackets</li>
            <li>Embroidery or screen printing</li>
            <li>Full-color logo options</li>
            <li>Bulk orders for entire teams</li>
            <li>Multiple sizing and color options</li>
            <li>Turnaround: 10–14 business days</li>
          </ul>
          
          <a href="../index.html#contact" class="btn">Order Branded Apparel</a>
        </div>
        
        <div>
          <img src="assets/clothing-apparel.webp" alt="Branded apparel examples" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>Why Branded Apparel Matters</h3>
      <p style="font-size: 18px; line-height: 1.8; color: rgba(255,255,255,.85); margin-bottom: 24px;">When your crew shows up in branded shirts, you look like a legitimate operation—not a one-person gig. Consistency builds trust. Plus, customers remember the name on the shirt.</p>
      <a href="../index.html#contact" class="btn">Get a Quote</a>
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
