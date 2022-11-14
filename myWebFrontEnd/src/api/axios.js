import axios from 'axios'

var _baseURL = "http://127.0.0.1:5000"

const service = axios.create({
  baseURL: _baseURL,
  timeout: 600000
})

axios.defaults.retry = 4
axios.defaults.retryDelay = 4000
axios.defaults.withCredentials = true

service.interceptors.request.use((config) => {
  return config
})
// axios 请求处理超时处理
service.interceptors.response.use(
  function (response) {
    return response.data
  },
  (err) => {
    return Promise.reject(err.response.data)
  }
)

export default service

