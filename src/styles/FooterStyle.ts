
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.palette.primary.main};
    color: ${({theme}) => theme.palette.background.default};
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem;
`;

export const FooterLogo = styled.h2`
    font-family: var(--font-heading);
    color: ${({theme}) => theme.palette.text.primary};
    font-size: 2rem;
    margin: 0;
    text-shadow: 2px 2px 0 ${({theme}) => theme.palette.secondary.main};
`;

export const FooterLinks = styled.nav`
    display: flex;
    gap: 1rem;
`;

export const FooterLink = styled(Link)`
    color: ${({theme}) => theme.palette.background.default};
    text-decoration: none;
    font-family: var(--font-body);
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.palette.secondary.main};
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SocialLink = styled.a`
    color: ${({theme}) => theme.palette.background.default};
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: ${({theme}) => theme.palette.secondary.main};
        transform: scale(1.1);
    }
`;

export const Copyright = styled.p`
    font-family: var(--font-body);
    font-size: 0.9rem;
    margin-top: 1rem;
    text-align: center;
    width: 100%;
`;

export const ComicBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-image: repeating-linear-gradient(
            to right,
            ${({theme}) => theme.palette.secondary.main} 0,
            ${({theme}) => theme.palette.secondary.main} 10px,
            transparent 10px,
            transparent 20px
    );
`;