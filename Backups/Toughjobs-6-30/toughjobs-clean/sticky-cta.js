// sticky-cta.js — Toughjobs "Start Assessment" corner badge
// Renders ONE badge only, anchored to the TOP-RIGHT, tucked just under the
// sticky header. No bottom-right fallback. Links to intake-landing.html.
(function () {
  if (document.querySelector('.tj-assess')) return; // never duplicate

  // ── Styles ────────────────────────────────────────────────────────────────
  var css = `
  .tj-assess {
    position: fixed;
    right: 24px;
    z-index: 35;               /* below header (40), above content */
    width: 132px;
    height: 132px;
    display: block;
    text-decoration: none;
    pointer-events: auto;
    transition: top .3s ease, transform .2s ease;
  }
  .tj-assess:hover { transform: scale(1.05); }
  .tj-assess .tj-wedge {
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(135deg,
        rgba(255,255,255,.18) 0 3px, transparent 3px 9px),
      linear-gradient(135deg, #C8262A 0%, #A90100 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    border-top-right-radius: 4px;
    box-shadow: -4px 6px 18px rgba(0,0,0,.35);
  }
  .tj-assess .tj-disc {
    position: absolute;
    top: 50%; left: 50%;
    width: 104px; height: 104px;
    margin: -52px 0 0 -52px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 4px 14px rgba(0,0,0,.4);
    display: flex; align-items: center; justify-content: center;
  }
  .tj-assess .tj-ring {
    position: absolute; inset: 0;
    animation: tjSpin 9s linear infinite;
  }
  @keyframes tjSpin { to { transform: rotate(360deg); } }
  @media (prefers-reduced-motion: reduce) {
    .tj-assess .tj-ring { animation: none; }
  }
  .tj-assess .tj-bolt {
    position: relative;
    width: 34px; height: 34px;
  }
  `;
  var style = document.createElement('style');
  style.id = 'tj-assess-styles';
  style.textContent = css;
  document.head.appendChild(style);

  // ── DOM ───────────────────────────────────────────────────────────────────
  var a = document.createElement('a');
  a.className = 'tj-assess';
  a.href = 'intake-landing.html';
  a.setAttribute('aria-label', 'Start your free assessment — 4 minutes');
  a.innerHTML = `
    <span class="tj-wedge"></span>
    <span class="tj-disc">
      <svg class="tj-ring" viewBox="0 0 104 104" aria-hidden="true">
        <defs>
          <path id="tjArc" d="M52,52 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
        </defs>
        <text font-family="'Archivo Black','Archivo',sans-serif"
              font-size="11.5" letter-spacing="2.4" fill="#C8262A" font-weight="700">
          <textPath href="#tjArc" startOffset="0">
            START ASSESSMENT · FREE · 4 MIN ·
          </textPath>
        </text>
      </svg>
      <svg class="tj-bolt" viewBox="0 0 24 24" fill="#C8262A" aria-hidden="true">
        <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z"/>
      </svg>
    </span>
  `;
  document.body.appendChild(a);

  // ── Position just under the header (top-right), keep in sync on scroll ──────
  function place() {
    var header = document.querySelector('header');
    var h = header ? header.getBoundingClientRect().bottom : 96;
    a.style.top = Math.max(h - 34, 12) + 'px';
  }
  place();
  window.addEventListener('scroll', place, { passive: true });
  window.addEventListener('resize', place);
  // header may be injected async — re-place a few times shortly after load
  var tries = 0;
  var iv = setInterval(function () { place(); if (++tries > 10) clearInterval(iv); }, 200);
})();
