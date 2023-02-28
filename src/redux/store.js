
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './sliceRducer/userSlice';


const store = configureStore({
    reducer: {
     user: userReducer
    },
})


export default store