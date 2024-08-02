import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PanelContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    z-index: 1000;
`;

export const ToggleButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4a4a4a;
    color: white;
    border: none;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    font-weight: bold;
`;

export const BotContainer = styled(motion.div).attrs({className: "chat_form"})`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 0 0 5px 5px;
    padding: 10px;
`;

export const ChatInterface = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
`;

export const ChatMessages = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
`;

export const Message = styled.div<{ sender: string }>`
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: ${props  => props.sender === 'User' ? '#e6f2ff' : '#f0f0f0'};
`;

export const ChatInput = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const SendButton = styled.button`
    width: 100%;
    padding: 5px;
    background-color: #4a4a4a;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;