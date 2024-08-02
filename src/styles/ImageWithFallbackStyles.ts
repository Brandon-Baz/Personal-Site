import {motion} from 'framer-motion';
import styled from 'styled-components';

export const StyledImageSquare = styled.img`
    max-width: 100%;
    height: auto;
`;

export const StyledImageCircular = styled(motion.img)`
    width: 300px;
    height: auto;
    border: 5px solid ${({theme}) => theme.palette.secondary.main};;
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${({theme}) => theme.palette.primary.main};,
0 0 0 10 px ${({theme}) => theme.palette.secondary.main};;
`;

export const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    padding: 1rem;
`;

export const FallbackMessage = styled.div`
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: ${({theme}) => theme.palette.text.secondary};
`;