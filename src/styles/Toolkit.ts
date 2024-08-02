import styled from 'styled-components';

export const ToolkitContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ToolItem = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;