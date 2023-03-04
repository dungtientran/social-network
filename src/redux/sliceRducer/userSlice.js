import { apiUserLogin } from '@/lib/auth';
import { apiGetUserProfile } from '@/lib/user/userProfile';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
const initialState = {
    userInfor: null,
    userProfile: null
}


export const userLoginAction = createAsyncThunk('login', async (user) => {
    try {
        const response = await axios.post('http://localhost:8081/api/user/login', user)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})
export const getUserProfileAction = createAsyncThunk('getUserProfileAction', async (user) => {
    try {
        const response = await apiGetUserProfile(user)
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder => (
        builder
            .addCase(userLoginAction.fulfilled, (state, action) => {
                state.userInfor = action.payload;
                localStorage.setItem('userId', JSON.stringify(state.userInfor?.id))
                localStorage.setItem('token', JSON.stringify(state.userInfor?.token))
                Cookies.set('token', state.userInfor?.token)
            })
            .addCase(getUserProfileAction.fulfilled, (state, action) => {
                state.userProfile = action.payload
            })
    )
});

export default authSlice.reducer