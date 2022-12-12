function searchReducer (state = {}, action) {
    switch(action.type) {
        case 'SEARCH_ITEM': 
        return {
            item: action.payload
        }
        default: return state
    }
}

export default searchReducer
