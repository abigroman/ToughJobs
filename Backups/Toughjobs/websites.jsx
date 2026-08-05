import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs — Websites | A Site That Pays for Itself';
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
<title>Toughjobs — Websites | A Site That Pays for Itself</title>
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
  .nav-item{position:relative;display:flex;align-items:center}
  .has-mega > .link{display:inline-flex;align-items:center;gap:6px}
  .has-mega .caret{font-size:9px;opacity:.75}
  .mega{position:fixed;top:132px;left:50%;transform:translateX(-50%);width:min(900px,calc(100vw - 40px));background:var(--ink);border:1px solid rgba(255,255,255,.15);border-top:3px solid var(--red);padding:32px;box-shadow:0 18px 48px rgba(0,0,0,.5);z-index:1000;display:grid;grid-template-columns:repeat(3,1fr);gap:26px 34px;opacity:0;visibility:hidden;transition:opacity .18s ease}
  header.scrolled .mega{top:76px}
  .has-mega.open .mega{opacity:1;visibility:visible}
  .mega .cat-name{font-family:"Archivo",sans-serif;font-weight:800;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--red);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.15)}
  .mega .mega-links{display:flex;flex-direction:column;gap:6px}
  .mega a.t{font-family:"Archivo",sans-serif;font-weight:600;font-size:13px;color:#fff;text-decoration:none;padding:4px 0;line-height:1.3;transition:color .15s ease}
  .mega a.t:hover{color:var(--red)}
  .nav-dropdown-toggle{display:inline-flex;align-items:center;gap:6px}
  header.scrolled
  .nav-dropdown.open
  .nav-dropdown-menu > div{display:flex;flex-direction:column;gap:10px}
  .nav-dropdown-item:hover{color:var(--red)}
  .nav-quote{background:var(--red);animation:navQuoteIn .65s cubic-bezier(.22,.9,.3,1) .35s backwards}
  to{opacity:1;transform:translateX(0)}}
  to{opacity:1;transform:translateX(0)}}
  @media(max-width:880px){nav.mega{display:none}}
  body{--accent2:#1F6FEB}
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body class="sp">
<main>
  <!-- HERO -->
  <section class="bg-dark hero">
    <div class="tex tex-grid"></div>
    <div class="container">
      <span class="eyebrow accent reveal">Websites that convert</span>
      <h1 class="display reveal d1">Your website should<br><span class="accent2c">book jobs</span> — not just exist.</h1>
      <p class="lede reveal d2">We build fast, mobile-first sites engineered to turn visitors into phone calls. You own the code, the data, and the domain — no rental fees, no proprietary lock-in.</p>
      <div class="reveal d3"><a class="btn" href="contact.html">Book a free strategy call &rarr;</a></div>
      <div class="kpis"><div class="kpi reveal"><div class="num"><span style="font-size:.55em;vertical-align:top"><</span><span data-count="2">0</span><span class="suf">s</span></div><div class="lbl">Load time on rural LTE</div></div><div class="kpi reveal"><div class="num"><span data-count="6">0</span><span class="suf">+</span></div><div class="lbl">Lead-capture points per site</div></div><div class="kpi reveal"><div class="num"><span data-count="4">0</span><span class="suf"> wk</span></div><div class="lbl">Typical build to launch</div></div></div>
    </div>
  </section>

  <!-- WORKFLOW -->
  <section class="bg-light">
    <div class="tex tex-dots-d"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">How it works</span>
        <h2 class="display">From handshake to live in four weeks.</h2>
        <p class="lede">A clear, fixed process — no mystery, no scope creep.</p>
      </div>
      <div class="flow" style="--steps:4"><div class="step reveal d1"><div class="node">1</div><h4>Discovery</h4><p>We map your services, service area, and the jobs you want more of.</p></div><div class="step reveal d2"><div class="node">2</div><h4>Design</h4><p>Mobile-first layouts built around the call button, not stock photos.</p></div><div class="step reveal d3"><div class="node">3</div><h4>Build</h4><p>Fast, clean code with local schema and lead forms wired in.</p></div><div class="step reveal d4"><div class="node">4</div><h4>Launch & Own</h4><p>You get full access — analytics, code, domain. It's yours.</p></div></div>
    </div>
  </section>

  <!-- EARN -->
  <section class="bg-navy">
    <div class="tex tex-dots"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">What you'll earn</span>
        <h2 class="display">A site that works while you're on the job.</h2>
      </div>
      <div class="earn"><div class="card reveal d1"><div class="ic">01</div><h4>More booked calls</h4><p>Phone number in 6+ spots and forms that actually convert mobile traffic.</p></div><div class="card reveal d2"><div class="ic">02</div><h4>Lower cost per lead</h4><p>A fast, optimized site cuts the ad spend needed to get the same calls.</p></div><div class="card reveal d3"><div class="ic">03</div><h4>Zero rental fees</h4><p>You own everything. No $200/mo platform tax forever like Wix or template mills.</p></div></div>
    </div>
  </section>

  <!-- COMPARE -->
  <section class="bg-light">
    <div class="tex tex-dots-d"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow">The cost comparison</span>
        <h2 class="display">DIY vs. agency vs. Toughjobs.</h2>
        <p class="lede">Where your money actually goes.</p>
      </div>
      <div class="cmp-wrap reveal d1">
        <table class="cmp">
          <thead><tr><th></th><th>DIY</th><th>Typical Agency</th><th class="tj"><span class="tjhead">Toughjobs</span></th></tr></thead>
          <tbody><tr><td class="rowlbl">Upfront cost</td><td class="x">$0–500</td><td>$5,000–15,000</td><td class="tj">Flat project fee</td></tr><tr><td class="rowlbl">Monthly fee</td><td class="x">$30–300/mo forever</td><td>$200–500/mo retainer</td><td class="tj">$0 — you host it</td></tr><tr><td class="rowlbl">You own the code</td><td class="x">No</td><td>Sometimes</td><td class="tj"><span class="yes">Always</span></td></tr><tr><td class="rowlbl">Built to convert</td><td class="x">No</td><td>Maybe</td><td class="tj"><span class="yes">Engineered for it</span></td></tr><tr><td class="rowlbl">Load speed</td><td class="x">Slow templates</td><td>Varies</td><td class="tj"><span class="yes"><2s guaranteed</span></td></tr></tbody>
        </table>
      </div>
      <p class="cmp-note">DIY builders feel cheap until you add years of monthly fees and lost leads from a slow, generic site.</p>
    </div>
  </section>

  <!-- ROI -->
  <section class="bg-dark">
    <div class="edge-accent"></div>
    <div class="tex tex-grid"></div>
    <div class="container">
      <div class="head reveal">
        <span class="eyebrow accent">Run your numbers</span>
        <h2 class="display">What a converting site is worth.</h2>
        <p class="lede muted">Drag the sliders. This is a directional estimate to start the conversation — your real plan comes from the strategy call.</p>
      </div>
      <div class="roi reveal d1">
        <div class="controls">
          <div class="field">
            <label>Monthly website visitors <span class="val" id="roi-driver-val"></span></label>
            <input type="range" id="roi-driver" min="100" max="5000" step="50" value="800" />
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
      <div class="tess"><div class="t reveal"><p class="q">&ldquo;New site went live and the phone started ringing the first week. It paid for itself in two jobs.&rdquo;</p><div class="who"><div class="av">MR</div><div><div class="nm">Mike R.</div><div class="rl">HVAC, Moline IL</div></div></div></div><div class="t reveal"><p class="q">&ldquo;I finally own my website. No more $250 a month to a company that never answered the phone.&rdquo;</p><div class="who"><div class="av">DK</div><div><div class="nm">Dana K.</div><div class="rl">Plumbing, Davenport IA</div></div></div></div></div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-accent2 ctaband">
    <div class="tex tex-grid"></div>
    <div class="container">
      <h2 class="display reveal">Let's build you a lead machine.</h2>
      <p class="reveal d1">Book a free strategy call and we'll show you exactly where your current site is losing jobs — and what it'll take to fix it.</p>
      <div class="reveal d2"><a class="btn" href="contact.html">Book a free strategy call &rarr;</a></div>
    </div>
  </section>
</main>

<footer style="background:var(--ink);color:#fff;padding:48px 0;text-align:center">
  <div class="container" style="max-width:var(--container);margin:0 auto;padding:0 22px"><p style="margin:0;font-size:13px;color:rgba(255,255,255,.6);letter-spacing:.04em">&copy; 2026 Toughjobs &middot; Marketing for the Trades &middot; (309) 233-9004</p></div>
</footer>

<script>
  var header=document.querySelector('header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
  
  // Handle nav dropdown mega menu
  var navDropdown=document.querySelector('.nav-dropdown');
  if(navDropdown){
    var toggle=navDropdown.querySelector('.nav-dropdown-toggle');
    var menu=navDropdown.querySelector('.nav-dropdown-menu');
    var tm;
    function open(){
      clearTimeout(tm);
      navDropdown.classList.add('open');
    }
    function close(){
      tm=setTimeout(function(){
        navDropdown.classList.remove('open');
      },200);
    }
    toggle.addEventListener('mouseenter',function(e){e.preventDefault();open();});
    navDropdown.addEventListener('mouseenter',open);
    navDropdown.addEventListener('mouseleave',close);
    if(menu){
      menu.addEventListener('mouseenter',open);
      menu.addEventListener('mouseleave',close);
    }
  }
</script>
<script>window.SERVICE_DATA={"roi":{"liftPct":0.03,"closeRate":0.35,"ourCost":250,"driverSuffix":""}};</script>
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
