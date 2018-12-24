import axios from 'axios'

// API_KEY & BASE_URL
const api_key = process.env.MOVIE_API_KEY
const base_url = 'https://api.themoviedb.org/3'

// GET_MOVIE_DETAILS

// GET_MOVIE_BY_ID

// GET_MOVIES_BY_SEARCH
// export const getMoviesBySearch = (keyword) => {
//     let arr = []
//     const req = axios.get(`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
//         .then(res => res.data.results)
//     req.then(res => {
//         res.map(mov => arr.push(mov))
//     })
//     console.log(arr)
//     return {
//         type: 'GET_MOVIES_BY_SEARCH',
//         movsArr: arr
//     }
// }

export const getMoviesBySearch = (movs) => {
    return {
        type: 'GET_MOVIES_BY_SEARCH',
        movs
    }
}

export const startGetMoviesBySearch = (keyword => {
    return (dispatch) => {
        let req = axios.get(`${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(res => res.data.results)
        req.then(res => dispatch(getMoviesBySearch(res)))
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
