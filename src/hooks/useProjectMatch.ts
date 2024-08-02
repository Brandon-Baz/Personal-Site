// src/hooks/useProjectMatch.ts
import { useState, useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import natural from 'natural';

const TfIdf = natural.TfIdf;
const tokenizer = new natural.WordTokenizer();

export interface ProjectMatchResult {
    score: number;
    details: Array<{
        project: {
            title: string;
            description: string;
        };
        score: number;
        highlighted: string;
    }>;
}

export const useProjectMatch = (jobDescription: string): ProjectMatchResult => {
    const { projects } = useData();
    const [projectMatchResult, setProjectMatchResult] = useState<ProjectMatchResult>({
        score: 0,
        details: []
    });

    useEffect(() => {
        const jobTokens = tokenizer.tokenize(jobDescription.toLowerCase());
        const tfidf = new TfIdf();

        projects.forEach(proj => tfidf.addDocument(`${proj.title} ${proj.description}`));
        tfidf.addDocument(jobDescription);

        const projMatches = projects.map((proj, index) => {
            const similarity = tfidf.tfidf(jobTokens, index);
            return { project: proj, score: similarity };
        }).sort((a, b) => b.score - a.score);

        const projScore = projMatches.reduce((acc, match) => acc + match.score, 0) / projects.length;

        setProjectMatchResult({
            score: projScore,
            details: projMatches.map(match => ({
                project: match.project,
                score: match.score,
                highlighted: match.project.title
            }))
        });
    }, [jobDescription, projects]);

    return projectMatchResult;
};