// src/components/sections/TestimonialsSection.tsx
import React, { useState } from 'react';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Testimonial } from '../../types/data';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                Testimonials
            </Typography>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card variant="outlined">
                        <CardContent>
                            <Box display="flex" justifyContent="center" mb={2}>
                                <FaQuoteLeft size={24} />
                            </Box>
                            <Typography variant="body1" paragraph>
                                "{testimonials[currentIndex].quote}"
                            </Typography>
                            <Typography variant="subtitle1" align="right">
                                - {testimonials[currentIndex].author}
                            </Typography>
                            <Typography variant="subtitle2" align="right" color="text.secondary">
                                {testimonials[currentIndex].position}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button onClick={prevTestimonial} startIcon={<FaChevronLeft />}>
                    Previous
                </Button>
                <Button onClick={nextTestimonial} endIcon={<FaChevronRight />}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default TestimonialsSection;