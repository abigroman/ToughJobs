import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Toughjobs Design System';
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
<title>Toughjobs Design System</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: "Archivo", sans-serif;
  background: #F8F9FA;
  color: #0A0F1C;
  line-height: 1.6;
}

/* Layout */

header h1 {
  font-family: "Archivo Black", sans-serif;
  font-size: 48px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
}

header p {
  font-size: 18px;
  opacity: 0.9;
  margin: 0;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}

.toc {
  background: white;
  padding: 32px;
  margin: 60px auto;
  border-left: 4px solid #C8262A;
  max-width: 1240px;
}

.toc h2 {
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0 0 24px 0;
  color: #0A0F1C;
}

.toc ul {
  margin: 0;
  padding: 0;
  list-style: none;
  column-count: 2;
  column-gap: 40px;
}

.toc li {
  margin-bottom: 12px;
}

.toc a {
  color: #C8262A;
  text-decoration: none;
  font-weight: 600;
}

.toc a:hover {
  text-decoration: underline;
}

section {
  background: white;
  margin: 40px auto;
  padding: 60px 32px;
  max-width: 1240px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

section h2 {
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  margin: 0 0 12px 0;
  padding-bottom: 16px;
  border-bottom: 3px solid #C8262A;
  color: #0A0F1C;
}

section h3 {
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  margin: 40px 0 20px 0;
  color: #002768;
}

.subsection {
  margin-bottom: 48px;
}

p { line-height: 1.8; }

/* Color System */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.color-swatch {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.color-sample {
  height: 140px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 12px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.color-info {
  padding: 16px;
  background: #F8F9FA;
  font-size: 13px;
}

.color-info div {
  margin: 4px 0;
  font-family: monospace;
}

.color-name {
  font-weight: 700;
  color: #0A0F1C;
  margin-bottom: 8px;
}

.color-value {
  color: #666;
  font-size: 12px;
}

/* Typography */
.type-scale {
  margin: 32px 0;
}

.type-example {
  margin: 28px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #E5E7EB;
}

.type-example:last-child {
  border-bottom: none;
}

.type-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #666;
  font-weight: 700;
  margin-bottom: 6px;
}

.type-display {
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.type-display.xl {
  font-size: 64px;
  font-weight: 900;
}

.type-display.lg {
  font-size: 48px;
  font-weight: 900;
}

.type-display.md {
  font-size: 32px;
  font-weight: 900;
}

.type-body {
  font-family: "Archivo", sans-serif;
}

.type-body.lg {
  font-size: 18px;
  font-weight: 500;
}

.type-body.md {
  font-size: 16px;
  font-weight: 400;
}

.type-body.sm {
  font-size: 14px;
  font-weight: 400;
}

/* Component Examples */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.component-box {
  padding: 20px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: #FCFCFD;
}

.component-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #666;
  font-weight: 700;
  margin-bottom: 16px;
}

/* Buttons */
.btn-demo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 26px;
  font-family: "Archivo", sans-serif;
  font-weight: 800;
  letter-spacing: 0.06em;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-bottom: 12px;
}

.btn-primary {
  background: #C8262A;
  color: white;
}

.btn-primary:hover {
  background: #A90100;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 38, 42, 0.3);
}

.btn-secondary {
  background: #002768;
  color: white;
}

.btn-secondary:hover {
  background: #001a4a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 39, 104, 0.3);
}

.btn-ghost {
  background: transparent;
  color: #0A0F1C;
  border: 2px solid #0A0F1C;
  padding: 14px 24px;
}

.btn-ghost:hover {
  background: #0A0F1C;
  color: white;
}

/* Cards */
.card-demo {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.card-demo:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, #C8262A 0%, #A90100 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-family: "Archivo Black", sans-serif;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0 0 8px 0;
  color: #0A0F1C;
}

.card-desc {
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
}

.card-link {
  color: #C8262A;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-link:hover {
  text-decoration: underline;
}

/* Navigation */
.nav-demo {
  background: #0A0F1C;
  color: white;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin: 24px 0;
}

.nav-demo-logo {
  font-family: "Archivo Black", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.nav-demo-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-demo-links a {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.15s ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
}

.nav-demo-links a:hover {
  color: #C8262A;
  border-bottom-color: #C8262A;
}

.nav-demo-right {
  display: flex;
  gap: 16px;
  align-items: center;
}

.nav-demo-phone {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap;
}

/* Spacing & Layout */
.spacing-demo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 32px 0;
}

.spacing-unit {
  text-align: center;
}

.spacing-box {
  background: linear-gradient(135deg, #C8262A 0%, #A90100 100%);
  border-radius: 4px;
  margin-bottom: 12px;
}

.spacing-label {
  font-size: 12px;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Grid System */
.grid-demo {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  margin: 32px 0;
}

.grid-col {
  background: rgba(200, 38, 42, 0.1);
  border: 2px solid #C8262A;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #A90100;
  text-transform: uppercase;
}

.grid-col.span-2 { grid-column: span 2; }
.grid-col.span-3 { grid-column: span 3; }
.grid-col.span-4 { grid-column: span 4; }
.grid-col.span-6 { grid-column: span 6; }
.grid-col.span-12 { grid-column: span 12; }

/* Accessibility */
.a11y-section {
  background: #F0F4FF;
  padding: 20px;
  border-left: 4px solid #002768;
  border-radius: 4px;
  margin: 24px 0;
}

.a11y-section h4 {
  margin-top: 0;
  color: #002768;
  font-family: "Archivo Black", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
}

.contrast-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0;
}

.contrast-example {
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.contrast-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.contrast-aa {
  background: #0A0F1C;
  color: white;
}

.contrast-aaa {
  background: #0A0F1C;
  color: #C8262A;
}

/* Code Snippets */
.code-block {
  background: #2D2D2D;
  color: #F8F8F2;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: monospace;
  font-size: 13px;
  line-height: 1.5;
  margin: 24px 0;
}

.code-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #666;
  font-weight: 700;
  margin-bottom: 12px;
  font-family: "Archivo", sans-serif;
}

/* Footer */
footer {
  background: #0A0F1C;
  color: white;
  padding: 40px 32px;
  text-align: center;
  margin-top: 80px;
  font-size: 14px;
}

footer a {
  color: #C8262A;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Utility */
.mt-lg { margin-top: 40px; }
.mb-lg { margin-bottom: 40px; }
.text-center { text-align: center; }
.text-muted { opacity: 0.7; }

@media (max-width: 768px) {
  header h1 { font-size: 32px; }
  section { padding: 32px 16px; }
  .toc ul { column-count: 1; }
  .component-grid { grid-template-columns: 1fr; }
  .contrast-demo { grid-template-columns: 1fr; }
  .color-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>

<div style="background: linear-gradient(135deg, #0A0F1C 0%, #002768 100%); color: white; padding: 80px 32px; text-align: center; border-bottom: 4px solid #C8262A; margin-top: 120px;">
  <h1 style="font-family: 'Archivo Black', sans-serif; font-size: 48px; text-transform: uppercase; letter-spacing: -0.02em; margin: 0 0 12px 0;">Toughjobs Design System</h1>
  <p style="font-size: 18px; opacity: 0.9; margin: 0;">Brand Identity, Components & Pattern Library</p>
</div>

<div class="container">
  <div class="toc">
    <h2>Contents</h2>
    <ul>
      <li><a href="#brand-overview">Brand Overview</a></li>
      <li><a href="#colors">Color System</a></li>
      <li><a href="#typography">Typography</a></li>
      <li><a href="#layout">Layout & Spacing</a></li>
      <li><a href="#buttons">Buttons & Interactive Elements</a></li>
      <li><a href="#cards">Cards & Containers</a></li>
      <li><a href="#navigation">Navigation Patterns</a></li>
      <li><a href="#accessibility">Accessibility Standards</a></li>
      <li><a href="#code-snippets">Code Snippets</a></li>
    </ul>
  </div>
</div>

<!-- BRAND OVERVIEW -->
<section id="brand-overview">
  <h2>Brand Overview</h2>
  
  <div class="subsection">
    <h3>Mission</h3>
    <p>Toughjobs is a marketing agency built for trades contractors—electricians, HVAC technicians, plumbers, and roofers. We specialize in digital marketing, branded fleet wraps, and SEO for small businesses in the Quad Cities region. Our design language reflects the trades themselves: bold, direct, no-nonsense, and results-driven.</p>
  </div>

  <div class="subsection">
    <h3>Brand Personality</h3>
    <ul>
      <li><strong>Practical</strong> — We speak the language of job sites and bottom lines.</li>
      <li><strong>Direct</strong> — No corporate jargon. Clear communication.</li>
      <li><strong>Confident</strong> — We know what we do well and we don't apologize for it.</li>
      <li><strong>Local</strong> — Rooted in the Quad Cities community and trades industry.</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Logo & Mark</h3>
    <p>The Toughjobs monogram logo (a hexagonal mark with the letter "T") represents precision, structure, and the mechanical confidence of the trades. The mark is always used at minimum 150px wide. Never stretch, distort, or modify the logo. Always maintain clear space around it.</p>
    <p><strong>Asset:</strong> <code>assets/toughjobs-monogram-logo.webp</code> — 150px wide × 100px tall</p>
  </div>
</section>

<!-- COLOR SYSTEM -->
<section id="colors">
  <h2>Color System</h2>
  
  <div class="subsection">
    <h3>Primary Palette</h3>
    <p>The Toughjobs color palette is intentionally restricted to create strong visual hierarchy and brand recognition. Every color serves a purpose.</p>
    
    <div class="color-grid">
      <div class="color-swatch">
        <div class="color-sample" style="background: #C8262A;">C8262A</div>
        <div class="color-info">
          <div class="color-name">Primary Red</div>
          <div class="color-value">Hex: #C8262A</div>
          <div class="color-value">RGB: 200, 38, 42</div>
          <div class="color-value">Use: Accent, CTAs, emphasis</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #A90100;">A90100</div>
        <div class="color-info">
          <div class="color-name">Dark Red</div>
          <div class="color-value">Hex: #A90100</div>
          <div class="color-value">RGB: 169, 1, 0</div>
          <div class="color-value">Use: Hover states, dark backgrounds</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #002768;">002768</div>
        <div class="color-info">
          <div class="color-name">Navy</div>
          <div class="color-value">Hex: #002768</div>
          <div class="color-value">RGB: 0, 39, 104</div>
          <div class="color-value">Use: Secondary buttons, dark sections</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #0A0F1C;">0A0F1C</div>
        <div class="color-info">
          <div class="color-name">Ink (Black)</div>
          <div class="color-value">Hex: #0A0F1C</div>
          <div class="color-value">RGB: 10, 15, 28</div>
          <div class="color-value">Use: Text, backgrounds, UI</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #FFFFFF; color: #0A0F1C; text-shadow: none;">FFFFFF</div>
        <div class="color-info">
          <div class="color-name">White</div>
          <div class="color-value">Hex: #FFFFFF</div>
          <div class="color-value">RGB: 255, 255, 255</div>
          <div class="color-value">Use: Text on dark, light backgrounds</div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Neutral & Support Colors</h3>
    <p>A carefully curated palette of grays for UI elements, text hierarchy, and subtle backgrounds.</p>
    
    <div class="color-grid">
      <div class="color-swatch">
        <div class="color-sample" style="background: #5B6471; color: white;">5B6471</div>
        <div class="color-info">
          <div class="color-name">Smoke (Primary Text)</div>
          <div class="color-value">Hex: #5B6471</div>
          <div class="color-value">Use: Body copy on light backgrounds</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #C7CBD2;">C7CBD2</div>
        <div class="color-info">
          <div class="color-name">Mute (Secondary Text)</div>
          <div class="color-value">Hex: #C7CBD2</div>
          <div class="color-value">Use: Labels, captions, helper text</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #E5E7EB;">E5E7EB</div>
        <div class="color-info">
          <div class="color-name">Mute-2 (Borders)</div>
          <div class="color-value">Hex: #E5E7EB</div>
          <div class="color-value">Use: Dividers, subtle borders</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #F4F5F7;">F4F5F7</div>
        <div class="color-info">
          <div class="color-name">Surface Alt (Background)</div>
          <div class="color-value">Hex: #F4F5F7</div>
          <div class="color-value">Use: Card backgrounds, subtle fill</div>
        </div>
      </div>

      <div class="color-swatch">
        <div class="color-sample" style="background: #FCFCFD;">FCFCFD</div>
        <div class="color-info">
          <div class="color-name">Surface (Light Background)</div>
          <div class="color-value">Hex: #FCFCFD</div>
          <div class="color-value">Use: Page backgrounds, default fill</div>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Color Usage Rules</h3>
    <ul>
      <li><strong>Red (#C8262A)</strong> is reserved for CTAs, critical actions, and brand emphasis only. Use sparingly.</li>
      <li><strong>Never place red text on red backgrounds</strong> or red text on navy backgrounds without sufficient contrast.</li>
      <li><strong>Navy is secondary</strong> — use it for alternate sections or secondary buttons, never as the dominant background color.</li>
      <li><strong>Ink (#0A0F1C) is the primary text color</strong> on light backgrounds. Use white text only on dark backgrounds (navy, ink, red).</li>
      <li><strong>Alternating backgrounds</strong> (light ↔ dark) are essential for visual rhythm. Never place two white sections directly adjacent.</li>
    </ul>
  </div>
</section>

<!-- TYPOGRAPHY -->
<section id="typography">
  <h2>Typography</h2>
  
  <div class="subsection">
    <h3>Font Families</h3>
    <ul>
      <li><strong>Headlines & Display:</strong> "Archivo Black" (900 weight, all-caps, tight letter-spacing)</li>
      <li><strong>Body Text & UI:</strong> "Archivo" (400–900 weights available)</li>
      <li><strong>Monospace:</strong> System monospace for code, technical details, data</li>
    </ul>
    <p>All fonts are loaded from Google Fonts. No custom fonts required.</p>
  </div>

  <div class="subsection">
    <h3>Type Scale</h3>
    <div class="type-scale">
      <div class="type-example">
        <div class="type-label">Display XL / Hero Headline</div>
        <div class="type-display xl">Marketing built for the trades.</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">64–132px · Archivo Black · 900 weight · Tight line-height (0.95)</div>
      </div>

      <div class="type-example">
        <div class="type-label">Display LG / Section Headline</div>
        <div class="type-display lg">Four levers pulled hard</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">48px · Archivo Black · 900 weight</div>
      </div>

      <div class="type-example">
        <div class="type-label">Display MD / Subsection Headline</div>
        <div class="type-display md">Three skill sets. One team.</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">32px · Archivo Black · 900 weight</div>
      </div>

      <div class="type-example">
        <div class="type-label">Body LG / Lead Paragraph</div>
        <div class="type-body lg">We build websites, run ads, and design wraps for HVAC, plumbing, electrical, and roofing contractors in the Quad Cities.</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">18px · Archivo · 500 weight · 1.6 line-height</div>
      </div>

      <div class="type-example">
        <div class="type-label">Body MD / Default Text</div>
        <div class="type-body md">Most agencies sell you a website and disappear. We treat every project like it's ours — because if your trucks aren't full, our work failed.</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">16px · Archivo · 400 weight · 1.6 line-height</div>
      </div>

      <div class="type-example">
        <div class="type-label">Body SM / Secondary Text, Labels</div>
        <div class="type-body sm">Request a Quote · See the wrap gallery · Get in touch with our team today</div>
        <div style="color: #666; font-size: 12px; margin-top: 8px;">14px · Archivo · 400 weight</div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Typography Best Practices</h3>
    <ul>
      <li><strong>Headlines are always uppercase</strong> using "Archivo Black" at tight tracking (-0.02em).</li>
      <li><strong>Line-height for display text</strong> should be 0.95–1.1 (tight) to feel impactful.</li>
      <li><strong>Body text line-height</strong> should be 1.6–1.8 for readability.</li>
      <li><strong>Color headlines strategically:</strong> Use split-color headlines (e.g., "Four levers / pulled hard") to create emphasis without increasing size.</li>
      <li><strong>Letter-spacing:</strong> Archivo Black uses -0.01 to -0.02em for tightness; Archivo body uses default spacing.</li>
      <li><strong>Text wrapping:</strong> Use CSS <code>text-wrap: pretty</code> on headlines to avoid orphaned words.</li>
    </ul>
  </div>
</section>

<!-- LAYOUT & SPACING -->
<section id="layout">
  <h2>Layout & Spacing</h2>
  
  <div class="subsection">
    <h3>Spacing Scale</h3>
    <p>A predictable spacing scale ensures consistent vertical and horizontal rhythm across all designs.</p>
    <div class="spacing-demo">
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 8px;"></div>
        <div class="spacing-label">8px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 16px;"></div>
        <div class="spacing-label">16px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 24px;"></div>
        <div class="spacing-label">24px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 32px;"></div>
        <div class="spacing-label">32px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 40px;"></div>
        <div class="spacing-label">40px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 48px;"></div>
        <div class="spacing-label">48px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 60px;"></div>
        <div class="spacing-label">60px</div>
      </div>
      <div class="spacing-unit">
        <div class="spacing-box" style="height: 80px;"></div>
        <div class="spacing-label">80px</div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Container & Grid System</h3>
    <p>The Toughjobs site uses a 12-column grid with a max-width container of 1240px, padded at 32px on desktop (16px on mobile).</p>
    
    <div class="grid-demo">
      <div class="grid-col span-12">Full Width (12 cols)</div>
      <div class="grid-col span-6">Half (6 cols)</div>
      <div class="grid-col span-6">Half (6 cols)</div>
      <div class="grid-col span-4">Third (4 cols)</div>
      <div class="grid-col span-4">Third (4 cols)</div>
      <div class="grid-col span-4">Third (4 cols)</div>
      <div class="grid-col span-3">Quarter (3 cols)</div>
      <div class="grid-col span-3">Quarter (3 cols)</div>
      <div class="grid-col span-3">Quarter (3 cols)</div>
      <div class="grid-col span-3">Quarter (3 cols)</div>
    </div>

    <div class="a11y-section">
      <h4>Grid Rules</h4>
      <ul>
        <li>Max-width: 1240px centered on page</li>
        <li>Padding: 32px left/right (desktop), 16px (mobile)</li>
        <li>Gap between columns: 16px (desktop), 12px (mobile)</li>
        <li>Section padding: 112px top/bottom (spacious), 80px (compact)</li>
      </ul>
    </div>
  </div>

  <div class="subsection">
    <h3>Section Layout Rules</h3>
    <ul>
      <li><strong>Alternating backgrounds:</strong> Never place two white sections directly adjacent. Alternate light ↔ dark (ink, navy, or colored) to create visual rhythm.</li>
      <li><strong>Section height:</strong> Most content sections use <code>min-height: 80vh</code> to ensure full-viewport impact.</li>
      <li><strong>Vertical spacing:</strong> Use 112px padding for spacious sections, 80px for compact layouts.</li>
      <li><strong>Horizontal alignment:</strong> Use CSS Grid or Flexbox with <code>gap</code> for spacing, never margin-based layouts.</li>
    </ul>
  </div>
</section>

<!-- BUTTONS & INTERACTIVE ELEMENTS -->
<section id="buttons">
  <h2>Buttons & Interactive Elements</h2>
  
  <div class="subsection">
    <h3>Button Variants</h3>
    <p>Buttons use Archivo 700–800 weight, all-caps, with tight letter-spacing (0.06em). All buttons have subtle hover and active states.</p>
    
    <div class="component-grid">
      <div class="component-box">
        <div class="component-label">Primary Button</div>
        <button class="btn-demo btn-primary">Request a Quote</button>
        <div class="code-label">Usage:</div>
        <div class="code-block">&lt;a href="..." class="btn"&gt;
  Request a Quote
&lt;/a&gt;</div>
      </div>

      <div class="component-box">
        <div class="component-label">Secondary Button</div>
        <button class="btn-demo btn-secondary">Learn More</button>
        <div class="code-label">Usage:</div>
        <div class="code-block">&lt;a href="..." class="btn-secondary"&gt;
  Learn More
&lt;/a&gt;</div>
      </div>

      <div class="component-box">
        <div class="component-label">Ghost Button</div>
        <button class="btn-demo btn-ghost">See the Gallery</button>
        <div class="code-label">Usage:</div>
        <div class="code-block">&lt;a href="..." class="btn-ghost"&gt;
  See the Gallery
&lt;/a&gt;</div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Button Specifications</h3>
    <ul>
      <li><strong>Padding:</strong> 16px vertical × 26px horizontal</li>
      <li><strong>Font:</strong> Archivo 800 weight, 13px, uppercase, 0.06em letter-spacing</li>
      <li><strong>Primary color:</strong> Red (#C8262A), white text</li>
      <li><strong>Secondary color:</strong> Navy (#002768), white text</li>
      <li><strong>Ghost style:</strong> Transparent background, ink text, 2px ink border</li>
      <li><strong>Hover states:</strong> All buttons reduce brightness 8%, primary lifts 2px with shadow</li>
      <li><strong>Active state:</strong> Translate down 1px, slightly increased opacity</li>
      <li><strong>Disabled state:</strong> 50% opacity, cursor not-allowed</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Interactive States</h3>
    <div class="a11y-section">
      <h4>Hover States</h4>
      <ul>
        <li>All interactive elements show color change or border change on hover</li>
        <li>Links underline on hover</li>
        <li>Buttons reduce brightness and/or lift with shadow</li>
      </ul>
    </div>
    <div class="a11y-section">
      <h4>Focus States</h4>
      <ul>
        <li>All buttons and links have visible focus rings (2px outline in accent color)</li>
        <li>Focus ring offset: 2px</li>
        <li>Ensures keyboard navigation is always visible</li>
      </ul>
    </div>
  </div>
</section>

<!-- CARDS & CONTAINERS -->
<section id="cards">
  <h2>Cards & Containers</h2>
  
  <div class="subsection">
    <h3>Card Component</h3>
    <p>Cards are the primary container for grouped content. They use subtle shadows, border-radius, and hover effects.</p>
    
    <div class="component-grid">
      <div class="card-demo">
        <div class="card-image">Image Area</div>
        <div class="card-content">
          <h3 class="card-title">Websites</h3>
          <p class="card-desc">WordPress sites built for speed, SEO, and conversions.</p>
          <a href="#" class="card-link">Learn More →</a>
        </div>
      </div>

      <div class="card-demo">
        <div class="card-image">Image Area</div>
        <div class="card-content">
          <h3 class="card-title">SEO</h3>
          <p class="card-desc">Local search optimization to dominate your market.</p>
          <a href="#" class="card-link">Learn More →</a>
        </div>
      </div>

      <div class="card-demo">
        <div class="card-image">Image Area</div>
        <div class="card-content">
          <h3 class="card-title">Paid Ads</h3>
          <p class="card-desc">Google & Bing campaigns that generate qualified leads.</p>
          <a href="#" class="card-link">Learn More →</a>
        </div>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Card Specifications</h3>
    <ul>
      <li><strong>Background:</strong> White (#FFFFFF)</li>
      <li><strong>Border:</strong> 1px solid #E5E7EB (light gray)</li>
      <li><strong>Border-radius:</strong> 8px</li>
      <li><strong>Shadow:</strong> 0 2px 8px rgba(0, 0, 0, 0.06) — subtle, always present</li>
      <li><strong>Hover shadow:</strong> 0 8px 24px rgba(0, 0, 0, 0.12) with -4px translate</li>
      <li><strong>Transition:</strong> 0.2s ease on all properties</li>
      <li><strong>Image area:</strong> Full-width, no border-radius on top, 160px height or image aspect ratio</li>
      <li><strong>Content padding:</strong> 20px on all sides</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Container Types</h3>
    <ul>
      <li><strong>Service Cards:</strong> Grid of 3–4 cards with icon, title, description, link</li>
      <li><strong>Testimonial Cards:</strong> Quote text, author name, company, avatar (optional)</li>
      <li><strong>Blog/Insight Cards:</strong> Featured image, title, excerpt, publication date, "Read More" link</li>
      <li><strong>Team Cards:</strong> Photo, name, title, brief bio</li>
    </ul>
  </div>
</section>

<!-- NAVIGATION -->
<section id="navigation">
  <h2>Navigation Patterns</h2>
  
  <div class="subsection">
    <h3>Main Navigation</h3>
    <p>The primary navigation bar is sticky at the top of every page and collapses on scroll.</p>
    
    <div class="nav-demo">
      <div class="nav-demo-logo">TJ</div>
      <nav class="nav-demo-links">
        <a href="#">Trades ▾</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Partnerships</a>
        <a href="#">Free Tools</a>
        <a href="#">Contact</a>
      </nav>
      <div class="nav-demo-right">
        <a href="tel:" class="nav-demo-phone">309-928-9080</a>
      </div>
    </div>
  </div>

  <div class="subsection">
    <h3>Navigation Specifications</h3>
    <ul>
      <li><strong>Background:</strong> Ink (#0A0F1C)</li>
      <li><strong>Height:</strong> 120px (desktop), shrinks 50% on scroll</li>
      <li><strong>Sticky:</strong> Position fixed at top, z-index 40</li>
      <li><strong>Logo:</strong> 150px wide × 100px tall, links to homepage</li>
      <li><strong>Links:</strong> Archivo 700 weight, 11px, uppercase, 0.06em letter-spacing</li>
      <li><strong>Link color:</strong> White, changes to red on hover/active</li>
      <li><strong>Link underline:</strong> 2px red border-bottom on active page</li>
      <li><strong>Right side:</strong> Phone number (plain text link), "Request a Quote" button (red)</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Dropdown Menu (Trades)</h3>
    <p>The "Trades" dropdown shows a grid of trade categories and appears on hover.</p>
    <ul>
      <li><strong>Layout:</strong> 5-column grid, 920px wide</li>
      <li><strong>Top border:</strong> 2px solid red</li>
      <li><strong>Padding:</strong> 32px</li>
      <li><strong>Items:</strong> Archivo 600 weight, 13px, white text</li>
      <li><strong>Hover state:</strong> Text changes to red</li>
      <li><strong>Trigger:</strong> Appears on .nav-dropdown:hover</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Breadcrumb Navigation</h3>
    <p>Used on service detail pages and category pages to show hierarchy.</p>
    <div class="code-block">Home / Services / Websites</div>
    <ul>
      <li><strong>Style:</strong> Archivo 400 weight, 14px, separated by forward slashes</li>
      <li><strong>Color:</strong> Links are red, non-links are gray</li>
      <li><strong>Placement:</strong> Below main content heading</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Pagination</h3>
    <p>For multi-page content (blog, portfolio).</p>
    <ul>
      <li><strong>Style:</strong> Numbered links (1, 2, 3…) plus "Previous" / "Next" links</li>
      <li><strong>Active page:</strong> Red background with white text</li>
      <li><strong>Inactive pages:</strong> Light gray background, ink text</li>
      <li><strong>Hover state:</strong> Inactive pages → red text, white background</li>
    </ul>
  </div>
</section>

<!-- ACCESSIBILITY -->
<section id="accessibility">
  <h2>Accessibility Standards</h2>
  
  <div class="subsection">
    <h3>Color Contrast</h3>
    <p>All text must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). We target AAA (7:1) whenever possible.</p>
    
    <div class="contrast-demo">
      <div class="contrast-example contrast-aa">
        <div class="contrast-label">White text on Ink</div>
        <p>This text meets WCAG AAA standards (10.8:1 contrast)</p>
      </div>
      <div class="contrast-example contrast-aaa">
        <div class="contrast-label">Red text on Ink</div>
        <p>This text meets WCAG AA standards (5.2:1 contrast)</p>
      </div>
    </div>

    <div class="a11y-section">
      <h4>Contrast Combinations to Avoid</h4>
      <ul>
        <li>Red text (#C8262A) on Navy (#002768) — insufficient contrast</li>
        <li>Light gray text on white — insufficient contrast for body copy</li>
        <li>Navy text on dark backgrounds — insufficient contrast</li>
      </ul>
    </div>
  </div>

  <div class="subsection">
    <h3>Focus States & Keyboard Navigation</h3>
    <ul>
      <li>All interactive elements (buttons, links, inputs) must have visible focus rings</li>
      <li>Focus ring color: Red (#C8262A)</li>
      <li>Focus ring width: 2px</li>
      <li>Focus ring offset: 2px</li>
      <li>Tab order must follow logical page structure</li>
      <li>Keyboard navigation (Tab, Shift+Tab, Enter, Escape) must work on all interactive elements</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Text & Typography</h3>
    <ul>
      <li><strong>Body text minimum size:</strong> 16px on desktop (not smaller)</li>
      <li><strong>Line-height:</strong> Minimum 1.5 for body text, 1.2 for headlines</li>
      <li><strong>Letter-spacing:</strong> Never negative except in display headlines</li>
      <li><strong>No justified text:</strong> Use left-aligned or centered, never justify</li>
      <li><strong>Text wrapping:</strong> Use CSS <code>text-wrap: pretty</code> to prevent orphaned words</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Images & Alt Text</h3>
    <ul>
      <li>All images must have descriptive alt text</li>
      <li>Decorative images use empty alt text: <code>alt=""</code></li>
      <li>Format: "Image of [description]" or "[person name], [title]" for photos</li>
      <li>Example: <code>alt="Electrician installing a circuit breaker panel"</code></li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Form Accessibility</h3>
    <ul>
      <li>All form inputs must have associated labels: <code>&lt;label for="input-id"&gt;</code></li>
      <li>Error messages must be linked to inputs with <code>aria-describedby</code></li>
      <li>Required fields must be marked with <code>aria-required="true"</code></li>
      <li>Form buttons must have clear, descriptive text (not just "Submit")</li>
      <li>Placeholder text is never a substitute for labels</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Responsive Design</h3>
    <ul>
      <li>All designs must be mobile-first and fully responsive</li>
      <li>Minimum touch target size: 44px × 44px for buttons and links</li>
      <li>Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop)</li>
      <li>Never hide critical navigation or content on mobile without an alternative</li>
      <li>Font sizes must be readable on all screen sizes (use clamp() for scalability)</li>
    </ul>
  </div>

  <div class="subsection">
    <h3>Motion & Animation</h3>
    <ul>
      <li>All animations must respect <code>prefers-reduced-motion</code> media query</li>
      <li>Animations should not auto-play unless user-initiated</li>
      <li>Transitions are acceptable (0.15–0.3s) without reducing motion</li>
      <li>Never use flashing or rapidly changing content (3+ flashes per second)</li>
    </ul>
  </div>
</section>

<!-- CODE SNIPPETS -->
<section id="code-snippets">
  <h2>Code Snippets & Common Patterns</h2>
  
  <div class="subsection">
    <h3>CSS Custom Properties (Brand Tokens)</h3>
    <div class="code-block">:root {
  --ink: #0A0F1C;
  --navy: #002768;
  --red: #C8262A;
  --red-dark: #A90100;
  --white: #FFFFFF;
  
  --text-primary: var(--ink);
  --text-secondary: #5B6471;
  --text-muted: #C7CBD2;
  
  --bg-light: #FCFCFD;
  --bg-dark: #0A0F1C;
  
  --container-max: 1240px;
  --container-pad: 32px;
  --section-pad: 112px;
}
      </main>
      <Footer />
    </React.Fragment>
  );
}
