import axiosConfig from '../axios';


export const apiGetPost = async() => {
    try {
        const response = await axiosConfig.get('/api/post/get-post/63fb982bff7710408300e0d1' );
        return response
    } catch (error) {
        console.log(error);
    }
}