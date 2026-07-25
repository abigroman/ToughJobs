# Regenerating index.html

index.html is now STATIC HTML. It is generated from components.jsx by
server-rendering the JSX — no React or Babel runs in the browser.

To regenerate after editing components.jsx:

    cd _src
    npm install react@18.3.1 react-dom@18.3.1 @babel/core @babel/preset-react
    node render.js /path/to/repo      # writes rendered.html
    python3 build_index.py            # rebuilds index.html

app.jsx is kept here as the reference for the page's section order and
the tweak values that were baked in (palette red-led, split headlines,
spacious density, photo hero, chevrons on, stamp city tiles).

NOTE: components.jsx is still loaded at runtime by intake.html, which
remains a React page. Do not delete it.
