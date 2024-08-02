import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-family: 'Bangers', cursive;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const InfoIcon = styled(FaInfoCircle)`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-left: 0.5rem;
  cursor: help;
`;

interface SectionHeaderProps {
    title: string;
    infoContent?: string;
    icon?: JSX.Element;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, infoContent }) => (
    <HeaderContainer>
        <Title>{title}</Title>
        <InfoIcon title={infoContent} />
    </HeaderContainer>
);

export default SectionHeader;
