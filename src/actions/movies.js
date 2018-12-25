import axios from 'axios'

// API_KEY & BASE_URL
const apiKey = process.env.MOVIE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

// GET_MOVIE_BY_ID
export const getMovieById = (mov) => {
    return {
        type: 'GET_MOVIE_BY_ID',
        mov
    }
}

export const startGetMovieById = (id => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.data)
        req.then(res => dispatch(getMovieById(res)))
    }
})

// GET_MOVIES_POPULAR

// GET_MOVIES_UPCOMING

// GET_MOVIES_TOP

// GET_MOVIES_POPULAR

// GET_MOVIES_PLAYING

// GET_MOVIES_LATEST

// GET_MOVIES_SIMILAR

// GET_MOVIES_RECOMMENDATION
