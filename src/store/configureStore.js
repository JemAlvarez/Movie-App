import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { allReducer, allSuggestion, allPageReducer } from '../reducers/multi'
import { moviesReducer, trendingMoviesReducer, popularMoviesReducer, popularMoviesPageReducer } from '../reducers/movies'
import { showsReducer, trendingShowsReducer, popularShowsReducer, popularShowsPageReducer } from '../reducers/shows'
import { personsReducer, popularPersonsReducer, popularPersonsPageReducer } from '../reducers/persons'
import keywordReducer from '../reducers/keyword'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            all: allReducer,
            allPage: allPageReducer,
            suggestion: allSuggestion,
            movies: moviesReducer,
            shows: showsReducer,
            persons: personsReducer,
            keyword: keywordReducer,
            trendingMovies: trendingMoviesReducer,
            trendingShows: trendingShowsReducer,
            popularMovies: popularMoviesReducer,
            popularMoviesPage: popularMoviesPageReducer,
            popularShows: popularShowsReducer,
            popularShowsPage: popularShowsPageReducer,
            popularPersons: popularPersonsReducer,
            popularPersonsPage: popularPersonsPageReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}