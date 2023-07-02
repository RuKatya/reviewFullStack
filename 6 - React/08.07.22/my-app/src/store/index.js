import { combineReducers, createStore } from 'redux'
import { product } from '../store/reducers/productReducer'

export const rootReducer = combineReducers({
    product
})

export const store = createStore(rootReducer)