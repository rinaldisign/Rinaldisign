/* ============================================================
   DATA HALAMAN ABOUT — INI SATU-SATUNYA FILE YANG PERLU DIEDIT
   untuk mengubah foto, teks bio, atau daftar sosial media.
   ------------------------------------------------------------
   Keterangan tiap field:
     photo     -> path foto profil (ditaruh di img/, diakses
                  relatif dari about/index.html jadi diawali "../")
     photoAlt  -> alt text untuk foto (aksesibilitas)
     name      -> nama yang ditampilkan sebagai judul halaman
     bio       -> array paragraf teks "The Practice". Satu string
                  = satu paragraf. Tambah/kurangi baris sesuka hati,
                  halaman otomatis menyesuaikan.
     social    -> array platform yang muncul sebagai ikon di bagian
                  bawah halaman. Urutan di sini = urutan tampil.
                  label -> nama platform (muncul saat hover/di bawah ikon)
                  url   -> link tujuan
                  icon  -> path ikon (dari img/, diawali "../")
   ============================================================ */

const ABOUT = {
  photo: "../img/profile-rinaldi.jpg",
  photoAlt: "Rinaldi, portrait at the piano",
  name: "Rinaldi",

  bio: [
    "Hi everyone, I\u2019m Rinaldi, real name (MN Rinaldi A), I\u2019m an architect who loves making music. I created a project called \u201cDesain Nada,\u201d abbreviated as DN, to preserve the melodies I compose.",
    "I have always loved creating original melodies, but in the past, I never documented them, and many of them simply disappeared with time.",
    "From now on, I want to carefully document and preserve my compositions here, so they can remain as a record of my musical journey."
  ],

  social: [
    { label: "Instagram",   url: "https://www.instagram.com/rinaldisign/",                                                        icon: "../img/insta.png" },
    { label: "Spotify",     url: "https://open.spotify.com/artist/2O45H4AWtmX8EDWWq05Ckm?si=zA5HcMbxSo2KHM7HuwMPVQ",                icon: "../img/spotify.png" },
    { label: "Apple Music", url: "https://music.apple.com/jp/artist/rinaldisign/1877085689",                                       icon: "../img/applemusic.png" },
    { label: "SoundCloud",  url: "https://on.soundcloud.com/Rct2djnP5CDD4gYI50",                                                    icon: "../img/soundcloud.png" },
    { label: "YouTube",     url: "https://www.youtube.com/@rinaldisign",                                                            icon: "../img/youtube.png" },
    { label: "Sheet Music", url: "https://musescore.com/user/118322597",                                                            icon: "../img/muse.png" },
    { label: "TikTok",      url: "https://www.tiktok.com/@rinaldisign?_r=1&_t=ZS-94v1HE1VEiS",                                      icon: "../img/TIKTOK.PNG" }
  ]
};
