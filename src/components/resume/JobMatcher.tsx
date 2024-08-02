// src/components/resume/JobMatcher.tsx
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {SkillMatchResult, useSkillMatch} from '../../hooks/useSkillMatch';
import {ExperienceMatchResult, useExperienceMatch} from '../../hooks/useExperienceMatch';
import {ProjectMatchResult, useProjectMatch} from '../../hooks/useProjectMatch';
import {CulturalMatchResult, useCulturalMatch} from '../../hooks/useCulturalMatch';
import {useSoftSkillMatch} from '../../hooks/useSoftSkillMatch';
import {useTheme} from '../../contexts/ThemeContext';
import {
    MatchContainer,
    MatchTitle,
    MatchBar,
    MatchDetails,
    MatchExplanation,
    TextArea,
    OverallMatchMeter,
    PreferencesForm,
    MatchType,
    ExpandButton
} from '../../styles/JobMatcherStyles';
import {useUserPreferences} from "../../contexts/UserPreferencesContext";
import {Experience} from "../../types/data";

type MatchResult = SkillMatchResult | ExperienceMatchResult | ProjectMatchResult | CulturalMatchResult;

type MatchDetail =
    | { skill: string; score: number; highlighted: string; }
    | { experience: Omit<Experience, 'duration'> & { duration?: string }; score: number; highlighted: string; }
    | { project: { title: string; description: string; }; score: number; highlighted: string; }
    | { value: string; score: number; highlighted: string; };

export const JobMatcher: React.FC = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [expandedMatch, setExpandedMatch] = useState<string | null>(null);
    const {theme} = useTheme();
    const {preferences, updatePreferences} = useUserPreferences();

    const skillMatch = useSkillMatch(jobDescription);
    const experienceMatch = useExperienceMatch(jobDescription);
    const projectMatch = useProjectMatch(jobDescription);
    const culturalMatch = useCulturalMatch(jobDescription);
    const softSkillMatch = useSoftSkillMatch(jobDescription);

    const [overallMatch, setOverallMatch] = useState(0);

    useEffect(() => {
        const weights = {skill: 0.3, experience: 0.25, project: 0.2, cultural: 0.15, softSkill: 0.1};
        const newOverallMatch =
            skillMatch.score * weights.skill +
            experienceMatch.score * weights.experience +
            projectMatch.score * weights.project +
            culturalMatch.score * weights.cultural +
            softSkillMatch.score * weights.softSkill;
        setOverallMatch(newOverallMatch);
    }, [skillMatch, experienceMatch, projectMatch, culturalMatch, softSkillMatch]);

    const toggleExpand = (matchType: string) => {
        setExpandedMatch(expandedMatch === matchType ? null : matchType);
    };

    const renderMatchDetails = (matchType: string, result: MatchResult) => (
        <AnimatePresence>
            {expandedMatch === matchType && (
                <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3}}
                >
                    {result.details.map((detail: MatchDetail, index: number) => (
                        <MatchExplanation key={index} dangerouslySetInnerHTML={{__html: detail.highlighted}}/>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );

    const handleWeightChange = (key: keyof typeof preferences.weights, value: number) => {
        updatePreferences({
            weights: {...preferences.weights, [key]: value}
        });
    };


    function handleThresholdChange(newThreshold: number): void {
        updatePreferences({
            ...preferences,
            threshold: newThreshold
        });
    }

    return (
        <MatchContainer theme={theme}>
            <MatchTitle>Job Matcher</MatchTitle>
            <TextArea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste job description here..."
            />

            <PreferencesForm>
                <h4>Customize Weights:</h4>
                {Object.entries(preferences.weights).map(([key, value]) => (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={value}
                            onChange={(e) => handleWeightChange(key as keyof typeof preferences.weights, parseFloat(e.target.value))}
                        />
                        <span>{value}</span>
                    </div>
                ))}
                <h4>Matching Threshold:</h4>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={preferences.threshold}
                    onChange={(e) => handleThresholdChange(parseFloat(e.target.value))}
                />
                <span>{preferences.threshold}</span>
            </PreferencesForm>

            <OverallMatchMeter score={overallMatch}>
                <motion.div
                    className="meter-fill"
                    initial={{width: 0}}
                    animate={{width: `${overallMatch * 100}%`}}
                    transition={{duration: 1}}
                />
                <span className="meter-text">{(overallMatch * 100).toFixed(2)}% Match</span>
            </OverallMatchMeter>
            {[
                {type: 'Skill', result: skillMatch},
                {type: 'Experience', result: experienceMatch},
                {type: 'Project', result: projectMatch},
                {type: 'Cultural', result: culturalMatch},
                {type: 'Soft Skill', result: softSkillMatch}
            ].map(({type, result}) => (
                <MatchType key={type}>
                    <MatchBar score={result.score}/>
                    <MatchDetails>
                        <h4>{type} Match: {(result.score * 100).toFixed(2)}%</h4>
                        <ExpandButton onClick={() => toggleExpand(type)}>
                            {expandedMatch === type ? 'Collapse' : 'Expand'}
                        </ExpandButton>
                    </MatchDetails>
                    {renderMatchDetails(type, result)}
                </MatchType>
            ))}
        </MatchContainer>
    );
};