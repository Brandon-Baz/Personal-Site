import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion';

export const ResumeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export const ComicSpread = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    background-color: ${({theme}) => theme.palette.background.default};
    border: 5px solid ${({theme}) => theme.palette.primary.main};
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 10px 10px 0 ${({theme}) => theme.palette.secondary.main};
`;

export const ComicPanel = styled(motion.div)`
    background-color: #fff;
    border: 3px solid ${({theme}) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 5px 5px 0 ${({theme}) => theme.palette.secondary.main};
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
`;

export const ActionButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.text.secondary};
    box-shadow: 2px 2px 0 ${({theme}) => theme.palette.secondary.main};
    border-color: ${({theme}) => theme.palette.secondary.main};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({theme}) => theme.palette.secondary.main};
    }
`;

export const PanelTitle = styled.h2`
    font-family: var(--font-heading);
    font-size: 2rem;
    color: ${props => props.theme.palette.primary.main};
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 ${({theme}) => theme.palette.secondary.main};
`;

export const SectionContent = styled.div`
    font-family: var(--font-body);
    font-size: 1rem;
    color: ${({theme}) => theme.palette.text.primary};
    line-height: 1.6;
`;

export const SkillBar = styled.div`
    background-color: ${({theme}) => theme.palette.background.default};
    height: 20px;
    border-radius: 10px;
    margin-bottom: 1rem;
    overflow: hidden;
`;

interface SkillProgressProps {
    level: number;
}

export const SkillProgress = styled.div<SkillProgressProps>`
    width: ${props => props.level}%;
    height: 100%;
    background-color: ${({theme}) => theme.palette.primary.main};
    transition: width 1s ease-in-out;
`;

export const ExperienceItem = styled.div`
    margin-bottom: 1.5rem;
`;

export const CompanyName = styled.h3`
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: ${({theme}) => theme.palette.secondary.main};
    margin-bottom: 0.5rem;
`;

export const JobTitle = styled.h4`
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: ${({theme}) => theme.palette.text.primary};
    margin-bottom: 0.5rem;
`;

export const JobDuration = styled.p`
    font-style: italic;
    margin-bottom: 0.5rem;
`;

export const JobDescription = styled.ul`
    padding-left: 1.5rem;
`;

export const EducationItem = styled.div`
    margin-bottom: 1rem;
`;

export const Degree = styled.h3`
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: ${({theme}) => theme.palette.secondary.main};
    margin-bottom: 0.3rem;
`;

export const Institution = styled.h4`
    font-family: var(--font-body);
    font-size: 1.1rem;
    color: ${({theme}) => theme.palette.primary.main};
    margin-bottom: 0.3rem;
`;

export const starstruck = keyframes`
    0% {
        transform: scale(1) rotate(0deg);
    }
    50% {
        transform: scale(1.2) rotate(180deg);
    }
    100% {
        transform: scale(1) rotate(360deg);
    }
`;

export const Star = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid ${({theme}) => theme.palette.secondary.main};
    transform: rotate(35deg);

    &:before, &:after {
        content: '';
        position: absolute;
        background-color: ${({theme}) => theme.palette.secondary.main};
    }

    &:before {
        height: 20px;
        width: 4px;
        top: -10px;
        left: -7px;
        transform: rotate(-35deg);
    }

    &:after {
        height: 4px;
        width: 20px;
        top: 3px;
        left: -10px;
        transform: rotate(-35deg);
    }

    animation: ${starstruck} 2s infinite;
`;

export const ComicBurst = styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.background.default};
    padding: 10px;
    border-radius: 50%;
    font-family: var(--font-heading);
    font-size: 0.8rem;
    transform: rotate(15deg);
`;

export const Button = styled.button`
    font-family: var(--font-heading);
    font-size: 1rem;
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.background.default};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({theme}) => theme.palette.secondary.main};
    }
`;

interface SecretIdentityButtonProps {
    revealed: boolean;
}

export const SecretIdentityButton = styled(Button)<SecretIdentityButtonProps>`
    background-color: ${props => props.revealed ? props.theme.palette.secondary.main : props.theme.palette.primary.main};
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;

interface NavLinkProps {
    active?: boolean
}

export const NavLink = styled.button<NavLinkProps>`
    font-family: var(--font-heading);
    font-size: 1rem;
    background: none;
    border: none;
    color: ${props => props.active ? props.theme.palette.primary.main : props.theme.palette.text.primary};
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
        color: ${({theme}) => theme.palette.primary.main};
    }
`;

export const ContentSection = styled(motion.div)`
    background-color: ${({theme}) => theme.palette.background.default};
    border: 3px solid ${({theme}) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-heading);
    font-size: 2rem;
    color: ${({theme}) => theme.palette.primary.main};
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ItemTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: ${props => props.theme.palette.secondary.main};
  margin-bottom: 0.5rem;
`;

export const ItemSubtitle = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

interface ModeToggleButtonProps {
    onClick: () => void;
    isVillain: boolean;
}

export const VillainModeToggleButton = styled(Button)<ModeToggleButtonProps>`
  background-color: ${props => props.isVillain ? props.theme.palette.primary.main : props.theme.palette.secondary.main};
`;
export const ModeToggleButton = styled.button<ModeToggleButtonProps>`
  background-color: ${props => props.isVillain ? props.theme.palette.secondary.main : props.theme.palette.primary.main};
`;

export const RecruiterTools = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 20px;
`;

export const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.active ? props.theme.palette.primary.main : props.theme.palette.text.primary};
  border-bottom: ${props => props.active ? `2px solid ${props.theme.palette.primary.main}` : 'none'};
  margin-bottom: -2px;
`;

export const TabContent = styled.div<{ active: boolean }>`
    display: ${props => props.active ? 'block' : 'none'};
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.background.default};
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 2px solid ${({theme}) => theme.palette.primary.main};
`;