// ============================================
// SINNFUNK – Navigation & Hamburger-Menü
// Neue Seite? Einfach einen <a> eintragen.
// ============================================

// ── CSS einfügen ────────────────────────────
const sfNavCSS = document.createElement('style');
sfNavCSS.textContent = `
  /* Hamburger-Button */
  .sf-burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: rgba(255,250,242,0.8);
    border: 1px solid rgba(123,94,69,0.2);
    border-radius: 12px;
    cursor: pointer;
    padding: 10px;
    flex-shrink: 0;
  }

  .sf-burger span {
    display: block;
    height: 2px;
    background: var(--sage-dark);
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s;
  }

  /* Burger → X Animation */
  .sf-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .sf-burger.open span:nth-child(2) { opacity: 0; }
  .sf-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* Mobile Menü (Dropdown) */
  .sf-mobile-nav {
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    right: 16px;
    left: 16px;
    background: rgba(255,250,242,0.98);
    border: 1px solid rgba(123,94,69,0.16);
    border-radius: 20px;
    box-shadow: 0 16px 40px rgba(74,59,43,0.14);
    padding: 12px;
    z-index: 1000;
    flex-direction: column;
    gap: 4px;
    backdrop-filter: blur(12px);
  }

  .sf-mobile-nav.open {
    display: flex;
  }

  .sf-mobile-nav a {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: var(--text);
    padding: 13px 18px;
    border-radius: 12px;
    transition: background 0.15s, color 0.15s;
    font-weight: 500;
  }

  .sf-mobile-nav a:hover {
    background: rgba(83,107,80,0.09);
    color: var(--sage-dark);
  }

  .sf-mobile-nav a.sf-nav-active {
    background: rgba(83,107,80,0.12);
    color: var(--sage-dark);
    font-weight: 700;
  }

  /* Header relativ für Dropdown-Positionierung */
  header {
    position: relative;
  }

  /* Auf Mobil: Burger zeigen, Desktop-Nav verstecken */
  @media (max-width: 900px) {
    header nav { display: none !important; }
    .sf-burger  { display: flex; }
  }
`;
document.head.appendChild(sfNavCSS);

// ── Nav-Links ────────────────────────────────
const navLinks = [
  { href: 'index.html',      label: 'Start' },
  { href: 'mitmachen.html',  label: 'Mitmachen' },
  { href: 'community.html',  label: 'Community' },
  { href: 'shop.html',       label: 'Shop' },
  { href: 'kontakt.html',    label: 'Kontakt' },
];

// Links als HTML-String
const linksHTML = navLinks
  .map(l => `<a href="${l.href}">${l.label}</a>`)
  .join('');

// ── Header HTML ──────────────────────────────
const sfNavHTML = `
<header>
  <a class="logo" href="index.html" aria-label="Sinnfunk Startseite" style="display:flex;align-items:center;gap:11px;text-decoration:none;color:inherit;">
    <span style="width:34px;height:34px;border-radius:50%;border:1.5px solid #b0894f;display:block;flex:none;"></span>
    <span style="display:flex;flex-direction:column;line-height:1;">
      <span style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:1.45rem;letter-spacing:.01em;">sinnfunk</span>
      <span style="font-size:.6rem;letter-spacing:.22em;text-transform:uppercase;color:#9a8f7d;margin-top:3px;">Sprachradio</span>
    </span>
  </a>

  <!-- Desktop Navigation -->
  <nav aria-label="Hauptnavigation">
    ${linksHTML}
  </nav>

  <!-- Hamburger Button (nur Mobil) -->
  <button class="sf-burger" id="sf-burger"
    aria-label="Menü öffnen" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Mobile Navigation -->
  <div class="sf-mobile-nav" id="sf-mobile-nav" role="navigation"
    aria-label="Mobile Navigation">
    ${linksHTML}
  </div>
</header>
`;

// ── Einfügen ─────────────────────────────────
document.getElementById('sf-nav').outerHTML = sfNavHTML;

// ── Aktiven Link hervorheben ─────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('header nav a, .sf-mobile-nav a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('sf-nav-active');
    link.style.color     = 'var(--sage-dark)';
    link.style.fontWeight = '700';
  }
});

// ── Hamburger Toggle ─────────────────────────
const burger    = document.getElementById('sf-burger');
const mobileNav = document.getElementById('sf-mobile-nav');

burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

// Menü schließen beim Klick auf einen Link
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// Menü schließen beim Klick außerhalb
document.addEventListener('click', e => {
  if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  }
});
