// ============================================
// SINNFUNK – Gemeinsame Navigation
// Neue Seite hinzufügen? Einfach hier einen
// weiteren <a href="...">...</a> eintragen.
// ============================================

const sfNav = `
<header>
  <a class="logo" href="index.html" aria-label="Sinnfunk Startseite">
    <img src="image/sinnfunk_logo_ohne_schrift.svg" alt="Sinnfunk Logo" />
    <span class="logo-name">Sinnfunk</span>
  </a>
  <nav aria-label="Hauptnavigation">
    <a href="index.html">Start</a>
    <a href="podcaster.html">Mitmachen</a>
    <a href="community.html">Community</a>
    <a href="shop.html">Shop</a>
    <a href="kontakt.html">Kontakt</a>
    <a href="impressum.html">Impressum</a>
  </nav>
</header>
`;

document.getElementById('sf-nav').outerHTML = sfNav;

document.querySelectorAll('header nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'var(--sage-dark)';
    link.style.fontWeight = '700';
  }
});
