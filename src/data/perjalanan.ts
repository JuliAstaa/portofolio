import type { JourneyItem } from "../types/perjalanan";

// Urut dari terbaru ke lama. `current: true` = titik toska penuh (paling atas).
// EDIT isi ini sesuai perjalananmu.
export const journey: JourneyItem[] = [
    {
        year: "2025",
        title: "Membangun & merawat Zentix",
        description:
            "Mengembangkan platform tiket konser dengan user aktif. Fokus REST API, keamanan, dan uptime.",
        current: true,
    },
    {
        year: "2024",
        title: "Backend developer, INSTIKI Developer Club",
        description:
            "Membangun beberapa web internal kampus. Belajar arsitektur API dan kerja tim.",
    },
    {
        year: "2023",
        title: "Mulai serius backend",
        description:
            "Mendalami Go, Python, dan database. Bikin proyek latihan dari nol.",
    },
];
