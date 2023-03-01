
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './sliceRducer/userSlice';
import postReduce from './sliceRducer/postSlice';

const store = configureStore({
    reducer: {
     user: userReducer,
     posts: postReduce, 
    },
})


export default store