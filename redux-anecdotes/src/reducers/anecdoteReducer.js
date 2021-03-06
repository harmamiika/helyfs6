import anecdotesService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const initialState = anecdotesAtStart.map(asObject)


export const addVote = anecdote => async dispatch => {
  const newAnecdote = await anecdotesService.addVote(anecdote)
  console.log(anecdote, '12132')
  dispatch({ type: 'ADD_VOTE', payload: anecdote })
}

// redux thunk mahdollistaa tämän struktuurin
export const addAnecdote = (content) => async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    console.log(newAnecdote, 'asdadsads')
    dispatch({ type: 'ADD_ANECDOTE', payload: newAnecdote })
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INITIAL_ANECDOTES',
      payload: anecdotes
    })
  }
}


const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'ADD_VOTE':
      const updatedState = state.map(
      anecdote => anecdote.id === action.payload.id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
      )
      return updatedState
    case 'ADD_ANECDOTE':
      return [ ...state, action.payload ]
    case 'INITIAL_ANECDOTES':
      console.log(action.payload, '123123')
      return action.payload
    default:
      return state
  }
}

export default anecdoteReducer