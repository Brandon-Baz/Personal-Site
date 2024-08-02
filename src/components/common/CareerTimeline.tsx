// src/components/CareerTimeline.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/theme/theme';

interface CareerEvent {
    year: number;
    title: string;
    description: string;
}

const careerEvents: CareerEvent[] = [
    { year: 2010, title: "Joined US Navy", description: "Served as Fire Controlman (Advanced Electronics and Computers)" },
    { year: 2013, title: "AT&T Store Manager", description: "Managed retail store, increased revenue by 75% in the first year" },
    { year: 2018, title: "Software Engineer at FiveM", description: "Developed and optimized APIs, engineered messaging systems" },
    { year: 2022, title: "Full Sail University", description: "Earned Software Engineer Certificate with 4.0 GPA" },
    { year: 2022, title: "Wolfjaw Studios", description: "Developed high-quality software solutions for video games" },
];

const CareerTimeline: React.FC = () => {
    const { theme } = useTheme();
    const [selectedEvent, setSelectedEvent] = useState<CareerEvent | null>(null);

    return (
        <div className={`career-timeline ${theme}`}>
            <h2>Career Timeline</h2>
            <div className="timeline">
                {careerEvents.map((event, index) => (
                    <motion.div
                        key={event.year}
                        className="timeline-event"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setSelectedEvent(event)}
                    >
                        <span className="year">{event.year}</span>
                        <span className="title">{event.title}</span>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="event-details"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <h3>{selectedEvent.title}</h3>
                        <p>{selectedEvent.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CareerTimeline;