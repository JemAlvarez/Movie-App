// Keyword Reducer
export default (state = '', action) => {
    switch (action.type) {
        case 'SET_KEYWORD':
            return action.keyword
        default:
            return state
    }
}