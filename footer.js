// ============================================
// SINNFUNK – Footer
// Social-Media-Links? Hier eintragen.
// ============================================

const sfFooterCSS = document.createElement('style');
sfFooterCSS.textContent = `
  footer {
    width: min(1120px, calc(100% - 32px));
    margin: 0 auto;
    padding: 36px 0 48px;
    border-top: 1px solid rgba(123, 94, 69, 0.16);
    color: var(--muted);
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    font-size: 0.92rem;
  }

  .sf-footer-legal a:hover,
  footer a:hover {
    color: var(--sage-dark);
  }

  .sf-footer-social {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .sf-social-link {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(123, 94, 69, 0.22);
    background: rgba(255, 250, 242, 0.6);
    color: var(--muted);
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .sf-social-link:hover {
    background: rgba(83, 107, 80, 0.10);
    color: var(--sage-dark);
    border-color: rgba(83, 107, 80, 0.35);
  }

  .sf-social-link svg {
    width: 17px;
    height: 17px;
    fill: currentColor;
  }
`;
document.head.appendChild(sfFooterCSS);

const sfFooterHTML = `
<footer>
  <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;">
    <span style="width:28px;height:28px;border-radius:50%;border:1.5px solid #b0894f;display:block;flex:none;"></span>
    <span style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:1.25rem;letter-spacing:.01em;">sinnfunk</span>
  </a>

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

  <span class="sf-footer-legal">
    <a href="impressum.html">Impressum</a> ·
    <a href="datenschutz.html">Datenschutz</a> ·
    <a href="kontakt.html">Kontakt</a>
  </span>
</footer>
`;

document.getElementById('sf-footer').outerHTML = sfFooterHTML;
