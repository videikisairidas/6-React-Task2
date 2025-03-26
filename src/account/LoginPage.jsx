

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthService from '../services/useAuthService';
import GoogleLoginButton from './GoogleLoginButton'

const LoginPage = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuthService();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = await loginUser(credentials);
        if (accessToken) {
            navigate('/profile');  // Redirect to the profile page after login
        }
    };

    return (
      <div id="Login">
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            <button type="submit" >Login</button>
        </form>
        <GoogleLoginButton onSuccess={() => navigate('/profile')} />
      </div>
    );
};

export default LoginPage;
