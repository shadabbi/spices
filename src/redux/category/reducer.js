
import data from './data'

const INIT_STATE = {
    category:data
}

const categoryReducer = (state=INIT_STATE, action) => {
    
    switch (action.type) {
        case 'ADD_CATEGORIES':
            
            return {
                ...state,
                category:action.payload
            }
    
        default:
            return state
    }
}


export default categoryReducer;