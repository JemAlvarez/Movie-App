import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { allReducer, allSuggestion } from '../reducers/multi'
import { moviesReducer, trendingMoviesReducer, popularMoviesReducer } from '../reducers/movies'
import { showsReducer, trendingShowsReducer, popularShowsReducer } from '../reducers/shows'
import { personsReducer, popularPersonsReducer } from '../reducers/persons'
import pageReducer from '../reducers/page'
import keywordReducer from '../reducers/keyword'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            all: allReducer,
            suggestion: allSuggestion,
            movies: moviesReducer,
            shows: showsReducer,
            persons: personsReducer,
            pageNum: pageReducer,
            keyword: keywordReducer,
            trendingMovies: trendingMoviesReducer,
            trendingShows: trendingShowsReducer,
            popularMovies: popularMoviesReducer,
            popularShows: popularShowsReducer,
            popularPersons: popularPersonsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}