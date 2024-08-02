// src/hooks/useSoftSkillMatch.ts
import { useState, useEffect } from 'react';
import { fuzzyMatch, FuzzyMatchResult, highlightMatches } from '../utils/fuzzyMatch';
import { useData } from '../contexts/DataContext';

export interface SoftSkillMatchResult {
    score: number;
    details: Array<{
        skill: string;
        score: number;
        highlighted: string;
    }>;
}

export const useSoftSkillMatch = (jobDescription: string): SoftSkillMatchResult => {
    const { softSkills } = useData();
    const [softSkillMatchResult, setSoftSkillMatchResult] = useState<SoftSkillMatchResult>({
        score: 0,
        details: []
    });

    useEffect(() => {
        const jobTokens = jobDescription.toLowerCase().split(/\s+/);
        const softSkillMatches: FuzzyMatchResult[] = fuzzyMatch(jobTokens.join(' '), softSkills);
        const softSkillScore = softSkillMatches.reduce((acc, match) => acc + match.score, 0) / softSkills.length;

        setSoftSkillMatchResult({
            score: softSkillScore,
            details: softSkillMatches.map(match => ({
                skill: match.item,
                score: match.score,
                highlighted: highlightMatches(match.item, match.indices)
            }))
        });
    }, [jobDescription, softSkills]);

    return softSkillMatchResult;
};