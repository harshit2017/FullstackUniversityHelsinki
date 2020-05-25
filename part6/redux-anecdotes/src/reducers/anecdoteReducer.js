// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }
import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE INCREASE':
      const id = action.data.id
      const anecToChange = state.find(a => a.id === id)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : changedAnec
      )
    case 'NEW ANECDOTE':
      return [...state, action.data]
    case 'INIT ANECDOTES':
      return action.data
    default:
      return state
  }

}


export const incVote = (anec) => {
  return async dispatch => {
    const anecdote = await anecdoteService.incVote(anec)
    dispatch({
      type: 'VOTE INCREASE',
      data: anecdote,
    })
  }
}

export const createAnec = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW ANECDOTE',
      data: newNote,
    })
  }
}
export const initializeAnec = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer