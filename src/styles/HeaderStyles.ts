import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
    $isHero: boolean;
}

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    z-index: 1000;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        height: 10px;
        background: repeating-linear-gradient(
            135deg,
            ${({ theme }) => theme.palette.secondary.main},
            ${({ theme }) => theme.palette.secondary.main} 10px,
            transparent 10px,
            transparent 20px
        );
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const LogoText = styled.h1`
    font-family: 'Bangers', cursive;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
    text-shadow: 3px 3px 0 ${({ theme }) => theme.palette.secondary.main};;
`;

export const Subtitle = styled.h2`
    font-family: 'Comic Neue', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
    font-weight: normal;
`;

export const NavBar = styled.nav`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled(motion.a)`
    font-family: 'Bangers', cursive;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.background.default};;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.main};
        transform: scale(1.05);
    }
`;

export const ThemeToggle = styled.button<ThemeToggleProps>`
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    background-color: ${({theme}) => theme.palette.background.default};
    color: ${({theme}) => theme.palette.primary.main};
    border: 3px solid ${({theme}) => theme.palette.secondary.main};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    &:after {
        content: ${props => props.$isHero ? '"Villain Mode"' : '"Hero Mode"'
        }
`;

export const MobileMenuButton = styled.button`
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.palette.text.primary};
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileMenu = styled(motion.div)`
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const SecretIdentityButton = styled.button`
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.primary.main};
    border: 3px solid ${({ theme }) => theme.palette.secondary.main};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;