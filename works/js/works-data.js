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
                    (yang biasa kamu buka di browser, contoh:
                    "https://musescore.com/user/USERID/scores/SCOREID")
                    Ini otomatis dipakai juga untuk EMBED di dalam popup —
                    tidak perlu ambil kode embed manual.
     musescoreEmbed (opsional) -> kalau suatu saat auto-embed di atas
                    tidak cocok (misal Musescore ganti format URL, atau
                    kamu mau pakai parameter embed khusus), isi field ini
                    dengan URL embed lengkap dan itu akan dipakai duluan.
                    Kalau tidak butuh, boleh dihapus/dikosongkan.
     spotify        (opsional) -> link track di Spotify. Isi kalau ada,
                    biarkan kosong ("") atau hapus field-nya kalau belum
                    ada — ikon & link Spotify di popup otomatis tidak
                    muncul kalau field ini kosong/tidak ada.
     appleMusic     (opsional) -> sama seperti di atas, tapi untuk link
                    Apple Music.
     youtubeMusic   (opsional) -> sama seperti di atas, tapi untuk link
                    YouTube Music.
   ============================================================ */

const WORKS = [
  {
    catno: "DN.1",
    title: "Lumin Forest",
    cover: "../img/covers/art-dn1.jpg",
    desc: "A quiet piano composition inspired by the depth of forest light. The piece moves slowly, allowing silence and resonance to create space and atmosphere. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32785730",
    spotify: "https://open.spotify.com/track/15QcSlGlge3L5lTAnLSKHW?si=frk8eO35SFGhyNXB06gJ4Q&utm_source=copy-link",
    appleMusic: "https://music.apple.com/jp/album/lumin-forest/1879852119?i=1879852134&l=en-US",
    youtubeMusic: "https://music.youtube.com/watch?v=UdMFZ4RQBwk&si=5fc4C3vyGfAMF1Fe"
  },
  {
    catno: "DN.2",
    title: "Solastalgia",
    cover: "../img/covers/art-dn1.jpg",
    desc: "A reflective piece exploring emotional distance and nostalgia. Soft harmonic motion creates a fragile and contemplative musical space. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670671",
    spotify: "https://open.spotify.com/track/2OPhar8XPBx382rUYcgg3b?si=EoEsmhoDQv6jh8JoYKvoGQ&utm_source=copy-link",
    appleMusic: "https://music.apple.com/jp/album/laserila/1879852119?i=1879852133&l=en-US",
    youtubeMusic: "https://music.youtube.com/watch?v=3LW17v3eerU&si=YqDIvUqY_bfRwCts"
  },
  {
    catno: "DN.3",
    title: "Laserila",
    cover: "../img/covers/art-dn1.jpg",
    desc: "I composed this piece on a cold night, alone at the piano. As I sat in the quietness of the night, a melody seemed to emerge from nothingness — unbidden, fragile, and melancholic. From that solitary moment, filled with sadness and quiet reflection, Laserila was born. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670398",
    spotify: "https://open.spotify.com/track/2KS5Ijfq415vaLsF0z3kFS?si=1kPC_99OSvuznO9WMllWDg&utm_source=copy-link",
    appleMusic: "https://music.apple.com/jp/album/laserila/1879852119?i=1879852133&l=en-US",
    youtubeMusic: "https://music.youtube.com/watch?v=3LW17v3eerU&si=YqDIvUqY_bfRwCts"
  },
  {
    catno: "DN.4",
    title: "Cycle7",
    cover: "../img/covers/art-dn1.jpg",
    desc: "I created this simple melody in the key of C♯ minor because it is easy to play and useful for practice. It really helps train both the left and right hands. 2025",
    soundcloud: "",
    musescore: "#",
    spotify: "https://open.spotify.com/track/3uDIw3QNYLhVmbDrpPOuYC?si=p5dm9qmkTYCWJsl4VXKz0w&utm_source=copy-link",
    appleMusic: "https://music.apple.com/jp/album/cycle7/1879852119?i=1879852123&l=en-US",
    youtubeMusic: "https://music.youtube.com/watch?v=Vp6wTvKTQmI&si=X_kRhSjGGiKyI-48"
  },
  {
    catno: "DN.5",
    title: "Furnama",
    cover: "../img/covers/art-dn1.jpg",
    desc: "I feel a sense of tranquility whenever I listen to this melody. Its gentle and steady flow was created as a piece for the night, evoking the quiet atmosphere of a peaceful evening beneath the moonlight. The title Furnama is inspired by the Indonesian word for 'full moon,' symbolizing the calm and serene feeling that lies at the heart of this piece. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670272",
    spotify: "https://open.spotify.com/track/0Cn4vgImV3K5kv4SqHbxKk?si=jNn1ZeYWTUq8-1kLXXK98Q&utm_source=copy-link",
    appleMusic: "https://music.apple.com/jp/album/fu-rnama/1879852119?i=1879852124&l=en-US",
    youtubeMusic: "https://music.youtube.com/watch?v=AlbKOcPhqps&si=zvbjPAvS6YvEZZRL"
  },
    {
    catno: "DN.6",
    title: "(DATA LOST)",
    cover: "../img/covers/art-dn1.jpg",
    desc: "The original data was lost, along with the melody I had recorded. No trace of it remains. What survives today is only the memory that this piece once existed a small but meaningful part of my journey as a composer. 2025",
    soundcloud: "",
    musescore: "#",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.7",
    title: "Mycro",
    cover: "../img/covers/art-dn2.jpg",
    desc: "I created this piece after coming home from work feeling tired. As soon as I touched the piano keys, a lazy melody came from somewhere inside me, almost by itself. And that is how MYCRO was born. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32671463",
    spotify: "https://open.spotify.com/track/0hzVQ9f4j4a9aikvhxzAqy?si=1_dq6HY7QyW2RZXUsepR8g&utm_source=copy-link",
    appleMusic: "https://music.apple.com/us/song/mycro-flaviventris/1878211692",
    youtubeMusic: ""
  },
   {
    catno: "DN.8",
    title: "Lucent Sepium",
    cover: "../img/covers/art-dn2.jpg",
    desc: "I wrote this piece while exploring a new chord progression from C# major to F minor. I only created a few very short melodic fragments in this piece. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32783756",
    spotify: "https://open.spotify.com/track/6dHtig4p6PpI34gRtwHTzr?si=QLyMFtANRPuMQITFks-j6w&utm_source=copy-link",
    appleMusic: "https://music.apple.com/us/song/lucent-sepium/1878211525",
    youtubeMusic: ""
  },
  {
    catno: "DN.9",
    title: "Serein Paradisaea",
    cover: "../img/covers/art-dn2.jpg",
    desc: "I created this piece while exploring a chord progression in C# major. I found a simple melody that felt melancholic, matching my mood at the time I composed it. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32813600",
    spotify: "https://open.spotify.com/track/1wC1ReOB9C8VleM0rP4BXQ?si=mRDYGte9TsuWcd0DDR5s2g&utm_source=copy-link",
    appleMusic: "https://music.apple.com/us/song/serein-paradisaea/1878211830",
    youtubeMusic: ""
  },
  {
    catno: "DN.10",
    title: "Serene Sepium",
    cover: "../img/covers/art-dn2.jpg",
    desc: "I wrote this piece naturally, using the same progression as the previous work. Here, I started to feel more comfortable writing my own original music.",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32843381",
    spotify: "https://open.spotify.com/track/0lQOq4ioYW09mM90dzNpIH?si=_ZaD5TKJRGCiPt9zZZ0NnA&utm_source=copy-link",
    appleMusic: "https://music.apple.com/us/song/serene-sepium/1878211837",
    youtubeMusic: ""
  },
    {
    catno: "DN.11",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
    {
    catno: "DN.12",
    title: "Memory Glow",
    cover: "../img/covers/art-dn2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "https://open.spotify.com/track/439BJPDJaQXdYhKDzaQ6Ps?si=Ledo4mm4T6Ca2TfTNKyukg&utm_source=copy-link",
    appleMusic: "https://music.apple.com/us/song/memory-glow/1878211685",
    youtubeMusic: ""
  },
    {
    catno: "DN.13",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
    {
    catno: "DN.14",
    title: "Memoriae",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/memoriae-cyanopsitta/1879873855",
    youtubeMusic: ""
  },
    {
    catno: "DN.15",
    title: "Velarium Harpia",
    cover: "../img/covers/art-dn2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/velarium-harpia-grand-piano/1878211849",
    youtubeMusic: ""
  },
    {
    catno: "DN.16",
    title: "Wistful",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/wistful-locustella/1879873857",
    youtubeMusic: ""
  },
    {
    catno: "DN.17",
    title: "Sitta Villosa",
    cover: "../img/covers/art-dn1.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/sitta-villosa/1879852138",
    youtubeMusic: ""
  },
    {
    catno: "DN.18",
    title: "Mellune",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/mellune-myzomela/1879873821",
    youtubeMusic: ""
  },
    {
    catno: "DN.19",
    title: "Avelune",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/avelune-oriolus/1879873796",
    youtubeMusic: ""
  },
    {
    catno: "DN.20",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.21",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.22",
    title: "2Keychains",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/2-keychains-cygnus-studio-version/1878217781",
    youtubeMusic: ""
  },
   {
    catno: "DN.23",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.24",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.25",
    title: "Lament",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/lament-corvuscorax-studio-version/1878217782",
    youtubeMusic: ""
  },
   {
    catno: "DN.26",
    title: "Serenity",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/serenity-alauda-studio-version/1878217784",
    youtubeMusic: ""
  },
   {
    catno: "DN.27",
    title: "Afterimage",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "https://music.apple.com/us/song/afterimage-chrysoloph-studio-version/1878217787",
    youtubeMusic: ""
  },
   {
    catno: "DN.28",
    title: "Descent",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.29",
    title: "Elysium",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "Upcoming Release",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.30",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
   {
    catno: "DN.31",
    title: "Affectionary",
    cover: "../img/covers/art-dn31.jpg",
    desc: "Upcoming Release",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.32",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.33",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.34",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.35",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.36",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.37",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.38",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.39",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.40",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.41",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.42",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.43",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.44",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.45",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.46",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.47",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.48",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.49",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.50",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.51",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.52",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.53",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.54",
    title: "Beloved Waltz",
    cover: "../img/covers/art-dn54.jpg",
    desc: "Upcoming Release",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
  {
    catno: "DN.55",
    title: "Dearest Waltz",
    cover: "../img/covers/art-dn55.jpg",
    desc: "Upcoming Release",
    soundcloud: "",
    musescore: "",
    spotify: "",
    appleMusic: "",
    youtubeMusic: ""
  },
];
