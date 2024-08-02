// src/utils/nlpUtils.ts
import Boox from 'boox';
import {Experience, Project, Skill} from "../types/data";

export interface BooxDataItem {
    id: string;
    content: string;
    type: 'skill' | 'experience' | 'project' | 'cultural' | 'softSkill';
}

let boox: Boox<BooxDataItem>;

export const initializeBoox = (
    skills: Skill[],
    experiences: Experience[],
    projects: Project[],
    culturalValues: string[],
    softSkills: string[]
) => {
    boox = new Boox<BooxDataItem>({
        id: 'id',
        features: ['content'],
        attributes: ['type'],
        modelOptions: {
            normalizer: (input: string) => input.toLowerCase(),
            tokenizer: (input: string) => input.split(/\s+/),
            stemmer: (input: string) => input // You can implement a proper stemmer if needed
        }
    });

    const dataset: BooxDataItem[] = [
        ...skills.map((skill, index): BooxDataItem => ({ id: `skill_${index}`, content: skill.name, type: 'skill' })),
        ...experiences.map((exp, index): BooxDataItem => ({ id: `exp_${index}`, content: `${exp.position} ${exp.company} ${exp.description}`, type: 'experience' })),
        ...projects.map((proj, index): BooxDataItem => ({ id: `proj_${index}`, content: `${proj.title} ${proj.description}`, type: 'project' })),
        ...culturalValues.map((value, index): BooxDataItem => ({ id: `cultural_${index}`, content: value, type: 'cultural' })),
        ...softSkills.map((skill, index): BooxDataItem => ({ id: `softSkill_${index}`, content: skill, type: 'softSkill' })),
    ];

    boox.addDocumentsSync(dataset);
};

export const searchBoox = async (query: string) => {
    return await boox.search(query);
};

export const getSearchSuggestions = (query: string) => {
    return boox.getSearchSuggestions(query);
};

export const getPopularSearches = (limit: number = 10) => {
    return boox.getPopularSearches(limit);
};