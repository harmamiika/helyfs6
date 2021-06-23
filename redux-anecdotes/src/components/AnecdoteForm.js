import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const [content, setContent] = useState('')

    // const dispatch = useDispatch() 

    // const setNullNotificationDelay = () => {
    //     setTimeout(() => {
    //         dispatch(setNullNotification())
    //     }, 5000);
    // }



    const onFormSubmit = async () => {
        window.event.preventDefault()
        const sendContent = content
        setContent('')

        // dispatch(addAnecdote(sendContent))
        props.addAnecdote(sendContent)

        // dispatch(setNotification(`Created '${content}'`, 5))
        props.setNotification(`Created '${content}'`, 5)

        // dispatch(setCreateNotification(sendContent))
        // setNullNotificationDelay()
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={onFormSubmit}>
                <div><input value={content} onChange={(e) => setContent(e.target.value)} /></div>
                <button>create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addAnecdote,
    setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)