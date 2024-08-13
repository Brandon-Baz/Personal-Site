import styled from 'styled-components';

const Panel = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  background-image: "/public/images/background/light_paper.jpg";
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    background-image: "/public/images/background/light_paper.jpg";
    transform: rotate(45deg);
  }
`;

const PanelGrid = styled.div`
    display: grid;
    background-image: "/public/images/background/light_paper.jpg";
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
`;

const PanelTitle = styled.h2`
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

const PanelContent = styled.div`
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
  background-image: "/public/images/background/light_paper.jpg";

`;

export const ComicStrip = styled.div<{ $isComicBook: boolean }>`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 0 ${({ theme }) => theme.palette.secondary.main};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(to right, #fff 3px, transparent 3px) 0 0,
      linear-gradient(to right, #fff 3px, transparent 3px) 0 100%,
      linear-gradient(to left, #fff 3px, transparent 3px) 100% 0,
      linear-gradient(to left, #fff 3px, transparent 3px) 100% 100%,
      linear-gradient(to bottom, #fff 3px, transparent 3px) 0 0,
      linear-gradient(to bottom, #fff 3px, transparent 3px) 100% 0,
      linear-gradient(to top, #fff 3px, transparent 3px) 0 100%,
      linear-gradient(to top, #fff 3px, transparent 3px) 100% 100%;
    background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    pointer-events: none;
  }
`;



export { Panel, PanelGrid, PanelTitle, PanelContent };