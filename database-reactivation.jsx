import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs — RE-MARKETING | Mine Your List for Hidden Revenue';
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
<title>Toughjobs — RE-MARKETING | Mine Your List for Hidden Revenue</title>

<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#001a4a}
  body{font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;color:#0A0F1C;background:#001a4a;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden}
  :root{--ink:#0A0F1C;--navy:#002768;--navy-2:#001a4a;--red:#C8262A;--red-2:#A90100;--smoke:#5B6471;--white:#FFFFFF;--container:1240px}
  .display{font-family:"Archivo Black","Archivo",ui-sans-serif,system-ui,sans-serif;font-weight:900;text-transform:uppercase;letter-spacing:-0.01em;line-height:.92;text-wrap:balance}
  .eyebrow{font-family:"Archivo",ui-sans-serif,system-ui,sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.14em;font-size:13px}
  .container{max-width:var(--container);margin:0 auto;padding:0 22px}

  /* Nav */
  header
  header.scrolled
  header a.logo-link{display:flex;align-items:center;gap:1px;text-decoration:none;color:var(--white);animation:logoSlideIn .65s cubic-bezier(.22,.9,.3,1) .35s backwards}
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
  .hero{position:relative;overflow:hidden;background:linear-gradient(160deg,var(--navy) 0%,var(--navy-2) 100%);color:var(--white);background-image:url(assets/roofer-woman.webp);background-size:cover;background-position:right center;background-attachment:fixed}
  .hero-inner{position:relative;padding:120px 0 85px;background:linear-gradient(90deg, rgba(10,15,28,.65) 0%, rgba(10,15,28,.45) 35%, transparent 70%)}}
  .hero-bar{position:absolute;top:0;left:74%;width:10px;height:100%;background:var(--red);transform:skewX(-10deg);z-index:2;animation:barDrop .9s cubic-bezier(.3,.7,.2,1) .3s backwards}
  @keyframes barDrop{0%{transform:translateY(-101%) skewX(-10deg)}80%{transform:translateY(2%) skewX(-10deg)}100%{transform:translateY(0) skewX(-10deg)}}
  .hero .container{position:relative;z-index:4}
  .hero .ghost-word{position:absolute;right:-30px;bottom:-70px;z-index:1;font-family:"Archivo Black",sans-serif;font-size:clamp(140px,20vw,300px);color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.05);line-height:.8;letter-spacing:-.02em;pointer-events:none;user-select:none}
  .hero .eyebrow{color:var(--red);margin-bottom:22px}
  .hero h1{font-size:clamp(48px,6.6vw,96px);margin:0 0 26px;max-width:920px;color:var(--white);text-shadow:0 2px 12px rgba(0,0,0,.6)}
  .hero h1 .r{color:var(--red)}
  .hero p{max-width:600px;font-size:18px;line-height:1.55;color:rgba(255,255,255,.82);margin:0 0 14px}
  .rise{opacity:0;transform:translateY(26px);animation:rise .8s cubic-bezier(.22,.9,.3,1) forwards}
  .d1{animation-delay:.05s}.d2{animation-delay:.22s}.d3{animation-delay:.4s}.d4{animation-delay:.58s}
  @keyframes rise{to{opacity:1;transform:translateY(0)}}
  to{opacity:1;transform:translateX(0)}}

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

  /* light-section texture */
  .textured{position:relative}
  .textured::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
    background-image:linear-gradient(rgba(0,39,104,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,39,104,.05) 1px,transparent 1px);
    background-size:46px 46px;-webkit-mask-image:linear-gradient(180deg,transparent,#000 22%,#000 78%,transparent);mask-image:linear-gradient(180deg,transparent,#000 22%,#000 78%,transparent)}
  .textured > .container{position:relative;z-index:2}
  .halftone-corner{position:absolute;z-index:0;pointer-events:none;width:380px;height:380px;
    background-image:radial-gradient(circle,rgba(200,38,42,.16) 2px,transparent 2px);background-size:16px 16px;
    -webkit-mask-image:radial-gradient(circle at center,#000,transparent 68%);mask-image:radial-gradient(circle at center,#000,transparent 68%)}
  .halftone-corner.tl{top:-60px;left:-60px}
  .halftone-corner.br{bottom:-60px;right:-60px}

  /* reasons */
  .reasons{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:64px;background:rgba(10,15,28,.1)}
  .reason{position:relative;background:var(--white);padding:44px 36px 48px;transition:transform .25s ease,box-shadow .25s ease}
  .reason:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(10,15,28,.14);z-index:2}
  .reason .rn{font-family:"Archivo Black",sans-serif;font-size:15px;color:var(--red);letter-spacing:.06em;margin-bottom:18px;display:flex;align-items:center;gap:10px}
  .reason .rn::after{content:"";flex:1;height:2px;background:linear-gradient(90deg,var(--red),transparent)}
  .reason h3{font-family:"Archivo Black",sans-serif;font-size:22px;text-transform:uppercase;letter-spacing:-.01em;color:var(--ink);margin:0 0 14px}
  .reason:hover h3{color:var(--red)}
  .reason p{color:var(--smoke);font-size:15px;line-height:1.65;margin:0}
  @media(max-width:820px){.reasons{grid-template-columns:1fr}}

  /* coaching pillars */
  .pillar{display:grid;grid-template-columns:1.05fr 1fr;gap:60px;align-items:start}
  .pillar.flip .pillar-copy{order:2}
  .pillar-num{font-family:"Archivo",sans-serif;font-weight:700;font-size:13px;letter-spacing:.18em;text-transform:uppercase;display:inline-flex;align-items:baseline;gap:12px;margin-bottom:16px}
  .pillar-num .pn{font-family:"Archivo Black",sans-serif;font-size:32px;line-height:.82;color:var(--red)}
  .pillar h2{font-size:clamp(30px,3.8vw,50px);margin:0 0 16px}
  .pillar .lede{font-size:16px;line-height:1.65;margin:0 0 28px}
  .tactics{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:18px}
  .tactics li{display:flex;gap:16px;align-items:flex-start}
  .tactics .ti{flex-shrink:0;width:34px;height:34px;background:var(--red);display:grid;place-items:center;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);font-family:"Archivo Black",sans-serif;color:#fff;font-size:13px}
  .tactics .tt{font-family:"Archivo",sans-serif;font-weight:700;font-size:15.5px;margin:0 0 4px}
  .tactics .td{font-size:14px;line-height:1.55;margin:0}
  .script-box{position:relative;padding:30px 30px;margin-top:8px}
  .script-box::before{content:"";position:absolute;top:0;left:0;width:4px;height:100%;background:var(--red)}
  .script-box .sl{font-family:"Archivo",sans-serif;font-weight:800;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--red);margin-bottom:12px}
  .script-box .quote{font-family:"Archivo",sans-serif;font-size:19px;line-height:1.5;font-weight:600;font-style:italic}
  .on-light .pillar h2,.on-light .tactics .tt,.on-light .pillar-num{color:var(--ink)}
  .on-light .pillar .lede,.on-light .tactics .td{color:var(--smoke)}
  .on-navy .pillar h2,.on-navy .tactics .tt,.on-navy .pillar-num{color:#fff}
  .on-navy .pillar .lede,.on-navy .tactics .td{color:rgba(255,255,255,.74)}
  .on-light .script-box{background:#f6f7f9}
  .on-navy .script-box{background:rgba(255,255,255,.05)}
  .on-light .script-box .quote{color:var(--ink)}
  .on-navy .script-box .quote{color:#fff}
  @media(max-width:880px){.pillar{grid-template-columns:1fr;gap:36px}.pillar.flip .pillar-copy{order:0}}

  /* compounding growth infographic */
  .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
  .growth-fig{position:relative;background:var(--ink);border:1px solid rgba(10,15,28,.12);border-top:6px solid var(--red);padding:30px 30px 26px;box-shadow:0 30px 60px rgba(0,39,104,.16)}
  .growth-fig .gf-tag{position:absolute;top:14px;right:18px;font-family:monospace;font-size:10px;letter-spacing:.08em;color:rgba(255,255,255,.4)}
  .growth-fig h4{font-family:"Archivo Black",sans-serif;font-size:17px;text-transform:uppercase;letter-spacing:-.01em;color:#fff;margin:0 0 4px}
  .growth-fig .sub{font-size:12.5px;color:rgba(255,255,255,.6);font-weight:600;margin:0 0 18px}
  .growth-fig svg{display:block;width:100%;height:auto;overflow:visible}
  .gf-legend{display:flex;gap:22px;margin-top:16px;flex-wrap:wrap}
  .gf-legend span{display:inline-flex;align-items:center;gap:8px;font-family:"Archivo",sans-serif;font-weight:700;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:rgba(255,255,255,.78)}
  .gf-legend i{width:18px;height:3px;display:inline-block}
  @keyframes gfDraw{to{stroke-dashoffset:0}}
  .reveal.in .gf-line{animation:gfDraw 1.8s ease .2s forwards}
  @media(prefers-reduced-motion:reduce){.gf-line{stroke-dashoffset:0!important;animation:none!important}}
  @media(max-width:880px){.why-grid{grid-template-columns:1fr;gap:36px}}

  /* cross-promo card (related service) */
  .cross-card{position:relative;display:grid;grid-template-columns:1.1fr 1fr;gap:0;background:var(--ink);color:#fff;border-top:6px solid var(--red);box-shadow:0 40px 80px rgba(0,39,104,.22);overflow:hidden}
  .cross-card .cc-body{padding:clamp(36px,4vw,56px)}
  .cross-card .cc-tag{display:inline-flex;align-items:center;gap:10px;font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.12em;font-size:11px;color:#fff;background:var(--red);padding:7px 14px;margin-bottom:20px}
  .cross-card h3{font-family:"Archivo Black",sans-serif;font-size:clamp(28px,3.4vw,42px);text-transform:uppercase;letter-spacing:-.01em;line-height:.98;margin:0 0 16px;color:#fff}
  .cross-card h3 .r{color:var(--red)}
  .cross-card p.cc-lede{color:rgba(255,255,255,.76);font-size:15.5px;line-height:1.6;margin:0 0 26px;max-width:460px}
  .cc-points{list-style:none;margin:0 0 30px;padding:0;display:flex;flex-direction:column;gap:12px}
  .cc-points li{display:flex;gap:12px;align-items:flex-start;font-size:14.5px;line-height:1.45;color:rgba(255,255,255,.9);font-weight:500}
  .cc-points li::before{content:"";flex-shrink:0;width:14px;height:14px;margin-top:3px;background:var(--red);clip-path:polygon(14% 0,4% 60%,46% 60%,42% 100%,96% 36%,54% 36%)}
  .cross-card .cc-cta{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--ink);font-family:"Archivo Black",sans-serif;font-weight:900;letter-spacing:.04em;text-transform:uppercase;font-size:14px;padding:17px 28px;text-decoration:none;transition:transform .15s ease,box-shadow .15s ease,color .15s ease}
  .cross-card .cc-cta:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--red);color:var(--red)}
  .cross-card .cc-aside{position:relative;background:linear-gradient(160deg,var(--navy) 0%,var(--navy-2) 100%);display:flex;flex-direction:column;justify-content:center;padding:clamp(36px,4vw,56px);border-left:1px solid rgba(255,255,255,.12)}
  .cc-stat{margin-bottom:26px}
  .cc-stat:last-child{margin-bottom:0}
  .cc-stat .num{font-family:"Archivo Black",sans-serif;font-size:clamp(40px,5vw,60px);line-height:.9;color:#fff}
  .cc-stat .num small{color:var(--red);font-size:.5em;vertical-align:super}
  .cc-stat .lbl{font-family:"Archivo",sans-serif;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.6);margin-top:6px}
  @media(max-width:880px){.cross-card{grid-template-columns:1fr}.cross-card .cc-aside{border-left:0;border-top:1px solid rgba(255,255,255,.12);flex-direction:row;gap:30px;flex-wrap:wrap}.cc-stat{margin-bottom:0}}

  /* CTA */
  .cta{position:relative;overflow:hidden;background:#E63946;color:var(--white);padding:110px 0;text-align:center}
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
    <div class="ghost-word">REMARKET</div>
    <div class="container">
      <span class="eyebrow rise d1">RE-MARKETING · Email &amp; SMS</span>
      <h1 class="display rise d2">There's a goldmine <span class="r">in your phone.</span></h1>
      <p class="rise d3">Every past customer and dead lead in your system is someone who already trusted you once. Database RE-MARKETING mines that list with smart email and text campaigns — booking jobs from people you've already paid to acquire.</p>
    </div>
  </div>
</section>

<!-- OVERVIEW -->
<section class="block on-light textured">
  <div class="halftone-corner br"></div>
  <div class="container">
    <div class="why-grid reveal">
      <div>
        <div class="sec-eyebrow">The Overview</div>
        <h2 class="display sec-title">What is RE-MARKETING?</h2>
        <p class="sec-sub">It's the simplest revenue you're not collecting. We take the contacts already sitting in your CRM, invoices, and phone — past customers and leads that never closed — and re-engage them with targeted email and SMS offers: maintenance reminders, seasonal tune-ups, "we miss you" deals, and unsold-estimate follow-ups. No ad spend, no cold leads — just jobs from people who already know your name.</p>
      </div>
      <figure class="growth-fig">
        <div class="gf-tag">FIG. 01 — THE HIDDEN REVENUE</div>
        <h4>Your list is already paid for.</h4>
        <p class="sub">Cost to book a job, by source</p>
        <svg viewBox="0 0 460 240" role="img" aria-label="Bar chart: RE-MARKETING your existing database costs far less per booked job than new paid advertising">
          <g stroke="rgba(255,255,255,.10)" stroke-width="1">
            <line x1="40" y1="200" x2="450" y2="200"/>
            <line x1="40" y1="150" x2="450" y2="150" stroke-dasharray="3 5"/>
            <line x1="40" y1="100" x2="450" y2="100" stroke-dasharray="3 5"/>
            <line x1="40" y1="50" x2="450" y2="50" stroke-dasharray="3 5"/>
          </g>
          <!-- new ads bar -->
          <rect x="95" y="40" width="90" height="160" fill="#7DA8FF"/>
          <text x="140" y="30" fill="#fff" font-family="Archivo Black, sans-serif" font-size="17" text-anchor="middle">$250+</text>
          <text x="140" y="218" fill="rgba(255,255,255,.6)" font-family="Archivo, sans-serif" font-size="11" font-weight="700" text-anchor="middle">NEW PAID ADS</text>
          <!-- RE-MARKETING bar -->
          <rect x="290" y="168" width="90" height="32" fill="#C8262A"/>
          <text x="335" y="158" fill="#fff" font-family="Archivo Black, sans-serif" font-size="17" text-anchor="middle">~$20</text>
          <text x="335" y="218" fill="rgba(255,255,255,.6)" font-family="Archivo, sans-serif" font-size="11" font-weight="700" text-anchor="middle">RE-MARKETING</text>
        </svg>
        <div class="gf-legend">
          <span><i style="background:#7DA8FF"></i>New customer</span>
          <span><i style="background:#C8262A"></i>RE-MARKETED</span>
        </div>
      </figure>
    </div>
    <div class="reasons reveal">
      <div class="reason"><div class="rn">01</div><h3>Already Paid For</h3><p>You spent money acquiring these contacts years ago. RE-MARKETING them costs a fraction of a single new click — the cheapest job you'll book all month.</p></div>
      <div class="reason"><div class="rn">02</div><h3>They Already Trust You</h3><p>Past customers know your work and your name. There's no cold pitch — just the right reminder at the right time to bring them back.</p></div>
      <div class="reason"><div class="rn">03</div><h3>Fast, Predictable Cash</h3><p>A single RE-MARKETING blast can fill next week's schedule. It's the fastest lever you have when the calendar looks thin.</p></div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="block on-navy">
  <div class="bp-grid"></div>
  <div class="container" style="position:relative;z-index:2">
    <div class="pillar reveal">
      <div class="pillar-copy">
        <div class="pillar-num"><span class="pn">01</span> How It Works</div>
        <h2 class="display">From dead list<br />to booked week.</h2>
        <p class="lede">We turn the contacts gathering dust in your system into a steady stream of repeat jobs — set up once, then running in the background every month.</p>
        <div class="script-box">
          <div class="sl">A sample RE-MARKETING text</div>
          <div class="quote">“Hi Dave, it's Toughjobs — it's been a year since your last AC tune-up. Book this month and we'll knock $40 off. Reply YES and we'll grab a time.”</div>
        </div>
      </div>
      <ul class="tactics">
        <li><div class="ti">1</div><div><p class="tt">Pull &amp; clean your list</p><p class="td">We export every past customer and lead from your CRM and invoices, then scrub it into one usable database.</p></div></li>
        <li><div class="ti">2</div><div><p class="tt">Segment by opportunity</p><p class="td">Lapsed maintenance, unsold estimates, one-time customers — each group gets a message that fits.</p></div></li>
        <li><div class="ti">3</div><div><p class="tt">Write offers that convert</p><p class="td">Seasonal tune-ups, "we miss you" discounts, and estimate follow-ups crafted to get a reply.</p></div></li>
        <li><div class="ti">4</div><div><p class="tt">Send by email &amp; SMS</p><p class="td">Text gets opened in minutes, email tells the fuller story. We use both, timed to your slow weeks.</p></div></li>
        <li><div class="ti">5</div><div><p class="tt">Automate &amp; repeat</p><p class="td">Once it works, we put it on a schedule so dormant contacts get RE-MARKETED month after month.</p></div></li>
      </ul>
    </div>
  </div>
</section>

<!-- COACHING CROSS-PROMO -->
<section class="block on-light textured">
  <div class="halftone-corner tl"></div>
  <div class="container">
    <div class="reveal" style="max-width:680px;margin-bottom:40px">
      <div class="sec-eyebrow">Pairs Well With</div>
      <h2 class="display sec-title">RE-MARKETING gets<br />them back. Coaching<br />keeps them.</h2>
      <p class="sec-sub">Mining your list works best when every job it books turns into a five-star review and a repeat customer. That's where team coaching comes in — the other half of the same flywheel.</p>
    </div>
    <div class="cross-card reveal">
      <div class="cc-body">
        <span class="cc-tag">Related Service · Coaching</span>
        <h3>Turn your crew into your <span class="r">best marketing.</span></h3>
        <p class="cc-lede">RE-MARKETING fills the schedule. Coaching makes sure every one of those visits earns a review, a referral, and the next call — without spending another dollar on ads.</p>
        <ul class="cc-points">
          <li>Train techs to ask for a Google review at the perfect moment</li>
          <li>Phone scripts that turn more calls into booked jobs</li>
          <li>Simple systems that compound reviews and repeat work over time</li>
        </ul>
        <a href="coaching.html" class="cc-cta">Explore Coaching →</a>
      </div>
      <div class="cc-aside">
        <div class="cc-stat"><div class="num">88<small>%</small></div><div class="lbl">of buyers read reviews first</div></div>
        <div class="cc-stat"><div class="num">5<small>×</small></div><div class="lbl">cheaper to keep a customer than win one</div></div>
        <div class="cc-stat"><div class="num">2<small>min</small></div><div class="lbl">decides whether a call books</div></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="cta-stripes"></div>
  <div class="container">
    <div class="reveal">
      <h2 class="display">Your next ten jobs are already in your list.</h2>
      <p>Toughjobs builds and runs the whole RE-MARKETING system — pulling your list, writing the offers, and booking the jobs you forgot you were owed.</p>
      <a href="contact.html" class="btn">Start RE-MARKETING →</a>
    </div>
  </div>
</section>

<footer>
  <div class="container"><p>&copy; 2026 Toughjobs · Marketing for the Trades · (309) 233-9004</p></div>
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
