/* ══════════════════════════════════════════════════════════════════
   TOUGHJOBS — MOBILE NAV
   Adds a hamburger + slide-in drawer to whichever header is present.

   Handles two markup systems:
     A) injected async by inject-header.js  →  header > .nav-container > nav.nav-links
     B) inline in the page                  →  header#nav-header > div > nav

   Because (A) arrives after DOMContentLoaded via fetch(), we watch the
   DOM with a MutationObserver instead of assuming the header exists.
   ══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var BREAKPOINT = 1024;
  var initialised = false;

  function buildToggle() {
    var btn = document.createElement('button');
    btn.className = 'tj-nav-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'tj-primary-nav');
    btn.innerHTML = '<span></span><span></span><span></span>';
    return btn;
  }

  function buildBackdrop() {
    var el = document.createElement('div');
    el.className = 'tj-nav-backdrop';
    el.setAttribute('aria-hidden', 'true');
    return el;
  }

  function closeNav(btn) {
    document.body.classList.remove('tj-nav-open');
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    }
  }

  function openNav(btn) {
    document.body.classList.add('tj-nav-open');
    if (btn) {
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Close menu');
    }
  }

  function init(header) {
    if (initialised || !header) return;

    // find the nav in either system
    var nav = header.querySelector('nav.nav-links') || header.querySelector('nav');
    if (!nav) return;

    // the flex row that holds logo / nav / cta
    var row = header.querySelector('.nav-container') || header.firstElementChild;
    if (!row) return;

    initialised = true;

    nav.id = nav.id || 'tj-primary-nav';
    nav.classList.add('tj-nav');          // universal hook for the drawer CSS
    header.classList.add('tj-header');

    /* .nav-right (phone + quote CTA) is a SIBLING of <nav>, so it would stay
       in the header row and overflow it. Relocate it into the drawer on
       mobile, and put it back when returning to desktop. */
    var navRight = row.querySelector('.nav-right');
    var navRightHome = null;
    if (navRight) {
      navRightHome = document.createComment('tj-nav-right-anchor');
      navRight.parentNode.insertBefore(navRightHome, navRight);
    }

    function placeNavRight() {
      if (!navRight || !navRightHome) return;
      var mobile = window.innerWidth <= BREAKPOINT;
      if (mobile && navRight.parentNode !== nav) {
        nav.appendChild(navRight);
      } else if (!mobile && navRight.parentNode !== navRightHome.parentNode) {
        navRightHome.parentNode.insertBefore(navRight, navRightHome.nextSibling);
      }
    }
    placeNavRight();

    var toggle = buildToggle();
    row.appendChild(toggle);

    var backdrop = buildBackdrop();
    document.body.appendChild(backdrop);

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (document.body.classList.contains('tj-nav-open')) {
        closeNav(toggle);
      } else {
        openNav(toggle);
      }
    });

    backdrop.addEventListener('click', function () { closeNav(toggle); });

    // close after tapping any real destination link
    nav.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;

      // dropdown parent toggles the accordion instead of navigating
      if (link.classList.contains('nav-dropdown-toggle')) {
        e.preventDefault();
        var dd = link.closest('.nav-dropdown');
        if (dd) dd.classList.toggle('tj-open');
        return;
      }

      var href = link.getAttribute('href');
      if (href && href !== '#') closeNav(toggle);
    });

    // Esc closes
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav(toggle);
    });

    // reset state when resizing back to desktop
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        placeNavRight();
        if (window.innerWidth > BREAKPOINT) closeNav(toggle);
      }, 150);
    }, { passive: true });
  }

  function attempt() {
    var header = document.querySelector('header#nav-header') || document.querySelector('header');
    if (header) init(header);
    return initialised;
  }

  // try immediately, then on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attempt);
  } else {
    attempt();
  }

  // header may be injected later by inject-header.js — watch for it
  if (!initialised && window.MutationObserver) {
    var observer = new MutationObserver(function () {
      if (attempt()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // stop watching after 10s regardless
    setTimeout(function () { observer.disconnect(); }, 10000);
  }
})();
