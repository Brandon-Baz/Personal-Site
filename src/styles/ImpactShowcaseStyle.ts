import styled from 'styled-components';

export const ImpactContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h2 {
        font-family: 'Bangers', cursive;
        color: ${({ theme }) => theme.palette.primary.main};
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const ImpactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => `${theme.palette.primary.main}10`};
        transform: translateY(-3px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const ImpactIcon = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    margin-right: 1rem;
`;

export const ImpactTitle = styled.h3`
    font-family: 'Comic Neue', cursive;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
`;

export const ImpactDescription = styled.p`
    font-family: 'Comic Neue', cursive;
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0.25rem 0;
    font-size: 0.9rem;
`;

export const ImpactMetricStyle = styled.span`
    font-family: 'Bangers', cursive;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.2rem;
`;