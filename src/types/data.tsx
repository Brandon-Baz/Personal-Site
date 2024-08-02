

export interface Mission {
    name: string;
    progress: number;
    description: string;
    villainDescription?: string;
}

export interface Nemesis {
    name: string;
    description: string;
    weaknesses: { weakness: string }[];
}

export interface Power {
    name: string;
    level: number;
}

export interface Tool {
    name: string;
    icon: JSX.Element;
    description: string;
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string[];
    villainDescription?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    honors: string[];
    coursework: {
        [category: string]: string[];
    };
}

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    githubLink?: string;
    image: string;
    heroDescription?: string;
    villainDescription?: string;
    technologies: string[];
}

export interface Testimonial {
    quote: string;
    author: string;
    position: string;
}

export interface Blog {
    title: string;
    description: string;
    link: string;
    image: string;
}

export interface BlogArticle {
    id: string;
    title: string;
    excerpt: string;
    link: string;
    coverImage: string;
    author: string;
    publishDate: string;
    timeToRead: string;
    source: string;
}

export interface Skill {
    name: string;
    level: number;
    experience: string;
    projects: string[];
    tags: string[];
    icon: JSX.Element;
}

export interface Value {
    title: string;
    description: string;
    icon: string;
}

export interface Interest {
    title: string;
    description: string;
    icon: string;
}

export interface CareerDevelopment {
    title: string;
    description: string;
    location: string;
    year: string;
}

export interface ComicPanel {
    title: string;
    caption: string;
    description: string;
    image: string;
}

export interface Achievement {
    title: string;
    description: string;
    icon: JSX.Element;
    villainDescription?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
    price: string;
    heroDescription?: string;
    villainDescription?: string;
}

export interface DailyLifeComic {
    caption: string;
    description: string;
    image: string;
    alt: string;
}

export interface AboutContent {
    earlyDays: string;
    presentDay: string;
    transformation: string;
    quote1: string;
    quote2: string;
}

export interface ImpactMetric {
    title: string;
    metric: string;
    description: string;
    heroDescription?: string;
    villainDescription?: string;
    icon: JSX.Element;
}

export interface HomeSummary {
    professional: string;
    hero: string;
    villain: string;
}