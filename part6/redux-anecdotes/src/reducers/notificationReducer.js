const reducer = (state = '', action) => {
    switch (action.type) {
        case 'MESSAGE':
            return action.message
        case 'RESET':
            return ''
        default:
            return state
    }

}

let id = undefined
export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch({
            type: 'MESSAGE',
            message
        })

        console.log('Time out id', id)
        clearTimeout(id)

        id = setTimeout(() => {
            dispatch({
                type: 'RESET'
            })
        }, duration * 1000)
    }
}

export default reducer