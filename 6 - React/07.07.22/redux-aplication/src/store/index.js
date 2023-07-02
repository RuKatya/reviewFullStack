import {combineReducers, createStore} from 'redux';
import { counter } from './reducers';
import {task} from './reducers/task'

export const rootReducer = combineReducers({
    counter, task
})

export const store = createStore(rootReducer)