import axiosConfig from '../../axios';
import axios from 'axios';

export const userLogin = async(userData) => {
    try {
        const response = await axios.post('http://localhost:8081/api/user/login', userData);
        return response
    } catch (error) {
        console.log(error);
    }
}