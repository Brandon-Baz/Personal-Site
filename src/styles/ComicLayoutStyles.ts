import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageContainer = styled.div<{ $isComicBook: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: url("/images/background/light_paper.jpg");
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;

  ${({ $isComicBook }) => $isComicBook && `
    background-image: url("/images/background/comic_dots.png");
    background-repeat: repeat;
  `}
`;

export const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled(motion.h1)<{ $isComicBook: boolean }>`
  font-family: 'Bangers', cursive;
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
  ${({ $isComicBook }) => $isComicBook && `
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 3px 3px 0 #000000;
  `}
`;

export const Subtitle = styled(motion.h2)<{ $isComicBook: boolean }>`
  font-family: 'Comic Neue', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
  ${({ $isComicBook }) => $isComicBook && `
    font-weight: 700;
    text-transform: uppercase;
  `}
`;

export const ComicGrid = styled.div<{ $isComicBook: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin-top: ${({ theme }) => theme.spacing(4)};

  & > .full-width {
    grid-column: 1 / -1;
  }

  ${({ $isComicBook }) => $isComicBook && `
    gap: 20px;
    background-color: #FFFFFF;
    padding: 20px;
    border: 5px solid #000000;
    box-shadow: 10px 10px 0 rgba(0,0,0,0.8);
  `}
  `;

export const ComicPanel = styled.div<{ $isComicBook: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ${({ $isComicBook }) => $isComicBook && `
    border: 3px solid #000000;
    box-shadow: 5px 5px 0 #000000;
    transform: rotate(-1deg);
  `}
`;

export const PanelTitle = styled.h2<{ $isComicBook: boolean }>`
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-transform: uppercase;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;
