import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {
    ComicBorder, Copyright,
    FooterContainer,
    FooterContent,
    FooterLink,
    FooterLinks,
    FooterLogo, SocialLink, SocialLinks
} from "../../styles/FooterStyle";


const Footer = () => {
    return (
        <FooterContainer>
            <ComicBorder />
            <FooterContent>
                <FooterLogo>Brandon Coburn</FooterLogo>
                <FooterLinks>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/resume">Resume</FooterLink>
                    <FooterLink to="/portfolio">Portfolio</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                    <FooterLink to="/services">Services</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                </FooterLinks>
                <SocialLinks>
                    <SocialLink href="https://github.com/Brandon-Baz" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/coburnbrandon" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="mailto:brandon-coburn@outlook.com">
                        <FaEnvelope />
                    </SocialLink>
                </SocialLinks>
                <Copyright>&copy; {new Date().getFullYear()} Brandon Coburn. All rights reserved.</Copyright>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;