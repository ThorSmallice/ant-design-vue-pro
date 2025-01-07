import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/admin-api',
})

axios.interceptors.request.use((req) => {
    return req
})
axios.interceptors.response.use((res) => {
    console.log('🚀 ~ axios.interceptors.response.use ~ res:', res)
    return res
})

export default axios
