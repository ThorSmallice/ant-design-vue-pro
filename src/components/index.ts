import type { App, Component, DefineComponent } from "vue";
import * as components from "@comps/components";

export const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    const component = (components as Record<string, Component>)[
      key
    ] as DefineComponent;
    app.component(component?.name!, component);
  });
};
export default {
  install,
};
