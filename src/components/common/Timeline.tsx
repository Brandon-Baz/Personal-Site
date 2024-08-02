// src/components/Timeline.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Timeline.css';
import {ThemeMode} from "../../types/Theme";

interface TimelineEvent {
    year: number;
    title: string;
    description: string;
    details: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        year: 2010,
        title: "Joined US Navy",
        description: "Served as Fire Controlman (Advanced Electronics and Computers)",
        details: "During my time in the Navy, I honed my skills in advanced electronics and computer systems. I was responsible for maintaining and operating complex radar and weapon systems, which sparked my interest in technology and laid the foundation for my future career in software engineering."
    },
    {
        year: 2013,
        title: "AT&T Store Manager",
        description: "Managed retail store, increased revenue by 75% in the first year",
        details: "As a Store Manager at AT&T, I developed strong leadership and customer service skills. I implemented innovative sales strategies and fostered a positive team environment, which led to a significant increase in store revenue. This experience taught me the importance of effective communication and problem-solving in a fast-paced business environment."
    },
    {
        year: 2018,
        title: "Software Engineer at FiveM",
        description: "Developed and optimized APIs, engineered messaging systems",
        details: "At FiveM, I transitioned fully into software engineering. I worked on developing robust APIs and creating efficient messaging systems. This role allowed me to dive deep into backend development, where I discovered my passion for building scalable and high-performance software solutions."
    },
    {
        year: 2022,
        title: "Full Sail University",
        description: "Earned Software Engineer Certificate with 4.0 GPA",
        details: "To formalize my software engineering skills and stay current with the latest technologies, I pursued a Software Engineering Certificate at Full Sail University. This intensive program allowed me to refine my coding skills, learn new programming paradigms, and collaborate with fellow aspiring developers on challenging projects."
    },
    {
        year: 2022,
        title: "Wolfjaw Studios",
        description: "Developed high-quality software solutions for video games",
        details: "At Wolfjaw Studios, I combined my passion for gaming with my software engineering skills. I've been working on developing cutting-edge software solutions for video games, focusing on creating immersive and seamless gaming experiences. This role has allowed me to push the boundaries of what's possible in game development and continue growing as a software engineer."
    },
];

interface TimelineProps {
    theme: ThemeMode;
}

const Timeline: React.FC<TimelineProps> = ({ theme }) => {
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

    return (
        <div className={`timeline ${theme}`}>
            <div className="timeline-events">
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={event.year}
                        className="timeline-event"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedEvent(event)}
                    >
                        <span className="year">{event.year}</span>
                        <span className="title">{event.title}</span>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {selectedEvent && (
                    <motion.div
                        key={selectedEvent.year}
                        className="event-details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{selectedEvent.title}</h3>
                        <p>{selectedEvent.description}</p>
                        <p className="event-details-expanded">{selectedEvent.details}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Timeline;