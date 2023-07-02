import { v4 as uuidv4 } from 'uuid';
import { DELETE_TASK, SAVE_TASK, UPTADE_TASK } from "../constants/tasks";

export const task = (state=[], action)=>{
    switch(action.type){
        case SAVE_TASK:{
            return [...state, {id: uuidv4(), task:action.newTask}]
        }
        case DELETE_TASK:{
            return state.filter(task => task.id !== action.id)
        }
        case UPTADE_TASK:{
            return state.map(task => task.id === action.id ? {
                ...task, task: action.updateTask
            }: task)
        }
        default:{
            return state;
        }
    }
}