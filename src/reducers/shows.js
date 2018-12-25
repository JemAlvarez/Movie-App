// Shows Reducer
export default (state = [], action) => {
    switch (action.type) {
        case 'GET_SHOW_BY_ID':
            return action.show
        default:
            return state
    }
}