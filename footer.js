// ============================================
// SINNFUNK – Footer (hell, minimal)
// Styling liegt in style.css (.sf-footer …).
// ============================================

const sfFooterHTML = `
<div class="sf-footer">
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
    </div>

  </div>
</div>
`;

document.getElementById('sf-footer').outerHTML = sfFooterHTML;
