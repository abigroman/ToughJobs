import React from 'react';
import { Header, Footer } from './components.jsx';

export default function IntakeLanding() {
  React.useEffect(() => {
    document.title = 'FREE TOOLS — Toughjobs';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <!-- ── HERO ─────────────────────────────────────────────– -->
<section class="hero">
  <div class="hero-inner">
    <img class="hero-photo" src="assets/woman-welder-hero.webp" alt="" />
    <div class="hero-scrim"></div>
    <div class="bp-grid"></div>
    <div class="ghost-word">ASSESS</div>

    <div class="container">
      <span class="eyebrow rise d1">Know Your Position · Crush Your Competition</span>
      <h1 class="display rise d2">
        <span class="w">See exactly where you</span><br />
        <span class="r">stand against the field.</span>
      </h1>
      <p class="rise d3">Three free tools to measure your brand strength, online visibility, and paid search readiness — so you know exactly what to fix first. Then decide if a deeper dive makes sense.</p>
      <div class="cta-group rise d4">
        <a href="#offers" class="btn">Explore the Tools →</a>
      </div>
    </div>

    <div class="scroll-hint"><div class="mouse"></div><span>Scroll</span></div>
  </div>
</section>

<!-- ── TOOL 1 · BUSINESS ASSESSMENT (also frames the trio) ──– -->
<section class="tool block on-light textured" id="offers">
  <div class="tool-bg" id="tool-bg-offers"></div>
  <div class="halftone-corner tl"></div>
  <div class="halftone-corner navy bl"></div>
  <div class="tool-ghost right">01</div>
  <div class="container">
    <div class="reveal" style="margin-bottom:72px;max-width:1040px">
      <div class="sec-eyebrow">Three Free Tools</div>
      <h2 class="trio-head">Pick the question you want answered — <em>FREE!</em></h2>
      <p class="sec-sub" style="max-width:680px">Each tool below tackles a different blind spot in your business. Run one, or run all three.</p>
    </div>
    <div class="tool-grid reveal">
      <div class="tool-copy">
        <div class="tool-tab"><span class="tn">01</span> Business Assessment</div>
        <h2 class="display">Find the one fix that<br />moves the needle.</h2>
        <p class="why">Most trades owners are guessing about what's actually holding their growth back.</p>
        <p class="lede">Answer 16 quick questions about your business, market, and competition. We turn them into a personalized report that pinpoints your biggest gap — then walk you through it on a 20-minute strategy call. No essays, no sensitive financials, no obligation.</p>
        <a href="intake.jsx" class="tool-cta">Start the Assessment →</a>
      </div>
      <div class="tool-figure">
        <img class="tool-shadow" src="assets/woman-drill.webp" alt="" aria-hidden="true" />
        <img class="tool-subject" src="assets/woman-drill.webp" alt="Toughjobs tradeswoman with drill" />
      </div>
    </div>
  </div>
</section>

<!-- ── TOOL 2 · COMPETITOR SNAPSHOT ────────────────────– -->
<section class="tool block on-dark" id="snapshot-section">
  <div class="tool-ghost left">02</div>
  <div class="bp-grid"></div>
  <div class="container">
    <div class="tool-grid reveal">
      <div class="tool-copy">
        <div class="tool-tab"><span class="tn">02</span> Competitor Snapshot</div>
        <h2 class="display">See exactly how you<br />stack up — instantly.</h2>
        <p class="why">Your customers are comparing you to competitors every day. Shouldn't you?</p>
        <p class="lede">Enter your website and a top competitor's site. In seconds you get a side-by-side brand scorecard across the five things that decide who gets the call — Google visibility, website experience, reviews, paid ads, and brand strength. No waiting, no email required.</p>
        <a href="competitor-snapshot.jsx" class="tool-cta">Run My Snapshot →</a>
      </div>
      <div class="value-panel vp-glass">
        <div class="vp-label">Where you'll see the gap</div>
        <ul class="value-list">
          <li><div class="vi"><span>1</span></div><div><p class="vt">Google visibility comparison</p><p class="vd">Who shows up first when a ready-to-buy customer searches.</p></div></li>
          <li><div class="vi"><span>2</span></div><div><p class="vt">Website & UX scorecard</p><p class="vd">Whether your site turns visitors into booked jobs — or sends them away.</p></div></li>
          <li><div class="vi"><span>3</span></div><div><p class="vt">Reviews & reputation audit</p><p class="vd">How your trust signals measure up to the competition.</p></div></li>
          <li><div class="vi"><span>4</span></div><div><p class="vt">Paid ads presence check</p><p class="vd">See if a competitor is buying attention you're missing.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ── TOOL 3 · PPC READINESS AUDIT ────────────────────– -->
<section class="tool block on-navy">
  <div class="tool-ghost right">03</div>
  <div class="bp-grid"></div>
  <div class="container">
    <div class="tool-grid reveal">
      <div class="tool-copy">
        <div class="tool-tab"><span class="tn">03</span> PPC Readiness Audit</div>
        <h2 class="display">Is your paid search<br />pulling its weight?</h2>
        <p class="why">Spending nothing on PPC means handing high-intent buyers straight to your competitors.</p>
        <p class="lede">In 60 seconds, our senior-analyst tool grades your paid-search position and shows what a smart long-tail and brand-defense budget would actually do for your numbers. Whether you're spending zero or thousands, you'll see exactly what you're leaving on the table.</p>
        <a href="ppc-analysis.jsx" class="tool-cta">Grade My PPC →</a>
      </div>
      <div class="value-panel vp-glass">
        <div class="vp-label">What the audit shows you</div>
        <ul class="value-list">
          <li><div class="vi"><span>1</span></div><div><p class="vt">A PPC readiness score</p><p class="vd">From "critical gap" to "aggressive" — know your position at a glance.</p></div></li>
          <li><div class="vi"><span>2</span></div><div><p class="vt">A recommended monthly budget</p><p class="vd">Right-sized to your ticket value, not a one-size-fits-all number.</p></div></li>
          <li><div class="vi"><span>3</span></div><div><p class="vt">Projected leads, jobs & ROAS</p><p class="vd">The real math on what disciplined spend can return.</p></div></li>
          <li><div class="vi"><span>4</span></div><div><p class="vt">A senior-analyst action plan</p><p class="vd">Exactly where to start — brand defense, long-tail, or high-ticket terms.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ── DEEP-DIVE UPSELL ────────────────────────────────– -->
<section class="block on-light textured">
  <div class="halftone-corner tl"></div>
  <div class="halftone-corner navy br"></div>
  <div class="container">
    <div class="reveal" style="max-width:760px">
      <div class="sec-eyebrow">Go Deeper · For Serious Owners</div>
      <h2 class="display sec-title">The Complete<br />Competitor Audit.</h2>
      <p class="sec-sub">The free snapshot shows you the landscape. This is the blueprint to win it — verified numbers, a full teardown of every competitor advantage, and a dollar-by-dollar plan to take their jobs.</p>
    </div>

    <!-- Premium feature card -->
    <div class="dd-card reveal" id="deepdive">
      <div class="bp-grid"></div>
      <div class="dd-top">
        <div>
          <span class="lbl">Flagship Deliverable</span>
          <h3>Full Deep-Dive Audit</h3>
          <p class="desc">A 30–50 page competitive teardown built by a senior analyst. We pull real ranking data, real ad spend, and a complete audit of your site and reputation against the competitors actually beating you — then hand you the exact moves to overtake them.</p>
        </div>
        <div class="dd-buy">
          <div class="price"><small>$</small>497</div>
          <div class="terms">One-time. Fully credited toward your first month if you sign on.</div>
          <button class="cta" onclick="alert('Deep-dive booking coming soon. Call 309-928-9080 to scope your audit.')">Book My Deep-Dive →</button>
        </div>
      </div>
      <div class="dd-grid">
        <div class="dd-cell"><div class="n">1</div><h5>Verified Google Rankings</h5><p>Your exact position vs. competitors on 50+ money keywords — with real search volume and difficulty.</p></div>
        <div class="dd-cell"><div class="n">2</div><h5>Site Architecture Audit</h5><p>Page speed, mobile UX, and the technical and conversion blockers quietly costing you jobs.</p></div>
        <div class="dd-cell"><div class="n">3</div><h5>Reviews & Reputation</h5><p>Volume, velocity, and sentiment vs. each competitor — plus a plan to close the trust gap fast.</p></div>
        <div class="dd-cell"><div class="n">4</div><h5>Paid Ad Intelligence</h5><p>What competitors bid on, their estimated monthly spend, and the keywords you should own instead.</p></div>
        <div class="dd-cell"><div class="n">5</div><h5>Backlink & Authority Gap</h5><p>Who links to them but not you, and the local citations you're missing to climb the map pack.</p></div>
        <div class="dd-cell"><div class="n">6</div><h5>Custom 90-Day Roadmap</h5><p>A prioritized, dollar-by-dollar plan: what to fix first and the ROI to expect from each move.</p></div>
      </div>
    </div>

    <!-- Lower: outcomes + process -->
    <div class="dd-lower reveal">
      <div class="dd-panel">
        <h4>What you'll walk away knowing</h4>
        <ul class="dd-know">
          <li>Exactly which competitor is taking your jobs — and the specific advantage letting them.</li>
          <li>The three fastest wins to climb Google in your service area.</li>
          <li>Where your (or a competitor's) ad dollars are being wasted.</li>
          <li>A clear monthly budget recommendation matched to your ticket size.</li>
          <li>Whether to invest in your site, reviews, or ads first — in priority order.</li>
        </ul>
      </div>
      <div class="dd-panel">
        <h4>How it works</h4>
        <ol class="dd-steps">
          <li><span class="st">Book a free scoping call</span><span class="sd">We confirm your goals, keywords, and the competitors to benchmark against.</span></li>
          <li><span class="st">We pull 2–3 weeks of verified data</span><span class="sd">Real rankings, ad spend, backlinks, and a hands-on audit — no guesswork.</span></li>
          <li><span class="st">Full report + 60-min strategy session</span><span class="sd">We walk you through every finding and answer your questions live.</span></li>
          <li><span class="st">Quarterly check-ins for 3 months</span><span class="sd">We track your progress and keep the roadmap honest as you execute.</span></li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────– -->
<section class="cta">
  <div class="cta-stripes"></div>
  <div class="container">
    <div class="reveal">
      <h2 class="display">Ready to take the first step?</h2>
      <p>Start free. See where you stand. Then decide what's next.</p>
      <a href="#offers" class="btn on-red" onclick="document.getElementById('offers').scrollIntoView({behavior:'smooth'}); return false;">Pick Your Path ↑</a>
    </div>
  </div>
</section>

<footer>
  <div class="container"><p>&copy; 2026 Toughjobs · Marketing for the Trades · 309-928-9080</p></div>
</footer>

<script>
  // Nav shrink on scroll
  var navHeader = document.getElementById('nav-header');
  window.addEventListener('scroll', function(){navHeader.classList.toggle('scrolled',window.scrollY>50)},{passive:true});

  // Scroll reveal
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:.18});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

  // Drifting bolts
  (function(){
    var bolt='<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2 L4 14 L11 14 L10 22 L20 10 L13 10 Z"/></svg>';
    document.querySelectorAll('.hero-inner, .on-navy').forEach(function(host){
      for(var i=0;i<7;i++){
        var b=document.createElement('div');
        b.className='bolt';
        b.style.left=(Math.random()*90+3)+'%';
        b.style.bottom=(Math.random()*40)+'%';
        b.style.animationDuration=(7+Math.random()*7)+'s';
        b.style.animationDelay=(-Math.random()*8)+'s';
        b.style.transform='scale('+(0.6+Math.random()*0.9)+')';
        b.innerHTML=bolt;
        host.appendChild(b);
      }
    });
  })();

  // Faded drifting power tools behind the Three Free Tools section
  (function(){
    var host=document.getElementById('tool-bg-offers');
    if(!host)return;
    var tools=[
      // drill
      '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M6 24h22l4-4h6v-4h10v4h6l4 4v8l-4 4h-6v4h-4l-4 6h-6v-6l-6-6H6z"/><rect x="20" y="40" width="10" height="18" rx="2"/></svg>',
      // wrench
      '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M46 6a14 14 0 0 0-13 19L8 50a5 5 0 0 0 7 7l25-25a14 14 0 0 0 19-13l-9 9-8-2-2-8z"/></svg>',
      // hammer
      '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M30 6l20 8-4 8-6-2-4 4 4 4-18 26-6-6 16-22-4-4-4 4-2-6z"/></svg>',
      // saw blade
      '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 4l5 8 9-4-1 10 10 1-7 7 7 7-10 1 1 10-9-4-5 8-5-8-9 4 1-10-10-1 7-7-7-7 10-1-1-10 9 4z"/><circle cx="32" cy="32" r="7" fill="#fff"/></svg>',
      // screwdriver
      '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M40 6l18 18-10 6-4-4-22 22-6 8-8 2 2-8 8-6 22-22-4-4z"/></svg>'
    ];
    var n=9;
    for(var i=0;i<n;i++){
      var el=document.createElement('div');
      el.className='tool-float';
      var size=70+Math.random()*120;
      el.style.width=size+'px';el.style.height=size+'px';
      el.style.left=(Math.random()*88+2)+'%';
      el.style.top=(Math.random()*78+4)+'%';
      el.style.setProperty('--r0',(Math.random()*60-30)+'deg');
      el.style.setProperty('--r1',(Math.random()*120-60)+'deg');
      el.style.animationDuration=(16+Math.random()*16)+'s';
      el.style.animationDelay=(-Math.random()*24)+'s';
      el.innerHTML=tools[i%tools.length];
      host.appendChild(el);
    }
  })();

  // Subtle mouse-following background glow on each main section
  (function(){
    var secs=document.querySelectorAll('section.tool, section.block');
    secs.forEach(function(sec){
      if(getComputedStyle(sec).position==='static')sec.style.position='relative';
      var g=document.createElement('div');
      g.className='mglow';
      // light sections glow red; dark/navy sections glow soft white
      var light=sec.classList.contains('on-light');
      g.style.setProperty('--glow', light ? 'rgba(200,38,42,.10)' : 'rgba(255,255,255,.07)');
      sec.insertBefore(g, sec.firstChild);
      sec.addEventListener('mousemove',function(e){
        var r=sec.getBoundingClientRect();
        g.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
        g.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
      });
    });
  })();
</script>
<script src="trade-data.js"></script>
<script>
  // Build the Trades mega-menu from shared trade data
  (function(){
    var cats=window.TRADE_CATEGORIES||[],data=window.TRADE_DATA||{};
    var mega=document.getElementById('mega-trades'),wrap=document.getElementById('trades-nav');
    if(!mega||!wrap||!cats.length)return;
    mega.innerHTML=cats.map(function(cat){
      var links=cat.trades.map(function(s){var t=data[s];return t?'<a class="t" href="trade-'+s+'.jsx">'+t.name+'</a>':'';}).join('');
      return '<div><div class="cat-name">'+cat.name+'</div><div class="mega-links">'+links+'</div></div>';
    }).join('');
    var tm;
    function open(){clearTimeout(tm);wrap.classList.add('open');}
    function close(){tm=setTimeout(function(){wrap.classList.remove('open');},200);}
    wrap.addEventListener('mouseenter',open);wrap.addEventListener('mouseleave',close);
    mega.addEventListener('mouseenter',open);mega.addEventListener('mouseleave',close);
  })();
</script>

<script src="sticky-cta.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
