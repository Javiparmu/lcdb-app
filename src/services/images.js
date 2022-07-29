import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products/images'

const getImageByType = (type) => {
  const request = axios.get(`${baseUrl}/type/${type}`)
  return request.then(response => response.data)
}

export default { getImageByType }
