export interface SocialLink {
    label: string;
    url: string;
}

export interface Contact {
    headline: string;
    email: string;
    socials: SocialLink[];
    available: boolean;
    availableText: string;
}
