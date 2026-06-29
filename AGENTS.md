# AGENTS.md — Panduan buat AI Coding Assistant (Opsional)

> Catatan: file ini opsional. Kamu mau bangun sendiri dari awal, jadi pakai ini cuma kalau sewaktu-waktu butuh bantuan AI dan mau hasilnya nyambung sama gaya project. Taruh di root project (`AGENTS.md` atau `.cursorrules` / `CLAUDE.md` tergantung tool).

## Konteks project

Ini portofolio pribadi seorang developer, dibangun dengan Astro. Pemiliknya sengaja membangun sendiri untuk belajar dan rasa pencapaian. Jadi: **jangan ambil alih dan tulis semuanya sekaligus.** Bantu per bagian, jelaskan alasannya, biarkan dia yang merakit.

## Prinsip kerja

1. **Jelaskan sebelum menulis kode.** Tujuannya dia paham, bukan cuma dapat hasil.
2. **Potongan kecil.** Satu komponen atau satu masalah per langkah.
3. **Jangan ubah file di luar yang diminta.**
4. **Pertahankan stack & pola yang sudah ada.** Jangan introduce library baru tanpa alasan kuat dan tanpa nanya.
5. **Konten kepisah dari kode.** Data project/teks ada di Markdown/config, bukan di-hardcode di komponen.

## Stack

- Astro (static output).
- Styling: CSS murni dengan custom properties (design token), atau Tailwind kalau dipilih. Konsisten dengan yang sudah dipakai.
- Konten: Astro Content Collections (Markdown/MDX).
- Deploy: Vercel atau Netlify.

## Sistem desain (wajib dipatuhi)

- Aksen toska: `#2D8B7F` (light) / `#3DBBA5` (dark).
- Background: `#F2F4F3` (light) / `#14201D` (dark).
- Semua warna lewat CSS custom properties biar light/dark otomatis. Jangan hardcode hex di komponen.
- Tipografi: heading grotesk besar, body sans, label mono. Dua weight: 400 dan 500.
- Sentence case untuk heading/body. UPPERCASE hanya label mono kecil.
- Nomor section editorial (`01 / Index`). Garis kontur topografi samar sebagai elemen grafis.
- Detail lengkap di `01-claude-design-brief.md`.

## Yang harus dihindari

- Menulis ulang seluruh halaman tanpa diminta.
- Menambah dependency berat.
- Mengubah palet atau tipografi tanpa konfirmasi.
- Inline style berantakan; pakai token.
- Menghapus komentar atau konten pemilik.

## Saat ragu

Tanya dulu. Pemilik lebih suka diajak diskusi daripada dikasih hasil jadi yang dia nggak paham.