import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface counter {
    value: number
}

const initialState : counter = {
    value: 0
}

export const counterSlice = createSlice ({
    name: 'sliceCounter',
    initialState,
    reducers: {
        plus: (state) => {
            state.value += 1
        },
        minus: (state) => {
            state.value -= 1
        },
        zero: (state) => {
            state.value = 0
        },
        multiply: (state, action) => {
            state.value += action.paylod
        },
        devide: (state, action) => {
            state.value -= action.paylod
        }
    }
})

export const { plus, minus, zero, multiply, devide } = counterSlice.typeAction
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer 