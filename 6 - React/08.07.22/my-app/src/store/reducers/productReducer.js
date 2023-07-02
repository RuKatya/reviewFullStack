import { v4 as uuid } from 'uuid';
import { NEW_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../constances/product-cons '

export const product = (state=[], action) => {
    switch (action.type) {
        case NEW_PRODUCT:
            return [...state, {id: uuid(), name:action.createProduct}]

        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.id)

        case UPDATE_PRODUCT:
            return state.map(product => product.id === action.id ? {
                ...product, name:action.updateSingleProduct
            }: product)

        default: {
            return state;}
            
    }
}

