// ============================================
// SINNFUNK – Navigation & Hamburger-Menü
// Neue Seite? Einfach einen <a> in navLinks eintragen.
// Styling liegt komplett in style.css (.sf-header …).
// ============================================

const navLinks = [
  { href: 'index.html',     label: 'Start' },
  { href: 'mitmachen.html', label: 'Mitmachen' },
  { href: 'community.html', label: 'Community' },
  { href: 'shop.html',      label: 'Shop' },
  { href: 'kontakt.html',   label: 'Kontakt' },
];

const linksHTML = navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

const sfNavHTML = `
<div class="sf-header">
  <header>
    <a class="logo" href="index.html" aria-label="Sinnfunk Startseite">
      <img src="image/icon.png" alt="Sinnfunk Logo" />
      <span>
        <span class="logo-name">Sinnfunk</span>
        <span class="logo-tag">Webradio</span>
      </span>
    </a>

    <nav aria-label="Hauptnavigation">${linksHTML}</nav>

    <div style="display:flex;align-items:center;gap:14px;justify-self:end;">
      <a class="sf-cta" href="index.html#player">Live hören</a>
      <button class="sf-burger" id="sf-burger" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="sf-mobile-nav" id="sf-mobile-nav" role="navigation" aria-label="Mobile Navigation">
      ${linksHTML}
      <a href="index.html#player" style="color:var(--gold-deep);font-weight:600;">Live hören</a>
    </div>
  </header>
</div>
`;

document.getElementById('sf-nav').outerHTML = sfNavHTML;

// Aktiven Link hervorheben
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sf-header nav a, .sf-mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('sf-nav-active');
});

// Hamburger
const burger    = document.getElementById('sf-burger');
const mobileNav = document.getElementById('sf-mobile-nav');

burger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

document.addEventListener('click', e => {
  if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  }
});
