import axios from 'axios'

// API_KEY & BASE_URL
const apiKey = process.env.MOVIE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

// GET_ALL_BY_SEARCH
export const getAllBySearch = (all, pageCount) => ({
    type: 'GET_ALL_BY_SEARCH',
    all,
    pageCount
})


export const startGetAllBySearch = (keyword, page) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&query=${keyword}&page=${page}&include_adult=false`)
            .then(res => res.data)
        req.then(res => dispatch(getAllBySearch(res.results, res.total_pages)))
    }
}

// GET_ALL_SUGGESTION
export const getAllSuggestion = (all) => ({
    type: 'GET_ALL_SUGGESTION',
    all
})

export const startGetAllSuggestion = (keyword, page) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/search/multi?api_key=${apiKey}&language=en-US&query=${keyword}&page=${page}&include_adult=false`)
            .then(res => res.data.results)
        req.then(res => dispatch(getAllSuggestion(res)))
    }
}