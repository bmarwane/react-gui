import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import createHistory from 'history/createMemoryHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'


import screensReducer from './Screens/behaviors'

export const history = createHistory()
const routingMiddleware = routerMiddleware(history)


const reducers = {
    router: routerReducer,
    main: screensReducer
}

let store
export default function initStore(screens, initialState){
    screens.forEach(screen => {
        if(screen.reducer) {
            reducers[screen.reducer.key] = screen.reducer.value
        }
    })
    const combinedReducers  = combineReducers(reducers)

    store = applyMiddleware(thunkMiddleware, routingMiddleware)(createStore)(combinedReducers, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store
}

export function getStore() {
    return store
}