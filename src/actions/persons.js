import axios from 'axios'

// API_KEY & BASE_URL
const apiKey = process.env.MOVIE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

// GET_PERSON_BY_ID
export const getPersonById = (person) => {
    return {
        type: 'GET_PERSON_BY_ID',
        person
    }
}

export const startGetPersonById = (id => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/person/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.data)
        req.then(res => dispatch(getPersonById(res)))
    }
})

// GET_POPULAR_PERSONS
export const getPopularPersons = (popular, pageCount) => ({
    type: 'GET_POPULAR_PERSONS',
    popular,
    pageCount
})

export const startGetPopularPersons = (page) => {
    return (dispatch) => {
        let req = axios.get(`${baseUrl}/person/popular?api_key=${apiKey}&language=en-US&page=${page}`)
            .then(res => res.data)
        req.then(res => dispatch(getPopularPersons(res.results, res.total_pages)))
    }
}