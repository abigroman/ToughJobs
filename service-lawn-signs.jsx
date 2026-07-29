import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Lawn Signs | Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section class="hero">
    <div class="container" style="grid-column: 1 / -1;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
        <div>
          <h2 style="font-size: 28px; color: #fff; margin-bottom: 20px;">Signs That Get Noticed</h2>
          <p>Put your sign on every job site. Neighbors see your name, your phone number, your work—over and over. Free, localized advertising that actually works.</p>
          <p style="margin-bottom: 32px;">Bold design, readable from 50+ feet, weather-resistant material. We design, print, and deliver ready to stake.</p>
          
          <h3 style="font-size: 20px; margin: 32px 0 16px; color: #fff;">What's Included</h3>
          <ul>
            <li>Custom design (18" x 24" or 24" x 36")</li>
            <li>Full-color printing on weather-resistant material</li>
            <li>Stakes included for easy installation</li>
            <li>Readable from 50+ feet</li>
            <li>Turnaround: 5–7 business days</li>
          </ul>
          
          <a href="../index.html#contact" class="btn">Order Lawn Signs</a>
        </div>
        
        <div>
          <img src="assets/lawn-signs-examples.webp" alt="Lawn sign examples" style="max-width: 100%; height: auto;" />
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h3>Why Job Site Signs Work</h3>
      <p style="font-size: 18px; line-height: 1.8; color: rgba(255,255,255,.85); margin-bottom: 24px;">Every job you work on is a billboard. Your sign sits on the property for weeks while neighbors drive by—over and over. No cost, no follow-up needed. Just visibility and brand awareness.</p>
      <a href="../index.html#contact" class="btn">Get a Quote</a>
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
