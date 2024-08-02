// src/hooks/useExperienceMatch.ts
import { useState, useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import natural from 'natural';

const TfIdf = natural.TfIdf;
const tokenizer = new natural.WordTokenizer();

export interface ExperienceMatchResult {
    score: number;
    details: Array<{
        experience: {
            position: string;
            company: string;
            description: string[];
        };
        score: number;
        highlighted: string;
    }>;
}

export const useExperienceMatch = (jobDescription: string): ExperienceMatchResult => {
    const { experiences } = useData();
    const [experienceMatchResult, setExperienceMatchResult] = useState<ExperienceMatchResult>({
        score: 0,
        details: []
    });

    useEffect(() => {
        const jobTokens = tokenizer.tokenize(jobDescription.toLowerCase());
        const tfidf = new TfIdf();

        experiences.forEach(exp => tfidf.addDocument(`${exp.position} ${exp.company} ${exp.description}`));
        tfidf.addDocument(jobDescription);

        const expMatches = experiences.map((exp, index) => {
            const similarity = tfidf.tfidf(jobTokens, index);
            return { experience: exp, score: similarity };
        }).sort((a, b) => b.score - a.score);

        const expScore = expMatches.reduce((acc, match) => acc + match.score, 0) / experiences.length;

        setExperienceMatchResult({
            score: expScore,
            details: expMatches.map(match => ({
                experience: match.experience,
                score: match.score,
                highlighted: `${match.experience.position} at ${match.experience.company}`
            }))
        });
    }, [jobDescription, experiences]);

    return experienceMatchResult;
};