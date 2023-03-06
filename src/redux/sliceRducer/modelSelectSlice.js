const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isOpenModelSelect: false
};


const modelSelectSlice = createSlice({
    name: 'moldelOpen',
    initialState,
    reducers: {
        openModelSelect: (state, action) => {
            state.isOpenModelSelect = action.payload
        }
    }
})


export const {openModelSelect} = modelSelectSlice.actions;

export default modelSelectSlice.reducer