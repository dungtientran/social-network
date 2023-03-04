
import {axiosConfig} from '../axios';


export const apiNewPost = async(newpost) => {
    try {
        const response = await axiosConfig.post('/api/post/create', newpost);
        return response
    } catch (error) {
        console.log(error);
    }
}