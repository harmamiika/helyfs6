let notificationTimeout

export const setNotification = (notification, displaySeconds) => async dispatch => {
    console.log('timeout is', notificationTimeout)
    if (notificationTimeout) {
        clearTimeout(notificationTimeout)
        notificationTimeout = null
    }
    notificationTimeout = setTimeout(() => {
        dispatch(setNullNotification())
    }, displaySeconds * 1000)

    dispatch({
        type: 'SET_NOTIFICATION',
        payload: notification
    })
}




export const setVoteNotification = (content) => {
    return {
        type: 'SET_VOTE_NOTIFICATION',
        payload: content
    }
}

export const setCreateNotification = (content) => {
    return {
        type: 'SET_CREATE_NOTIFICATION',
        payload: content
    }
}



export const setNullNotification = () => {
    return {
        type: 'SET_NULL_NOTIFICATION'
    }
}


const notificationReducer = (state = null, action) => {
    
    switch (action.type) {
    case 'SET_NOTIFICATION':
        return action.payload
    case 'SET_VOTE_NOTIFICATION':
        console.log(action, 'adsasd')
        return `You voted ${action.payload}`
    case 'SET_CREATE_NOTIFICATION':
        return `Created ${action.payload}`
    case 'SET_NULL_NOTIFICATION':
        return null
    default:   
        return state
    }

}

export default notificationReducer
