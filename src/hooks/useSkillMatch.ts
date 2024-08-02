// src/hooks/useSkillMatch.ts
import { useState, useEffect } from 'react';
import { fuzzyMatch, FuzzyMatchResult, highlightMatches } from '../utils/fuzzyMatch';
import { useData } from '../contexts/DataContext';

export interface SkillMatchResult {
    score: number;
    details: Array<{
        skill: string;
        score: number;
        highlighted: string;
    }>;
}

export const useSkillMatch = (jobDescription: string): SkillMatchResult => {
    const { skills } = useData();
    const [skillMatchResult, setSkillMatchResult] = useState<SkillMatchResult>({
        score: 0,
        details: []
    });

    useEffect(() => {
        const jobTokens = jobDescription.toLowerCase().split(/\s+/);
        const skillMatches: FuzzyMatchResult[] = fuzzyMatch(jobTokens.join(' '), skills.map(s => s.name));
        const skillScore = skillMatches.reduce((acc, match) => acc + match.score, 0) / skills.length;

        setSkillMatchResult({
            score: skillScore,
            details: skillMatches.map(match => ({
                skill: match.item,
                score: match.score,
                highlighted: highlightMatches(match.item, match.indices)
            }))
        });
    }, [jobDescription, skills]);

    return skillMatchResult;
};