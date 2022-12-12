function searchItem (item) {
    return {
        type: 'SEARCH_ITEM',
        payload: item
    }
}

export default searchItem