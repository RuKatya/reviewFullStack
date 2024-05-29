import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '../store';
import { createAppSlice } from '../../app/createAppSlice';

interface Itext {
    value: string
}

const initialState: Itext = {
    value: 'Hi evryone'
}

export const textSlice = createAppSlice({
    name: 'text',
    initialState,
    reducers: {
        clearText: (state) => {
            state.value = ""
        },
        newText: (state, action: PayloadAction) => {
            state.value = action.payload
        },
        addTextNew: (state, action: PayloadAction) => {
            state.value += action.payload
        }

    }
})

export const {clearText, newText, addTextNew} = textSlice.actions
export const selectText = (state: RootState) => state.text.value
export default textSlice.reducer