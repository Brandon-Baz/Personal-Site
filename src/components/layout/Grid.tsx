// src/components/layout/Grid.tsx
import React from 'react';
import styled from 'styled-components';

interface GridProps {
    children: React.ReactNode;
    columns?: number;
    gap?: string;
}

interface GridItemProps {
    span?: number;
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || '1rem'};
`;

const GridItemWrapper = styled.div<GridItemProps>`
  grid-column: span ${props => props.span || 1};
`;

export const Grid: React.FC<GridProps> = ({ children, columns, gap }) => {
    return <GridContainer columns={columns} gap={gap}>{children}</GridContainer>;
};

export const GridItem: React.FC<GridItemProps & { children: React.ReactNode }> = ({ children, span }) => {
    return <GridItemWrapper span={span}>{children}</GridItemWrapper>;
};