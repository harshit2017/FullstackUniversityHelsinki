import React, { useEffect } from 'react'

import NewAnec from './components/AnecdoteForm'
import Anecdote from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import { initializeAnec } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnec()) 
  },[dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <Anecdote />
      <NewAnec />
    </div>
  )
}

export default App