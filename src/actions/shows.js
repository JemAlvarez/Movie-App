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

export const startGetShowById = (id => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/tv/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.data)
        req.then(res => dispatch(getShowById(res)))
    }
})