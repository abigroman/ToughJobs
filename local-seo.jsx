import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs — Local SEO | Win Your Zip Code';
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
<title>Toughjobs — Local SEO | Win Your Zip Code</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="service-page.css" />
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#0A0F1C}
  body{font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;color:#0A0F1C;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden}
  :root{--ink:#0A0F1C;--navy:#002768;--navy-2:#001a4a;--red:#C8262A;--accent:#C8262A;--smoke:#5B6471;--white:#FFFFFF;--container:1240px}
  .logo-text span.tight{color:var(--red)}.logo-text span.light{color:var(--white)}
  header
  header.scrolled
  header a.logo-link{display:flex;align-items:center;gap:1px;text-decoration:none;color:var(--white);animation:logoSlideIn .65s cubic-bezier(.22,.9,.3,1) .35s backwards}
  header img{height:auto;width:auto;max-height:70px;object-fit:contain;transition:all .3s ease}
  header.scrolled img{height:auto;width:auto;max-height:45px}
  header.scrolled
  nav
  nav.nav-links a
  nav.nav-links a.nav-link:hover{color:var(--red);border-bottom-color:var(--red)}
  .nav-phone:hover{color:var(--red)}
  header .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 26px;font-family:"Archivo",sans-serif;font-weight:800;letter-spacing:.06em;font-size:13px;text-transform:uppercase;text-decoration:none;background:var(--red);color:var(--white);border:0;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease;white-space:nowrap}
  header .btn:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink)}
  .nav-dropdown-toggle{display:inline-flex;align-items:center;gap:6px}
  header.scrolled
  .nav-dropdown.open
  .nav-dropdown-menu > div{display:flex;flex-direction:column;gap:10px}
  .nav-dropdown-item:hover{color:var(--red)}
  .nav-quote{background:var(--red);animation:navQuoteIn .65s cubic-bezier(.22,.9,.3,1) .35s backwards}
  to{opacity:1;transform:translateX(0)}}
  to{opacity:1;transform:translateX(0)}}
  @media(max-width:880px){nav}
  body{--accent2:#1F8A5B}
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body class="sp">
<main>
  <!-- HERO -->
  <section class="bg-dark hero">
    <div class="tex tex-grid"></div>
    <div class="container">
      <span class="eyebrow accent reveal">Own your service area</span>
      <h1 class="display reveal d1">Win the map pack.<br>Win your <span class="accent2c">zip code.</span></h1>
      <p class="lede reveal d2">Rank in the top 3 of Google's map for "plumber near me," "HVAC repair," and every service term your customers type. That's where the calls come from — and where we put you.</p>
      <div class="reveal d3"><a class="btn" href="contact.html">Book a free strategy call &rarr;</a></div>
      <div class="kpis"><div class="kpi reveal"><div class="num"><span style="font-size:.55em;vertical-align:top">Top </span><span data-count="3">0</span></div><div class="lbl">Map rankings capture most local clicks</div></div><div class="kpi reveal"><div class="num"><span data-count="5">0</span><span class="suf">–15×</span></div><div class="lbl">Typical return on local SEO spend</div></div><div class="kpi reveal"><div class="num"><span data-count="60">0</span><span class="suf"> days</span></div><div class="lbl">To real ranking gains</div></div></div>
    </div>
  </section>

  <!-- WORKFLOW -->
  <section class="bg-light">
    <div class="tex tex-dots-d"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">How it works</span>
        <h2 class="display">Beat the franchises in your backyard.</h2>
        <p class="lede">Hyper-local optimization, tracked every month.</p>
      </div>
      <div class="flow" style="--steps:4"><div class="step reveal d1"><div class="node">1</div><h4>Profile</h4><p>We dial in your Google Business Profile — the heart of local.</p></div><div class="step reveal d2"><div class="node">2</div><h4>Citations</h4><p>Consistent listings across the directories Google trusts.</p></div><div class="step reveal d3"><div class="node">3</div><h4>Reviews</h4><p>Systematic review generation that lifts ranking and trust.</p></div><div class="step reveal d4"><div class="node">4</div><h4>On-page</h4><p>Service-area pages tuned to rank for every town you serve.</p></div></div>
    </div>
  </section>

  <!-- EARN -->
  <section class="bg-navy">
    <div class="tex tex-dots"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">What you'll earn</span>
        <h2 class="display">The calls in your own backyard.</h2>
      </div>
      <div class="earn"><div class="card reveal d1"><div class="ic">01</div><h4>Map-pack dominance</h4><p>Top-3 placement captures the bulk of high-intent local clicks.</p></div><div class="card reveal d2"><div class="ic">02</div><h4>Beat national chains</h4><p>Hyper-local optimization outranks franchises in your own town.</p></div><div class="card reveal d3"><div class="ic">03</div><h4>Pays for itself fast</h4><p>Most clients see 5–15× return — recouped in just 2–4 booked jobs.</p></div></div>
    </div>
  </section>

  <!-- COMPARE -->
  <section class="bg-light">
    <div class="tex tex-dots-d"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">The cost comparison</span>
        <h2 class="display">DIY vs. agency vs. Toughjobs.</h2>
        <p class="lede">Local is won in the details.</p>
      </div>
      <div class="cmp-wrap reveal d1">
        <table class="cmp">
          <thead><tr><th></th><th>DIY</th><th>Typical Agency</th><th class="tj"><span class="tjhead">Toughjobs</span></th></tr></thead>
          <tbody><tr><td class="rowlbl">Monthly cost</td><td class="x">Your time</td><td>$1,500–4,000/mo</td><td class="tj">$3,200/mo</td></tr><tr><td class="rowlbl">GBP management</td><td class="x">Guesswork</td><td>Generic</td><td class="tj"><span class="yes">Specialty focus</span></td></tr><tr><td class="rowlbl">Review generation</td><td class="x">Ad hoc</td><td>Add-on</td><td class="tj"><span class="yes">Systematic</span></td></tr><tr><td class="rowlbl">Service-area pages</td><td class="x">No</td><td>Templated</td><td class="tj"><span class="yes">Per-town, optimized</span></td></tr><tr><td class="rowlbl">Reporting</td><td class="x">None</td><td>Vanity</td><td class="tj"><span class="yes">Rankings + calls</span></td></tr></tbody>
        </table>
      </div>
      <p class="cmp-note">Ranking in the top 3 of the map pack captures the lion's share of every local 'near me' search.</p>
    </div>
  </section>

  <!-- ROI -->
  <section class="bg-dark">
    <div class="edge-accent"></div>
    <div class="tex tex-grid"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow accent">Run your numbers</span>
        <h2 class="display">What owning the map is worth.</h2>
        <p class="lede muted">Drag the sliders. This is a directional estimate to start the conversation — your real plan comes from the strategy call.</p>
      </div>
      <div class="roi reveal d1">
        <div class="controls">
          <div class="field">
            <label>Monthly local searches in your area <span class="val" id="roi-driver-val"></span></label>
            <input type="range" id="roi-driver" min="200" max="8000" step="100" value="1800" />
          </div>
          <div class="field">
            <label>Average job value <span class="val" id="roi-job-val"></span></label>
            <input type="range" id="roi-job" min="100" max="5000" step="50" value="450" />
          </div>
          <div style="margin-top:30px;display:flex;gap:26px;flex-wrap:wrap">
            <div><div style="font-family:'Archivo Black',sans-serif;font-size:30px;color:var(--accent2)" id="roi-leads">+0</div><div style="font-size:12px;text-transform:uppercase;letter-spacing:.07em;font-weight:700;opacity:.7;margin-top:4px">Extra leads / mo</div></div>
            <div><div style="font-family:'Archivo Black',sans-serif;font-size:30px;color:var(--accent2)" id="roi-multiple">0×</div><div style="font-size:12px;text-transform:uppercase;letter-spacing:.07em;font-weight:700;opacity:.7;margin-top:4px">Return on spend</div></div>
          </div>
        </div>
        <div class="out">
          <div>
            <div class="big" id="roi-revenue">$0</div>
            <div class="reslbl">Estimated added revenue / month</div>
          </div>
          <div class="divline"></div>
          <div class="sub">Estimated Toughjobs investment: <strong id="roi-cost">$0</strong>/mo. Everything above that is profit you're leaving on the table today.</div>
          <div><a class="btn" href="contact.html" style="background:var(--ink)">Book my free strategy call &rarr;</a></div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="bg-light">
    <div class="tex tex-dots-d"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">Proof from the field</span>
        <h2 class="display">Shops like yours, winning.</h2>
      </div>
      <div class="tess"><div class="t reveal"><p class="q">&ldquo;Top three on the map for our whole county now. The phone does not stop.&rdquo;</p><div class="who"><div class="av">PS</div><div><div class="nm">Pat S.</div><div class="rl">Electrical, Moline IL</div></div></div></div><div class="t reveal"><p class="q">&ldquo;We beat the big franchise in our town on Google. Still can't believe it.&rdquo;</p><div class="who"><div class="av">ON</div><div><div class="nm">Omar N.</div><div class="rl">HVAC, Davenport IA</div></div></div></div></div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-accent2 ctaband">
    <div class="tex tex-grid"></div>
    <div class="container">
      <h2 class="display reveal">Claim your map pack.</h2>
      <p class="reveal d1">Book a free strategy call and we'll show you exactly where you rank in your service area today — and the path to the top three.</p>
      <div class="reveal d2"><a class="btn" href="contact.html">Book a free strategy call &rarr;</a></div>
    </div>
  </section>
</main>

<footer style="background:var(--ink);color:#fff;padding:48px 0;text-align:center">
  <div class="container" style="max-width:var(--container);margin:0 auto;padding:0 22px"><p style="margin:0;font-size:13px;color:rgba(255,255,255,.6);letter-spacing:.04em">&copy; 2026 Toughjobs &middot; Marketing for the Trades &middot; 309-928-9080</p></div>
</footer>

<script>
  var header=document.querySelector('header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
  var navDropdown=document.querySelector('.nav-dropdown');
  if(navDropdown){
    var toggle=navDropdown.querySelector('.nav-dropdown-toggle');
    var menu=navDropdown.querySelector('.nav-dropdown-menu');
    var tm;
    function open(){clearTimeout(tm);navDropdown.classList.add('open');}
    function close(){tm=setTimeout(function(){navDropdown.classList.remove('open');},200);}
    toggle.addEventListener('mouseenter',function(e){e.preventDefault();open();});
    navDropdown.addEventListener('mouseenter',open);
    navDropdown.addEventListener('mouseleave',close);
    if(menu){menu.addEventListener('mouseenter',open);menu.addEventListener('mouseleave',close);}
  }
</script>
<script>window.SERVICE_DATA={"roi":{"liftPct":0.045,"closeRate":0.3,"ourCost":1200,"driverSuffix":""}};</script>
<script src="trade-data.js"></script>
<script src="service-page.js"></script>
<script src="back-cta.js"></script>
<script src="flying-tools.js"></script>
<script src="inject-header.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
