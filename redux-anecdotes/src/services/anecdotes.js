import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl).catch(e => console.log(e))
    return response.data
}

const createNew = async (content) => {
    const newAnecdote = { content, votes: 0 }
    const response = await axios.post(baseUrl, newAnecdote)
    console.log(response.data, 'asdads')
    return response.data
}

const addVote = async (anecdote) => {
    const plusOneVoteAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, plusOneVoteAnecdote)
    console.log(response.data)
    return response.data
}

export default { getAll, createNew, addVote }