// src/contexts/DataContext.tsx
import React, {createContext, useContext, useState, ReactNode} from 'react';
import {
    Mission,
    Nemesis,
    Power,
    Tool,
    Experience,
    Education,
    Project,
    Testimonial,
    Skill,
    Value,
    Interest,
    ComicPanel,
    Achievement,
    Service,
    DailyLifeComic,
    AboutContent,
    CareerDevelopment, ImpactMetric, HomeSummary
} from '../types/data';

interface DataContextType {
    missions: Mission[];
    nemeses: Nemesis[];
    powers: Power[];
    tools: Tool[];
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    testimonials: Testimonial[];
    skills: Skill[];
    values: Value[];
    interests: Interest[];
    comicPanels: ComicPanel[];
    achievements: Achievement[];
    services: Service[];
    dailyLifeComics: DailyLifeComic[];
    villainDailyLifeComics: DailyLifeComic[];
    professionalContent: DailyLifeComic[];
    content: AboutContent;
    careerDevelopment: CareerDevelopment[];
    impactMetrics: ImpactMetric[];
    summaries: HomeSummary;
    culturalValues: string[];
    softSkills: string[];
    actionWords: string[];
    summary: string;
    isInitialized: boolean;

    skill: { [category: string]: Skill[] };
    updateMissions: (newMissions: Mission[]) => void;
    updateNemeses: (newNemeses: Nemesis[]) => void;
    updatePowers: (newPowers: Power[]) => void;
    updateTools: (newTools: Tool[]) => void;
    updateExperiences: (newExperiences: Experience[]) => void;
    updateEducation: (newEducation: Education[]) => void;
    updateProjects: (newProjects: Project[]) => void;
    updateTestimonials: (newTestimonials: Testimonial[]) => void;
    updateSkills: (newSkills: Skill[]) => void;
    updateValues: (newValues: Value[]) => void;
    updateInterests: (newInterests: Interest[]) => void;
    updateComicPanels: (newComicPanels: ComicPanel[]) => void;
    updateActionWords: (newActionWords: string[]) => void;
    updateAchievements: (newAchievements: Achievement[]) => void;
    updateServices: (newServices: Service[]) => void;
    updateDailyLifeComics: (newDailyLifeComics: DailyLifeComic[]) => void;
    updateVillainDailyLifeComics: (newVillainDailyLifeComics: DailyLifeComic[]) => void;
    updateProfessionalContent: (newProfessionalContent: DailyLifeComic[]) => void;
    updateContent: (newContent: AboutContent) => void;
    updateCareerDevelopment: (newCareerDevelopment: CareerDevelopment[]) => void;
    updateImpactMetrics: (newImpactMetrics: ImpactMetric[]) => void;
    updateSummaries: (newSummaries: HomeSummary) => void;
    updateSkill: (skills: { [category: string]: Skill[] }) => void;
    updateMission: (missions: Mission[]) => void;
    updateProject: (projects: Project[]) => void;
    updateService: (services: Service[]) => void;
    updateSummary: (newSummary: string) => void;
    updateCulturalValues: (newCulturalValues: string[]) => void;
    updateSoftSkills: (newSoftSkills: string[]) => void;


