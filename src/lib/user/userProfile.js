import axiosConfig from '../axios';


export const apiGetUserProfile = async(userId) => {
    try {
        const response = await axiosConfig.get(`api/user/profile/${userId}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}