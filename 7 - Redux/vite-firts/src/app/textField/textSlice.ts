import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Itext {
    value: string
}

const initialState: Itext = {
    value: 'Hi evryone'
}

export const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {

    }
})

export const selectText = (state: RootState) => state
export default textSlice.reducer