import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs | Marketing for the Trades | Peoria, IL';
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
<title>Toughjobs | Marketing for the Trades | Peoria, IL</title>


<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&family=Russo+One&display=swap" rel="stylesheet" />
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#001a4a}
  body{
    font-family:"Inter","Helvetica Neue",Helvetica,Arial,sans-serif;
    color:var(--ink);
    background: url('assets/blueprint-background.webp') fixed center/cover no-repeat;
    background-color: #001a4a;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  :root{
    --ink:#0A0F1C;
    --navy:#002768;
    --navy-2:#001a4a;
    --red:#C8262A;
    --red-2:#A90100;
    --smoke:#5B6471;
    --mute:#C7CBD2;
    --mute-2:#E5E7EB;
    --hairline:#E5E7EB;
    --surface-alt:#F4F5F7;
    --surface:#FCFCFD;
    --white:#FFFFFF;

    --bg-dark: var(--ink);
    --accent: var(--red);
    --accent-ink: var(--white);
    --headline-a: var(--ink);
    --headline-b: var(--accent);
    --headline-mute: var(--mute);

    --container: 1240px;
    --pad-section: 112px;
    --pad-section-tight: 80px;
  }

  .display{
    font-family:"Archivo Black","Archivo",ui-sans-serif,system-ui,sans-serif;
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:-0.01em;
    line-height:.95;
    text-wrap:balance;
  }
  .eyebrow{
    font-family:"Archivo",ui-sans-serif,system-ui,sans-serif;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:.08em;
    font-size:12px;
  }
  .container{
    max-width:var(--container);
    margin:0 auto;
    padding:0 32px;
  }
  section{ padding-block: 120px; }

  .btn{
    display:inline-flex;align-items:center;gap:10px;
    padding:16px 26px;
    font-family:"Archivo",sans-serif;font-weight:800;letter-spacing:.06em;
    font-size:13px;text-transform:uppercase;text-decoration:none;
    background:var(--accent);color:var(--accent-ink);
    border:0;cursor:pointer;
    transition:transform .15s ease, filter .2s ease, background .2s ease;
  }
  .btn:hover{ filter:brightness(.92); }
  .btn:active{ transform:translateY(1px); }
  .btn-dark{ background:var(--ink); color:var(--white); }
  .btn-ghost{
    background:transparent; color:var(--ink);
    border:2px solid var(--ink);
    padding:14px 24px;
  }
  .btn-ghost:hover{ background:var(--ink); color:var(--white); }

  .split .a{ color:var(--headline-a); }
  .split .b{ color:var(--headline-b); }
  .split .m{ color:var(--headline-mute); }

  .section-equal{
    min-height: clamp(680px, 80vh, 900px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  section .eyebrow {
    animation: fadeSlideUp 0.6s ease-out 0.1s backwards;
  }
  .display.split .a {
    display: inline-block;
    animation: fadeSlideUp 0.8s ease-out 0.3s backwards;
  }
  .display.split .b {
    display: inline-block;
    animation: fadeSlideUp 0.8s ease-out 0.5s backwards;
  }
  .display.split .m {
    display: inline-block;
    animation: fadeSlideUp 0.8s ease-out 0.7s backwards;
  }
  section p {
    animation: fadeSlideUp 0.7s ease-out 0.9s backwards;
  }
  section .btn {
    animation: fadeSlideUp 0.6s ease-out 1.1s backwards;
  }

  .bg-blueprint-dark{
    background-color: transparent;
    background-image: none;
  }
  .bg-blueprint-navy{
    background-color: transparent;
    background-image: none;
  }
  .bg-blueprint-red{
    background-color: transparent;
    background-image: none;
  }
  .bg-blueprint-light{
    background-color: transparent;
    background-image: none;
  }

  .on-dark{ color:var(--white); }
  .on-dark .display{ color:var(--white); }
  .on-dark .eyebrow{ color:var(--white); opacity:.85; }
  .on-dark p{ color:rgba(255,255,255,.78); }

  ::selection{ background:var(--accent); color:var(--accent-ink); }

  /* Accessibility button */
  .accessibility-btn {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--accent);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  .accessibility-btn.visible {
    opacity: 1;
  }
  .accessibility-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
  .accessibility-btn:active {
    transform: scale(0.98);
  }
  .accessibility-btn svg {
    width: 32px;
    height: 32px;
    fill: var(--white);
  }
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>
<style>.accessibility-btn{opacity:0}</style>
<button class="accessibility-btn" aria-label="Accessibility" title="Accessibility">
  <img src="assets/accessibility-logo.png" alt="Accessibility" style="width: 100%; height: 100%; object-fit: contain;"/>
</button>
<div id="root"></div>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

<script src="trade-data.js"></script>
<script type="text/babel" src="components.jsx"></script>
<script type="text/babel" src="services-app.jsx?v=3"></script>

<script src="accessibility.js"></script>
<script src="sticky-cta.js"></script>

<script>
  // Scroll to hash target after the React app finishes rendering.
  // The #branding section doesn't exist in the DOM until React mounts,
  // and layout keeps shifting as fonts/images load — so we wait for the
  // element, then re-scroll a few times to correct for any shift.
  (function () {
    if (!window.location.hash) return;
    var id = window.location.hash.slice(1);
    var navOffset = 130; // sticky header height

    function scrollToTarget(smooth) {
      var el = document.getElementById(id);
      if (!el) return false;
      var y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
      return true;
    }

    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      if (scrollToTarget(false)) {
        clearInterval(timer);
        // Re-correct after layout settles (fonts, images, async content).
        [150, 400, 800, 1300].forEach(function (delay) {
          setTimeout(function () { scrollToTarget(delay >= 800); }, delay);
        });
      } else if (attempts > 60) {
        clearInterval(timer);
      }
    }, 100);
  })();
</script>
</body>
</html>

      </main>
      <Footer />
    </React.Fragment>
  );
}
