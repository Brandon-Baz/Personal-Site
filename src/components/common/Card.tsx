import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CardProps {
    title: string;
    content: React.ReactNode;
    action?: React.ReactNode;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[4],
    },
}));

const Card: React.FC<CardProps> = ({ title, content, action }) => {
    return (
        <StyledPaper elevation={2}>
            <Typography variant="h5" component="h2" gutterBottom>
                {title}
            </Typography>
            <Box flexGrow={1}>{content}</Box>
            {action && <Box mt={2}>{action}</Box>}
        </StyledPaper>
    );
};

export default Card;