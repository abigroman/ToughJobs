import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs — Free PPC Analysis | How Does Your Paid Search Stack Up?';
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
<title>Toughjobs — Free PPC Analysis | How Does Your Paid Search Stack Up?</title>

<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#001a4a}
  body{font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;color:#0A0F1C;background:#001a4a;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden}
  :root{--ink:#0A0F1C;--navy:#002768;--navy-2:#001a4a;--red:#C8262A;--red-2:#A90100;--smoke:#5B6471;--white:#FFFFFF;--container:1240px}
  .display{font-family:"Archivo Black","Archivo",ui-sans-serif,system-ui,sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:-0.01em;line-height:.92;text-wrap:balance}
  .eyebrow{font-family:"Archivo",ui-sans-serif,system-ui,sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.14em;font-size:13px}
  .container{max-width:var(--container);margin:0 auto;padding:0 32px}

  /* Nav */
  header
  header.scrolled
  header a.logo-link{display:flex;align-items:center;gap:16px;text-decoration:none;color:var(--white)}
  header img{height:90px;width:135px;object-fit:contain;transition:all .3s ease}
  header.scrolled img{height:48px;width:72px}
  header.scrolled
  .logo-text span.tight{color:var(--red)}.logo-text span.light{color:var(--white)}
  nav
  nav.nav-links a
  nav.nav-links a.nav-link:hover{color:var(--red);border-bottom-color:var(--red)}
  .btn{display:inline-flex;align-items:center;gap:10px;padding:16px 26px;font-family:"Archivo",sans-serif;font-weight:800;letter-spacing:.06em;font-size:13px;text-transform:uppercase;text-decoration:none;background:var(--red);color:var(--white);border:0;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
  .btn:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink)}
  .btn-dark{background:var(--ink)}
  .btn-ghost{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,.4);padding:14px 24px}
  .btn-ghost:hover{background:var(--white);color:var(--navy);box-shadow:none;transform:translate(-2px,-2px)}
  @media(max-width:880px){nav}

  /* Trades mega-menu */
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
  @media(max-width:880px){.mega{display:none}}
  .nav-phone:hover{color:var(--red)}
  .nav-dropdown-toggle{display:inline-flex;align-items:center;gap:6px;cursor:pointer}
  .nav-dropdown.open
  .nav-dropdown-menu > div{display:flex;flex-direction:column;gap:10px}
  .nav-dropdown-item:hover{color:var(--red)}
  @media(max-width:880px){}

  /* nav quote button — red, slides in from right */
  .nav-quote{background:var(--red);animation:navQuoteIn .65s cubic-bezier(.22,.9,.3,1) .35s backwards}
  to{opacity:1;transform:translateX(0)}}
  @media(prefers-reduced-motion:reduce){.nav-quote{animation:none}}

  /* animated blueprint grid */
  .bp-grid{position:absolute;inset:-50% -50%;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:48px 48px;animation:bpPan 26s linear infinite}
  @keyframes bpPan{from{transform:translate(0,0)}to{transform:translate(48px,48px)}}
  .bolt{position:absolute;color:rgba(200,38,42,.5);pointer-events:none;animation:drift linear infinite}
  @keyframes drift{0%{transform:translateY(20px) rotate(0deg);opacity:0}10%{opacity:.7}90%{opacity:.7}100%{transform:translateY(-120px) rotate(20deg);opacity:0}}

  /* Hero */
  .hero{position:relative;overflow:hidden;background:linear-gradient(160deg,var(--navy) 0%,var(--navy-2) 100%);color:var(--white)}
  .hero-inner{position:relative;padding:120px 0 100px}
  .hero-bar{position:absolute;top:0;left:74%;width:10px;height:100%;background:var(--red);transform:skewX(-10deg);z-index:2;animation:barDrop .9s cubic-bezier(.3,.7,.2,1) .3s backwards}
  @keyframes barDrop{0%{transform:translateY(-101%) skewX(-10deg)}80%{transform:translateY(2%) skewX(-10deg)}100%{transform:translateY(0) skewX(-10deg)}}
  .hero .container{position:relative;z-index:4}
  .hero .ghost-word{position:absolute;right:-30px;bottom:-70px;z-index:1;font-family:"Archivo Black",sans-serif;font-size:clamp(160px,24vw,360px);color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.05);line-height:.8;letter-spacing:-.02em;pointer-events:none;user-select:none}
  .hero .eyebrow{color:var(--red);margin-bottom:22px}
  .hero h1{font-size:clamp(48px,6.6vw,96px);margin:0 0 26px;max-width:920px;color:var(--white)}
  .hero h1 .r{color:var(--red)}
  .hero p{max-width:600px;font-size:18px;line-height:1.55;color:rgba(255,255,255,.82);margin:0 0 14px}
  .rise{opacity:0;transform:translateY(26px);animation:rise .8s cubic-bezier(.22,.9,.3,1) forwards}
  .d1{animation-delay:.05s}.d2{animation-delay:.22s}.d3{animation-delay:.4s}.d4{animation-delay:.58s}
  @keyframes rise{to{opacity:1;transform:translateY(0)}}

  /* tool section */
  .tool-sec{position:relative;background:var(--ink);padding:0 0 110px;margin-top:-1px}
  .tool-sec .container{position:relative;z-index:2;transform:translateY(-60px)}

  /* generic section */
  section.block{position:relative;padding:120px 0;overflow:hidden}
  .on-light{background:var(--white);color:var(--ink)}
  .on-navy{background:linear-gradient(160deg,var(--navy) 0%,var(--navy-2) 100%);color:var(--white)}
  .sec-eyebrow{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.14em;font-size:13px;color:var(--red);margin-bottom:18px}
  .sec-title{font-size:clamp(36px,4.6vw,64px);margin:0 0 18px}
  .sec-sub{font-size:17px;line-height:1.6;max-width:640px;color:var(--smoke)}
  .on-navy .sec-sub{color:rgba(255,255,255,.72)}
  .reveal{opacity:0;transform:translateY(34px);transition:opacity .7s cubic-bezier(.22,.9,.3,1),transform .7s cubic-bezier(.22,.9,.3,1)}
  .reveal.in{opacity:1;transform:none}

  /* why-PPC reasons */
  .reasons{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:64px;background:rgba(10,15,28,.1)}
  .reason{position:relative;background:var(--white);padding:44px 36px 48px;transition:transform .25s ease,box-shadow .25s ease}
  .reason:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(10,15,28,.14);z-index:2}
  .reason .rn{font-family:"Archivo Black",sans-serif;font-size:15px;color:var(--red);letter-spacing:.06em;margin-bottom:18px;display:flex;align-items:center;gap:10px}
  .reason .rn::after{content:"";flex:1;height:2px;background:linear-gradient(90deg,var(--red),transparent)}
  .reason h3{font-family:"Archivo Black",sans-serif;font-size:22px;text-transform:uppercase;letter-spacing:-.01em;color:var(--ink);margin:0 0 14px}
  .reason:hover h3{color:var(--red)}
  .reason p{color:var(--smoke);font-size:15px;line-height:1.65;margin:0}
  @media(max-width:820px){.reasons{grid-template-columns:1fr}}

  /* long-tail explainer */
  .lt{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center;margin-top:24px}
  .lt-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);padding:36px}
  .lt-row{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:18px 0;border-bottom:1px solid rgba(255,255,255,.1)}
  .lt-row:last-child{border-bottom:0}
  .lt-row .term{font-family:"Archivo",sans-serif;font-weight:600;color:#fff;font-size:15px}
  .lt-row .term small{display:block;color:rgba(255,255,255,.5);font-size:12px;font-weight:400;margin-top:3px}
  .lt-row .tag{font-family:"Archivo Black",sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:.06em;padding:6px 10px;white-space:nowrap}
  .lt-row .tag.cold{background:rgba(255,255,255,.1);color:rgba(255,255,255,.6)}
  .lt-row .tag.hot{background:var(--red);color:#fff}
  @media(max-width:820px){.lt{grid-template-columns:1fr;gap:36px}}

  /* CTA */
  .cta{position:relative;overflow:hidden;background:var(--red);color:var(--white);padding:110px 0;text-align:center}
  .cta-stripes{position:absolute;inset:0;pointer-events:none;opacity:.5;background:repeating-linear-gradient(-45deg,transparent 0 16px,rgba(10,15,28,.18) 16px 18px);background-size:200% 200%;animation:stripePan 8s linear infinite}
  @keyframes stripePan{from{background-position:0 0}to{background-position:200px 200px}}
  .cta .container{position:relative;z-index:2;max-width:760px}
  .cta h2{font-size:clamp(40px,5.4vw,72px);margin:0 0 20px;color:var(--white)}
  .cta p{font-size:19px;line-height:1.6;margin:0 0 40px;color:rgba(255,255,255,.92)}
  .cta .btn{background:var(--ink);font-size:15px;padding:20px 36px}

  footer{background:var(--ink);color:var(--white);padding:48px 0;text-align:center}
  footer p{margin:0;font-size:13px;color:rgba(255,255,255,.6);letter-spacing:.04em}

  @media(prefers-reduced-motion:reduce){.bp-grid,.bolt,.cta-stripes{animation:none!important}.rise{opacity:1;transform:none;animation:none}}
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="bp-grid"></div>
    <div class="hero-bar"></div>
    <div class="ghost-word">PPC</div>
    <div class="container">
      <span class="eyebrow rise d1">Senior PPC Analyst · Free 60-Second Audit</span>
      <h1 class="display rise d2">Is your paid search <span class="r">pulling its weight?</span></h1>
      <p class="rise d3">Most trades either spend nothing on PPC — leaving high-intent buyers to the competition — or burn budget on the wrong keywords. Find out exactly where you stand, and what a smart campaign would do for your numbers.</p>
    </div>
  </div>
</section>

<!-- TOOL -->
<section class="tool-sec">
  <div class="bp-grid"></div>
  <div class="container">
    <div id="ppc-tool"></div>
  </div>
</section>

<!-- WHY PPC -->
<section class="block on-light">
  <div class="container">
    <div class="reveal">
      <div class="sec-eyebrow">The Analyst's Take</div>
      <h2 class="display sec-title">Every trade should spend<br />something on PPC.</h2>
      <p class="sec-sub">It's not about going big. It's about not being invisible at the exact moment a ready-to-buy customer is searching. Here's why even a small, disciplined budget pays for itself.</p>
    </div>
    <div class="reasons reveal">
      <div class="reason">
        <div class="rn">01</div>
        <h3>Brand Defense</h3>
        <p>Competitors can bid on your business name and intercept customers already looking for <em>you</em>. A cheap brand campaign keeps your own front door from being hijacked — it's the highest-ROI clicks you'll ever buy.</p>
      </div>
      <div class="reason">
        <div class="rn">02</div>
        <h3>Long-Tail Intent</h3>
        <p>Specific searches like "emergency panel upgrade near me" cost a fraction of broad terms and convert far better — because the person typing them is ready to hire. Skip these and you hand them to whoever shows up.</p>
      </div>
      <div class="reason">
        <div class="rn">03</div>
        <h3>High-Ticket Math</h3>
        <p>When a job is worth thousands, you can profitably pay real money to land a single customer. The bigger your ticket, the more indefensible it is to run zero paid search. The math simply works in your favor.</p>
      </div>
    </div>
  </div>
</section>

<!-- LONG-TAIL EXPLAINER -->
<section class="block on-navy">
  <div class="bp-grid"></div>
  <div class="container" style="position:relative;z-index:2">
    <div class="reveal">
      <div class="sec-eyebrow">Why Long-Tail Wins</div>
      <h2 class="display sec-title" style="color:#fff">Cheaper clicks.<br />Hotter buyers.</h2>
    </div>
    <div class="lt reveal">
      <div>
        <p class="sec-sub" style="margin-bottom:22px">Broad keywords are expensive and full of tire-kickers. Long-tail searches are cheaper, less contested, and signal someone who's ready to pull the trigger. For most trades, this is where a starter budget should live.</p>
        <p class="sec-sub">You don't need to outspend the big shops. You need to show up for the searches that actually turn into booked jobs.</p>
      </div>
      <div class="lt-card">
        <div class="lt-row">
          <div class="term">"plumber"<small>Broad · pricey · low intent</small></div>
          <div class="tag cold">Cold</div>
        </div>
        <div class="lt-row">
          <div class="term">"plumber near me"<small>Better · still competitive</small></div>
          <div class="tag cold">Warm</div>
        </div>
        <div class="lt-row">
          <div class="term">"emergency burst pipe repair tonight"<small>Long-tail · cheap · ready to buy</small></div>
          <div class="tag hot">Hot</div>
        </div>
        <div class="lt-row">
          <div class="term">"tankless water heater install quote"<small>Long-tail · high-ticket intent</small></div>
          <div class="tag hot">Hot</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-stripes"></div>
  <div class="container">
    <div class="reveal">
      <h2 class="display">Let's build a campaign that pays for itself.</h2>
      <p>Get a free PPC strategy call. We'll map your brand defense, long-tail targets, and the budget your ticket size justifies.</p>
      <a href="contact.html" class="btn">Book a Strategy Call →</a>
    </div>
  </div>
</section>

<footer>
  <div class="container"><p>&copy; 2026 Toughjobs · Marketing for the Trades · 309-928-9080</p></div>
</footer>

<script>
  var header=document.querySelector('header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
  (function(){var nd=document.querySelector('.nav-dropdown');if(!nd)return;var menu=nd.querySelector('.nav-dropdown-menu'),tm;function op(){clearTimeout(tm);nd.classList.add('open');if(menu){menu.style.top=header.getBoundingClientRect().bottom+'px';}}function cl(){tm=setTimeout(function(){nd.classList.remove('open');},200);}nd.addEventListener('mouseenter',op);nd.addEventListener('mouseleave',cl);if(menu){menu.addEventListener('mouseenter',op);menu.addEventListener('mouseleave',cl);}})();

  var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.16});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

  (function(){
    var bolt='<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2 L4 14 L11 14 L10 22 L20 10 L13 10 Z"/></svg>';
    document.querySelectorAll('.hero-inner, .on-navy').forEach(function(host){
      for(var i=0;i<6;i++){var b=document.createElement('div');b.className='bolt';b.style.left=(Math.random()*90+3)+'%';b.style.bottom=(Math.random()*40)+'%';b.style.animationDuration=(7+Math.random()*7)+'s';b.style.animationDelay=(-Math.random()*8)+'s';b.style.transform='scale('+(0.6+Math.random()*0.9)+')';b.innerHTML=bolt;host.appendChild(b);}
    });
  })();
</script>
<script src="ppc-analyzer.js"></script>
<script src="trade-data.js"></script>
<script>
  (function(){
    var cats=window.TRADE_CATEGORIES||[],data=window.TRADE_DATA||{};
    var mega=document.getElementById('mega-trades'),wrap=document.getElementById('trades-nav');
    if(!mega||!wrap||!cats.length)return;
    mega.innerHTML=cats.map(function(cat){
      var links=cat.trades.map(function(s){var t=data[s];return t?'<a class="t" href="trade-'+s+'.html">'+t.name+'</a>':'';}).join('');
      return '<div><div class="cat-name">'+cat.name+'</div><div class="mega-links">'+links+'</div></div>';
    }).join('');
    var tm;
    function open(){clearTimeout(tm);wrap.classList.add('open');}
    function close(){tm=setTimeout(function(){wrap.classList.remove('open');},200);}
    wrap.addEventListener('mouseenter',open);wrap.addEventListener('mouseleave',close);
    mega.addEventListener('mouseenter',open);mega.addEventListener('mouseleave',close);
  })();
</script>

<script src="flying-tools.js"></script>
<script src="inject-header.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
