// src/components/Testimonials.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialItem {
    quote: string;
    author: string;
    position: string;
}

interface TestimonialsProps {
    testimonials: TestimonialItem[];
    secretIdentityRevealed: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div className="testimonials-section">
            <h2>Testimonials</h2>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTestimonial}
                    className="testimonial"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                >
                    <p>{testimonials[currentTestimonial].quote}</p>
                    <p className="author">- {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].position}</p>
                </motion.div>
            </AnimatePresence>
            <button onClick={nextTestimonial} className="next-testimonial-button">Next Testimonial</button>
        </div>
    );
};
