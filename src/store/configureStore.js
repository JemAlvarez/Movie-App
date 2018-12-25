import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import allReducer from '../reducers/multi'
import { moviesReducer, trendingMoviesReducer } from '../reducers/movies'
import { showsReducer, trendingShowsReducer } from '../reducers/shows'
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
            keyword: keywordReducer,
            trendingMovies: trendingMoviesReducer,
            trendingShows: trendingShowsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}