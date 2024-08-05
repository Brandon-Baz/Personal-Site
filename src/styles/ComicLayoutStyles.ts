import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  background-image: url('/public/images/background/light_paper.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const ComicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  & > .full-width {
    grid-column: 1 / -1;
  }
`;

export const ComicPanel = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  background-blend-mode: overlay;
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
    background-repeat: no-repeat;
    background-size: 20px 20px;
    pointer-events: none;
  }
`;

export const PanelTitle = styled.h2`
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-transform: uppercase;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;
