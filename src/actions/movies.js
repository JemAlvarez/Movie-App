import axios from 'axios'

// API_KEY & BASE_URL
const apiKey = process.env.MOVIE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

// GET_MOVIE_BY_ID
export const getMovieById = (mov) => ({
    type: 'GET_MOVIE_BY_ID',
    mov
})

export const startGetMovieById = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.data)
        req.then(res => dispatch(getMovieById(res)))
    }
}

// GET_MOVIES_PLAYING
export const getMoviesPlaying = (movs) => ({
    type: 'GET_MOVIES_PLAYING',
    movs
})

export const startGetMoviesPlaying = () => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&region=US`)
            .then(res => res.data.results)
        req.then(res => dispatch(getMoviesPlaying(res)))
    }
}

// GET_TRENDING_MOVIES
export const getTrendingMovies = (trending) => ({
    type: 'GET_TRENDING_MOVIES',
    trending
})

export const startGetTrendingMovies = () => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/trending/movie/week?api_key=${apiKey}`)
            .then(res => res.data.results)
        req.then(res => dispatch(getTrendingMovies(res)))
    }
}

// GET_POPULAR_MOVIES
export const getPopularMovies = (popular, pageCount) => ({
    type: 'GET_POPULAR_MOVIES',
    popular,
    pageCount
})

export const startGetPopularMovies = (page) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}&region=US`)
            .then(res => res.data)
        req.then(res => dispatch(getPopularMovies(res.results, res.total_pages)))
    }
}

// GET_MOVIES_CAST
export const getMovieCast = (cast) => ({
    type: 'GET_MOVIES_CAST',
    cast
})

export const startGetMovieCast = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`)
            .then(res => res.data.cast)
        req.then(res => dispatch(getMovieCast(res)))
    }
}

// GET_MOVIE_RECOMMENDATION
export const getMovieRecommendation = (rec) => ({
    type: 'GET_MOVIE_RECOMMENDATION',
    rec
})

export const startGetMovieRecommendation = (id) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => res.data.results)
        req.then(res => dispatch(getMovieRecommendation(res)))
    }
}