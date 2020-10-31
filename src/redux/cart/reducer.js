
import { inc, dec} from './util'

const INIT_STATE = {
    cartItems: []
}


const cartReducer = (state=INIT_STATE, action) => {

    console.log(inc(state.cartItems,action.payload))
    switch (action.type) {
        case 'ADD_TO_CART':
            return ({
                ...state,
                cartItems:inc(state.cartItems, action.payload)
            })
            
        case 'REMOVE_ITEM':
            return ({
                ...state,
                cartItems:state.cartItems.filter(item=>item.id !== action.payload)
            })
            
        case 'INC_ITEM':
            return ({
                ...state,
               cartItems:inc(state.cartItems, action.payload)
            })
        case 'DEC_ITEM':
            return ({
                ...state,
                cartItems:dec(state.cartItems, action.payload)
            })
            
    
        default:
            return state
    }
}

export default cartReducer;