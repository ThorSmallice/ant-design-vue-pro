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
  version: "1.0.65",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gJ3ZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlJ1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcidcclxuaW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHbG9iYWxzID0gKGFycjogc3RyaW5nW10pID0+IHtcclxuICAgIGNvbnN0IG9iaiA9IHt9XHJcbiAgICBhcnI/LmZvckVhY2g/Ligoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0ga2V5XHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eQC8sICcnKVxyXG4gICAgICAgICAgICAuc3BsaXQoL1stX10vKSAvLyBcdTYzMDlcdTcxNjcgYC1gIFx1NjIxNiBgX2AgXHU1MjA2XHU1MjcyXHJcbiAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKSAvLyBcdTVDMDZcdTZCQ0ZcdTkwRThcdTUyMDZcdTk5OTZcdTVCNTdcdTZCQ0RcdTU5MjdcdTUxOTlcclxuICAgICAgICAgICAgLmpvaW4oJycpXHJcblxyXG4gICAgICAgIG9ialtgJHtrZXl9YF0gPSB2YWxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gb2JqXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4dGVybmFsID0gW1xyXG4gICAgJ3Z1ZScsXHJcbiAgICAnYW50LWRlc2lnbi12dWUnLFxyXG4gICAgJ2RheWpzJyxcclxuICAgICdudW1lcmFsJyxcclxuICAgICdlcy10b29sa2l0JyxcclxuICAgICdiaWcuanMnLFxyXG4gICAgJ3FzJyxcclxuICAgICdtaW1lJyxcclxuICAgICdwaW55aW4tcHJvJyxcclxuICAgICdqcy1maWxlLWRvd25sb2FkZXInLFxyXG4gICAgJ2F4aW9zJyxcclxuICAgICdAYW50LWRlc2lnbi9pY29ucy12dWUnLFxyXG5dXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxzID0gZ2VuZXJhdGVHbG9iYWxzKGV4dGVybmFsKVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3h5ID0ge1xyXG4gICAgJy9hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzExNi4xNzcuNDEuODk6ODg4OCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvaG56L2FkbWluLWFwaScpLFxyXG4gICAgfSxcclxuICAgICcvYWRtaW4tYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vaW90LnNjZXQuY29tLmNuJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYWRtaW4tYXBpLywgJy9taWNyby1kZXYtYXBpJyksXHJcbiAgICB9LFxyXG59XHJcbmV4cG9ydCBjb25zdCBhbGlhcyA9IHtcclxuICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgJ0Bjb21wcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgJ0Bob29rcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaG9va3MnKSxcclxuICAgICdAY29uZmlnJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb25maWcnKSxcclxuICAgICdAdG9vbHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3Rvb2xzJyksXHJcbiAgICAnQGV4YW1wbGVzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2RvY3MvZXhhbXBsZXMnKSxcclxuICAgICdAZG9jcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzJyksXHJcbiAgICBbcGtnLm5hbWVdOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21haW4udHMnKSxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIFZ1ZSgpLFxyXG4gICAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY29tcHJlc3Npb24oKSxcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgICB0b3BFeGVjdXRpb25Qcmlvcml0eTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICByZW1vdmVDb25zb2xlKHtcclxuICAgICAgICAgICAgaW5jbHVkZXM6IFsnbG9nJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGxpYi9pbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW3RlcnNlcigpXSxcclxuICAgICAgICAgICAgZXh0ZXJuYWwsXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgICAgcG9ydDogMTM4MDAsXHJcbiAgICAgICAgcHJveHksXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzLFxyXG4gICAgfSxcclxufSlcclxuIiwgIntcclxuICAgIFwibmFtZVwiOiBcImFudGQtdnVlLWRidGhvclwiLFxyXG4gICAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgICBcInByaXZhdGVcIjogZmFsc2UsXHJcbiAgICBcInZlcnNpb25cIjogXCIxLjAuNjVcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgIFwibWFpblwiOiBcImluZGV4LmpzXCIsXHJcbiAgICBcInNjcmlwdHNcIjoge1xyXG4gICAgICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCIsXHJcbiAgICAgICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICAgICAgXCJkb2NzOmRldlwiOiBcInZpdGVwcmVzcyBkZXYgZG9jc1wiLFxyXG4gICAgICAgIFwiZG9jczpidWlsZFwiOiBcInZpdGVwcmVzcyBidWlsZCBkb2NzXCIsXHJcbiAgICAgICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyBkb2NzXCIsXHJcbiAgICAgICAgXCJwdXNoXCI6IFwibnBtIHB1Ymxpc2hcIlxyXG4gICAgfSxcclxuICAgIFwiZmlsZXNcIjogW1xyXG4gICAgICAgIFwiZGlzdFwiXHJcbiAgICBdLFxyXG4gICAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxyXG4gICAgXCJleHBvcnRzXCI6IHtcclxuICAgICAgICBcIi5cIjoge1xyXG4gICAgICAgICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9saWIvaW5kZXguZXMuanNcIixcclxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2xpYi9pbmRleC51bWQuanNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuLypcIjogXCIuLypcIlxyXG4gICAgfSxcclxuICAgIFwia2V5d29yZHNcIjogW1xyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWUtcHJvXCJcclxuICAgIF0sXHJcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxyXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgICBcInB1Ymxpc2hDb25maWdcIjoge1xyXG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI6IFwiXjAuNC40XCIsXHJcbiAgICAgICAgXCJAdHlwZXMvYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvbWltZS10eXBlc1wiOiBcIl4yLjEuNFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTcuOFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL251bWVyYWxcIjogXCJeMi4wLjVcIixcclxuICAgICAgICBcIkB0eXBlcy9waW55aW5cIjogXCJeMi4xMC4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjE3XCIsXHJcbiAgICAgICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4yLjBcIixcclxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4xLjBcIixcclxuICAgICAgICBcIkB2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtXCI6IFwiXjEuMS40XCIsXHJcbiAgICAgICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIn40LjIuNlwiLFxyXG4gICAgICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcclxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNy44XCIsXHJcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcclxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcclxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXHJcbiAgICAgICAgXCJqcy1maWxlLWRvd25sb2FkZXJcIjogXCJeMS4xLjI1XCIsXHJcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXHJcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiXjAuMTIuN1wiLFxyXG4gICAgICAgIFwicGlueWluLXByb1wiOiBcIl4zLjI2LjBcIixcclxuICAgICAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQ5XCIsXHJcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcclxuICAgICAgICBcInJpbXJhZlwiOiBcIl42LjAuMVwiLFxyXG4gICAgICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjE1XCIsXHJcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNy4yXCIsXHJcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI6IFwiXjIuMTMuNlwiLFxyXG4gICAgICAgIFwidml0ZVwiOiBcIl41LjQuMTFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMlwiOiBcIl4xLjMuMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI6IFwiXjMuNS4yXCIsXHJcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCI0LjAuMC1iZXRhLjFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlXCI6IFwiXjIuMi4wXCIsXHJcbiAgICAgICAgXCJ2aXRlcHJlc3NcIjogXCJeMS41LjBcIixcclxuICAgICAgICBcInZ1ZVwiOiBcIl4zLjUuMTNcIixcclxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjBcIixcclxuICAgICAgICBcInZ1ZS10eXBlc1wiOiBcIl41LjEuM1wiXHJcbiAgICB9LFxyXG4gICAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCI0LnhcIixcclxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNy44XCIsXHJcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcclxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcclxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXHJcbiAgICAgICAgXCJqcy1maWxlLWRvd25sb2FkZXJcIjogXCJeMS4xLjI1XCIsXHJcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXHJcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXHJcbiAgICAgICAgXCJwaW55aW4tcHJvXCI6IFwiXjMuMjYuMFwiLFxyXG4gICAgICAgIFwicXNcIjogXCJeNi4xMy4xXCIsXHJcbiAgICAgICAgXCJ2dWVcIjogXCJeMy41LjEyXCJcclxuICAgIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLE9BQU8sU0FBUztBQUMvUixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDSmhCO0FBQUEsRUFDSSxNQUFRO0FBQUEsRUFDUixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsSUFDUCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxnQkFBZ0I7QUFBQSxJQUNoQixNQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0EsT0FBUztBQUFBLElBQ0w7QUFBQSxFQUNKO0FBQUEsRUFDQSxP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
