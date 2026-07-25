import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Service Areas — Toughjobs | Trades Marketing in IL, IA &amp; the Quad Cities';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <!-- ── HERO ─────────────────────────────────────────────────────────────── -->
<section class="city-hero" style="padding-block:140px 80px; background: linear-gradient(90deg, rgba(10,15,28,.9) 0%, rgba(10,15,28,.3) 100%), url('assets/woman-mower.webp') right 80px/cover no-repeat; background-attachment: fixed;">
  <div class="container">
    <div class="crumb"><a href="#">Home</a> &nbsp;/&nbsp; Service Areas</div>
    <span class="eyebrow">Illinois · Iowa · The Quad Cities &amp; Tri-State</span>
    <h1 class="display">Marketing built for <span style="color:var(--accent)">your market.</span></h1>
    <p class="lede">We don't run cookie-cutter campaigns. Toughjobs is headquartered in East Peoria and knows these markets first-hand — from Central Illinois to the Mississippi river towns. Pick your city to see how we help local trades get found and win jobs.</p>
  </div>
</section>

<!-- ── AREA CARDS ───────────────────────────────────────────────────── -->
<section class="panel-dark">
  <div class="container">
    <div class="area-grid">
      <a class="area-card" href="#">
        <div class="top">
          <div class="state">Illinois · Home Base</div>
          <div class="city">Peoria</div>
        </div>
        <div class="body">
          <span class="tag">Tri-County</span>
          <p>Our backyard. Central Illinois' largest metro — older housing, steady repair demand, and a skeptical market that rewards a real local reputation.</p>
          <span class="go">View Peoria &rarr;</span>
        </div>
      </a>

      <a class="area-card" href="#">
        <div class="top">
          <div class="state">Iowa · Quad Cities</div>
          <div class="city">Davenport</div>
        </div>
        <div class="body">
          <span class="tag">2 States, 4 Cities</span>
          <p>The largest of the Quad Cities. A two-state metro where open riverfront drives restoration, waterproofing and emergency-service demand.</p>
          <span class="go">View Davenport &rarr;</span>
        </div>
      </a>

      <a class="area-card" href="#">
        <div class="top">
          <div class="state">Iowa · Tri-State</div>
          <div class="city">Dubuque</div>
        </div>
        <div class="body">
          <span class="tag">IA · IL · WI</span>
          <p>One of Iowa's oldest cities. Historic brick &amp; stone homes and hard winters keep masonry, roofing and HVAC trades busy across three states.</p>
          <span class="go">View Dubuque &rarr;</span>
        </div>
      </a>
    </div>

    <p style="margin-top:40px; font-size:15px; color:rgba(255,255,255,.6); max-width:70ch;">
      Not on the list? We work with trades businesses throughout Illinois, Iowa, Missouri, Wisconsin and Indiana. <a href="#" style="color:var(--accent); text-decoration:none; font-weight:600;">Tell us where you operate</a> and we'll build a plan for your market.
    </p>
  </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────────────── -->
<section class="cta-band">
  <div class="container">
    <span class="eyebrow" style="color:rgba(255,255,255,.85)">Wherever you work</span>
    <h2>Let's get your phone <span class="ink">ringing.</span></h2>
    <p>Free, no-pressure teardown of your website, Google presence, and local competition — built around the market you actually serve.</p>
    <div class="hero-actions">
      <a class="btn" href="#">Request a free teardown</a>
      <a class="btn btn-ghost" href="tel:3092339004">Call (309) 233-9004</a>
    </div>
  </div>
</section>

<!-- ── FOOTER ───────────────────────────────────────────────────── -->
<footer class="city-footer">
  <div class="container">
    <div class="row">
      <a href="#"><img src="assets/toughjobs-monogram-logo.webp" alt="Toughjobs" /></a>
      <div class="links">
        <a href="#">Peoria, IL</a>
        <a href="#">Davenport, IA</a>
        <a href="#">Dubuque, IA</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
    <div class="copy">&copy; 2026 Toughjobs Digital Marketing · 140 Oakmoor Dr, East Peoria, IL 61611 · Marketing built for the trades.</div>
  </div>
</footer>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
