import axios from 'axios'
const baseUrl = '/api/blogs'

// eslint-disable-next-line
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const exportedObject = {
  getAll,
  setToken
}

export default exportedObject