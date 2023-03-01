import axiosConfig from '../axios';


export const apiGetAllUser = async() => {
    try {
        const response = await axiosConfig.get(`api/user/get-all`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}