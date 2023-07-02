import { NEW_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../constances/product-cons ";

export const newProduct = (createProduct) => ({
    type: NEW_PRODUCT,
    createProduct
})

export const deleteProduct = (id) => ({
    type:DELETE_PRODUCT,
    id
})

export const updateProduct = (id, updateSingleProduct) => ({
    type:UPDATE_PRODUCT,
    id, updateSingleProduct
})