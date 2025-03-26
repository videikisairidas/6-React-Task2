

import React from 'react'; 
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // useAuth to access context values
import { gmailUser  } from '../services/authService';

const clientId = '811856229949-gkv8muo78ssfelesglqugppittcijka1.apps.googleusercontent.com';

const GoogleLoginButton = () => { 
    const navigate = useNavigate();
    const { gmailUserLogin } = useAuth(); // Access gmailUserLogin from the context

    const handleGmailLogin = async (credentials) => {
        const response = await gmailUser(credentials);
        console.log(response)
        
        if (response.accessToken) {
            gmailUserLogin(response.accessToken, response.userId);
            navigate('/profile');  // Redirect to the profile page after login
        }
    };

    const handleSuccess = (response) => {
        handleGmailLogin(response);
    };

    const handleError = (error) => {
        console.error('Google login error:', error);
    };

    return ( 
        <div> 
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin 
                    onSuccess={handleSuccess} 
                    onError={handleError} 
                />
            </GoogleOAuthProvider>
        </div> 
    ); 
};

export default GoogleLoginButton;
