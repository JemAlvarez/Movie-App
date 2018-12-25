// All Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_BY_SEARCH':
            return action.all
        default:
            return state
    }
}