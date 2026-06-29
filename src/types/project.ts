export interface Project {
    title: string;
    description: string;
    techstack: string[];
    links: {
        live: string,
        caseStudy: string,
        repo: string
    }
}