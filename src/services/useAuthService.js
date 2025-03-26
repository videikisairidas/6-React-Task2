import { useAuth } from '../context/AuthContext';
import { login as loginApi, register as registerApi, gmailUser as gmailUserApi } from './authService';

const useAuthService = () => {
    const { login, gmailUser } = useAuth();

    const loginUser = async (credentials) => {
        const response = await loginApi(credentials);
        if (response) {
            login(response.accessToken, response.userId); // Include userId in the login call
        }
        return response?.accessToken;
    };

    const registerUser = async (userInfo) => {
        await registerApi(userInfo);
    };

    const gmailLoginUser = async (credentials) => {
        const response = await gmailUserApi(credentials);
        console.log(response)
        if (response) {
            gmailUser(response.accessToken, response.userId); // Include userId in the login call
            
        }
        return response?.accessToken;
    };

    return { loginUser, registerUser, gmailLoginUser };
};

export default useAuthService;


