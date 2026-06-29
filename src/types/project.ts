export interface Metric {
    value: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    techstack: string[];
    metrics: Metric[];
    links: {
        live: string,
        caseStudy: string,
        repo: string
    }
}

export interface Experiment {
    title: string;
    description: string;
    techstack: string[];
    link: string;
}