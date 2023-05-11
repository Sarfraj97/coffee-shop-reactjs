import axios from 'axios'
const baseUrl = `${process.env.REACT_APP_BASE_URL}/items`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const exportedObject = {
  getAll
}

export default exportedObject