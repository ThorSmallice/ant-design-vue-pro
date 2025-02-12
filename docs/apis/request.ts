import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
})

axios.interceptors.request.use((req) => {
    console.log('🚀 ~ axios.interceptors.request.use ~ req:', req)

    return req
})
axios.interceptors.response.use((res) => {
    console.log('🚀 ~ axios.interceptors.response.use ~ res:', res)
    return res
})

export default axios
