
import React, { useState } from 'react';
import useAuthService from '../services/useAuthService';

const RegisterPage = () => {
    const { registerUser } = useAuthService();
    const [userInfo, setUserInfo] = useState({ username: '', password: '', repeatPassword: '' });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(userInfo);
    };

    return (
      <div id="Register">
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={userInfo.username} onChange={handleChange} />
            <input type="password" name="password" value={userInfo.password} onChange={handleChange} />
            <input type="password" name="repeatPassword" value={userInfo.repeatPassword} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
      </div>
    );
};

export default RegisterPage;
