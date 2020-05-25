const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER CHANGE':
            return action.filterName
        default:
            return state
    }
}



export const filterChange = (filterName) => {
    return {
        type: 'FILTER CHANGE',
        filterName
    }
}

export default filterReducer