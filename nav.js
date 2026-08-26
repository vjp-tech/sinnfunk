// ============================================
// SINNFUNK – Navigation & Hamburger-Menü
// Neue Seite? Einfach einen <a> in navLinks eintragen.
// Styling liegt komplett in style.css (.sf-header …).
// ============================================

const STREAM_URL = 'https://radio.sinnfunk.live/radio.mp3';
const GOLD_STYLE = 'color:var(--gold-deep,#a8945c)!important;font-weight:600;';

const navLinks = [
  { href: 'index.html',      label: 'Start' },
  { href: 'mitmachen.html',  label: 'Mitmachen' },
  { href: 'community.html',  label: 'Sinnfunker' },
  { href: 'nachhoeren.html', label: 'Nachhören' },
  { href: 'shop.html',       label: 'Shop' },
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
      <a href="index.html#player" class="sf-live-btn" style="${GOLD_STYLE}">Live hören</a>
      <button class="sf-burger" id="sf-burger" aria-label="Menü öffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="sf-mobile-nav" id="sf-mobile-nav" role="navigation" aria-label="Mobile Navigation">
      ${linksHTML}
      <a href="index.html#player" class="sf-live-btn" style="${GOLD_STYLE}">Live hören</a>
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

// ---- Live hören: sofort abspielen, egal auf welcher Seite ----
let liveAudio = null;
const liveButtons = document.querySelectorAll('.sf-live-btn');

function setLiveLabel(playing) {
  liveButtons.forEach(btn => { btn.textContent = playing ? 'Pause' : 'Live hören'; });
}

function getLiveAudio() {
  if (liveAudio) return liveAudio;
  // Falls die Seite schon ein <audio> hat (z. B. der Player auf index.html), das nutzen …
  liveAudio = document.querySelector('audio');
  if (!liveAudio) {
    // … sonst ein eigenes, unsichtbares Audioelement anlegen
    liveAudio = document.createElement('audio');
    liveAudio.preload = 'none';
    liveAudio.src = STREAM_URL;
    document.body.appendChild(liveAudio);
  } else if (!liveAudio.src && !liveAudio.currentSrc && !liveAudio.querySelector('source')) {
    liveAudio.src = STREAM_URL;
  }
  liveAudio.addEventListener('play',  () => setLiveLabel(true));
  liveAudio.addEventListener('pause', () => setLiveLabel(false));
  return liveAudio;
}

liveButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const audio = getLiveAudio();
    if (audio.paused) {
      const p = audio.play();
      if (p && p.catch) p.catch(() => setLiveLabel(false));
    } else {
      audio.pause();
    }
  });
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
