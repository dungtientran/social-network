
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './sliceRducer/userSlice';
import postReduce from './sliceRducer/postSlice';
import modelOpenSelectReduce from './sliceRducer/modelSelectSlice';

const store = configureStore({
    reducer: {
     user: userReducer,
     posts: postReduce, 
     openModelSelect: modelOpenSelectReduce
    },
})


export default store