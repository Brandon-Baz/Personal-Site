import { useState, useEffect, useRef } from 'react';
import { useData } from '../contexts/DataContext';
import { searchBoox, getSearchSuggestions, BooxDataItem } from '../utils/nlpUtils';
import { Skill, Experience, Project } from '../types/data';
import { SearchResult } from 'boox';

const CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes

interface MatchResult {
    score: number;
    details: Array<{ name: string; relevance: number }>;
}

interface JobMatchResults {
    skillMatch: MatchResult;
    experienceMatch: MatchResult;
    projectMatch: MatchResult;
    culturalMatch: MatchResult;
    softSkillMatch: MatchResult;
    overallJobMatch: number;
    keyPhrases: string[];
    namedEntities: string[];
}

export const useJobMatch = (jobDescription: string): JobMatchResults => {
    const { skills, experiences, projects, culturalValues, softSkills } = useData();
    const [matchResults, setMatchResults] = useState<JobMatchResults>({
        skillMatch: { score: 0, details: [] },
        experienceMatch: { score: 0, details: [] },
        projectMatch: { score: 0, details: [] },
        culturalMatch: { score: 0, details: [] },
        softSkillMatch: { score: 0, details: [] },
        overallJobMatch: 0,
        keyPhrases: [],
        namedEntities: []
    });

    const cacheRef = useRef<Map<string, { results: JobMatchResults, timestamp: number }>>(new Map());

    useEffect(() => {
        const cachedResult = cacheRef.current.get(jobDescription);
        if (cachedResult && Date.now() - cachedResult.timestamp < CACHE_EXPIRATION) {
            setMatchResults(cachedResult.results);
            return;
        }

        const calculateMatches = async () => {
            try {
                const searchResults = await searchBoox(jobDescription);

                const calculateMatchResult = <T extends Skill | Experience | Project | string>(items: T[], type: string): MatchResult => {
                    const matchingItems = searchResults.filter((result: SearchResult<BooxDataItem>) =>
                        result.attributes && result.attributes.type === type
                    );
                    const score = matchingItems.length > 0 ? matchingItems.reduce((sum, item) => sum + item.score, 0) / matchingItems.length : 0;
                    const details = matchingItems.map(item => ({
                        name: item.attributes && typeof item.attributes.content === 'string' ? item.attributes.content : '',
                        relevance: item.score
                    }));
                    return { score, details };
                };

                const skillMatchResult = calculateMatchResult(skills, 'skill');
                const experienceMatchResult = calculateMatchResult(experiences, 'experience');
                const projectMatchResult = calculateMatchResult(projects, 'project');
                const culturalMatchResult = calculateMatchResult(culturalValues, 'cultural');
                const softSkillMatchResult = calculateMatchResult(softSkills, 'softSkill');

                const keyPhrases = getSearchSuggestions(jobDescription).slice(0, 5);
                const namedEntities: string[] = [];

                const weights = { skill: 0.3, experience: 0.25, project: 0.2, cultural: 0.15, softSkill: 0.1 };
                const overallJobMatch =
                    skillMatchResult.score * weights.skill +
                    experienceMatchResult.score * weights.experience +
                    projectMatchResult.score * weights.project +
                    culturalMatchResult.score * weights.cultural +
                    softSkillMatchResult.score * weights.softSkill;

                const newResults: JobMatchResults = {
                    skillMatch: skillMatchResult,
                    experienceMatch: experienceMatchResult,
                    projectMatch: projectMatchResult,
                    culturalMatch: culturalMatchResult,
                    softSkillMatch: softSkillMatchResult,
                    overallJobMatch,
                    keyPhrases,
                    namedEntities
                };

                setMatchResults(newResults);
                cacheRef.current.set(jobDescription, { results: newResults, timestamp: Date.now() });
            } catch (error) {
                console.error('Error in job matching calculation:', error);
                // Handle error state here
            }
        };

        calculateMatches();
    }, [jobDescription, skills, experiences, projects, culturalValues, softSkills]);

    return matchResults;
};