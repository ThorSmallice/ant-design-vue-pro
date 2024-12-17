// vite.config.ts
import Vue from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vitejs+plugin-vue@5.2.0_vite@5.4.11_@types+node@20.17.8_terser@5.37.0__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.0_vite@5.4.11_@types+node@20.17.8_terser@5.37.0__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.8_terser@5.37.0/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite-plugin-dts@4.0.0-beta.1_@types+node@20.17.8_rollup@4.27.4_typescript@5.7.2_vite@5.4.11_@_qqqnupywcvcj7ruywpdqojonja/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "antd-vue-dbthor",
  type: "module",
  private: false,
  version: "1.0.15",
  description: "",
  main: "index.js",
  scripts: {
    dev: "vite",
    test: 'echo "Error: no test specified" && exit 1',
    build: "tsc && vite build",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs",
    push: "npm publish"
  },
  files: [
    "dist"
  ],
  types: "dist/index.d.ts",
  exports: {
    ".": {
      import: "./dist/lib/index.es.js",
      require: "./dist/lib/index.umd.js"
    },
    "./*": "./*"
  },
  keywords: [
    "ant-design-vue-pro"
  ],
  author: "dbthor",
  license: "MIT",
  publishConfig: {
    registry: "https://registry.npmjs.org/"
  },
  devDependencies: {
    "@ant-design/icons-vue": "^7.0.1",
    "@rollup/plugin-terser": "^0.4.4",
    "@types/big.js": "^6.2.2",
    "@types/node": "^20.17.8",
    "@types/numeral": "^2.0.5",
    "@types/qs": "^6.9.17",
    "@vitejs/plugin-vue": "^5.2.0",
    "@vitejs/plugin-vue-jsx": "^4.1.0",
    "@vue-macros/reactivity-transform": "^1.1.4",
    "ant-design-vue": "~4.2.6",
    autoprefixer: "^10.4.20",
    axios: "^1.7.8",
    "big.js": "^6.2.2",
    dayjs: "^1.11.13",
    "es-toolkit": "^1.27.0",
    numeral: "^2.0.6",
    path: "^0.12.7",
    postcss: "^8.4.49",
    qs: "^6.13.1",
    rimraf: "^6.0.1",
    tailwindcss: "^3.4.15",
    typescript: "^5.7.2",
    "unplugin-vue-macros": "^2.13.6",
    vite: "^5.4.11",
    "vite-plugin-compression2": "^1.3.1",
    "vite-plugin-css-injected-by-js": "^3.5.2",
    "vite-plugin-dts": "4.0.0-beta.1",
    "vite-plugin-remove-console": "^2.2.0",
    vitepress: "^1.5.0",
    vue: "^3.5.13",
    "vue-router": "^4.5.0",
    "vue-types": "^5.1.3"
  },
  peerDependencies: {
    "ant-design-vue": "4.x",
    "big.js": "^6.2.2",
    dayjs: "^1.11.13",
    "es-toolkit": "^1.27.0",
    numeral: "^2.0.6",
    qs: "^6.13.1",
    vue: "^3.5.12"
  }
};

