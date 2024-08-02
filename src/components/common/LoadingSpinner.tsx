// import React from 'react';
// import { SpinnerContainer, Spinner } from '../../styles/LoadingSpinnerStyles';

// const LoadingSpinner: React.FC = () => (
//     <SpinnerContainer>
//         <Spinner />
//     </SpinnerContainer>
// );

// export default LoadingSpinner;


import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.palette.background.paper};
  border-top: 4px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default LoadingSpinner;
