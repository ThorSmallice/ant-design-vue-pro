import * as components from '@comps/components.ts'
import type { App } from 'vue'
export * from '@comps/components.ts'

export const install = (app: App) => {
    Object.keys(components).forEach((key) => {
        const component = components[key]
        if (component.install) {
            app.use(component)
        }
    })
    return app
}
export default {
    install,
}