    updateIsInitialized: (newIsInitialized: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [missions, setMissions] = useState<Mission[]>([]);
    const [nemeses, setNemeses] = useState<Nemesis[]>([]);
    const [powers, setPowers] = useState<Power[]>([]);
    const [tools, setTools] = useState<Tool[]>([]);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [education, setEducation] = useState<Education[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [skill, setSkill] = useState<{ [category: string]: Skill[] }>({});
    const [values, setValues] = useState<Value[]>([]);
    const [interests, setInterests] = useState<Interest[]>([]);
    const [comicPanels, setComicPanels] = useState<ComicPanel[]>([]);
    const [summary, setSummary] = useState<string>('');
    const [actionWords, setActionWords] = useState<string[]>([]);
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [dailyLifeComics, setDailyLifeComics] = useState<DailyLifeComic[]>([]);
    const [villainDailyLifeComics, setVillainDailyLifeComics] = useState<DailyLifeComic[]>([]);
    const [professionalContent, setProfessionalContent] = useState<DailyLifeComic[]>([]);
    const [content, setContent] = useState<AboutContent>({} as AboutContent);
    const [careerDevelopment, setCareerDevelopment] = useState<CareerDevelopment[]>([]);
    const [impactMetrics, setImpactMetrics] = useState<ImpactMetric[]>([]);
    const [summaries, setSummaries] = useState<HomeSummary>({} as HomeSummary);
    const [culturalValues, setCulturalValues] = useState<string[]>([]);
    const [softSkills, setSoftSkills] = useState<string[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    const updateMissions = (newMissions: Mission[]) => {
        setMissions(newMissions);
        setIsInitialized(true);
    };
    const updateNemeses = (newNemeses: Nemesis[]) => {
        setNemeses(newNemeses);
        setIsInitialized(true);
    };
    const updatePowers = (newPowers: Power[]) => {
        setPowers(newPowers);
        setIsInitialized(true);
    };
    const updateTools = (newTools: Tool[]) => {
        setTools(newTools);
        setIsInitialized(true);
    };
    const updateExperiences = (newExperiences: Experience[]) => {
        setExperiences(newExperiences);
        setIsInitialized(true);
    };
    const updateEducation = (newEducation: Education[]) => {
        setEducation(newEducation);
        setIsInitialized(true);
    };
    const updateProjects = (newProjects: Project[]) => {
        setProjects(newProjects);
        setIsInitialized(true);
    };
    const updateTestimonials = (newTestimonials: Testimonial[]) => {
        setTestimonials(newTestimonials);
        setIsInitialized(true);
    };
    const updateSkills = (newSkills: Skill[]) => {
        setSkills(newSkills);
        setIsInitialized(true);
    };
    const updateValues = (newValues: Value[]) => {
        setValues(newValues);
        setIsInitialized(true);
    };
    const updateInterests = (newInterests: Interest[]) => {
        setInterests(newInterests);
        setIsInitialized(true);
    };
    const updateComicPanels = (newComicPanels: ComicPanel[]) => {
        setComicPanels(newComicPanels);
        setIsInitialized(true);
    };
    const updateSummary = (newSummary: string) => {
        setSummary(newSummary);
        setIsInitialized(true);
    };
    const updateActionWords = (newActionWords: string[]) => {
        setActionWords(newActionWords);
        setIsInitialized(true);
    };
    const updateAchievements = (newAchievements: Achievement[]) => {
        setAchievements(newAchievements);
        setIsInitialized(true);
    };
    const updateServices = (newServices: Service[]) => {
        setServices(newServices);
        setIsInitialized(true);
    };
    const updateDailyLifeComics = (newDailyLifeComics: DailyLifeComic[]) => {
        setDailyLifeComics(newDailyLifeComics);
        setIsInitialized(true);
    };
    const updateVillainDailyLifeComics = (newVillainDailyLifeComics: DailyLifeComic[]) => {
        setVillainDailyLifeComics(newVillainDailyLifeComics);
        setIsInitialized(true);
    };
    const updateProfessionalContent = (newProfessionalContent: DailyLifeComic[]) => {
        setProfessionalContent(newProfessionalContent);
        setIsInitialized(true);
    };
    const updateContent = (newContent: AboutContent) => {
        setContent(newContent);
        setIsInitialized(true);
    };
    const updateCareerDevelopment = (newCareerDevelopment: CareerDevelopment[]) => {
        setCareerDevelopment(newCareerDevelopment);
        setIsInitialized(true);
    };
    const updateImpactMetrics = (newImpactMetrics: ImpactMetric[]) => {
        setImpactMetrics(newImpactMetrics);
        setIsInitialized(true);
    };
    const updateSummaries = (newSummaries: HomeSummary) => {
        setSummaries(newSummaries);
        setIsInitialized(true);
    };
    const updateCulturalValues = (newCulturalValues: string[]) => {
        setCulturalValues(newCulturalValues);
        setIsInitialized(true);
    };
    const updateSoftSkills = (newSoftSkills: string[]) => {
        setSoftSkills(newSoftSkills);
        setIsInitialized(true);
    };
    const updateIsInitialized = (newIsInit: boolean) => {
        setIsInitialized(newIsInit);
    };

    const updateMission = (newMissions: Mission[]) => setMissions(newMissions);
    const updateSkill = (newSkills: { [category: string]: Skill[] }) => setSkill(newSkills);
    const updateProject = (newProjects: Project[]) => setProjects(newProjects);
    const updateService = (newServices: Service[]) => setServices(newServices);

    return (
        <DataContext.Provider value={{
            missions, nemeses, powers, tools, experiences, education, projects,
            testimonials, skills, values, interests, comicPanels, summary, actionWords, achievements,
            services, dailyLifeComics, villainDailyLifeComics, careerDevelopment, professionalContent, content,
            impactMetrics, summaries, culturalValues, softSkills, isInitialized, skill,
            updateMissions, updateNemeses, updatePowers, updateTools, updateExperiences,
            updateEducation, updateProjects, updateTestimonials, updateSkills,
            updateValues, updateInterests, updateComicPanels, updateSummary, updateActionWords,
            updateAchievements, updateServices,  updateDailyLifeComics, updateVillainDailyLifeComics, updateProfessionalContent,
            updateContent, updateCareerDevelopment, updateImpactMetrics, updateSummaries, updateIsInitialized,
            updateMission, updateSkill, updateProject, updateService, updateCulturalValues, updateSoftSkills,
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export default DataProvider;