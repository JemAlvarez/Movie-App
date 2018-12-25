// Persons Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_PERSON_BY_ID':
            return action.person
        default:
            return state
    }
}