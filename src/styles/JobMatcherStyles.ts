// src/styles/JobMatcherStyles.ts
import styled from 'styled-components';


interface JobMatcherProps {
    theme: 'hero' | 'villain' | 'professional';
}

export const MatchContainer = styled.div<JobMatcherProps>`
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MatchTitle = styled.h2`
    font-family: 'Bangers', cursive;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 20px;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 5px;
    font-family: 'Comic Neue', cursive;
    font-size: 1rem;
    resize: vertical;
`;



export const OverallMatchMeter = styled.div<{ score: number }>`
    width: 100%;
    height: 30px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;

    .meter-fill {
        height: 100%;
        background-color: ${({ theme }) => theme.palette.secondary.main};
        transition: width 1s ease-in-out;
    }

    .meter-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Bangers', cursive;
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 1.2rem;
        text-shadow: 1px 1px 0 ${({ theme }) => theme.palette.background.default};
    }
`;

export const MatchType = styled.div`
    margin-bottom: 20px;
`;

export const MatchBar = styled.div<{ score: number }>`
    width: 100%;
    height: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.score * 100}%;
        height: 100%;
        background-color: ${({ theme }) => theme.palette.primary.main};
        transition: width 1s ease-in-out;
    }
`;

export const MatchDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    h4 {
        font-family: 'Bangers', cursive;
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 1.2rem;
        margin: 0;
    }
`;

export const MatchExplanation = styled.p`
    font-family: 'Comic Neue', cursive;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 1rem;
    margin: 5px 0;

    mark {
        background-color: ${({ theme }) => theme.palette.secondary.main};
        padding: 2px 5px;
        border-radius: 3px;
    }
`;

export const ExpandButton = styled.button`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.background.default};
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

export const PreferencesForm = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
  }

  label {
    display: inline-block;
    width: 100px;
  }

  input[type="range"] {
    width: 200px;
    margin-right: 10px;
  }

  span {
    display: inline-block;
    width: 30px;
    text-align: right;
  }
`;