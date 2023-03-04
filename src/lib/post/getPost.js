import {axiosConfig} from '../axios';


export const apiGetPost = async(userId) => {
    try {
        const response = await axiosConfig.get(`/api/post/get-post/${userId}`);
        return response
    } catch (error) {
        console.log(error);
    }
}