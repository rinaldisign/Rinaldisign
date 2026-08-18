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
   ============================================================ */

const WORKS = [
  {
    catno: "DN.1",
    title: "Lumin Forest",
    cover: "../img/covers/placeholder-1.jpg",
    desc: "A quiet piano composition inspired by the depth of forest light. The piece moves slowly, allowing silence and resonance to create space and atmosphere. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32785730"
  },
  {
    catno: "DN.2",
    title: "Solastalgia",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "A reflective piece exploring emotional distance and nostalgia. Soft harmonic motion creates a fragile and contemplative musical space. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670671"
  },
  {
    catno: "DN.3",
    title: "Laserila",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I composed this piece on a cold night, alone at the piano. As I sat in the quietness of the night, a melody seemed to emerge from nothingness — unbidden, fragile, and melancholic. From that solitary moment, filled with sadness and quiet reflection, Laserila was born. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670398"
  },
  {
    catno: "DN.4",
    title: "(DATA LOST)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "The original data was lost, along with the melody I had recorded. No trace of it remains. What survives today is only the memory that this piece once existed a small but meaningful part of my journey as a composer. 2025",
    soundcloud: "",
    musescore: "#"
  },
  {
    catno: "DN.5",
    title: "Furnama",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I feel a sense of tranquility whenever I listen to this melody. Its gentle and steady flow was created as a piece for the night, evoking the quiet atmosphere of a peaceful evening beneath the moonlight. The title Furnama is inspired by the Indonesian word for 'full moon,' symbolizing the calm and serene feeling that lies at the heart of this piece. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32670272"
  },
    {
    catno: "DN.6",
    title: "(DATA LOST)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "The original data was lost, along with the melody I had recorded. No trace of it remains. What survives today is only the memory that this piece once existed a small but meaningful part of my journey as a composer. 2025",
    soundcloud: "",
    musescore: "#"
  },
   {
    catno: "DN.7",
    title: "Mycro",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I created this piece after coming home from work feeling tired. As soon as I touched the piano keys, a lazy melody came from somewhere inside me, almost by itself. And that is how MYCRO was born. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32671463"
  },
   {
    catno: "DN.8",
    title: "Lucent Sepium",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I wrote this piece while exploring a new chord progression from C# major to F minor. I only created a few very short melodic fragments in this piece. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32783756"
  },
  {
    catno: "DN.9",
    title: "Serein Paradisaea",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I created this piece while exploring a chord progression in C# major. I found a simple melody that felt melancholic, matching my mood at the time I composed it. 2025",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32813600"
  },
  {
    catno: "DN.10",
    title: "Serene Sepium",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "I wrote this piece naturally, using the same progression as the previous work. Here, I started to feel more comfortable writing my own original music.",
    soundcloud: "",
    musescore: "https://musescore.com/user/118322597/scores/32843381"
  },
    {
    catno: "DN.11",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.12",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.13",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.14",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.15",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.16",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.17",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.18",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.19",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
    {
    catno: "DN.20",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.21",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.22",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.23",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.24",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.25",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.26",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.27",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.28",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.29",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.30",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
   {
    catno: "DN.31",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.32",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.33",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.34",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.35",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.36",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.37",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.38",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.39",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.40",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.41",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.42",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.43",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.44",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.45",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.46",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.47",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
  {
    catno: "DN.48",
    title: "(In Progress)",
    cover: "../img/covers/placeholder-2.jpg",
    desc: "In Editing",
    soundcloud: "",
    musescore: ""
  },
];
