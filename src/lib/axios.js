import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // gắn token vào header
    let userInfor = localStorage.getItem('userInfor')
    config.headers = {
        token: userInfor.token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // refresh token
    return response;
}, function (error) {
    return Promise.reject(error);
});


export default instance