import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/v1/customers';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const get = (id) => {
  const request = axios.get(baseUrl + `/${id}`)
  return request.then(response => response.data)
}

const exportedObject = {
  getAll, 
  create,
  get
}

export default exportedObject