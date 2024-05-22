import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
import textReducer from "./textField/textSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch