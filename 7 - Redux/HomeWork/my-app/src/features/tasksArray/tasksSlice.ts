import { tasksSlice } from "./tasksSlice"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { createAppSlice } from "../../app/createAppSlice"
import { IUserTask } from "../../Component/ListOfTasks"
import { v4 as uuidv4 } from "uuid"

export interface ITask extends IUserTask {
  // listOfTasks
  id: string
}
interface IArrayTasks {
  value: Array<ITask>
}

const initialState: IArrayTasks = {
  value: [{ id: uuidv4(), title: "sleep" }],
}

export const tasksSlice = createAppSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction) => {
      //console.log(action)
      const { title, desc } = action.payload
      state.value = [...state.value, { id: uuidv4(), title, desc }]
    },
    removeTask: (state, action: PayloadAction) => {
      console.log(action)
      const taskId = action.payload
      state.value = state.value.filter(task => task.id !== taskId)
    },
    editTask: (state, action: PayloadAction) => {
      console.log(action.payload)

      state.value = state.value.map(task => {
        if (task.id === action.payload.id) {
          return action.payload
        } else {
          return task
        }
      })
    },
  },
})

export const { addNewTask, removeTask, editTask } = tasksSlice.actions
export const selectTasks = (state: RootState) => state.tasks.value
export default tasksSlice.reducer
