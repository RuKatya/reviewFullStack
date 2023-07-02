import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../Data/dataProduct";

const initialState = {productList:product}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            state.productList = [...state.productList, action.payload]
        }
    }
})

export const {addNewProduct} = productSlice.actions
//console.log(productSlice)

export const selectorProducts = (state)=> state.productRed.productList

export default productSlice.reducer