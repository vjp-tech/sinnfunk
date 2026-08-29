// ============================================
// SINNFUNK – Footer (drei Spalten, volle Breite)
// Grundfarben/Links liegen in style.css (.sf-footer …).
// Layout + "Vertrag kündigen"-Button werden hier unten gesetzt,
// damit style.css dafür nicht angefasst werden muss.
// ============================================

const sfFooterHTML = `
<div class="sf-footer">

  <style>
    /* ── Footer über die volle Breite, drei Spalten ── */
    .sf-footer .sf-footer-inner {
      max-width: none;
      width: 100%;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 1fr auto 1fr;   /* links | mitte | rechts */
      align-items: center;
      gap: 30px;
      padding: 28px clamp(24px, 5vw, 64px);
    }
    .sf-footer .logo             { justify-self: start; }   /* Logo + Titel links */
    .sf-footer .sf-footer-social { justify-self: end;   }   /* Soziale Medien rechts */

    /* Mittlere Spalte: Links + Button nebeneinander, zentriert */
    .sf-footer .sf-footer-nav {
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px 18px;
    }

    /* "Vertrag kündigen"-Button – umrandet, kompakt */
    .sf-kuend-btn {
      display: inline-block;
      font-family: var(--font-body, 'Inter', sans-serif);
      font-size: 0.82rem; font-weight: 500; letter-spacing: 0.01em;
      color: inherit;                 /* übernimmt die Textfarbe des Footers */
      background: transparent;
      padding: 8px 20px;
      border: 1px solid currentColor; /* Umrandung in derselben Farbe */
      border-radius: 7px;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.15s ease;
    }
    .sf-kuend-btn:hover { background: rgba(128,128,128,0.12); }

    /* Auf schmalen Bildschirmen: alles untereinander, zentriert */
    @media (max-width: 760px) {
      .sf-footer .sf-footer-inner {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        gap: 24px;
        padding: 26px 22px;
      }
      .sf-footer .logo,
      .sf-footer .sf-footer-nav,
      .sf-footer .sf-footer-social { justify-self: center; }
    }
  </style>

  <div class="sf-footer-inner">

    <!-- Spalte 1: Logo + Titel -->
    <a class="logo" href="index.html" aria-label="Sinnfunk Startseite">
      <img src="image/icon.png" alt="Sinnfunk Logo" style="width:36px;height:36px;" />
      <span>
        <span class="logo-name">Sinnfunk</span>
        <span class="logo-tag">Stimmen, die erden</span>
      </span>
    </a>

    <!-- Spalte 2: Links + Vertrag kündigen -->
    <nav class="sf-footer-nav" aria-label="Footer-Navigation">
    <a class="sf-kuend-btn" href="kontakt.html">Kontakt</a>
      <a href="freunde.html">Freunde</a>
      <a href="anleitung.html">Anleitung</a>
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
      <a class="sf-kuend-btn" href="kuendigung.html">Vertrag kündigen</a>
      <span>© 2026 Sinnfunk</span>
    </nav>

    <!-- Spalte 3: Soziale Medien -->
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
      <a class="sf-social-link"
         href="https://whatsapp.com/channel/0029Vb9Is4684Om46ypyyr2Z"
         target="_blank" rel="noopener" aria-label="Sinnfunk auf WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 5.76 2.38 8.1 8.1 0 0 1 2.38 5.73c0 4.48-3.65 8.13-8.14 8.13a8.1 8.1 0 0 1-4.14-1.13l-.3-.17-3.09.81.83-3.01-.19-.31a8.09 8.09 0 0 1-1.24-4.32c0-4.49 3.65-8.13 8.13-8.13zm-4.5 4.34c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.71 4.24 3.7 2.1.82 2.53.66 2.98.62.45-.04 1.46-.6 1.66-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.46-.28-.24-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.24-.64.8-.79.97-.15.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.78-1.85-.2-.48-.4-.42-.56-.43h-.01z"/>
        </svg>
      </a>
    </div>

  </div>
</div>
`;

document.getElementById('sf-footer').outerHTML = sfFooterHTML;

