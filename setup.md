# Setup Astro & Struktur Folder

## 1. Prasyarat

- Node.js versi 18.20.8 / 20.3.0 / 22.0.0 ke atas (pakai LTS terbaru lebih aman).
- Cek dulu: `node -v` dan `npm -v`.
- Editor: VS Code + ekstensi resmi Astro.

## 2. Bikin project Astro

Jalankan di terminal, di folder tempat kamu mau taruh project:

```bash
npm create astro@latest
```

Saat ditanya wizard:
- **Where to create?** → nama folder, misal `porto`
- **How to start?** → pilih `Empty` (biar kamu bangun sendiri dari nol) atau `Minimal`
- **TypeScript?** → `Yes` lalu `Strict` (atau `Relaxed` kalau baru mulai)
- **Install dependencies?** → `Yes`
- **Init git repo?** → `Yes`

Lalu:

```bash
cd porto
npm run dev
```

Buka `http://localhost:4321`. Itu server dev-nya.

## 3. Perintah penting

| Perintah | Fungsi |
|---|---|
| `npm run dev` | jalankan server dev (live reload) |
| `npm run build` | build ke folder `dist/` (HTML statis) |
| `npm run preview` | preview hasil build secara lokal |

## 4. Tambah integrasi yang berguna (opsional, nanti)

```bash
# kalau mau pakai Tailwind
npx astro add tailwind

# sitemap otomatis buat SEO
npx astro add sitemap

# kalau mau pakai React untuk komponen interaktif tertentu
npx astro add react
```

Catatan: kamu bisa pakai CSS murni (custom properties) tanpa Tailwind. Untuk gaya Swiss yang token-based, CSS murni sudah sangat cukup dan bikin kamu lebih paham dasarnya.

## 5. Struktur folder yang disarankan

```
porto/
├── public/                  # aset statis, disajikan apa adanya
│   ├── favicon.svg
│   ├── resume.pdf           # file resume buat di-download
│   ├── og-image.png         # gambar Open Graph buat share link
│   └── images/
│       └── me.jpg           # foto diri (buat diolah duotone)
│
├── src/
│   ├── components/          # komponen UI reusable, satu file per bagian
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── About.astro
│   │   ├── Timeline.astro
│   │   ├── Now.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── SectionHeader.astro   # nomor + nama section editorial
│   │   └── ThemeToggle.astro     # tombol light/dark
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # kerangka html, head, meta SEO, slot konten
│   │
│   ├── pages/
│   │   ├── index.astro           # halaman utama (rakit semua section)
│   │   └── work/
│   │       └── zentix.astro      # halaman case study Zentix
│   │       # (nanti bisa jadi [slug].astro kalau project tambah banyak)
│   │
│   ├── content/                  # konten berbasis Markdown (Content Collections)
│   │   ├── config.ts             # definisi schema collection
│   │   └── projects/
│   │       ├── zentix.md
│   │       └── weather-cli.md
│   │
│   ├── data/
│   │   └── site.ts               # data personal terpusat (nama, email, link sosial)
│   │
│   └── styles/
│       ├── tokens.css            # SEMUA design token: warna light/dark, font, spacing
│       └── global.css            # reset, base, tipografi dasar
│
├── astro.config.mjs              # config Astro (integrasi, site URL)
├── tsconfig.json
└── package.json
```

## 6. Urutan ngoding yang disarankan

1. **`src/styles/tokens.css`** dulu. Definisikan semua warna sebagai custom properties, plus override `:root[data-theme="dark"]`. Ini fondasi; semua komponen ngambil dari sini.
2. **`src/data/site.ts`** — taruh nama, email, link sosial. Sekali ubah, kepakai di mana-mana.
3. **`BaseLayout.astro`** — kerangka html + head (meta SEO) + slot.
4. **`SectionHeader.astro`** — komponen kecil nomor + nama section, dipakai berulang.
5. **`ThemeToggle.astro`** — logika ganti tema (set `data-theme` di `<html>`, simpan di localStorage).
6. Section satu per satu: Hero → Projects → About → Timeline → Now → Contact → Footer.
7. Rakit semua di **`index.astro`**.
8. **Content Collections** (`content/config.ts` + file project) saat siap pindahin data project ke Markdown.
9. Halaman **case study Zentix**.
10. Poles: SEO, sitemap, OG image, deploy.

## 7. Tips token light/dark (pola dasar)

Konsepnya: definisikan variabel di `:root` (light), lalu timpa di selector dark. Komponen cukup pakai `var(--...)`, nggak peduli mode. Contoh struktur (tulis sendiri ya, ini cuma pola):

- `:root { --bg: #F2F4F3; --text: #16201E; --accent: #2D8B7F; ... }`
- `:root[data-theme="dark"] { --bg: #14201D; --text: #F2F4F3; --accent: #3DBBA5; ... }`
- ThemeToggle nge-set `document.documentElement.dataset.theme`.

## 8. Deploy (nanti)

- Push ke GitHub.
- Connect repo ke Vercel atau Netlify. Mereka auto-detect Astro.
- Build command `npm run build`, output `dist/`. Biasanya kedeteksi otomatis.
- Tambah custom domain kalau punya.

> Versi Node dan perintah `npm create astro@latest` bisa berubah seiring waktu. Kalau ada yang beda, cek dokumentasi resmi Astro terbaru di docs.astro.build.