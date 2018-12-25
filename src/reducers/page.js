// Page Reducer
export default (state = 1, action) => {
    switch (action.type) {
        case 'SET_PAGE_NUM':
            return action.num
        default:
            return state
    }
}