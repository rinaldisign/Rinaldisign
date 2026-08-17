/* ============================================================
   DATA KARYA — INI SATU-SATUNYA FILE YANG PERLU DIEDIT
   untuk menambah atau mengubah karya.
   ------------------------------------------------------------
   Cara menambah karya baru:
   1. Copy satu blok { ... } di bawah
   2. Tempel sebagai item baru di array WORKS
   3. Ganti isinya sesuai karya barumu
   List & popup di halaman akan otomatis mengikuti — tidak perlu
   sentuh index.html atau works.js sama sekali.

   Keterangan tiap field:
     catno       -> nomor katalog, misal "DN.1"
     title       -> judul karya
     cover       -> path gambar cover (dipakai di list & popup)
     desc        -> deskripsi/cerita karya
     soundcloud  -> URL embed player SoundCloud.
                    Cara ambil: buka track di SoundCloud > tombol
                    "Share" > tab "Embed" > copy bagian di dalam
                    src="..." lalu tempel di sini.
     musescore   -> link ke halaman sheet music di Musescore
   ============================================================ */

const WORKS = [
  {
    catno: "DN.1",
    title: "Lumin Forest",
    cover: "../img/covers/placeholder-1.jpg",
    desc: "A quiet piano composition inspired by the depth of forest light. The piece moves slowly, allowing silence and resonance to create space and atmosphere. 2025",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2FTRACK_ID_HERE&color=%23cdaa6d&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false",
    musescore: "#"
  },
  {
    catno: "DN.2",
    title: "Solastalgia",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "A reflective piece exploring emotional distance and nostalgia. Soft harmonic motion creates a fragile and contemplative musical space. 2025",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2FTRACK_ID_HERE&color=%23cdaa6d&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false",
    musescore: "#"
  },
  {
    catno: "DN.3",
    title: "Laserila",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I composed this piece on a cold night, alone at the piano. As I sat in the quietness of the night, a melody seemed to emerge from nothingness — unbidden, fragile, and melancholic. From that solitary moment, filled with sadness and quiet reflection, Laserila was born. 2025",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2278459511&color=%23cdaa6d&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false",
    musescore: "#"
  },
  {
    catno: "DN.4",
    title: "(DATA LOST)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "This was once my fourth composition, but the original data was lost, along with the melody I had recorded. No trace of it remains. What survives today is only the memory that this piece once existed — a small but meaningful part of my journey as a composer. 2025",
    soundcloud: "",
    musescore: "#"
  },
  {
    catno: "DN.5",
    title: "Furnama",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I feel a sense of tranquility whenever I listen to this melody. Its gentle and steady flow was created as a piece for the night, evoking the quiet atmosphere of a peaceful evening beneath the moonlight. The title Furnama is inspired by the Indonesian word for 'full moon,' symbolizing the calm and serene feeling that lies at the heart of this piece. 2025",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2FTRACK_ID_HERE&color=%23cdaa6d&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false",
    musescore: "#"
  }
];
