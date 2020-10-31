import {createStore, applyMiddleware} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import reducer from './rootReducer';


export const store = createStore(reducer, applyMiddleware(logger))

export const persistor = persistStore(store)

// export default {store,persistor};

