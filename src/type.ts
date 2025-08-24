// Define the structure of an experience item
export interface ExperienceItem {
    title: string;
    company: string;
    dates: string;
    description: string;
    technologies: string[];
}

export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

export interface SkillsItem {
    category: string;
    items: string[];
}