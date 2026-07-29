import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Stickers & Decals | Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Stickers & Decals That Stick</h2>
          <p>Window stickers, toolbox decals, bumper stickers, service reminder decals—cheap, easy to produce, and they last. Hand them out at job sites, leave them with customers, stick them on everything.</p>
          <p style="margin-bottom: 32px;">We design, print on weather-resistant material, and ship them ready to go. Low cost. High impact.</p>
          
          <h3 style="font-size: 20px; margin: 32px 0 16px; color: #fff;">What We Offer</h3>
          <ul>
            <li>Custom sizes and shapes</li>
            <li>Full-color printing</li>
            <li>Weather-resistant vinyl material</li>
            <li>Die-cut or straight-edge options</li>
            <li>Bulk orders (100–1000+)</li>
            <li>Turnaround: 5–7 business days</li>
          </ul>
          
          <a href="../index.html#contact" class="btn">Order Stickers</a>
        </div>
        
        <div>
          <img src="assets/stickers-decals.webp" alt="Stickers and decals examples" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>Perfect For</h3>
      <ul style="font-size: 18px;">
        <li>Job site giveaways</li>
        <li>Customer vehicle stickers</li>
        <li>Toolbox decals</li>
        <li>Service reminder labels</li>
        <li>Team hard hat stickers</li>
        <li>Promotional handouts</li>
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
