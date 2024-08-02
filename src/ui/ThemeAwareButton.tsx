// src/components/ThemeAwareButton.tsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const StyledButton = styled.button<{ themeMode: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ themeMode }) => {
    switch (themeMode) {
      case 'hero':
        return `
          background-color: #ff0000;
          color: #ffffff;
          &:hover { background-color: #cc0000; }
        `;
      case 'villain':
        return `
          background-color: #800080;
          color: #ffffff;
          &:hover { background-color: #600060; }
        `;
      case 'professional':
        return `
          background-color: #0077be;
          color: #ffffff;
          &:hover { background-color: #005f99; }
        `;
      default:
        return '';
    }
  }}
`;

export const ThemeAwareButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { themeMode } = useTheme();
  return <StyledButton {...props} themeMode={themeMode} />;
};
