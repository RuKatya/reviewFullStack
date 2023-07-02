import { DELETE_TASK, SAVE_TASK, UPTADE_TASK } from "../constants/tasks";

export const getNewTask = (newTask)=>({
    type:SAVE_TASK,
    newTask
})

export const deleteTask = (id) => ({
    type:DELETE_TASK,
    id
})

export const updateTask = (id, updateTask) => ({
    type:UPTADE_TASK,
    id, updateTask
})