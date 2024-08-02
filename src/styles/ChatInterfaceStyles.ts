import styled from 'styled-components';

export const ChatInterface = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const Message = styled.div<{ sender: string }>`
  background-color: ${({theme })=> theme.sender === 'user' ? theme.theme.palette.primary.main : theme.theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 8px;
  max-width: 70%;
  align-self: ${({theme}) => theme.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

export const ChatInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
  margin-top: 10px;
`;

export const SendButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;