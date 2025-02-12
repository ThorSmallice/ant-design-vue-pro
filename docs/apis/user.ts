// Copyright (c) 2025 DB-Thor<db912356847@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios from './request'

export const getUsersPageApi = async (params?: any, config?: any) =>
    await axios.get('/public/users/page', { params, ...config })
