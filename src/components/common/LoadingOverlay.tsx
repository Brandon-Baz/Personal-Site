
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingOverlayProps {
    theme: 'hero' | 'villain' | 'secret_identity';
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ theme }) => {
    return (
        <motion.div
            className={`loading-overlay ${theme}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
    );
};

export default LoadingOverlay;