// Movies Reducer
export const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIE_BY_ID':
            return [action.mov]
        case 'GET_MOVIES_PLAYING':
            return action.movs.slice(0, 3)
        default:
            return state
    }
}

// Trending Movies Reducer
export const trendingMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TRENDING_MOVIES':
            return action.trending.slice(0, 3)
        default:
            return state
    }
}