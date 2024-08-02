// src/components/resume/JobComparison.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJobMatch } from '../../hooks/useJobMatch';
import { useTheme } from '../../contexts/ThemeContext';
import { useUserPreferences } from '../../contexts/UserPreferencesContext';
import { exportToCSV, exportToJSON } from '../../utils/exportResults';
import {
    ComparisonContainer,
    JobList,
    JobItem,
    AddJobButton,
    ComparisonChart,
    ExportButton
} from '../../styles/JobComparisonStyles';
import "../../styles/theme/theme";
import {heroTheme, villainTheme} from "../../styles/theme/theme";

interface Job {
    id: number;
    description: string;
}

export const GetJobMatchResults = (description: string) => {
    return useJobMatch(description);
}

export const JobComparison: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
    const { theme } = useTheme();
    const { preferences } = useUserPreferences();

    // Get Background Color from theme
    const backgroundColor = theme === heroTheme ? heroTheme.palette.background : villainTheme.palette.background;
    const selectedJob = jobs.find(job => job.id === selectedJobId);
    const matchResults = GetJobMatchResults(selectedJob?.description || '');

    const [jobMatchResults, setJobMatchResults] = useState<Array<{
        jobId: number;
        description: string;
        results: ReturnType<typeof useJobMatch>;
    }>>([]);


        useEffect(() => {
            const results = jobs.map(job => ({
                jobId: job.id,
                description: job.description,
                results: GetJobMatchResults(job.description)
            }));
            setJobMatchResults(results);
        }, [jobs, preferences]);

        const addJob = () => {
            const newJob = { id: Date.now(), description: '' };
            setJobs(prevJobs => [...prevJobs, newJob]);
            setSelectedJobId(newJob.id);
        };

        const exportResults = (format: 'csv' | 'json') => {
            const exportData = jobMatchResults.map(({ jobId, description, results }) => ({
                jobId,
                description,
                ...results
            }));
            if (format === 'csv') {
                exportToCSV(exportData, 'job_comparison_results.csv');
            } else {
                exportToJSON(exportData, 'job_comparison_results.json');
            }
        };

        const updateJobDescription = (id: number, description: string) => {
            setJobs(prevJobs => prevJobs.map(job => job.id === id ? { ...job, description } : job));
        };

        const removeJob = (id: number) => {
            setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
            if (selectedJobId === id) {
                setSelectedJobId(jobs[0]?.id || null);
            }
        };

        return (
            <ComparisonContainer>
                <JobList>
                    {jobs.map(job => (
                        <JobItem
                            key={job.id}
                            onClick={() => setSelectedJobId(job.id)}
                            selected={job.id === selectedJobId}
                        >
                            Job {job.id}
                            <button onClick={() => removeJob(job.id)}>X</button>
                        </JobItem>
                    ))}
                    <AddJobButton onClick={addJob}>+ Add Job</AddJobButton>
                </JobList>
                <AnimatePresence mode="wait">
                    {selectedJob && (
                        <motion.div
                            key={selectedJob.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                        <textarea
                            value={selectedJob.description}
                            onChange={(e) => updateJobDescription(selectedJob.id, e.target.value)}
                            placeholder="Paste job description here..."
                        />
                            <ComparisonChart>
                                {Object.entries(matchResults)
                                    .filter(([key]) => !['overallMatch', 'keyPhrases', 'namedEntities'].includes(key))
                                    .map(([key, value]) => (
                                        <div key={key}>
                                            <h4>{key}: {(value.score * 100).toFixed(2)}%</h4>
                                            <div style={{
                                                width: `${value.score * 100}%`,
                                                backgroundColor: backgroundColor.default,
                                                height: '10px'
                                            }}/>
                                        </div>
                                    ))
                                }
                            </ComparisonChart>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div>
                    <ExportButton onClick={() => exportResults('csv')}>Export to CSV</ExportButton>
                    <ExportButton onClick={() => exportResults('json')}>Export to JSON</ExportButton>
                </div>
            </ComparisonContainer>
        );
    }
    ;