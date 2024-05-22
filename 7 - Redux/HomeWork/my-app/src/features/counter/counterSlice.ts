// import { RootState } from './../../../../../vite-firts/src/redux/store';
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk, RootState } from "../../app/store"
import { fetchCount } from "./counterAPI"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
}

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1 // state.value = state.value + 1
    },
    decrement: (state) => {
      state.value -= 1 // state.value = state.value - 1
    },
    incrementByAmount: (state, action: PayloadAction) => {
      state.value *= action.payload // state.value = state.value * 1
    },
    decrementByAmount: (state, action: PayloadAction) => {
      state.value /= action.payload // state.value = state.value / 1
    },
    setZero: (state) => {
      state.value = 0 // state.value = 0
    }
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, setZero } = counterSlice.actions
export const selectorCaunter = (state: RootState) => state.counter.value
export default counterSlice.reducer