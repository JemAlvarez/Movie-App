// Persons Reducer
export const personsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PERSON_BY_ID':
            return [action.person]
        default:
            return state
    }
}

// Popular Persons Reducer
export const popularPersonsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POPULAR_PERSONS':
            return action.popular
        default:
            return state
    }
}