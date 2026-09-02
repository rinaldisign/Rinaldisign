/* ============================================================
   RINALDISIGN — ABOUT PAGE LOGIC
   Butuh ABOUT dari about-data.js (load file itu duluan di HTML).
   Tidak perlu diedit untuk mengubah foto/teks/sosial — lihat
   about-data.js.
   ============================================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Intro: logo + ensō, sekali per sesi browser ---------- */
const introScreen = document.getElementById('introScreen');
const seenIntro = sessionStorage.getItem('rinaldi_intro_seen');

function endIntro(){
  introScreen.classList.add('leaving');
  document.body.style.overflow = '';
  sessionStorage.setItem('rinaldi_intro_seen', '1');
}

if (seenIntro) {
  introScreen.style.display = 'none';
} else {
  document.body.style.overflow = 'hidden';
  setTimeout(endIntro, 2200);
}
introScreen.addEventListener('click', endIntro);

/* ---------- mobile nav toggle (hamburger) ---------- */
(function(){
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  if (!nav || !toggle) return;
  toggle.addEventListener('click', function(){
    const isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('.links a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---------- Kunang-kunang ---------- */
const fireflyLayer = document.getElementById('fireflies');
const FIREFLY_COUNT = 22;

for (let i = 0; i < FIREFLY_COUNT; i++) {
  const f = document.createElement('div');
  f.className = 'firefly';
  const left = Math.random() * 100;
  const duration = 9 + Math.random() * 10;
  const delay = Math.random() * 12;
  const flickerDuration = 2.5 + Math.random() * 3;
  f.style.left = left + 'vw';
  f.style.animationDuration = `${duration}s, ${flickerDuration}s`;
  f.style.animationDelay = `${delay}s, ${delay * 0.5}s`;
  fireflyLayer.appendChild(f);
}

/* ---------- Render konten dari ABOUT (about-data.js) ---------- */
(function(){
  if (typeof ABOUT === 'undefined') return;

  const photo = document.getElementById('aboutPhoto');
  if (photo) {
    photo.src = ABOUT.photo;
    photo.alt = ABOUT.photoAlt || '';
  }

  const nameEl = document.getElementById('aboutName');
  if (nameEl) nameEl.textContent = ABOUT.name || '';

  const textEl = document.getElementById('aboutText');
  if (textEl && Array.isArray(ABOUT.bio)) {
    textEl.innerHTML = '';
    ABOUT.bio.forEach(function(paragraph){
      const p = document.createElement('p');
      p.textContent = paragraph;
      textEl.appendChild(p);
    });
  }

  const socialGrid = document.getElementById('socialGrid');
  if (socialGrid && Array.isArray(ABOUT.social)) {
    socialGrid.innerHTML = '';
    ABOUT.social.forEach(function(s){
      const a = document.createElement('a');
      a.className = 'platform-card';
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `<img src="${s.icon}" alt=""><span>${s.label}</span>`;
      socialGrid.appendChild(a);
    });
  }
})();

/* ---------- scroll reveal ---------- */
(function(){
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(function(el){ obs.observe(el); });
})();
