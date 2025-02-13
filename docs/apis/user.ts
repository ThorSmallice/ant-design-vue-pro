import axios from './request'

export const getUsersPageApi = async (params?: any, config?: any) =>
    await axios.get('/public/users/page', { params, ...config })

export const createUserApi = async (data?: any, config?: any) =>
    await axios.post('/public/users', data, config)

export const updateUserApi = async ({ id, ...data }: any, config?: any) =>
    await axios.put(`/public/users/${id}`, data, config)

export const deleteUserApi = async ({ id }: any, config?: any) =>
    await axios.delete(`/public/users/${id}`)

export const getUserDetailsApi = async (params?: any, config?: any) =>
    await axios.get('/public/users', { params, ...config })

export const downloadUserTemplateApi = async (params?: any, config?: any) =>
    await axios.get('/public/users/template', { params, ...config })

export const exportUsersApi = async (params?: any, config?: any) =>
    await axios.get('/public/users/export-excel', { params, ...config, responseType: 'blob' })

export const importUserApi = async (data?: any, config?: any) =>
    await axios.post('/public/users/import-excel', data, {
        ...config,
        headers: {
            'content-type': 'multipart/form-data',
        },
    })
