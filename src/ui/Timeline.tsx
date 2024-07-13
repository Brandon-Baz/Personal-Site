import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="timeline-event"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
