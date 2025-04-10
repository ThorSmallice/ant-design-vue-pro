import Axios from 'axios'

console.log('🚀 ~ VITE_REQUEST_BASE_URL:', import.meta.env)

const axios = Axios.create({
    baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
})

axios.interceptors.request.use((req) => {
    return req
})

axios.interceptors.response.use((res) => {
    return res
})

export default axios
