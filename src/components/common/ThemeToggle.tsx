// src/components/ThemeToggle.tsx
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Book } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ThemeToggle: React.FC = () => {
  const { isComicBookMode, toggleComicBookMode } = useTheme();

  return (
    <Tooltip title="Toggle Comic Book Style">
      <StyledIconButton onClick={toggleComicBookMode} color="primary">
        <Book size={24} color={isComicBookMode ? '#FF1493' : undefined} />
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
