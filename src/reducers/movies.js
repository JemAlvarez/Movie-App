// Movies Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_MOVIE_BY_ID':
            return action.mov
        default:
            return state
    }
}