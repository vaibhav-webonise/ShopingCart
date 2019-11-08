export const ADD_PRODUCT='ADD_PRODUCT'
export const REMOVE_PRODUCT='REMOVE_PRODUCT'
export const CLEAR_PRODUCT='CLEAR_PRODUCT'
export const UPDATE_COUNT='UPDATE_COUNT'

export const addProductAction=(productId)=>({  
    type:ADD_PRODUCT,
    productId
})

export const removeProductAction=(productId)=>({
    type:REMOVE_PRODUCT,
    productId
})

export const clearProductsAction=()=>({
    type:CLEAR_PRODUCT,
})

export const updateProductCountAction=(count)=>({
    type:UPDATE_COUNT,
    count
})
