import { resolve } from 'path'

export const getAssetsUrl = (path: string) => {
    return new URL(resolve(__dirname, './src/assets', path), import.meta.url).href
}
