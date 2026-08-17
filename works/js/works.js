/* ============================================================
   RINALDISIGN — WORKS PAGE LOGIC
   Butuh WORKS dari works-data.js (load file itu duluan di HTML).
   Tidak perlu diedit untuk menambah karya — lihat works-data.js.
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
introScreen.addEventListener('click', endIntro); // klik untuk skip

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

/* ---------- Render list katalog dari WORKS ---------- */
const compList = document.getElementById('compList');
const tallyN = document.getElementById('tallyN');

WORKS.forEach((w, i) => {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = 'comp-row';
  row.innerHTML = `
    <span class="cover"><img src="${w.cover}" alt="${w.title} — cover art" loading="lazy"></span>
    <span class="catno">${w.catno}</span>
    <span class="ctitle">${w.title}</span>
    <span class="plus"></span>
  `;
  row.addEventListener('click', () => openWork(i));
  compList.appendChild(row);
});

/* Stagger animasi masuk untuk baris yang langsung terlihat di layar
   pertama (biar tidak ratusan baris nge-flash bareng kalau katalog
   sudah panjang) — sisanya baru "masuk" halus saat discroll. */
const allRows = compList.querySelectorAll('.comp-row');
allRows.forEach((row, i) => {
  row.style.animationDelay = `${Math.min(i, 10) * 0.05}s`;
});

if ('IntersectionObserver' in window) {
  const rowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        rowObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  allRows.forEach((row, i) => {
    if (i >= 10) {
      row.style.animationPlayState = 'paused';
      rowObserver.observe(row);
    }
  });
}

tallyN.textContent = String(WORKS.length).padStart(3, '0');

/* ---------- Popup (satu modal dipakai ulang untuk semua karya) ---------- */
const modal = document.getElementById('workModal');
const mCover = document.getElementById('mCover');
const mCatno = document.getElementById('mCatno');
const mTitle = document.getElementById('mTitle');
const mDesc = document.getElementById('mDesc');
const mPlayerWrap = document.getElementById('mPlayerWrap');
const mPlayer = document.getElementById('mPlayer');
const mMusescore = document.getElementById('mMusescore');
const mMuseWrap = document.getElementById('mMuseWrap');
const mMuseFrame = document.getElementById('mMuseFrame');
const mMuseToggle = document.getElementById('mMuseToggle');

/* Ubah link halaman Musescore biasa jadi URL embed.
   Pola Musescore.com: .../user/USERID/scores/SCOREID -> tambah "/embed"
   Kalau linknya bukan pola itu (atau kosong/"#"), return null supaya
   section embed disembunyikan. */
function musescoreEmbedSrc(w){
  if (w.musescoreEmbed) return w.musescoreEmbed;
  const link = w.musescore;
  if (!link || link === '#') return null;
  if (/musescore\.com\/.+\/scores\/[^/?#]+/.test(link)) {
    return link.replace(/\/embed.*$/, '').replace(/\/+$/, '') + '/embed?autoplay=false';
  }
  return null;
}

function openWork(index){
  const w = WORKS[index];
  if (!w) return;

  mCover.src = w.cover;
  mCover.alt = w.title + ' — cover art';
  mCatno.textContent = w.catno;
  mTitle.textContent = w.title;
  mDesc.textContent = w.desc;
  mDesc.scrollTop = 0; /* reset scroll deskripsi tiap buka karya baru */

  if (w.soundcloud) {
    mPlayerWrap.style.display = '';
    mPlayer.src = w.soundcloud;
  } else {
    mPlayerWrap.style.display = 'none';
    mPlayer.src = '';
  }

  const museSrc = musescoreEmbedSrc(w);
  if (museSrc) {
    mMuseWrap.style.display = '';
    mMuseFrame.src = museSrc;
  } else {
    mMuseWrap.style.display = 'none';
    mMuseFrame.src = '';
  }

  if (w.musescore && w.musescore !== '#') {
    mMusescore.style.display = '';
    mMusescore.href = w.musescore;
  } else {
    mMusescore.style.display = 'none';
    mMusescore.href = '#';
  }

  modal.classList.remove('ms-expanded'); /* selalu mulai dari ukuran kecil */
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWork(){
  modal.classList.remove('active');
  modal.classList.remove('ms-expanded');
  document.body.style.overflow = '';
  setTimeout(() => {
    mPlayer.src = '';
    mMuseFrame.src = '';
  }, 400);
}

/* Toggle expand/minimize khusus embed Musescore — popup induk tetap
   kecil, hanya bagian embed ini yang membesar menutupi sebagian besar
   layar supaya notasi lebih mudah dibaca. */
function toggleMuseExpand(){
  const expanding = !modal.classList.contains('ms-expanded');
  modal.classList.toggle('ms-expanded', expanding);
  mMuseToggle.title = expanding ? 'Perkecil' : 'Perbesar';
  mMuseToggle.setAttribute('aria-label', expanding ? 'Perkecil tampilan sheet music' : 'Perbesar tampilan sheet music');
}
mMuseToggle.addEventListener('click', toggleMuseExpand);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (modal.classList.contains('ms-expanded')) {
    toggleMuseExpand(); /* Escape pertama: perkecil embed dulu */
  } else {
    closeWork();
  }
});
