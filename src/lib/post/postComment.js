
import axiosConfig from '../axios';


export const apiPostComment = async(cmt) => {
    try {
        const response = await axiosConfig.put('/api/post/comment-post', cmt);
        return response
    } catch (error) {
        console.log(error);
    }
}