import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ImgHTMLAttributes } from 'react';
import { IStyledComponentBase } from 'styled-components/dist/types';

export const ComicStripContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
`;

export const ComicStripTitle = styled(motion.h2)`
    font-family: var(--font-heading);
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const ComicStrip = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const ComicPanel = styled(motion.div)`
    flex: 1 1 200px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: ${({ theme }) => theme.palette.text.primary};
    border: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 0px ${({ theme }) => theme.palette.secondary.main};
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background-color: ${({ theme }) => theme.palette.background.default};
        transform: rotate(45deg);
    }
`;

interface ComicImageProps extends ImgHTMLAttributes<HTMLImageElement> {
}

export const ComicImage: IStyledComponentBase<'web', ComicImageProps> & string = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
`;


export const ComicCaption = styled(motion.p)`
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    margin-bottom: 5px;
`;

export const ComicDescription = styled(motion.p)`
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: ${({ theme }) => theme.palette.text.secondary};
    text-align: center;
`;
