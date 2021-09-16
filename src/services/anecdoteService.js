import axios from "axios"



const APP_DOMAIN = process.env.APP_DOMAIN || "fso-anecdotes.herokuapp.com"

const baseUrl = `https://${APP_DOMAIN}/anecdotes`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const anecdoteToPost = { content, votes: 0 }
  const response = await axios.post(baseUrl, anecdoteToPost)
  return response.data
}

const update = async anecdote => {
  const anecdoteToUpdate = {
    id: anecdote.id,
    content: anecdote.content,
    votes: anecdote.votes,
  }
  const url = `${baseUrl}/${anecdote.id}`
  const response = await axios.put(url, anecdoteToUpdate)
  return response.data
}

const AnecdoteService = {
  getAll,
  createNew,
  update
}

export default AnecdoteService
