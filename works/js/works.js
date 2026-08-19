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

/* ---------- Render, cari & pagination katalog ----------
   PAGE_SIZE = jumlah baris per halaman. Ganti angka ini saja kalau
   mau lebih banyak/sedikit karya per halaman (cocok dipakai sampai
   ribuan karya karena hanya baris di halaman aktif yang di-render). */
const PAGE_SIZE = 20;

const compList = document.getElementById('compList');
const tallyN = document.getElementById('tallyN');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');
const paginationEl = document.getElementById('pagination');

tallyN.textContent = String(WORKS.length).padStart(3, '0');

/* Simpan index asli tiap karya (dipakai untuk buka modal yang benar
   walau urutan sedang difilter/dipotong per halaman). */
const WORKS_INDEXED = WORKS.map((w, i) => ({ ...w, _index: i }));
let filteredWorks = WORKS_INDEXED;
let currentPage = 1;

function normalize(str){
  return (str || '').toLowerCase().trim();
}

function applyFilter(){
  const q = normalize(searchInput.value);
  filteredWorks = !q
    ? WORKS_INDEXED
    : WORKS_INDEXED.filter(w => normalize(w.catno).includes(q) || normalize(w.title).includes(q));
  currentPage = 1;
  renderPage();
}

function totalPages(){
  return Math.max(1, Math.ceil(filteredWorks.length / PAGE_SIZE));
}

function renderRows(){
  compList.innerHTML = '';

  if (filteredWorks.length === 0) {
    compList.innerHTML = `<p class="no-results">No matching works found. Try a catalog number (e.g. “DN.12”) or part of the title.</p>`;
    return;
  }

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredWorks.slice(start, start + PAGE_SIZE);

  pageItems.forEach((w, i) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'comp-row';
    row.style.animationDelay = `${i * 0.04}s`;
    row.innerHTML = `
      <span class="cover"><img src="${w.cover}" alt="${w.title} — cover art" loading="lazy"></span>
      <span class="catno">${w.catno}</span>
      <span class="ctitle">${w.title}</span>
      <span class="plus"></span>
    `;
    row.addEventListener('click', () => openWork(w._index));
    compList.appendChild(row);
  });
}

/* Angka halaman dengan "..." kalau halamannya banyak, contoh:
   1 … 4 5 [6] 7 8 … 42 — supaya tetap ringkas walau ada 1000 karya. */
function getPageNumbers(current, total){
  const delta = 1;
  const range = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }
  const withDots = [];
  let prev = 0;
  range.forEach(p => {
    if (prev && p - prev > 1) withDots.push('…');
    withDots.push(p);
    prev = p;
  });
  return withDots;
}

function renderPaginationControls(){
  const total = totalPages();
  paginationEl.innerHTML = '';
  if (total <= 1 || filteredWorks.length === 0) return;

  const makeBtn = (label, page, opts = {}) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'page-btn' + (opts.active ? ' active' : '');
    btn.textContent = label;
    if (opts.disabled) btn.disabled = true;
    if (!opts.disabled && !opts.active) btn.addEventListener('click', () => goToPage(page));
    return btn;
  };

  paginationEl.appendChild(makeBtn('‹', currentPage - 1, { disabled: currentPage === 1 }));

  getPageNumbers(currentPage, total).forEach(p => {
    if (p === '…') {
      const span = document.createElement('span');
      span.className = 'page-ellipsis';
      span.textContent = '…';
      paginationEl.appendChild(span);
    } else {
      paginationEl.appendChild(makeBtn(String(p), p, { active: p === currentPage }));
    }
  });

  paginationEl.appendChild(makeBtn('›', currentPage + 1, { disabled: currentPage === total }));
}

function goToPage(page){
  currentPage = Math.min(Math.max(1, page), totalPages());
  renderPage();
  document.querySelector('.catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateResultCount(){
  const q = searchInput.value.trim();
  resultCount.textContent = q ? `${filteredWorks.length} result${filteredWorks.length === 1 ? '' : 's'} for "${q}"` : '';
}

function renderPage(){
  renderRows();
  renderPaginationControls();
  updateResultCount();
}

let searchDebounce;
searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(applyFilter, 150);
});

renderPage();

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