// vite.config.ts
import ReactivityTransform from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vue-macros+reactivity-transform@1.1.4_rollup@4.27.4_vue@3.5.13_typescript@5.7.2_/node_modules/@vue-macros/reactivity-transform/dist/vite.js";
import cssInjectedByJsPlugin from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.5.2_vite@5.4.11_@types+node@20.17.8_terser@5.37.0_/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import removeConsole from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite-plugin-remove-console@2.2.0/node_modules/vite-plugin-remove-console/dist/index.mjs";
import terser from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.27.4/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { compression } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite-plugin-compression2@1.3.1_@types+node@20.17.8_rollup@4.27.4_terser@5.37.0/node_modules/vite-plugin-compression2/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\project\\ant-design-vue-pro";
var vite_config_default = defineConfig({
  plugins: [
    Vue(),
    vueJsx(),
    dts({
      outDir: "dist",
      staticImport: true,
      insertTypesEntry: true
    }),
    compression(),
    cssInjectedByJsPlugin({
      topExecutionPriority: true
    }),
    removeConsole({
      includes: ["log"]
    }),
    ReactivityTransform()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
      name: package_default.name,
      fileName: (format) => `lib/index.${format}.js`
    },
    rollupOptions: {
      plugins: [terser()],
      external: ["vue", "ant-design-vue", "dayjs", "numeral", "es-toolkit", "big.js", "qs"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
          "ant-design-vue": "AntDesignVue",
          dayjs: "Dayjs",
          numeral: "Numeral",
          "es-toolkit": "EsToolkit",
          "big.js": "BigJs",
          qs: "Qs"
        }
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 13800,
    proxy: {
      "/api": {
        target: "http://116.177.41.89:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/hnz/admin-api")
      }
    }
  },
  resolve: {
    alias: {
      "@src": resolve(__vite_injected_original_dirname, "./src"),
      "@comps": resolve(__vite_injected_original_dirname, "./src/components"),
      "@hooks": resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@config": resolve(__vite_injected_original_dirname, "./src/config"),
      "@tools": resolve(__vite_injected_original_dirname, "./src/tools"),
      "@examples": resolve(__vite_injected_original_dirname, "./docs/examples"),
      [package_default.name]: resolve(__vite_injected_original_dirname, "./src/main.ts")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gJ3ZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlJ1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcidcclxuaW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIFZ1ZSgpLFxyXG4gICAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY29tcHJlc3Npb24oKSxcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgICB0b3BFeGVjdXRpb25Qcmlvcml0eTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICByZW1vdmVDb25zb2xlKHtcclxuICAgICAgICAgICAgaW5jbHVkZXM6IFsnbG9nJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGxpYi9pbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBwbHVnaW5zOiBbdGVyc2VyKCldLFxyXG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnLCAnYW50LWRlc2lnbi12dWUnLCAnZGF5anMnLCAnbnVtZXJhbCcsICdlcy10b29sa2l0JywgJ2JpZy5qcycsICdxcyddLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICAnYW50LWRlc2lnbi12dWUnOiAnQW50RGVzaWduVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXlqczogJ0RheWpzJyxcclxuICAgICAgICAgICAgICAgICAgICBudW1lcmFsOiAnTnVtZXJhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VzLXRvb2xraXQnOiAnRXNUb29sa2l0JyxcclxuICAgICAgICAgICAgICAgICAgICAnYmlnLmpzJzogJ0JpZ0pzJyxcclxuICAgICAgICAgICAgICAgICAgICBxczogJ1FzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgICAgcG9ydDogMTM4MDAsXHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTE2LjE3Ny40MS44OTo4ODg4JyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2huei9hZG1pbi1hcGknKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQHNyYyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgICAgICAgJ0Bjb21wcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAgICAgICAnQGhvb2tzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9ob29rcycpLFxyXG4gICAgICAgICAgICAnQGNvbmZpZyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29uZmlnJyksXHJcbiAgICAgICAgICAgICdAdG9vbHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3Rvb2xzJyksXHJcbiAgICAgICAgICAgICdAZXhhbXBsZXMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vZG9jcy9leGFtcGxlcycpLFxyXG4gICAgICAgICAgICBbcGtnLm5hbWVdOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21haW4udHMnKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuIiwgIntcclxuICAgIFwibmFtZVwiOiBcImFudGQtdnVlLWRidGhvclwiLFxyXG4gICAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgICBcInByaXZhdGVcIjogZmFsc2UsXHJcbiAgICBcInZlcnNpb25cIjogXCIxLjAuMTVcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgIFwibWFpblwiOiBcImluZGV4LmpzXCIsXHJcbiAgICBcInNjcmlwdHNcIjoge1xyXG4gICAgICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCIsXHJcbiAgICAgICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICAgICAgXCJkb2NzOmRldlwiOiBcInZpdGVwcmVzcyBkZXYgZG9jc1wiLFxyXG4gICAgICAgIFwiZG9jczpidWlsZFwiOiBcInZpdGVwcmVzcyBidWlsZCBkb2NzXCIsXHJcbiAgICAgICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyBkb2NzXCIsXHJcbiAgICAgICAgXCJwdXNoXCI6IFwibnBtIHB1Ymxpc2hcIlxyXG4gICAgfSxcclxuICAgIFwiZmlsZXNcIjogW1xyXG4gICAgICAgIFwiZGlzdFwiXHJcbiAgICBdLFxyXG4gICAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxyXG4gICAgXCJleHBvcnRzXCI6IHtcclxuICAgICAgICBcIi5cIjoge1xyXG4gICAgICAgICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9saWIvaW5kZXguZXMuanNcIixcclxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2xpYi9pbmRleC51bWQuanNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuLypcIjogXCIuLypcIlxyXG4gICAgfSxcclxuICAgIFwia2V5d29yZHNcIjogW1xyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWUtcHJvXCJcclxuICAgIF0sXHJcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxyXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgICBcInB1Ymxpc2hDb25maWdcIjoge1xyXG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI6IFwiXjAuNC40XCIsXHJcbiAgICAgICAgXCJAdHlwZXMvYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNy44XCIsXHJcbiAgICAgICAgXCJAdHlwZXMvbnVtZXJhbFwiOiBcIl4yLjAuNVwiLFxyXG4gICAgICAgIFwiQHR5cGVzL3FzXCI6IFwiXjYuOS4xN1wiLFxyXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMi4wXCIsXHJcbiAgICAgICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjQuMS4wXCIsXHJcbiAgICAgICAgXCJAdnVlLW1hY3Jvcy9yZWFjdGl2aXR5LXRyYW5zZm9ybVwiOiBcIl4xLjEuNFwiLFxyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCJ+NC4yLjZcIixcclxuICAgICAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjIwXCIsXHJcbiAgICAgICAgXCJheGlvc1wiOiBcIl4xLjcuOFwiLFxyXG4gICAgICAgIFwiYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJkYXlqc1wiOiBcIl4xLjExLjEzXCIsXHJcbiAgICAgICAgXCJlcy10b29sa2l0XCI6IFwiXjEuMjcuMFwiLFxyXG4gICAgICAgIFwibnVtZXJhbFwiOiBcIl4yLjAuNlwiLFxyXG4gICAgICAgIFwicGF0aFwiOiBcIl4wLjEyLjdcIixcclxuICAgICAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQ5XCIsXHJcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcclxuICAgICAgICBcInJpbXJhZlwiOiBcIl42LjAuMVwiLFxyXG4gICAgICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjE1XCIsXHJcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNy4yXCIsXHJcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI6IFwiXjIuMTMuNlwiLFxyXG4gICAgICAgIFwidml0ZVwiOiBcIl41LjQuMTFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMlwiOiBcIl4xLjMuMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI6IFwiXjMuNS4yXCIsXHJcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCI0LjAuMC1iZXRhLjFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlXCI6IFwiXjIuMi4wXCIsXHJcbiAgICAgICAgXCJ2aXRlcHJlc3NcIjogXCJeMS41LjBcIixcclxuICAgICAgICBcInZ1ZVwiOiBcIl4zLjUuMTNcIixcclxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjBcIixcclxuICAgICAgICBcInZ1ZS10eXBlc1wiOiBcIl41LjEuM1wiXHJcbiAgICB9LFxyXG4gICAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcImFudC1kZXNpZ24tdnVlXCI6IFwiNC54XCIsXHJcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcclxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcclxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXHJcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXHJcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcclxuICAgICAgICBcInZ1ZVwiOiBcIl4zLjUuMTJcIlxyXG4gICAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsT0FBTyxTQUFTO0FBQy9SLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUNKaEI7QUFBQSxFQUNJLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNQLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLGdCQUFnQjtBQUFBLElBQ2hCLE1BQVE7QUFBQSxFQUNaO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDTDtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQVM7QUFBQSxFQUNULFNBQVc7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNELFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNmO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDWDtBQUFB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
