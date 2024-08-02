import styled from 'styled-components';

export const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AdminHeader = styled.h1`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 2rem;
`;

export const AdminNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const AdminNavButton = styled.button`
  font-family: var(--font-heading);
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 1.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 5px;
  min-height: 100px;
`;

export const FormButton = styled.button`
  font-family: var(--font-heading);
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
  }
`;

export const AnalyticsContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AnalyticsTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 1.5rem;
`;

export const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const AnalyticsCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
`;

export const AnalyticsValue = styled.h3`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0.5rem;
`;

export const AnalyticsLabel = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const LoginFormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LoginInput = styled(FormInput)`
  margin-bottom: 1rem;
`;

export const LoginButton = styled(FormButton)`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-family: var(--font-body);
  font-size: 0.9rem;
  margin-top: 1rem;
`;