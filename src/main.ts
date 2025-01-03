// Copyright (c) 2025 Thor
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export * from '@config/index'
export { default as GlobalComponentDefalutPropsConfig } from '@config/index'

import './styles/index.pcss'
import { install } from './components'
export * from './components'
export default install
