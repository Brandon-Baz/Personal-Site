import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import {
    HeaderContainer,
    Logo,
    LogoText,
    Subtitle,
    NavBar,
    NavItem,
    ThemeToggle,
    MobileMenuButton,
    MobileMenu,
    SecretIdentityButton
} from '../../styles/HeaderStyles';

const Header: React.FC = () => {
    const { themeMode, toggleTheme, isProfessionalMode, toggleProfessionalMode } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Blog', path: '/blog' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <HeaderContainer>
            <Logo>
                <LogoText>Brandon Coburn</LogoText>
                <Subtitle>Veteran | Software Engineer</Subtitle>
            </Logo>
            <NavBar>
                {navItems.map((item) => (
                    <NavItem key={item.title} as={Link} to={item.path}>
                        {item.title}
                    </NavItem>
                ))}
                {!isProfessionalMode && (

                    <ThemeToggle $isHero={themeMode === 'hero'} onClick={toggleTheme} />
                    // <ThemeToggle onClick={toggleTheme}>
                    //     {/*{themeMode === 'hero' ? 'Be A Villain' : 'Be A Hero'}*/}
                    // </ThemeToggle>
                )}
                <SecretIdentityButton onClick={toggleProfessionalMode}>
                    {isProfessionalMode ? 'Superhero Mode' : 'Reveal Secret Identity'}
                </SecretIdentityButton>
            </NavBar>
            <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                ☰
            </MobileMenuButton>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu
                        as={motion.div}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {navItems.map((item) => (
                            <NavItem key={item.title} as={Link} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                                {item.title}
                            </NavItem>
                        ))}
                        {!isProfessionalMode && (
                            <ThemeToggle onClick={toggleTheme} $isHero={themeMode === 'hero'}/>
                            // <ThemeToggle onClick={toggleTheme}>
                            //     {themeMode === 'hero' ? 'Go Villain' : 'Go Hero'}
                            // </ThemeToggle>
                        )}
                        <SecretIdentityButton onClick={toggleProfessionalMode}>
                            {isProfessionalMode ? 'Superhero Mode' : 'Reveal Secret Identity'}
                        </SecretIdentityButton>
                    </MobileMenu>
                )}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header;