import styled from 'styled-components';

export const SectionContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ViewToggle = styled.button`
  font-family: var(--font-heading);
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color:${({ theme }) => theme.palette.secondary.main};
  }
`;