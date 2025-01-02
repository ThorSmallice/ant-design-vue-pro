import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://6776432412a55a9a7d0b0dfc.mockapi.io/api',
})

axios.interceptors.request.use((req) => {
    return req
})
axios.interceptors.response.use((res) => {
    console.log('🚀 ~ axios.interceptors.response.use ~ res:', res)
    return res
})

export default axios
