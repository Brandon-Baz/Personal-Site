// src/hooks/useCulturalMatch.ts
import { useState, useEffect } from 'react';
import { fuzzyMatch, FuzzyMatchResult, highlightMatches } from '../utils/fuzzyMatch';
import { useData } from '../contexts/DataContext';

export interface CulturalMatchResult {
    score: number;
    details: Array<{
        value: string;
        score: number;
        highlighted: string;
    }>;
}

export const useCulturalMatch = (jobDescription: string): CulturalMatchResult => {
    const { culturalValues } = useData();
    const [culturalMatchResult, setCulturalMatchResult] = useState<CulturalMatchResult>({
        score: 0,
        details: []
    });

    useEffect(() => {
        const jobTokens = jobDescription.toLowerCase().split(/\s+/);
        const culturalMatches: FuzzyMatchResult[] = fuzzyMatch(jobTokens.join(' '), culturalValues);
        const culturalScore = culturalMatches.reduce((acc, match) => acc + match.score, 0) / culturalValues.length;

        setCulturalMatchResult({
            score: culturalScore,
            details: culturalMatches.map(match => ({
                value: match.item,
                score: match.score,
                highlighted: highlightMatches(match.item, match.indices)
            }))
        });
    }, [jobDescription, culturalValues]);

    return culturalMatchResult;
};