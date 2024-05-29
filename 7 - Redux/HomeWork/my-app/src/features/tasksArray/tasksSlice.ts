import { tasksSlice } from './tasksSlice';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '../store';
import { createAppSlice } from '../../app/createAppSlice';
import { IUserTask } from '../../Component/ListOfTasks';
import { v4 as uuidv4 } from 'uuid';

interface ITask extends IUserTask{ // listOfTasks
    id: string
}
interface IArrayTasks {
    value: Array<ITask>
}

const initialState: IArrayTasks = {
    value: []
}

export const tasksSlice = createAppSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction) => {
            //console.log(action)
            const {title, desc} = action.payload
            state.value = [...state.value, {id: uuidv4(), title, desc}]
        },
        removeTask: (state, action: PayloadAction) => {
            const taskId = action.payload;
            state.tasksSlice = state.tasksSlice.filter((task) => 
                task.id !== taskId
            )

            const {title, desc} = action.payload 
            state.value = [...state.value, {id: uuidv4(), title, desc}]
        }
    }
})

export const {addNewTask, removeTask} = tasksSlice.actions
export const selectTasks = (state: RootState) => state.tasks.value
export default tasksSlice.reducer