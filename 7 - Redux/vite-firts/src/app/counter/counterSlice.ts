import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ICount {
  value: number
}

const initialState : ICount = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
       state.value += 1
    },
    setValueZero: (state) => {
        state.value = 0
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, setValueZero,decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer