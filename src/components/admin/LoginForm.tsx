import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthenticationContext';
import {
    LoginFormContainer,
    LoginInput,
    LoginButton,
    ErrorMessage
} from '../../styles/AdminStyles';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const success = await login(username, password);
        if (!success) {
            setError('Invalid credentials');
        }
    };

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <LoginInput
                type="text"
                value={username}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <LoginInput
                type="password"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <LoginButton type="submit">Login</LoginButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </LoginFormContainer>
    );
};

export default LoginForm;