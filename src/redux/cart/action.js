
export const addToCart = (item) => {

        return({
            type:'ADD_TO_CART',
            payload:item
        })
    }
export const removeItem = (item) => {
       
        return({
            type:'REMOVE_ITEM',
            payload:item.id
        })
    }
export const incQuantity = (item) => {
    
        return({
            type:'INC_ITEM',
            payload:item
        })
    }
export const decQuantity = (item) => {

        return({
            type:'DEC_ITEM',
            payload:item
        })
    }