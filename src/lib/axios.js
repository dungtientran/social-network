import axios from "axios";
import Cookies from "js-cookie";


export const serverUrl = 'https://social-network-backend-1fab.onrender.com';


export const axiosConfig = axios.create({
    baseURL: serverUrl
});

axiosConfig.interceptors.request.use(function (config) {
    // let token = JSON.parse(localStorage.getItem('token'))
    const tokenCookies = Cookies.get('token')
    const token = JSON.parse(tokenCookies) 
    config.headers = {
        token: token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
axiosConfig.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});





export const SeverSideAxios = (accessToken) => {
    const axiosServer = axios.create({
        baseURL: 'https://social-network-backend-1fab.onrender.com'
    });
    axiosServer.interceptors.request.use(function (config) {
        config.headers = {
            token: JSON.parse(accessToken)
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    
    // Add a response interceptor
    axiosServer.interceptors.response.use(function (response) {
        // refresh token
        return response;
    }, function (error) {
        return Promise.reject(error);
    });
    return axiosServer
}
