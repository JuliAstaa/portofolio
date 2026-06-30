import type { JourneyItem } from "../types/perjalanan";

// Urut dari terbaru ke lama. `current: true` = titik toska penuh (paling atas).
// EDIT isi ini sesuai perjalananmu.
export const journey: JourneyItem[] = [
    {
        year: "2026",
        title: "Go & membangun Zentix",
        description:
            "Mulai serius mendalami Go. Membangun dan merawat Zentix, produk yang sudah live dan punya user aktif.",
        current: true,
    },
    {
        year: "2025",
        title: "Ketua INSTIKI Developer Club",
        description:
            "Memimpin komunitas developer kampus periode 2025/2026. Mendalami Python dan data science sambil mengelola program dan tim.",
    },
    {
        year: "2024",
        title: "Masuk dunia JavaScript & React",
        description:
            "Mulai membangun antarmuka modern dengan React. Mengenal sisi frontend lebih dalam.",
    },
    {
        year: "2021",
        title: "Mulai ngoding di SMK",
        description:
            "Baris kode pertama lewat HTML & CSS. Awal dari semuanya.",
    },
];
