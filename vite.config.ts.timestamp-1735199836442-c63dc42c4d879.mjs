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
  version: "1.0.44",
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
    pinyin: "4.0.0-alpha.2",
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
    "big.js": "^6.2.2",
    dayjs: "^1.11.13",
    "es-toolkit": "^1.27.0",
    "js-file-downloader": "^1.1.25",
    mime: "^4.0.6",
    numeral: "^2.0.6",
    pinyin: "4.0.0-alpha.2",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCByZW1vdmVDb25zb2xlIGZyb20gJ3ZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlJ1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcidcclxuaW1wb3J0IHsgY29tcHJlc3Npb24gfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIFZ1ZSgpLFxyXG4gICAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY29tcHJlc3Npb24oKSxcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgICB0b3BFeGVjdXRpb25Qcmlvcml0eTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICByZW1vdmVDb25zb2xlKHtcclxuICAgICAgICAgICAgaW5jbHVkZXM6IFsnbG9nJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGxpYi9pbmRleC4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW3RlcnNlcigpXSxcclxuXHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsICdhbnQtZGVzaWduLXZ1ZScsICdkYXlqcycsICdudW1lcmFsJywgJ2VzLXRvb2xraXQnLCAnYmlnLmpzJywgJ3FzJ10sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhbnQtZGVzaWduLXZ1ZSc6ICdBbnREZXNpZ25WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheWpzOiAnRGF5anMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bWVyYWw6ICdOdW1lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAnZXMtdG9vbGtpdCc6ICdFc1Rvb2xraXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdiaWcuanMnOiAnQmlnSnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHFzOiAnUXMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgICAgICBwb3J0OiAxMzgwMCxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMTYuMTc3LjQxLjg5Ojg4ODgnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvaG56L2FkbWluLWFwaScpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgICAgICAnQGNvbXBzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICAgICAgICdAaG9va3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXHJcbiAgICAgICAgICAgICdAY29uZmlnJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb25maWcnKSxcclxuICAgICAgICAgICAgJ0B0b29scyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdG9vbHMnKSxcclxuICAgICAgICAgICAgJ0BleGFtcGxlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzL2V4YW1wbGVzJyksXHJcbiAgICAgICAgICAgIFtwa2cubmFtZV06IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbWFpbi50cycpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG4iLCAie1xuICAgIFwibmFtZVwiOiBcImFudGQtdnVlLWRidGhvclwiLFxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICAgIFwicHJpdmF0ZVwiOiBmYWxzZSxcbiAgICBcInZlcnNpb25cIjogXCIxLjAuNDRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgXCJtYWluXCI6IFwiaW5kZXguanNcIixcbiAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICAgICAgXCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmJiBleGl0IDFcIixcbiAgICAgICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXG4gICAgICAgIFwiZG9jczpkZXZcIjogXCJ2aXRlcHJlc3MgZGV2IGRvY3NcIixcbiAgICAgICAgXCJkb2NzOmJ1aWxkXCI6IFwidml0ZXByZXNzIGJ1aWxkIGRvY3NcIixcbiAgICAgICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyBkb2NzXCIsXG4gICAgICAgIFwicHVzaFwiOiBcIm5wbSBwdWJsaXNoXCJcbiAgICB9LFxuICAgIFwiZmlsZXNcIjogW1xuICAgICAgICBcImRpc3RcIlxuICAgIF0sXG4gICAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxuICAgIFwiZXhwb3J0c1wiOiB7XG4gICAgICAgIFwiLlwiOiB7XG4gICAgICAgICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9saWIvaW5kZXguZXMuanNcIixcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9saWIvaW5kZXgudW1kLmpzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIuLypcIjogXCIuLypcIlxuICAgIH0sXG4gICAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWUtcHJvXCJcbiAgICBdLFxuICAgIFwiYXV0aG9yXCI6IFwiZGJ0aG9yXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgXCJyZWdpc3RyeVwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL1wiXG4gICAgfSxcbiAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIFwiQGFudC1kZXNpZ24vaWNvbnMtdnVlXCI6IFwiXjcuMC4xXCIsXG4gICAgICAgIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI6IFwiXjAuNC40XCIsXG4gICAgICAgIFwiQHR5cGVzL2JpZy5qc1wiOiBcIl42LjIuMlwiLFxuICAgICAgICBcIkB0eXBlcy9taW1lLXR5cGVzXCI6IFwiXjIuMS40XCIsXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTcuOFwiLFxuICAgICAgICBcIkB0eXBlcy9udW1lcmFsXCI6IFwiXjIuMC41XCIsXG4gICAgICAgIFwiQHR5cGVzL3BpbnlpblwiOiBcIl4yLjEwLjJcIixcbiAgICAgICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjE3XCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMi4wXCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl40LjEuMFwiLFxuICAgICAgICBcIkB2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtXCI6IFwiXjEuMS40XCIsXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCJ+NC4yLjZcIixcbiAgICAgICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNy44XCIsXG4gICAgICAgIFwiYmlnLmpzXCI6IFwiXjYuMi4yXCIsXG4gICAgICAgIFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXG4gICAgICAgIFwianMtZmlsZS1kb3dubG9hZGVyXCI6IFwiXjEuMS4yNVwiLFxuICAgICAgICBcIm1pbWVcIjogXCJeNC4wLjZcIixcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXG4gICAgICAgIFwicGF0aFwiOiBcIl4wLjEyLjdcIixcbiAgICAgICAgXCJwaW55aW5cIjogXCI0LjAuMC1hbHBoYS4yXCIsXG4gICAgICAgIFwicG9zdGNzc1wiOiBcIl44LjQuNDlcIixcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcbiAgICAgICAgXCJyaW1yYWZcIjogXCJeNi4wLjFcIixcbiAgICAgICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTVcIixcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNy4yXCIsXG4gICAgICAgIFwidW5wbHVnaW4tdnVlLW1hY3Jvc1wiOiBcIl4yLjEzLjZcIixcbiAgICAgICAgXCJ2aXRlXCI6IFwiXjUuNC4xMVwiLFxuICAgICAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMlwiOiBcIl4xLjMuMVwiLFxuICAgICAgICBcInZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qc1wiOiBcIl4zLjUuMlwiLFxuICAgICAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIjQuMC4wLWJldGEuMVwiLFxuICAgICAgICBcInZpdGUtcGx1Z2luLXJlbW92ZS1jb25zb2xlXCI6IFwiXjIuMi4wXCIsXG4gICAgICAgIFwidml0ZXByZXNzXCI6IFwiXjEuNS4wXCIsXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xM1wiLFxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjBcIixcbiAgICAgICAgXCJ2dWUtdHlwZXNcIjogXCJeNS4xLjNcIlxuICAgIH0sXG4gICAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgXCJAYW50LWRlc2lnbi9pY29ucy12dWVcIjogXCJeNy4wLjFcIixcbiAgICAgICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIjQueFwiLFxuICAgICAgICBcImJpZy5qc1wiOiBcIl42LjIuMlwiLFxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcbiAgICAgICAgXCJlcy10b29sa2l0XCI6IFwiXjEuMjcuMFwiLFxuICAgICAgICBcImpzLWZpbGUtZG93bmxvYWRlclwiOiBcIl4xLjEuMjVcIixcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXG4gICAgICAgIFwibnVtZXJhbFwiOiBcIl4yLjAuNlwiLFxuICAgICAgICBcInBpbnlpblwiOiBcIjQuMC4wLWFscGhhLjJcIixcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcbiAgICAgICAgXCJ2dWVcIjogXCJeMy41LjEyXCJcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLE9BQU8sU0FBUztBQUMvUixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUzs7O0FDSmhCO0FBQUEsRUFDSSxNQUFRO0FBQUEsRUFDUixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsSUFDUCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixPQUFTO0FBQUEs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
