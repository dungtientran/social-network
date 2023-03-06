import { apiGetPost } from '@/lib/post/getPost';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
   postUser: [],
}


export const getPostUserAction = createAsyncThunk('getPostUserAction', async (userId) => {
    try {
        const response = await apiGetPost(userId)
        return response.data;
    } catch (error) {
        console.log(error);
    }
})


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: builder => (
        builder
            .addCase(getPostUserAction.fulfilled, (state, action) => {
                state.postUser = action.payload;
                state.postUser?.reverse()
            })
            
    )
});

export default postSlice.reducer