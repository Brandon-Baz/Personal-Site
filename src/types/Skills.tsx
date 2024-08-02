
export interface SkillCardProps {
    skill: SkillType;
    // theme: 'hero' | 'villain' | 'secret_identity';
}

export type SkillType = {
    name: string;
    level: number;
    experience: string;
    tags: string[]
    projects: string[];
};

export type SkillCategories = {
    [category: string]: SkillType[];
}
