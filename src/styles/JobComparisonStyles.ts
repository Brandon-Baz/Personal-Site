// src/styles/JobComparisonStyles.ts
import styled from 'styled-components';


export const ComparisonContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const JobList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const JobItem = styled.div<{ selected: boolean }>`
  background-color: ${({theme}) => theme.selected ? theme.theme.palette.primary.main : theme.theme.palette.background.default};
  color: ${({theme}) => theme.selected ? theme.palette.secondary.main : theme.palette.text.primary};
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
  }
`;

export const AddJobButton = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ComparisonChart = styled.div`
  margin-top: 20px;
`;

export const ExportButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;