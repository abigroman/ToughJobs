import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'Privacy Policy — Toughjobs';
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
  <title>Privacy Policy — Toughjobs</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Archivo+Black&display=swap" rel="stylesheet" />
  <style>
    :root {
      --accent: #C8262A;
      --white: #FFFFFF;
      --ink: #0A0F1C;
      --navy: #002768;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "Archivo", sans-serif;
      background: var(--white);
      color: var(--ink);
      line-height: 1.7;
    }
    
    header h1 {
      font-family: "Archivo Black", sans-serif;
      font-size: 48px;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }
    
    header p {
      font-size: 16px;
      opacity: 0.9;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    main {
      padding: 80px 0;
    }
    
    h2 {
      font-family: "Archivo Black", sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin: 40px 0 20px;
      color: var(--navy);
      border-left: 4px solid var(--accent);
      padding-left: 16px;
    }
    
    h3 {
      font-size: 18px;
      font-weight: 700;
      margin: 24px 0 12px;
      color: var(--ink);
    }
    
    p {
      margin-bottom: 16px;
      font-size: 15px;
    }
    
    ul {
      margin: 16px 0 16px 24px;
      font-size: 15px;
    }
    
    li {
      margin-bottom: 8px;
    }
    
    .highlight {
      background: #f5f5f5;
      padding: 24px;
      border-left: 4px solid var(--accent);
      margin: 32px 0;
      border-radius: 2px;
    }
    
    footer {
      background: var(--navy);
      color: var(--white);
      text-align: center;
      padding: 40px 0;
      margin-top: 80px;
      font-size: 13px;
    }
    
    .back-link {
      display: inline-block;
      margin-bottom: 32px;
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }
    
    .back-link:hover {
      text-decoration: underline;
    }
  </style>
<link rel="stylesheet" href="shared-header.css" />
</head>
<body>
  <main>
    <div class="container">
      <a href="contact.html" class="back-link">← Back to Contact</a>

      <p><strong>Last Updated: January 2026</strong></p>

      <p>At <strong>Toughjobs Digital Marketing</strong>, we respect your privacy. This policy explains how we collect, use, and protect your information when you contact us, submit forms, or use our services.</p>

      <div class="highlight">
        <strong>TL;DR:</strong> We collect only what we need to help you grow your business. We never sell your data. We keep it secure and delete it when you ask.
      </div>

      <!-- What We Collect -->
      <h2>What Information We Collect</h2>
      
      <h3>Contact Forms</h3>
      <p>When you reach out through our website, we collect:</p>
      <ul>
        <li>Your name, phone number, and email</li>
        <li>Your company name and trade/industry</li>
        <li>Your project details and budget</li>
        <li>Any messages you send us</li>
      </ul>

      <h3>Automatically Collected Data</h3>
      <p>Like most websites, we automatically collect:</p>
      <ul>
        <li>Your IP address and browser type</li>
        <li>Pages you visit and how long you stay</li>
        <li>How you found our site (referrer)</li>
        <li>General location (city/state level)</li>
      </ul>

      <p>We use this to understand how people find us and which services matter most.</p>

      <!-- How We Use Data -->
      <h2>How We Use Your Information</h2>

      <p><strong>We use your data to:</strong></p>
      <ul>
        <li><strong>Respond to your inquiry</strong> — Answer questions, provide quotes, discuss your project</li>
        <li><strong>Improve our services</strong> — Understand what trades and services you need</li>
        <li><strong>Send updates</strong> — Only if you ask us to. No spam.</li>
        <li><strong>Keep records</strong> — Track conversations and deliverables</li>
      </ul>

      <p><strong>We do NOT:</strong></p>
      <ul>
        <li>Sell your information to third parties</li>
        <li>Share your details without permission</li>
        <li>Use your data for marketing you didn't request</li>
        <li>Track you across other websites</li>
      </ul>

      <!-- Data Security -->
      <h2>How We Protect Your Data</h2>

      <p>Your information is important. We protect it by:</p>
      <ul>
        <li>Using HTTPS encryption on our website</li>
        <li>Storing data on secure, backed-up servers</li>
        <li>Limiting access to authorized staff only</li>
        <li>Requiring strong passwords for all accounts</li>
        <li>Regularly reviewing our security practices</li>
      </ul>

      <p>If we ever suspect a breach, we'll notify you immediately.</p>

      <!-- Cookies -->
      <h2>Cookies & Tracking</h2>

      <p>We use cookies to remember your preferences and track site usage. These help us:</p>
      <ul>
        <li>Remember your form progress</li>
        <li>Understand which pages are most popular</li>
        <li>Improve your experience on our site</li>
      </ul>

      <p>You can disable cookies in your browser settings, but some features may not work as well.</p>

      <!-- Your Rights -->
      <h2>Your Privacy Rights</h2>

      <p>You have the right to:</p>
      <ul>
        <li><strong>Access your data</strong> — Ask us what we have on file</li>
        <li><strong>Correct information</strong> — Update outdated details</li>
        <li><strong>Delete your data</strong> — Request we remove your information</li>
        <li><strong>Opt out</strong> — Unsubscribe from emails anytime</li>
      </ul>

      <p>To exercise these rights, contact us at <strong><span id="email3"></span><script>document.getElementById('email3').innerHTML = atob('dG91Z2hqb2JzLmRyZXdAZ21haWwuY29t')</script></strong> or call <strong>309-928-9080</strong>.</p>

      <!-- Third Parties -->
      <h2>Third-Party Services</h2>

      <p>We use a few trusted services to run our business:</p>
      <ul>
        <li><strong>Email hosting</strong> — To send and receive messages</li>
        <li><strong>Analytics</strong> — To understand website traffic</li>
        <li><strong>Payment processors</strong> — To process quotes and invoices</li>
      </ul>

      <p>These partners are bound by confidentiality agreements and never sell your data.</p>

      <!-- Retention -->
      <h2>How Long We Keep Your Information</h2>

      <p>We keep your data as long as:</p>
      <ul>
        <li>We're actively working together</li>
        <li>You have an open project or inquiry</li>
        <li>It's needed for legal or accounting purposes</li>
      </ul>

      <p>Once your project ends and the service period expires, we'll delete your information unless you ask us to keep it or we're required by law.</p>

      <!-- Children -->
      <h2>Children's Privacy</h2>

      <p>Our services are for business owners and decision-makers, not children. We don't knowingly collect data from anyone under 18. If we find out we have, we'll delete it immediately.</p>

      <!-- Changes -->
      <h2>Changes to This Policy</h2>

      <p>We may update this privacy policy as our business grows. We'll announce major changes and ask for your consent if required by law. Keep checking back for updates.</p>

      <!-- Contact -->
      <h2>Questions?</h2>

      <p>If you have questions about how we handle your data, reach out:</p>
      <ul>
        <li><strong>Email:</strong> <span id="email4"></span><script>document.getElementById('email4').innerHTML = atob('dG91Z2hqb2JzLmRyZXdAZ21haWwuY29t')</script></li>
        <li><strong>Phone:</strong> 309-928-9080</li>
        <li><strong>Address:</strong> 140 Oakmoor Dr, East Peoria, IL 61611</li>
      </ul>

      <p style="margin-top: 40px; margin-bottom: 40px;">We're committed to protecting your privacy and earning your trust. If you have feedback on how we can improve, we'd love to hear it.</p>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 Toughjobs Digital. All rights reserved.</p>
    </div>
  </footer>
<script src="sticky-cta.js"></script>
<script src="inject-header.js"></script>
</body>
</html>
      </main>
      <Footer />
    </React.Fragment>
  );
}
