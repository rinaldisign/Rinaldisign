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

function openWork(index){
  const w = WORKS[index];
  if (!w) return;

  mCover.src = w.cover;
  mCover.alt = w.title + ' — cover art';
  mCatno.textContent = w.catno;
  mTitle.textContent = w.title;
  mDesc.textContent = w.desc;

  if (w.soundcloud) {
    mPlayerWrap.style.display = '';
    mPlayer.src = w.soundcloud;
  } else {
    mPlayerWrap.style.display = 'none';
    mPlayer.src = '';
  }

  mMusescore.href = w.musescore || '#';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWork(){
  modal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { mPlayer.src = ''; }, 400);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeWork();
});
