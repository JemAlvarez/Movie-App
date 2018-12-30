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

// Popular Movies Reducer
export const popularMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POPULAR_MOVIES':
            return action.popular
        default:
            return state
    }
}

// Popular Movies Page Reducer
export const popularMoviesPageReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_POPULAR_MOVIES':
            return action.pageCount
        default:
            return state
    }
}

// Movie Cast Reducer
export const movieCastReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES_CAST':
            return action.cast.slice(0, 5)
        default:
            return state
    }
}

// Movie Recommendation Reducer
export const movieRecommendationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIE_RECOMMENDATION':
            return action.rec.slice(0, 8)
        default:
            return state
    }
}