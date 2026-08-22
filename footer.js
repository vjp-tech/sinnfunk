// ============================================
// SINNFUNK – Footer (hell, minimal)
// Styling liegt in style.css (.sf-footer …).
// Ausnahme: der "Vertrag kündigen"-Button hat seinen Stil hier unten,
// damit style.css dafür nicht angefasst werden muss.
// ============================================

const sfFooterHTML = `
<div class="sf-footer">

  <style>
    /* Großer "Vertrag kündigen"-Button im Footer */
    .sf-kuend-row { text-align: center; padding: 6px 24px 2px; }
    .sf-kuend-btn {
      display: inline-block;
      font-family: var(--font-body, 'Inter', sans-serif);
      font-size: 1rem; font-weight: 600; letter-spacing: 0.02em;
      color: #fff; background: var(--ink, #353d2e);
      padding: 14px 40px; border: 1px solid var(--ink, #353d2e);
      border-radius: 8px; text-decoration: none; transition: background 0.2s ease;
    }
    .sf-kuend-btn:hover { background: #2b3326; }
  </style>

  <div class="sf-footer-inner">

    <a class="logo" href="index.html" aria-label="Sinnfunk Startseite">
      <img src="image/icon.png" alt="Sinnfunk Logo" style="width:36px;height:36px;" />
      <span>
        <span class="logo-name">Sinnfunk</span>
        <span class="logo-tag">Stimmen, die erden</span>
      </span>
    </a>

    <nav class="sf-footer-nav" aria-label="Footer-Navigation">
      <a href="kontakt.html">Kontakt</a>
      <a href="anleitung.html">Anleitung</a>
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
      <span>© 2026 Sinnfunk</span>
    </nav>

    <div class="sf-footer-social">
      <a class="sf-social-link"
         href="https://www.facebook.com/profile.php?id=61590566336118&locale=de_DE"
         target="_blank" rel="noopener" aria-label="Sinnfunk auf Facebook">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>
      <a class="sf-social-link"
         href="https://www.instagram.com/sinnfunk.webradio/"
         target="_blank" rel="noopener" aria-label="Sinnfunk auf Instagram">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
          <circle cx="17.5" cy="6.5" r="1.2"/>
        </svg>
      </a>
      <a class="sf-social-link"
         href="https://www.youtube.com/@sinnfunk.webradio"
         target="_blank" rel="noopener" aria-label="Sinnfunk auf YouTube">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/>
        </svg>
      </a>
      <a class="sf-social-link"
         href="https://t.me/sinnfunk"
         target="_blank" rel="noopener" aria-label="Sinnfunk auf Telegram">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 2 11 13"/>
          <path d="M22 2 15 22l-4-9-9-4 20-7z"/>
        </svg>
      </a>
    </div>

  </div>

  <div class="sf-kuend-row">
    <a class="sf-kuend-btn" href="kuendigung.html">Vertrag kündigen</a>
  </div>

</div>
`;

document.getElementById('sf-footer').outerHTML = sfFooterHTML;
