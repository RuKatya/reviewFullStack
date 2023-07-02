import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        addText: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        deleteText: (state, action) => {

        }
    }
})
export const { addText, deleteText } = textSlice.actions;

export const selectText = (state) => state.text.value;

export default textSlice.reducer;