/* ============================================================
   ECHOES-LIST.JS — logic khusus halaman index.html (list post)
   Tidak perlu diedit untuk menambah post baru — cukup edit
   js/echoes-data.js. File ini murni membaca ECHOES dan me-render
   grid kartu + intro + kunang-kunang, sama seperti works.js tapi
   dipisah khusus supaya halaman Echoes gampang dikembangkan sendiri
   tanpa risiko mengganggu halaman Works.
   ============================================================ */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Intro (logo + ensō), sekali per sesi tab ---------- */
(function initIntro(){
  const intro = document.getElementById("introScreen");
  if (!intro) return;
  const already = sessionStorage.getItem("rd_intro_seen");
  if (already) {
    intro.style.display = "none";
  } else {
    setTimeout(() => {
      intro.classList.add("leaving");
      sessionStorage.setItem("rd_intro_seen", "1");
      setTimeout(() => { intro.style.display = "none"; }, 900);
    }, 1400);
  }
})();

/* ---------- Kunang-kunang, dekorasi background ---------- */
(function initFireflies(){
  const wrap = document.getElementById("fireflies");
  if (!wrap) return;
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const f = document.createElement("div");
    f.className = "firefly";
    f.style.left = Math.random() * 100 + "%";
    f.style.animationDuration = (14 + Math.random() * 10) + "s, " + (2 + Math.random() * 2) + "s";
    f.style.animationDelay = (Math.random() * 14) + "s, " + (Math.random() * 2) + "s";
    wrap.appendChild(f);
  }
})();

/* ---------- Nav — beri class "scrolled" saat discroll ---------- */
(function initNavScroll(){
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- Ambil thumbnail YouTube otomatis dari videoId ---------- */
function youtubeThumb(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Render grid kartu ---------- */
function renderEchoGrid() {
  const grid = document.getElementById("echoGrid");
  if (!grid) return;

  const items = Array.isArray(window.ECHOES) ? window.ECHOES : [];

  if (items.length === 0) {
    grid.innerHTML = `<p class="echo-empty">No echoes yet — the first one is on its way.</p>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => {
    const thumb = item.thumbnail || youtubeThumb(item.videoId);
    return `
      <a class="echo-card" href="post.html?id=${encodeURIComponent(item.id)}" style="animation-delay:${i * 0.06}s">
        <div class="echo-thumb">
          <img src="${escapeHtml(thumb)}" alt="${escapeHtml(item.title)}" loading="lazy">
          <div class="play-badge">
            <span class="ring">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </span>
          </div>
        </div>
        <div class="echo-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p class="caption">${escapeHtml(item.caption)}</p>
          ${item.date ? `<span class="meta">${escapeHtml(item.date)}</span>` : ""}
        </div>
      </a>
    `;
  }).join("");
}

renderEchoGrid();
