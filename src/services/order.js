import axios from 'axios'
const baseUrl = `${process.env.REACT_APP_BASE_URL}/orders`

const CreateOrder = () => {
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}

const exportedObject = {
  CreateOrder
}

export default exportedObject