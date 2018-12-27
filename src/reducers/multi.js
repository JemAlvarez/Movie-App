// All Reducer
export const allReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_BY_SEARCH':
            return action.all
        default:
            return state
    }
}

// All Suggestion
export const allSuggestion = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_SUGGESTION':
            return action.all.splice(0, 4)
        default:
            return state
    }
}

// All Page Reducer
export const allPageReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_ALL_BY_SEARCH':
            return action.pageCount
        default:
            return state
    }
}