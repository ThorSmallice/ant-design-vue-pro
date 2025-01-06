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
  version: "1.0.54",
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
    "@types/mime-types": "^2.1.4",
    "@types/node": "^20.17.8",
    "@types/numeral": "^2.0.5",
    "@types/pinyin": "^2.10.2",
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
    "js-file-downloader": "^1.1.25",
    mime: "^4.0.6",
    numeral: "^2.0.6",
    path: "^0.12.7",
    "pinyin-pro": "^3.26.0",
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
    "@ant-design/icons-vue": "^7.0.1",
    "ant-design-vue": "4.x",
    axios: "^1.7.8",
    "big.js": "^6.2.2",
    dayjs: "^1.11.13",
    "es-toolkit": "^1.27.0",
    "js-file-downloader": "^1.1.25",
    mime: "^4.0.6",
    numeral: "^2.0.6",
    "pinyin-pro": "^3.26.0",
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
var generateGlobals = (arr) => {
  const obj = {};
  arr?.forEach?.((key) => {
    const val = key.replace(/^@/, "").split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    obj[`${key}`] = val;
  });
  return obj;
};
var external = [
  "vue",
  "ant-design-vue",
  "dayjs",
  "numeral",
  "es-toolkit",
  "big.js",
  "qs",
  "mime",
  "pinyin-pro",
  "js-file-downloader",
  "axios",
  "@ant-design/icons-vue"
];
var globals = generateGlobals(external);
var proxy = {
  "/api": {
    target: "http://116.177.41.89:8888",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, "/hnz/admin-api")
  },
  "/admin-api": {
    target: "https://iot.scet.com.cn",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/admin-api/, "/micro-dev-api")
  }
};
var alias = {
  "@src": resolve(__vite_injected_original_dirname, "./src"),
  "@comps": resolve(__vite_injected_original_dirname, "./src/components"),
  "@hooks": resolve(__vite_injected_original_dirname, "./src/hooks"),
  "@config": resolve(__vite_injected_original_dirname, "./src/config"),
  "@tools": resolve(__vite_injected_original_dirname, "./src/tools"),
  "@examples": resolve(__vite_injected_original_dirname, "./docs/examples"),
  "@docs": resolve(__vite_injected_original_dirname, "./docs"),
  [package_default.name]: resolve(__vite_injected_original_dirname, "./src/main.ts")
};
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
      external,
      output: {
        exports: "named",
        globals
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 13800,
    proxy
  },
  resolve: {
    alias
  }
});
export {
  alias,
  vite_config_default as default,
  external,
  generateGlobals,
  globals,
  proxy
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gJ3ZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlJ1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcidcclxuaW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHbG9iYWxzID0gKGFycjogc3RyaW5nW10pID0+IHtcclxuICAgIGNvbnN0IG9iaiA9IHt9XHJcbiAgICBhcnI/LmZvckVhY2g/Ligoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0ga2V5XHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eQC8sICcnKVxyXG4gICAgICAgICAgICAuc3BsaXQoL1stX10vKSAvLyBcdTYzMDlcdTcxNjcgYC1gIFx1NjIxNiBgX2AgXHU1MjA2XHU1MjcyXHJcbiAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKSAvLyBcdTVDMDZcdTZCQ0ZcdTkwRThcdTUyMDZcdTk5OTZcdTVCNTdcdTZCQ0RcdTU5MjdcdTUxOTlcclxuICAgICAgICAgICAgLmpvaW4oJycpXHJcblxyXG4gICAgICAgIG9ialtgJHtrZXl9YF0gPSB2YWxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4dGVybmFsID0gW1xyXG4gICAgJ3Z1ZScsXHJcbiAgICAnYW50LWRlc2lnbi12dWUnLFxyXG4gICAgJ2RheWpzJyxcclxuICAgICdudW1lcmFsJyxcclxuICAgICdlcy10b29sa2l0JyxcclxuICAgICdiaWcuanMnLFxyXG4gICAgJ3FzJyxcclxuICAgICdtaW1lJyxcclxuICAgICdwaW55aW4tcHJvJyxcclxuICAgICdqcy1maWxlLWRvd25sb2FkZXInLFxyXG4gICAgJ2F4aW9zJyxcclxuICAgICdAYW50LWRlc2lnbi9pY29ucy12dWUnLFxyXG5dXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxzID0gZ2VuZXJhdGVHbG9iYWxzKGV4dGVybmFsKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3h5ID0ge1xyXG4gICAgJy9hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzExNi4xNzcuNDEuODk6ODg4OCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvaG56L2FkbWluLWFwaScpLFxyXG4gICAgfSxcclxuICAgICcvYWRtaW4tYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vaW90LnNjZXQuY29tLmNuJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYWRtaW4tYXBpLywgJy9taWNyby1kZXYtYXBpJyksXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBjb25zdCBhbGlhcyA9IHtcclxuICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgJ0Bjb21wcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgJ0Bob29rcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9va3MnKSxcclxuICAgICdAY29uZmlnJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb25maWcnKSxcclxuICAgICdAdG9vbHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3Rvb2xzJyksXHJcbiAgICAnQGV4YW1wbGVzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2RvY3MvZXhhbXBsZXMnKSxcclxuICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzJyksXHJcbiAgICBbcGtnLm5hbWVdOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21haW4udHMnKSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIFZ1ZSgpLFxyXG4gICAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY29tcHJlc3Npb24oKSxcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgICB0b3BFeGVjdXRpb25Qcmlvcml0eTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICByZW1vdmVDb25zb2xlKHtcclxuICAgICAgICAgICAgaW5jbHVkZXM6IFsnbG9nJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGxpYi9pbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW3RlcnNlcigpXSxcclxuICAgICAgICAgICAgZXh0ZXJuYWwsXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgICAgcG9ydDogMTM4MDAsXHJcbiAgICAgICAgcHJveHksXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzLFxyXG4gICAgfSxcclxufSlcclxuIiwgIntcbiAgICBcIm5hbWVcIjogXCJhbnRkLXZ1ZS1kYnRob3JcIixcbiAgICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgICBcInByaXZhdGVcIjogZmFsc2UsXG4gICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjU0XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibWFpblwiOiBcImluZGV4LmpzXCIsXG4gICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCIsXG4gICAgICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgICAgICBcImRvY3M6ZGV2XCI6IFwidml0ZXByZXNzIGRldiBkb2NzXCIsXG4gICAgICAgIFwiZG9jczpidWlsZFwiOiBcInZpdGVwcmVzcyBidWlsZCBkb2NzXCIsXG4gICAgICAgIFwiZG9jczpwcmV2aWV3XCI6IFwidml0ZXByZXNzIHByZXZpZXcgZG9jc1wiLFxuICAgICAgICBcInB1c2hcIjogXCJucG0gcHVibGlzaFwiXG4gICAgfSxcbiAgICBcImZpbGVzXCI6IFtcbiAgICAgICAgXCJkaXN0XCJcbiAgICBdLFxuICAgIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgICBcImV4cG9ydHNcIjoge1xuICAgICAgICBcIi5cIjoge1xuICAgICAgICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbGliL2luZGV4LmVzLmpzXCIsXG4gICAgICAgICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvbGliL2luZGV4LnVtZC5qc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiLi8qXCI6IFwiLi8qXCJcbiAgICB9LFxuICAgIFwia2V5d29yZHNcIjogW1xuICAgICAgICBcImFudC1kZXNpZ24tdnVlLXByb1wiXG4gICAgXSxcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxuICAgIH0sXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxuICAgICAgICBcIkByb2xsdXAvcGx1Z2luLXRlcnNlclwiOiBcIl4wLjQuNFwiLFxuICAgICAgICBcIkB0eXBlcy9iaWcuanNcIjogXCJeNi4yLjJcIixcbiAgICAgICAgXCJAdHlwZXMvbWltZS10eXBlc1wiOiBcIl4yLjEuNFwiLFxuICAgICAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjE3LjhcIixcbiAgICAgICAgXCJAdHlwZXMvbnVtZXJhbFwiOiBcIl4yLjAuNVwiLFxuICAgICAgICBcIkB0eXBlcy9waW55aW5cIjogXCJeMi4xMC4yXCIsXG4gICAgICAgIFwiQHR5cGVzL3FzXCI6IFwiXjYuOS4xN1wiLFxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjIuMFwiLFxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4xLjBcIixcbiAgICAgICAgXCJAdnVlLW1hY3Jvcy9yZWFjdGl2aXR5LXRyYW5zZm9ybVwiOiBcIl4xLjEuNFwiLFxuICAgICAgICBcImFudC1kZXNpZ24tdnVlXCI6IFwifjQuMi42XCIsXG4gICAgICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcbiAgICAgICAgXCJheGlvc1wiOiBcIl4xLjcuOFwiLFxuICAgICAgICBcImJpZy5qc1wiOiBcIl42LjIuMlwiLFxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcbiAgICAgICAgXCJlcy10b29sa2l0XCI6IFwiXjEuMjcuMFwiLFxuICAgICAgICBcImpzLWZpbGUtZG93bmxvYWRlclwiOiBcIl4xLjEuMjVcIixcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXG4gICAgICAgIFwibnVtZXJhbFwiOiBcIl4yLjAuNlwiLFxuICAgICAgICBcInBhdGhcIjogXCJeMC4xMi43XCIsXG4gICAgICAgIFwicGlueWluLXByb1wiOiBcIl4zLjI2LjBcIixcbiAgICAgICAgXCJwb3N0Y3NzXCI6IFwiXjguNC40OVwiLFxuICAgICAgICBcInFzXCI6IFwiXjYuMTMuMVwiLFxuICAgICAgICBcInJpbXJhZlwiOiBcIl42LjAuMVwiLFxuICAgICAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xNVwiLFxuICAgICAgICBcInR5cGVzY3JpcHRcIjogXCJeNS43LjJcIixcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI6IFwiXjIuMTMuNlwiLFxuICAgICAgICBcInZpdGVcIjogXCJeNS40LjExXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb24yXCI6IFwiXjEuMy4xXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI6IFwiXjMuNS4yXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiNC4wLjAtYmV0YS4xXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGVcIjogXCJeMi4yLjBcIixcbiAgICAgICAgXCJ2aXRlcHJlc3NcIjogXCJeMS41LjBcIixcbiAgICAgICAgXCJ2dWVcIjogXCJeMy41LjEzXCIsXG4gICAgICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjUuMFwiLFxuICAgICAgICBcInZ1ZS10eXBlc1wiOiBcIl41LjEuM1wiXG4gICAgfSxcbiAgICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxuICAgICAgICBcImFudC1kZXNpZ24tdnVlXCI6IFwiNC54XCIsXG4gICAgICAgIFwiYXhpb3NcIjogXCJeMS43LjhcIixcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcbiAgICAgICAgXCJkYXlqc1wiOiBcIl4xLjExLjEzXCIsXG4gICAgICAgIFwiZXMtdG9vbGtpdFwiOiBcIl4xLjI3LjBcIixcbiAgICAgICAgXCJqcy1maWxlLWRvd25sb2FkZXJcIjogXCJeMS4xLjI1XCIsXG4gICAgICAgIFwibWltZVwiOiBcIl40LjAuNlwiLFxuICAgICAgICBcIm51bWVyYWxcIjogXCJeMi4wLjZcIixcbiAgICAgICAgXCJwaW55aW4tcHJvXCI6IFwiXjMuMjYuMFwiLFxuICAgICAgICBcInFzXCI6IFwiXjYuMTMuMVwiLFxuICAgICAgICBcInZ1ZVwiOiBcIl4zLjUuMTJcIlxuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsT0FBTyxTQUFTO0FBQy9SLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUNKaEI7QUFBQSxFQUNJLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNQLEtBQU87QUFBQSxJQUNQLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLGdCQUFnQjtBQUFBLElBQ2hCLE1BQVE7QUFBQSxFQUNaO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDTDtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQVM7QUFBQSxFQUNULFNBQVc7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNELFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNmO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsVUFBWTtBQUFBLElBQ1I7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFVO0FBQUEsRUFDVixTQUFXO0FBQUEsRUFDWCxlQUFpQjtBQUFBLElBQ2IsVUFBWTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNmLHlCQUF5QjtBQUFBLElBQ3pCLHlCQUF5QjtBQUFBLElBQ3pCLGlCQUFpQjtBQUFBLElBQ2pCLHFCQUFxQjtBQUFBLElBQ3JCLGVBQWU7QUFBQSxJQUNmLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBLElBQ2pCLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLElBQ3RCLDBCQUEwQjtBQUFBLElBQzFCLG9DQUFvQztBQUFBLElBQ3BDLGtCQUFrQjtBQUFBLElBQ2xCLGNBQWdCO0FBQUEsSUFDaEIsT0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsT0FBUztBQUFBLElBQ1QsY0FBYztBQUFBLElBQ2Qsc0JBQXNCO0FBQUEsSUFDdEIsTUFBUTtBQUFBLElBQ1IsU0FBVztBQUFBLElBQ1gsTUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsU0FBVztBQUFBLElBQ1gsSUFBTTtBQUFBLElBQ04sUUFBVTtBQUFBLElBQ1YsYUFBZTtBQUFBLElBQ2YsWUFBYztBQUFBLElBQ2QsdUJBQXVCO0FBQUEsSUFDdkIsTUFBUTtBQUFBLElBQ1IsNEJBQTRCO0FBQUEsSUFDNUIsa0NBQWtDO0FBQUEsSUFDbEMsbUJBQW1CO0FBQUEsSUFDbkIsOEJBQThCO0FBQUEsSUFDOUIsV0FBYTtBQUFBLElBQ2IsS0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNoQix5QkFBeUI7QUFBQSxJQUN6QixrQkFBa0I7QUFBQSxJQUNsQixPQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixPQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxzQkFBc0I7QUFBQSxJQUN0QixNQUFRO0FBQUEsSUFDUixTQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxJQUFNO0FBQUEsSUFDTixLQUFPO0FBQUEsRUFDWDtBQUNKOzs7QURsRkEsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsbUJBQW1CO0FBVjVCLElBQU0sbUNBQW1DO0FBWWxDLElBQU0sa0JBQWtCLENBQUMsUUFBa0I7QUFDOUMsUUFBTSxNQUFNLENBQUM7QUFDYixPQUFLLFVBQVUsQ0FBQyxRQUFRO0FBQ3BCLFVBQU0sTUFBTSxJQUNQLFFBQVEsTUFBTSxFQUFFLEVBQ2hCLE1BQU0sTUFBTSxFQUNaLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFDMUQsS0FBSyxFQUFFO0FBRVosUUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJO0FBQUEsRUFDcEIsQ0FBQztBQUNELFNBQU87QUFDWDtBQUNPLElBQU0sV0FBVztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSjtBQUNPLElBQU0sVUFBVSxnQkFBZ0IsUUFBUTtBQUV4QyxJQUFNLFFBQVE7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxTQUFTLENBQUMsU0FBaUIsS0FBSyxRQUFRLFVBQVUsZ0JBQWdCO0FBQUEsRUFDdEU7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxJQUNkLFNBQVMsQ0FBQyxTQUFpQixLQUFLLFFBQVEsZ0JBQWdCLGdCQUFnQjtBQUFBLEVBQzVFO0FBQ0o7QUFDTyxJQUFNLFFBQVE7QUFBQSxFQUNqQixRQUFRLFFBQVEsa0NBQVcsT0FBTztBQUFBLEVBQ2xDLFVBQVUsUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxFQUMvQyxVQUFVLFFBQVEsa0NBQVcsYUFBYTtBQUFBLEVBQzFDLFdBQVcsUUFBUSxrQ0FBVyxjQUFjO0FBQUEsRUFDNUMsVUFBVSxRQUFRLGtDQUFXLGFBQWE7QUFBQSxFQUMxQyxhQUFhLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsRUFDakQsU0FBUyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxFQUNwQyxDQUFDLGdCQUFJLElBQUksR0FBRyxRQUFRLGtDQUFXLGVBQWU7QUFDbEQ7QUFDQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixjQUFjO0FBQUEsTUFDZCxrQkFBa0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFDWixzQkFBc0I7QUFBQSxNQUNsQixzQkFBc0I7QUFBQSxJQUMxQixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsTUFDVixVQUFVLENBQUMsS0FBSztBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELG9CQUFvQjtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxLQUFLO0FBQUEsTUFDRCxPQUFPLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ3ZDLE1BQU0sZ0JBQUk7QUFBQSxNQUNWLFVBQVUsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUFBLElBQzdDO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDWCxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQUEsTUFDbEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNUO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
