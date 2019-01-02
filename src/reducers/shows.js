// Shows Reducer
export const showsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHOW_BY_ID':
            return [action.show]
        case 'GET_SHOWS_AIRING':
            return action.shows.slice(0, 4)
        default:
            return state
    }
}

// Trending Shows Reducer
export const trendingShowsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TRENDING_SHOWS':
            return action.trending.slice(0, 4)
        default:
            return state
    }
}

// Popular Shows Reducer
export const popularShowsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POPULAR_SHOWS':
            return action.popular
        default:
            return state
    }
}

// Popular Shows Page Reducer
export const popularShowsPageReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_POPULAR_SHOWS':
            return action.pageCount
        default:
            return state
    }
}

// Show Cast Reducer
export const showCastReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHOW_CAST':
            return action.cast.slice(0, 5)
        default:
            return state
    }
}

// Show Recommendation Reducer
export const showRecommendationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHOW_RECOMMENDATION':
            return action.rec.slice(0, 8)
        default:
            return state
    }
}