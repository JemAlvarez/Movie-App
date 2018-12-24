import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from '../reducers/movies'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            movies: moviesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}