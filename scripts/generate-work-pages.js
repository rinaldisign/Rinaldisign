/* ============================================================
   GENERATE-WORK-PAGES.JS
   ------------------------------------------------------------
   Generate satu halaman statis per karya di works/<slug>/index.html,
   supaya:
     1. Tiap karya punya URL sendiri yang bisa di-share
        (https://rinaldisign.com/works/dn1/, dst).
     2. Saat link itu di-share ke WhatsApp/Twitter/dll, preview-nya
        menampilkan cover + judul + deskripsi karya yang benar
        (lewat meta tag Open Graph statis di HTML mentah — bukan
        hasil JS, karena crawler share-preview TIDAK menjalankan JS).
     3. Untuk pengunjung manusia biasa, halaman ini adalah salinan
        penuh halaman Works (list + search + pagination) dan otomatis
        membuka popup karya yang sesuai saat dimuat — jadi pengalaman
        browsing/minimize popup tetap sama seperti biasa.

   TIDAK PERLU DIEDIT. Jalan otomatis setiap works-data.js berubah
   (lihat .github/workflows/generate-work-pages.yml). Bisa juga
   dijalankan manual:
       node scripts/generate-work-pages.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE_ORIGIN = 'https://rinaldisign.com';
const REPO_ROOT = path.resolve(__dirname, '..');
const WORKS_DIR = path.join(REPO_ROOT, 'works');
const DATA_FILE = path.join(WORKS_DIR, 'js', 'works-data.js');
const TEMPLATE_FILE = path.join(WORKS_DIR, 'index.html');

/* ---------- 1. Baca WORKS dari works-data.js tanpa mengubah file itu ---------- */
function loadWorks() {
  const code = fs.readFileSync(DATA_FILE, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + '\nthis.__WORKS__ = WORKS;', sandbox);
  return sandbox.__WORKS__;
}

/* ---------- 2. Slug — HARUS identik dengan slugify() di js/works.js ---------- */
function slugify(catno) {
  return (catno || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function truncate(str, max) {
  const s = String(str || '').trim();
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + '…';
}

/* Path cover di works-data.js ditulis relatif terhadap works/index.html,
   misal "../img/covers/x.jpg" -> jadi "/img/covers/x.jpg" di root domain. */
function coverAbsoluteUrl(coverPath) {
  const rootRelative = coverPath.replace(/^(\.\.\/)+/, '/');
  return SITE_ORIGIN + (rootRelative.startsWith('/') ? rootRelative : '/' + rootRelative);
}

/* ---------- 3. Rewrite path asset di template supaya cocok untuk
   halaman yang berada satu level lebih dalam (works/<slug>/index.html) ---------- */
function rewriteAssetPaths(html) {
  return html
    .replace(/href="\.\.\/css\/style\.css"/, 'href="/css/style.css"')
    .replace(/href="css\/works\.css"/, 'href="/works/css/works.css"')
    .replace(/href="\.\.\/favicon\.ico"/, 'href="/favicon.ico"')
    .replace(/src="\.\.\/img\//g, 'src="/img/')
    .replace(/href="\.\.\/index\.html/g, 'href="/index.html')
    .replace(/href="\.\.\/index\.html#listen"/g, 'href="/index.html#listen"')
    .replace(/class="mark" href="\.\.\/index\.html"/, 'class="mark" href="/index.html"')
    .replace(/src="js\/works-data\.js"/, 'src="/works/js/works-data.js"')
    .replace(/src="js\/works\.js"/, 'src="/works/js/works.js"');
}

/* ---------- 4. Sisipkan meta tag OG/Twitter + judul spesifik karya ---------- */
function injectMeta(html, work, slug) {
  const title = `${work.catno} — ${work.title} | Rinaldisign`;
  const desc = truncate(work.desc, 200) || `${work.title} — original piano composition by Rinaldisign.`;
  const url = `${SITE_ORIGIN}/works/${slug}/`;
  const image = coverAbsoluteUrl(work.cover);

  const metaBlock = `
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}">
<link rel="canonical" href="${url}">

<meta property="og:type" content="music.song">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:site_name" content="Rinaldisign">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(desc)}">
<meta name="twitter:image" content="${image}">

<script>window.__OPEN_WORK__ = ${JSON.stringify(slug)};</script>`;

  // Ganti <title>...</title> dan <meta name="description" ...> bawaan
  // dengan blok di atas (title lama dihapus, description lama dihapus).
  return html
    .replace(/<title>.*?<\/title>/s, '')
    .replace(/<meta name="description"[^>]*>/, metaBlock);
}

/* ---------- 5. Generate semua halaman ---------- */
function run() {
  const works = loadWorks();
  const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');
  const withFixedPaths = rewriteAssetPaths(template);

  const seenSlugs = new Set();
  let count = 0;

  works.forEach((w) => {
    const slug = slugify(w.catno);
    if (!slug) {
      console.warn(`[skip] Karya "${w.title}" tidak punya catno yang valid untuk dijadikan slug.`);
      return;
    }
    if (seenSlugs.has(slug)) {
      console.warn(`[skip] Slug duplikat "${slug}" (catno "${w.catno}") — lewati, cek works-data.js.`);
      return;
    }
    seenSlugs.add(slug);

    const outDir = path.join(WORKS_DIR, slug);
    const outFile = path.join(outDir, 'index.html');
    const html = injectMeta(withFixedPaths, w, slug);

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
    count++;
  });

  console.log(`✔ ${count} halaman karya berhasil digenerate di works/<slug>/index.html`);
}

run();
