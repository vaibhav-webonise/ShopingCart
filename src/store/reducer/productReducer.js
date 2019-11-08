import initState from '../../productdata.js'
const productReducer = (state = initState, action) => {

    switch (action.type) {

        case 'ADD_PRODUCT':
            let addedItem = state.products.find(product => product.productId === action.productId)
            let existed_item= state.addedProducts.find(item=> action.productId === item.productId)
            if(existed_item)
            {
               addedItem.quantity += 1 ;
                return{
                   ...state 
                     }
           }
            else{
               addedItem.quantity = 1;
               return{
                   ...state,
                   addedProducts: [...state.addedProducts, addedItem]
               }
           }
        case 'REMOVE_PRODUCT':
                let existedItem= state.addedProducts.find(item=> action.productId === item.productId)
                if(existedItem)
                {
                   if(existedItem.quantity>0){
                    existedItem.quantity -= 1 
                    return{
                       ...state 
                         }
                   }
                   
               }
        case 'CLEAR_PRODUCT': return {
            ...state,addedProducts:[],
            productCount:0,
        }

        case 'UPDATE_COUNT':return{
            ...state,productCount:state.productCount+action.count
        }
        default: return state
    }
}
export default productReducer
