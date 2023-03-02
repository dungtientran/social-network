import axiosConfig from './axios';

export const apiUserLogin = async(userData) => {
    try {
        const response = await axiosConfig.post('/api/user/login', userData);
        // console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}