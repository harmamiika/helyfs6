import React, { useEffect } from 'react'

import AnecdoteList from './AnecdoteList'
import AnecdoteForm from './AnecdoteForm'
import Notification from './Notification'
import Filter from './Filter'

import anecdotesService from '../services/anecdotes'
import { initializeAnecdotes } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

//dispatchhand on kuin setState 

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App