import { axiosConfig } from "../axios";


export const apiUserRegister = async (userData) => {
    try {
        const response = await axiosConfig.post('/api/user/create', userData);
        // console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}


export const apiUserLogin = async (userData) => {
    try {
        const response = await axiosConfig.post('/api/user/login', userData);
        // console.log(response);
        return response
    } catch (error) {
        console.log(error);
    }
}