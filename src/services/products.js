import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const registerClick = (id) => {
  const request = axios.post(`${baseUrl}/${id}/clicks`)
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const updateProduct = (id, product) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`${baseUrl}/${id}`, product, config)
  return request.then(response => response.data)
}

const setFavorite = (id, product) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post(`${baseUrl}/${id}/favorite`, product, config)
  return request.then(response => response.data)
}

const setUnfavorite = (id, product) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post(`${baseUrl}/${id}/unfavorite`, product, config)
  return request.then(response => response.data)
}

export default { registerClick, updateProduct, getAll, setToken, setFavorite, setUnfavorite }
