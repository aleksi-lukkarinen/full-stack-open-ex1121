import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { initAnecdotes } from "./reducers/anecdoteReducer"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  }, [dispatch])

  return (
    <div style={{backgroundColor: "lightyellow"}}>
      <Notification />

      <h2 style={{color: "blue"}}>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App