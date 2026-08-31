/* ============================================================
   DATA ECHOES — INI SATU-SATUNYA FILE YANG PERLU DIEDIT
   untuk menambah atau mengubah post reaksi (Reddit, dsb).
   ------------------------------------------------------------
   Cara menambah post baru:
   1. Copy satu blok { ... } di bawah (dari "id:" sampai "]" penutup)
   2. Tempel sebagai item baru di array ECHOES
   3. Ganti isinya sesuai post barumu
   List di halaman echoes/index.html & halaman detail di
   echoes/post.html akan otomatis mengikuti — tidak perlu sentuh
   HTML atau JS lain sama sekali.

   Keterangan tiap field:
     id           -> slug unik buat URL, contoh "viral-r-piano".
                     Dipakai di link: post.html?id=viral-r-piano
                     Boleh huruf kecil, angka, dan tanda "-" saja.
     title        -> judul post (ditampilkan di list & halaman detail)
     caption      -> caption pendek, tampil di kartu list (1-2 kalimat)
     description  -> cerita lebih panjang, tampil di halaman detail
                     (boleh cerita soal proses bikin karya, atau
                     kenapa reaksi orang-orang ini berarti buatmu)
     videoId      -> ID video YouTube. Ambil dari URL video, contoh:
                     https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                                      ^^^^^^^^^^^ ini videoId-nya
     sourceUrl    -> link ke thread Reddit aslinya (tombol "Lihat
                     thread asli" di halaman detail akan pakai ini)
     sourceLabel  (opsional) -> teks tombol link sumber, default
                     "Lihat thread di Reddit" kalau dikosongkan
     date         (opsional) -> tanggal post, contoh "Agustus 2026"
     vertical     (opsional) -> isi "true" kalau videonya vertikal
                     (misalnya YouTube Shorts) supaya frame video di
                     halaman detail menyesuaikan jadi bentuk potret,
                     bukan dipotong ke bentuk 16:9 landscape.
     comments     -> array komentar yang mau ditampilkan sebagai
                     gelembung saat video diputar, URUTAN SESUAI URUTAN
                     KEMUNCULAN (bukan harus sesuai urutan asli di Reddit).
                     Tiap komentar:
                       author -> nickname/username, contoh "u/pianolover22"
                       text   -> isi komentarnya (copy-paste dari Reddit)
                       at     (opsional) -> detik ke berapa di video
                              gelembung ini muncul, contoh 12 artinya
                              muncul saat video di detik ke-12.
                              KALAU FIELD "at" DIKOSONGKAN/DIHAPUS di
                              SEMUA komentar, gelembung akan muncul
                              otomatis satu-satu tiap ~2.5 detik selama
                              video diputar (lebih gampang, tidak perlu
                              cocokkan ke detik video manapun).
   ============================================================ */

const ECHOES = [
  {
    id: "i-composed-this-r-piano",
    title: "I Composed This - It Might Sound Weird at First",
    caption: "I composed this piece and I'm currently experimenting with non-diatonic chord progressions.",
    description: "I composed this piece and I'm currently experimenting with non-diatonic chord progressions. Some parts may sound a bit unconventional, but I'd love to hear your thoughts or feedback.",
    videoId: "vuSGnq-V3MQ",
    vertical: true,
    sourceUrl: "https://www.reddit.com/r/piano/s/5tapV4EIYX",
    sourceLabel: "View thread on Reddit",
    date: "Agustus 2026",
    comments: [
      { author: "MonkeyD-Daniel", text: "Usually I skip self composed stuff on this reddit, idk why it's just not for me, but this is genuinely absolutely beautiful. It was a great pleasure listening to this. Do you have notes for this? Amazing piece." },
      { author: "AM34TML", text: "It's very nice! Sounds like it could be an instrumental from an anime or animated series! I think the harmonies you found create really wonderful colors - nothing sounds strange to me here!" },
      { author: "SingingSabre", text: "This is absolutely delightful. Thank you for sharing it." },
      { author: "Fearnicus", text: "Nice piece, well done. I like the less conventional notes." },
      { author: "exist3nce_is_weird", text: "I love it! I particularly loved the creativity of those two harmonic shifts in the first few bars. Would have loved to have a continuation of that style, but it was beautiful anyway even with the return to conventional harmony." }
    ]
  },
  {
    id: "i-play-beloved-waltz",
    title: "What do you feel when you listen to my waltz?",
    caption: "Tried composing a waltz that’s actually fun to play on the piano.",
    description: "Beloved Waltz a little waltz I wrote about longing and missing someone. Hope you enjoy it!",
    videoId: "TapLi_GCGrY",
    vertical: true,
    sourceUrl: "https://www.reddit.com/r/piano/s/B7A9WFE4HL",
    sourceLabel: "View thread on Reddit",
    date: "Agustus 2026",
    comments: [
       { author: "FrankSuper80", text: "Saudades!" },
       { author: "stephenp129", text: "I really like this!" },
       { author: "ohlongjonson", text: "Nice!  Reminds me a bit of Chopin's Waltz in A minor" },
       { author: "Minute_Account_4877", text: "Happiness!" },
{ author: "Kruil", text: "Wow! Just wow! How long have you been playing piano?" },
{ author: "weird_boi_eros", text: "Sounds exquisite and also a tad bit melancholic, absolutely loved this piece! Edit: I just read your description after commenting. It perfectly encapsulates those emotions" },
{ author: "Witty_Drag5995", text: "I feel like, I feel like..." },
{ author: "coffee_juice87", text: "SICK !" },
{ author: "Teddyboymakes", text: "I like it" },
{ author: "my_mirai", text: "This is lovely! I don't have any music background but as someone who did some ballet in past and now do figure skating, your waltz feels it'd be fun to dance to." },
{ author: "MRDRMUFN", text: "Sounds very nice. Looks fun to play. I won't say this is a negative but it does remind me of the main theme of Game of Thrones. I could be misremembering but it might be because it's also a waltz." },
{ author: "TheTorturedMind", text: "is that a fantaisie impromptu reference? it works really well" },
{ author: "GrandpaRonin", text: "Lovely waltz. I would love to learn how to play it!" },
{ author: "Important-Figure-512", text: "i like it, i'll play it" },

    ]
  }
];

// PENTING: baris ini WAJIB ada di baris paling bawah file ini.
// "const ECHOES" di atas TIDAK otomatis jadi window.ECHOES (beda
// dengan "var"), padahal echoes-list.js & echoes-post.js membaca
// datanya lewat window.ECHOES. Kalau baris ini kehapus/hilang saat
// edit, halaman Echoes akan selalu tampil kosong walau datanya sudah
// diisi dengan benar.
window.ECHOES = ECHOES;
