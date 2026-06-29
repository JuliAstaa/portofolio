import type { Contact } from "../types/contact";

// ISI SENDIRI: email, link sosial, status ketersediaan.
export const contact: Contact = {
    headline: "Punya proyek atau peluang? Ayo ngobrol.",
    email: "juliasta702@gmail.com",
    socials: [
        { label: "GitHub", url: "#" },
        { label: "LinkedIn", url: "#" },
        { label: "X", url: "#" },
        { label: "Resume", url: "/resume.pdf" },
    ],
    available: true,
    availableText: "Tersedia untuk kerja",
};
