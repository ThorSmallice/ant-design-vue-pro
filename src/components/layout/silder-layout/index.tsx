import { Layout, Menu, Slider } from 'ant-design-vue'
import { Content } from 'ant-design-vue/es/layout/layout'
import { App, defineComponent } from 'vue'

const { Sider } = Layout
const Comp = defineComponent({
    name: 'DSilderLayout',

    setup(props, {}) {
        return () => (
            <Layout class="w-full h-full overflow-hidden">
                <Sider class="bg-black" width={200}>
                    <Menu></Menu>
                </Sider>
                <Content class="">
                    <router-view></router-view>
                </Content>
            </Layout>
        )
    },
})

Comp.install = (app: App) => {
    app.component(Comp?.name!, Comp)
}
export default Comp
