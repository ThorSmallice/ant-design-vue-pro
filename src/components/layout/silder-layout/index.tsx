import { App, defineComponent } from 'vue'

const Comp = defineComponent({
    name: 'DSilderLayout',

    setup(props, {}) {
        return () => (
            <div>
                <router-view></router-view>
            </div>
        )
    },
})

Comp.install = (app: App) => {
    app.component(Comp?.name!, Comp)
}
export default Comp
