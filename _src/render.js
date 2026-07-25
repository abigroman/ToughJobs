/* Server-render Toughjobs homepage JSX to static HTML.
   Transpiles components.jsx with Babel, evaluates it with React in scope,
   and renders the same tree app.jsx builds — minus the Tweaks panel. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const babel = require('@babel/core');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const SRC = process.argv[2] || '/home/claude/tj';

const TWEAKS = {
  palette: 'red-led',
  headlineStyle: 'split',
  density: 'spacious',
  heroStyle: 'photo-fullbleed',
  chevrons: true,
  accentHue: '#C8262A',
  cityStyle: 'stamp',
};

function transpile(file) {
  const code = fs.readFileSync(path.join(SRC, file), 'utf8');
  return babel.transformSync(code, {
    filename: file,
    presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
    configFile: false,
    babelrc: false,
  }).code;
}

// Minimal browser-ish sandbox. useEffect/useState are stubbed so components
// render their initial state; no effects run server-side (by design).
const sandbox = {
  React,
  console,
  window: { __TWEAK_DEFAULTS__: TWEAKS, matchMedia: () => ({ matches: false, addListener() {}, removeListener() {} }) },
  document: { body: { style: { setProperty() {} }, dataset: {} }, getElementById: () => null },
  module: {}, exports: {},
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

// components.jsx defines everything as top-level function declarations,
// so evaluating it in the context exposes them as sandbox globals.
vm.runInContext(transpile('components.jsx'), sandbox, { filename: 'components.jsx' });

const { Nav, Hero, TrustMarquee, Services, Wraps, Statement,
        ServiceArea, Insights, CtaBand, Footer } = sandbox;

const missing = Object.entries({ Nav, Hero, TrustMarquee, Services, Wraps, Statement,
  ServiceArea, Insights, CtaBand, Footer }).filter(([, v]) => typeof v !== 'function');
if (missing.length) {
  console.error('MISSING COMPONENTS:', missing.map(([k]) => k).join(', '));
  process.exit(1);
}

const e = React.createElement;

const tree = e(React.Fragment, null,
  e(Nav),
  e('main', null,
    e(Hero, { heroStyle: TWEAKS.heroStyle }),
    e(TrustMarquee),
    e(Services),
    e(Wraps),
    e(Statement),
    e(ServiceArea, { cityStyle: TWEAKS.cityStyle }),
    e(Insights),
    e(CtaBand),
  ),
  e(Footer),
);

let html;
try {
  html = ReactDOMServer.renderToStaticMarkup(tree);
} catch (err) {
  console.error('RENDER FAILED:', err.message);
  process.exit(1);
}

fs.writeFileSync('/home/claude/ssr/rendered.html', html);
console.log('OK bytes=' + html.length);
