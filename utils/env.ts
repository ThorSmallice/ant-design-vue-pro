import { loadEnv } from 'vite'
const envFilter = ['VITE_', 'GL_']
export const envResolve = (
    mode: string = process.env.NODE_ENV as string,
    filter: string | string[] = envFilter
) => {
    return loadEnv(mode, process.cwd(), filter)
}
