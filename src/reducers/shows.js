// Shows Reducer
export const showsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SHOW_BY_ID':
            return [action.show]
        case 'GET_SHOWS_AIRING':
            return action.shows.slice(0, 3)
        default:
            return state
    }
}

// Trending Shows Reducer
export const trendingShowsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TRENDING_SHOWS':
            return action.trending.slice(0, 3)
        default:
            return state
    }
}