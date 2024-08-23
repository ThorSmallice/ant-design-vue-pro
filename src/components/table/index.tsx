import { App, defineComponent } from "vue";

const Comp = defineComponent({
  name: "DTable",

  setup(props, {}) {
    return () => <div>table</div>;
  },
});

Comp.install = (app: App) => {
  app.component(Comp?.name!, Comp);
};
export default Comp;
