// Movies Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIES_BY_SEARCH':
            return action.movs
        default:
            return state
    }
}