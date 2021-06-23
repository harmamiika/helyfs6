import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()


    // const setNullNotificationDelay = () => {
    //     setTimeout(() => {
    //         dispatch(setNullNotification())
    //     }, 5000);
    // }

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(addVote(anecdote))

        dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
        // dispatch(setVoteNotification(anecdote.content))
        // setNullNotificationDelay()
    }

    const filter = useSelector(state => state.filter)

    const displayedAnecdotes = filter.length === 0 ?
        anecdotes : 
        anecdotes.filter(a => a.content.toLowerCase().indexOf(filter.toLowerCase()) > -1)

    return (
        <div>
            {displayedAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList