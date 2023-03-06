import { apiUserLogin } from '@/lib/auth/auth';
import { apiGetUserProfile } from '@/lib/user/userProfile';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


const initialState = {
    isLoading: false,
    message: null,
    userInfor: null,
    userProfile: null
}

export const userRegisterAction = createAsyncThunk('userRegisterAction', async (user) => {
    try {
        const response = await axios.post('http://localhost:8081/api/user/create', user)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const userLoginAction = createAsyncThunk('login', async (user) => {
    try {
        const response = await axios.post('http://localhost:8081/api/user/login', user)
        // console.log(response.data);
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
            //login
            .addCase(userLoginAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(userLoginAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfor = action.payload;
                localStorage.setItem('token', JSON.stringify(action.payload?.token))
                Cookies.set('token',JSON.stringify(action.payload?.token));
                Cookies.set('userId', action.payload?.id);
            })
            .addCase(userLoginAction.rejected, (state, action) => {
                state.isLoading = false;
                state.message = action.payload;
            })

            //register

            .addCase(userRegisterAction.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(userRegisterAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userInfor = action.payload;
                state.message = action.payload.message;
            })
            .addCase(userRegisterAction.rejected, (state, action) => {
                state.isLoading = false;
                state.message = action.payload;
            })

            .addCase(getUserProfileAction.fulfilled, (state, action) => {
                state.userProfile = action.payload
            })
    )
});

export default authSlice.reducer