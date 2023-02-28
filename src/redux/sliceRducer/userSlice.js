import { apiUserLogin } from '@/lib/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const initialState = {
    userInfor: null
}

export const userLoginAction = createAsyncThunk('login', async (user) => {
    try {
        const response = await apiUserLogin(user)
        return response.data.user;
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
                localStorage.setItem('userInfor', JSON.stringify(state.userInfor))
                Cookies.set('userInfor', JSON.stringify(state.userInfor))
            })
    )
});

export default authSlice.reducer