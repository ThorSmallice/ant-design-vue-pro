import { App, defineComponent } from 'vue'

const Comp = defineComponent({
    name: 'Table',
    props: {
        title: String,
    },
    setup(props, {}) {
        console.log(props)
        return () => <div>{props?.title}</div>
    },
})

Comp.install = (app: App) => {
    app?.component?.(Comp?.name!, Comp)
    return app
}
export default Comp
