
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.palette.background.paper};
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  box-shadow: 5px 5px 0 ${props => props.theme.palette.secondary.main};
`;

export const FormTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 ${props => props.theme.palette.secondary.main};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid ${props => props.theme.palette.primary.main};
  border-radius: 5px;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.palette.secondary.main};
  }
`;

export const TextArea = styled.textarea`
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid ${props => props.theme.palette.primary.main};
  border-radius: 5px;
  background-color: ${props => props.theme.palette.background.default};
  color: ${props => props.theme.palette.text.primary};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.palette.secondary.main};
  }
`;

export const SubmitButton = styled(motion.button)`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: ${props => props.theme.palette.background.paper};
  background-color: ${props => props.theme.palette.primary.main};
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
  }
`;

export const ThankYouMessage = styled(motion.div)`
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: ${props => props.theme.palette.primary.main};
  margin-top: 2rem;
`;