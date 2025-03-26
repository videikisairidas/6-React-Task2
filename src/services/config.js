import axios from 'axios';

export const ApiUrl = axios.create({
    baseURL: 'https://localhost:8081/api',  // Replace with your auth service URL
});
// https://localhost:8081/api/User/gmail
// https://localhost:8081/scalar/v1#tag/user/POST/api/User/login