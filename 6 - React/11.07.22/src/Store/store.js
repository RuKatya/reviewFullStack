import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/productReducer";

export default configureStore({
    reducer:{
        productRed: productReducer
    }
})