import axios from 'axios'

// API_KEY & BASE_URL
const apiKey = process.env.MOVIE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

// GET_SHOW_BY_ID
export const getShowById = (show) => {
    return {
        type: 'GET_SHOW_BY_ID',
        show
    }
}

export const startGetShowById = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.data)
        req.then(res => dispatch(getShowById(res)))
    }
}

// GET_SHOWS_AIRING
export const getShowsAiring = (shows) => ({
    type: 'GET_SHOWS_AIRING',
    shows
})

export const startGetShowsAiring = () => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/on_the_air?api_key=${apiKey}&language=en-US&region=US`)
            .then(res => res.data.results)
        req.then(res => dispatch(getShowsAiring(res)))
    }
}

// GET_TRENDING_SHOWS
export const getTrendingShows = (trending) => ({
    type: 'GET_TRENDING_SHOWS',
    trending
})

export const startGetTrendingShows = () => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/trending/tv/week?api_key=${apiKey}`)
            .then(res => res.data.results)
        req.then(res => dispatch(getTrendingShows(res)))
    }
}

// GET_POPULAR_SHOWS
export const getPopularShows = (popular, pageCount) => ({
    type: 'GET_POPULAR_SHOWS',
    popular,
    pageCount
})

export const startGetPopularShows = (page) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`)
            .then(res => res.data)
        req.then(res => dispatch(getPopularShows(res.results, res.total_pages)))
    }
}

// GET_SHOW_CAST
export const getShowCast = (cast) => ({
    type: 'GET_SHOW_CAST',
    cast
})

export const startGetShowCast = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/${id}/credits?api_key=${apiKey}`)
            .then(res => res.data.cast)
        req.then(res => dispatch(getShowCast(res)))
    }
}

// GET_SHOW_RECOMMENDATION
export const getShowRecommendation = (rec) => ({
    type: 'GET_SHOW_RECOMMENDATION',
    rec
})

export const startGetShowRecommendation = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => res.data.results)
        req.then(res => dispatch(getShowRecommendation(res)))
    }
}