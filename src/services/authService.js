import { ApiUrl } from "./config";

const login = async (credentials) => {
    try {
        const response = await ApiUrl.post('/user/login', credentials);
        const accessToken = response.data.accessToken;
        const userId = response.data.userId; // Ensure userId is returned from the API
        console.log(accessToken, userId);
        // localStorage.setItem('token', accessToken); // Store the accessToken in localStorage
        return { accessToken, userId }; // Return both accessToken and userId
    } catch (error) {
        console.error('Login error', error);
        throw error; // Rethrow the error for further handling
    }
};

export const gmailUser = async (credentials) => { 
    try { 
        const response = await ApiUrl.post('/User/gmail', { 
            idToken: credentials.credential }); 
        const accessToken = response.data.accessToken;
        const userId = response.data.userId;
        console.log(response.data);
        return response.data; 
    } catch (error) { 
        console.error('Login error', error); 
        throw error; // Rethrow the error for further handling 
    } 
};

   

const register = async (userInfo) => {
    try {
        await ApiUrl.post('/user/register', userInfo);
    } catch (error) {
        console.error('Registration error', error);
    }
};

export const getAuthHeader = () => { 
    const token = localStorage.getItem('accessToken'); 
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export { login, register };

