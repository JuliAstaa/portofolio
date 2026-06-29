# PRD — Portofolio Pribadi

## 1. Ringkasan

Web portofolio pribadi buat developer/engineer, dibangun sendiri pakai Astro. Tujuan: alat jangka panjang yang terus dipakai dan diperbarui. Identitas visual: Swiss editorial dengan palet alam Swiss, aksen toska gletser, dukung light + dark mode.

## 2. Tujuan

1. **Cari kerja** — bikin recruiter cepat paham kemampuan dan gampang menghubungi.
2. **Personal branding** — identitas visual konsisten yang bikin diingat.
3. **Dokumentasi karya** — wadah yang gampang ditambahi project dan tulisan seiring waktu.

## 3. Non-tujuan (biar fokus)

- Bukan blog platform penuh fitur (komentar, multi-author, dll).
- Bukan toko/e-commerce.
- Nggak perlu CMS berat di awal. Konten berbasis file Markdown dulu.

## 4. Target pengguna

- Recruiter / hiring manager (prioritas utama): butuh cepat nemu skill, karya, kontak.
- Sesama developer: lihat case study dan cara berpikir.
- Diri sendiri: gampang update tanpa ngoding ulang.

## 5. Persyaratan fungsional

### 5.1 Halaman & section (single page + halaman detail)
- **Hero**: nama, role, tagline, CTA (Lihat karya, Resume).
- **Projects**: Zentix sebagai featured project (badge live + user aktif, metrik, tech stack, link Buka produk/Case study/Repo). Section "Eksperimen & latihan" terpisah.
- **About**: cerita singkat, foto duotone, tools harian.
- **Timeline**: perjalanan belajar/karier.
- **Now**: fokus saat ini, sedang dipelajari, tanggal update.
- **Contact + Footer**: email (CTA utama), link sosial, status "Tersedia untuk kerja".
- **Halaman case study Zentix** (terpisah): masalah, solusi, keputusan teknis, tantangan, hasil, link.

### 5.2 Fitur sistem
- **Dark/light mode toggle**, dengan deteksi preferensi sistem dan simpan pilihan (cookie/localStorage di kode beneran, bukan di artifact).
- **Konten berbasis Markdown/MDX**: project dan (nanti) blog ditulis sebagai file, gampang ditambah.
- **Data personal terpusat**: satu file config buat nama, link, email, dll.
- **SEO dasar**: meta tags, Open Graph image, sitemap, robots.txt.
- **Resume**: tombol download PDF.
- **Responsif**: rapi di mobile dan desktop.

## 6. Persyaratan non-fungsional

- **Performa**: skor Lighthouse tinggi. Astro keluarin HTML statis, JS minimal.
- **Maintainability**: konten kepisah dari kode. Design token di satu tempat. Komponen reusable.
- **Aksesibilitas**: kontras warna cukup di dua mode, alt text gambar, navigasi keyboard.
- **Awet**: stack stabil, hosting gratis (Vercel/Netlify), gampang dirawat sendiri.

## 7. Sistem desain (ringkas)

Lihat `01-claude-design-brief.md` buat detail. Inti:
- Aksen toska: `#2D8B7F` (light) / `#3DBBA5` (dark).
- Background: `#F2F4F3` (light) / `#14201D` (dark).
- Tipografi: heading grotesk raksasa, body sans, label mono. Dua weight (400, 500).
- Nomor section editorial, garis kontur topografi samar.

## 8. Konten yang perlu disiapkan sendiri

- [ ] Teks: nama, tagline, paragraf About, isi timeline, isi Now.
- [ ] Data Zentix: deskripsi 1 kalimat, metrik asli (user, uptime, lama jalan), tech stack, URL produk, URL repo.
- [ ] Case study Zentix: tulisan lengkap.
- [ ] Foto diri (buat diolah duotone).
- [ ] Resume PDF.
- [ ] Link sosial: GitHub, LinkedIn, X, email.

## 9. Tahapan (saran)

1. **Fondasi**: setup Astro, design token, layout dasar, toggle tema.
2. **Section statis**: Hero, About, Timeline, Now, Contact, Footer.
3. **Projects**: Zentix featured + eksperimen, dari data Markdown.
4. **Case study**: halaman detail Zentix.
5. **Poles**: SEO, OG image, animasi halus, 404 kreatif.
6. **Deploy**: Vercel/Netlify, domain.
7. **Nanti**: tambah blog/notes kalau mau.

## 10. Ukuran keberhasilan

- Recruiter bisa nemu kontak dalam < 10 detik.
- Porto kebuka cepat di mobile.
- Kamu nyaman nambah project baru cukup dengan bikin 1 file Markdown.