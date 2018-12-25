import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import allReducer from '../reducers/multi'
import moviesReducer from '../reducers/movies'
import showsReducer from '../reducers/shows'
import personsReducer from '../reducers/persons'
import pageReducer from '../reducers/page'
import keywordReducer from '../reducers/keyword'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            all: allReducer,
            movies: moviesReducer,
            shows: showsReducer,
            persons: personsReducer,
            pageNum: pageReducer,
            keyword: keywordReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}