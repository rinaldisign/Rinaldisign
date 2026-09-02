/* ============================================================
   ECHOES-POST.JS — logic khusus halaman post.html (1 halaman
   dipakai ulang untuk SEMUA post, dibedakan lewat ?id= di URL).
   Tidak perlu diedit untuk menambah/mengubah post — cukup edit
   js/echoes-data.js.
   ------------------------------------------------------------
   Cara kerja gelembung komentar:
   - Kalau SEMUA komentar di data TIDAK punya field "at": gelembung
     muncul otomatis satu-satu tiap ~2.5 detik selama video diputar
     (mode "beruntun" — paling gampang dipakai, tidak perlu atur
     detik apa pun).
   - Kalau ADA komentar yang punya field "at" (detik di video):
     gelembung itu muncul tepat saat video sampai di detik tersebut
     (mode "tersinkron" — dipakai kalau mau lebih presisi).
   Video dipause -> gelembung berhenti muncul. Video diputar lagi
   -> lanjut dari yang belum muncul (tidak mengulang dari awal),
   kecuali tombol "Replay comments" ditekan.
   ============================================================ */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Intro ---------- */
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

/* ---------- Kunang-kunang ---------- */
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

(function initNavScroll(){
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- mobile nav toggle (hamburger) ---------- */
(function initNavToggle(){
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", function(){
    const isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  nav.querySelectorAll(".links a").forEach(function(a){
    a.addEventListener("click", function(){
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- 1. Cari post sesuai ?id= di URL ---------- */
const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id");
const items = Array.isArray(window.ECHOES) ? window.ECHOES : [];
const post = items.find((it) => it.id === requestedId) || items[0] || null;

const els = {
  title: document.getElementById("postTitle"),
  date: document.getElementById("postDate"),
  desc: document.getElementById("postDesc"),
  sourceLink: document.getElementById("sourceLink"),
  bubbleFeed: document.getElementById("bubbleFeed"),
  commentsHint: document.getElementById("commentsHint"),
  replayBtn: document.getElementById("replayBtn"),
};

if (!post) {
  els.title.textContent = "Post not found";
  els.desc.textContent = "This echo doesn't exist (yet). Head back to see all of them.";
  document.querySelector(".post-layout").style.display = "none";
} else {
  document.title = `${post.title} — Echoes | Rinaldisign`;
  els.title.textContent = post.title;
  els.date.textContent = post.date || "Echoes";
  els.desc.textContent = post.description || post.caption || "";

  if (post.vertical) {
    document.querySelector(".video-frame").classList.add("is-vertical");
  }

  if (post.sourceUrl) {
    els.sourceLink.href = post.sourceUrl;
    els.sourceLink.textContent = (post.sourceLabel || "Lihat thread di Reddit") + " →";
  } else {
    els.sourceLink.style.display = "none";
  }
}

/* ---------- 2. Player YouTube + logic gelembung ---------- */
let ytPlayer = null;
let revealTimer = null;
let nextIndex = 0;

const comments = (post && Array.isArray(post.comments)) ? post.comments : [];
const useSyncedMode = comments.some((c) => typeof c.at === "number");

function renderBubble(comment) {
  const b = document.createElement("div");
  b.className = "bubble";
  b.innerHTML = `<span class="author">${escapeHtml(comment.author)}</span><span class="text">${escapeHtml(comment.text)}</span>`;
  els.bubbleFeed.appendChild(b);
  els.bubbleFeed.scrollTop = els.bubbleFeed.scrollHeight;
}

function updateHint() {
  if (!els.commentsHint) return;
  if (comments.length === 0) {
    els.commentsHint.textContent = "";
  } else if (nextIndex >= comments.length) {
    els.commentsHint.textContent = "All comments shown";
  } else if (nextIndex === 0) {
    els.commentsHint.textContent = "Press play to see reactions";
  } else {
    els.commentsHint.textContent = `${nextIndex}/${comments.length} comments`;
  }
}

function revealNextTimed() {
  if (nextIndex >= comments.length) {
    clearInterval(revealTimer);
    revealTimer = null;
    updateHint();
    return;
  }
  renderBubble(comments[nextIndex]);
  nextIndex++;
  updateHint();
}

function revealDueSynced() {
  if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
  const t = ytPlayer.getCurrentTime();
  while (nextIndex < comments.length && (comments[nextIndex].at == null || comments[nextIndex].at <= t)) {
    renderBubble(comments[nextIndex]);
    nextIndex++;
  }
  updateHint();
  if (nextIndex >= comments.length) {
    clearInterval(revealTimer);
    revealTimer = null;
  }
}

function startRevealing() {
  if (revealTimer || nextIndex >= comments.length) return;
  revealTimer = setInterval(useSyncedMode ? revealDueSynced : revealNextTimed, useSyncedMode ? 300 : 2500);
}

function stopRevealing() {
  if (revealTimer) {
    clearInterval(revealTimer);
    revealTimer = null;
  }
}

function resetBubbles() {
  stopRevealing();
  nextIndex = 0;
  els.bubbleFeed.innerHTML = "";
  updateHint();
}

if (comments.length === 0 && els.bubbleFeed) {
  els.bubbleFeed.innerHTML = `<p class="bubble-empty">No comments added yet — add them in js/echoes-data.js.</p>`;
} else {
  updateHint();
}

/* ---------- 3. YouTube IFrame API ---------- */
function onYouTubeIframeAPIReady() {
  if (!post || !post.videoId) return;
  ytPlayer = new YT.Player("ytPlayer", {
    videoId: post.videoId,
    playerVars: { rel: 0, modestbranding: 1 },
    events: {
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          startRevealing();
        } else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) {
          stopRevealing();
        }
      },
    },
  });
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
// Kalau API sudah lebih dulu siap sebelum script ini jalan (jarang, tapi jaga-jaga)
if (window.YT && window.YT.Player) {
  onYouTubeIframeAPIReady();
}

/* ---------- 4. Tombol Replay ---------- */
if (els.replayBtn) {
  els.replayBtn.addEventListener("click", () => {
    resetBubbles();
    if (ytPlayer && typeof ytPlayer.seekTo === "function") {
      ytPlayer.seekTo(0, true);
      ytPlayer.playVideo();
    }
  });
}
