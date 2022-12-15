import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/v1/orders'

const CreateOrder = () => {
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}

const exportedObject = {
  CreateOrder
}

export default exportedObject