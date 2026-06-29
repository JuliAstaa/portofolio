# Design Brief — Portofolio Pribadi (Swiss Editorial dari Alam)

Brief ini buat dimasukin ke Claude Design biar kamu bisa lihat sistem visualnya: warna, tipografi, dan komponen kunci. Tempel isi file ini ke Claude Design, lalu minta dia render style guide dan tiap section.

---

## 1. Konsep besar

Gaya: **Swiss / International Typographic Style**, tapi paletnya diambil dari **alam Swiss** (danau gletser, hijau Alpen, salju, batu).

Prinsip inti:
- Tipografi sebagai bintang utama. Heading raksasa, kontras ukuran ekstrem.
- Grid ketat, ruang kosong dipakai dengan sengaja.
- Hampir tanpa dekorasi. Warna muncul lewat teks, garis, dan blok solid, bukan gradient atau foto pemandangan.
- Satu elemen grafis halus: garis kontur peta topografi (super samar di background), jembatan antara Swiss (sistem) dan alam (gunung).
- Berani tapi tetap kebaca. Recruiter harus cepat nemu info.

Kesan yang dituju: matang, rapi, percaya diri, dan personal.

---

## 2. Palet warna

Aksen utama: **toska gletser**. Dipakai beda tipis antara light dan dark biar tetap nyala di dua mode, tapi tetap satu keluarga.

### Light mode (siang bersalju)
| Peran | Hex | Catatan |
|---|---|---|
| Background | `#F2F4F3` | off-white kebiruan, seperti salju |
| Teks utama | `#16201E` | hampir hitam, kehijauan |
| Teks sekunder | `#3A4744` | abu kehijauan gelap |
| Teks redup | `#5F6B68` | label, caption |
| Garis/border | `#C9D2CF` | hairline |
| Aksen toska | `#2D8B7F` | tombol, link, highlight |
| Aksen hijau Alpen | `#1F5C4D` | teks di atas blok toska muda |
| Blok toska muda | `#DCEAE6` | background tag/pill |

### Dark mode (malam gunung)
| Peran | Hex | Catatan |
|---|---|---|
| Background | `#14201D` | hijau sangat gelap, bukan hitam datar |
| Background blok | `#16201E` | sedikit beda buat kartu |
| Teks utama | `#F2F4F3` | off-white |
| Teks sekunder | `#B8C4C0` | abu terang |
| Teks redup | `#7E908B` | label, caption |
| Garis/border | `#2A3A36` | hairline gelap |
| Aksen toska | `#3DBBA5` | lebih cerah biar nyala di gelap |
| Aksen toska terang | `#5DCAA5` / `#A8E6D5` | teks/aksen di atas blok gelap |
| Blok toska gelap | `#1A3A33` | background tag/pill |

Aturan pakai warna:
- Maksimal 1 aksen dominan (toska). Hijau Alpen cuma pendukung.
- Tanpa gradient lembut buat UI (gradient cuma boleh buat olah foto duotone).
- Tag/pill pakai blok solid muda + teks warna keluarga yang sama yang lebih gelap.

---

## 3. Tipografi

Dua peran font:
- **Display/Heading**: sans grotesk dengan karakter. Pilihan: Space Grotesk, Geist, atau Inter Tight. (Opsi berani: heading serif kontras tinggi seperti Instrument Serif buat satu sentuhan editorial.)
- **Body**: sans bersih. Inter atau Geist Sans.
- **Mono**: buat label kecil, nomor section, tech stack, caption. Geist Mono, JetBrains Mono, atau IBM Plex Mono.

Skala (kontras ekstrem itu sengaja):
- Hero H1: 52–120px, weight 500, letter-spacing -0.03em, line-height ~0.95
- Section H2: 30–46px, weight 500, letter-spacing -0.02em
- Card H3: 16–22px, weight 500
- Body: 13–15px, weight 400, line-height ~1.6
- Label mono: 10–11px, UPPERCASE, letter-spacing 0.08–0.1em

Aturan:
- Cuma dua weight: 400 dan 500. Hindari 700, terlalu berat buat Swiss.
- Sentence case buat heading dan body. UPPERCASE cuma buat label mono kecil.
- Nomor section pakai format editorial: `01 / Index`, `02 / Karya`, dst.

---

## 4. Layout & grid

- Grid 12 kolom, boleh asimetris (konten nempel kiri, ruang kosong di kanan).
- Garis pembatas tipis antar section.
- Nomor + nama section di tiap pembuka, gaya editorial.
- Elemen grafis: garis kontur topografi (beberapa kurva sejajar) di background, opacity 0.10–0.16.

---

## 5. Section yang perlu dirender di Claude Design

Minta Claude Design render ini satu per satu, light dan dark:

1. **Style guide** — swatch warna (light + dark), skala tipografi, contoh tag/pill.
2. **Hero** — label role (mono), H1 raksasa nama, tagline, tombol "Lihat karya" + "Resume", garis kontur samar di bawah, penanda mode di pojok.
3. **Projects (featured)** — Zentix sebagai satu hero project: badge "Live, ada user aktif" dengan titik hijau, 3 metrik (user aktif, uptime, lama berjalan), tech stack pill, tombol "Buka produk" (solid toska) + "Baca case study" + "Repo". Di bawahnya grid kecil "Eksperimen & latihan" (2 kartu).
4. **About** — kotak foto duotone toska (placeholder), H2, paragraf singkat value, baris "Tools harian" berisi pill.
5. **Timeline + Now** — kiri: timeline vertikal dengan titik (terbaru = toska penuh). Kanan: panel "Now" gelap beraksen toska, isi fokus saat ini + "Sedang dipelajari" + tanggal update.
6. **Contact + Footer** — H2 ajakan besar, email sebagai tombol toska, baris link sosial (GitHub, LinkedIn, X, Resume), footer dengan nama + indikator "Tersedia untuk kerja" + copyright "Dibuat sendiri pakai Astro".

---

## 6. Catatan eksekusi foto

Foto About diolah **duotone toska**: foto hitam-putih, bayangan = hijau tua (`#16201E`), highlight = toska (`#2D8B7F` light / `#3DBBA5` dark). Bisa pakai CSS filter + blend mode, atau olah di tools desain. Ukuran kecil, rapi sejajar grid, jangan dominan.
