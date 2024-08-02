import styled from 'styled-components';

const Panel = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
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
    background-color: ${({ theme }) => theme.palette.background.default};
    transform: rotate(45deg);
  }
`;

const PanelGrid = styled.div`
    display: grid;
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
`;

export { Panel, PanelGrid, PanelTitle, PanelContent };