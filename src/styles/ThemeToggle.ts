import styled from 'styled-components';

interface ThemeToggleProps {
    isHero: boolean;
}

export const ToggleContainer = styled.button<ThemeToggleProps>`
  background-color: ${props => props.theme.palette.background.paper};
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ isHero }) => isHero ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ isHero }) => isHero ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export const ToggleButton = styled.button<ThemeToggleProps>`
    background-color: ${props => props.theme.palette.background.paper};
    border: 3px solid ${props => props.theme.palette.primary.main};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;

    svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ isHero }) => isHero ? 'translateY(0)' : 'translateY(100px)'};
        }

        &:nth-child(2) {
            transform: ${({ isHero }) => isHero ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
    
    &:after {
    content: ${props => props.isHero ? '"Villain Mode"' : '"Hero Mode"'
    }
`;