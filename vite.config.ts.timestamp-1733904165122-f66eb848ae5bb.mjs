// vite.config.ts
import Vue from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vitejs+plugin-vue@5.2.0_vite@5.4.11_@types+node@20.17.8__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.0_vite@5.4.11_@types+node@20.17.8__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.8/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite-plugin-dts@4.0.0-beta.1_@types+node@20.17.8_rollup@4.27.4_typescript@5.7.2_vite@5.4.11_@types+node@20.17.8_/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@dbthor/ant-design-vue-pro",
  type: "module",
  private: false,
  version: "0.0.0",
  description: "",
  main: "index.js",
  scripts: {
    dev: "vite",
    test: 'echo "Error: no test specified" && exit 1',
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  files: [
    "dist"
  ],
  keywords: [],
  author: "dbthor",
  license: "ISC",
  publishConfig: {
    registry: "https://registry.npmjs.org/"
  },
  devDependencies: {
    "@ant-design/icons-vue": "^7.0.1",
    "@types/big.js": "^6.2.2",
    "@types/node": "^20.17.8",
    "@types/numeral": "^2.0.5",
    "@types/qs": "^6.9.17",
    "@vitejs/plugin-vue": "^5.2.0",
    "@vitejs/plugin-vue-jsx": "^4.1.0",
    "@vue-macros/define-render": "^1.6.2",
    "@vue-macros/reactivity-transform": "^1.1.3",
    "ant-design-vue": "~4.2.6",
    autoprefixer: "^10.4.20",
    axios: "^1.7.8",
    dayjs: "^1.11.13",
    numeral: "^2.0.6",
    path: "^0.12.7",
    postcss: "^8.4.49",
    qs: "^6.13.1",
    tailwindcss: "^3.4.15",
    typescript: "^5.7.2",
    "unplugin-vue-macros": "^2.13.5",
    vite: "^5.4.11",
    "vite-plugin-compression2": "^1.3.1",
    "vite-plugin-dts": "4.0.0-beta.1",
    vitepress: "^1.5.0",
    vue: "^3.5.13",
    "vue-router": "^4.5.0",
    "vue-types": "^5.1.3"
  },
  peerDependencies: {
    "ant-design-vue": "4.x",
    dayjs: "^1.11.13",
    numeral: "^2.0.6",
    qs: "^6.13.1",
    vue: "^3.5.12"
  },
  dependencies: {
    "big.js": "^6.2.2",
    "es-toolkit": "^1.27.0"
  }
};

// vite.config.ts
import VueMacros from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/unplugin-vue-macros@2.13.5_@vueuse+core@11.3.0_vue@3.5.13_typescript@5.7.2___esbuild@0.21.5_r_hncfpk7whcdlqzcuawpef2xgwq/node_modules/unplugin-vue-macros/dist/vite.js";
var __vite_injected_original_dirname = "D:\\project\\ant-design-vue-pro";
var vite_config_default = defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: vueJsx()
        // 如有需要
      }
    }),
    dts({
      outDir: "dist",
      staticImport: true,
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.ts")
    },
    rollupOptions: {
      plugins: [],
      external: ["vue", "ant-design-vue"],
      output: {
        globals: {
          vue: "Vue"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgVnVlTWFjcm9zKHtcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgdnVlOiBWdWUoKSxcclxuICAgICAgICAgICAgICAgIHZ1ZUpzeDogdnVlSnN4KCksIC8vIFx1NTk4Mlx1NjcwOVx1OTcwMFx1ODk4MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL21haW4udHMnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW10sXHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3Z1ZScsICdhbnQtZGVzaWduLXZ1ZSddLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgICAgICBwb3J0OiAxMzgwMCxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMTYuMTc3LjQxLjg5Ojg4ODgnLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvaG56L2FkbWluLWFwaScpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAc3JjJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgICAgICAnQGNvbXBzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXHJcbiAgICAgICAgICAgICdAaG9va3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXHJcbiAgICAgICAgICAgICdAY29uZmlnJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb25maWcnKSxcclxuICAgICAgICAgICAgJ0B0b29scyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdG9vbHMnKSxcclxuICAgICAgICAgICAgJ0BleGFtcGxlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzL2V4YW1wbGVzJyksXHJcbiAgICAgICAgICAgIFtwa2cubmFtZV06IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbWFpbi50cycpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG4iLCAie1xuICAgIFwibmFtZVwiOiBcIkBkYnRob3IvYW50LWRlc2lnbi12dWUtcHJvXCIsXG4gICAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gICAgXCJwcml2YXRlXCI6IGZhbHNlLFxuICAgIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgIFwibWFpblwiOiBcImluZGV4LmpzXCIsXG4gICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCIsXG4gICAgICAgIFwiZG9jczpkZXZcIjogXCJ2aXRlcHJlc3MgZGV2IGRvY3NcIixcbiAgICAgICAgXCJkb2NzOmJ1aWxkXCI6IFwidml0ZXByZXNzIGJ1aWxkIGRvY3NcIixcbiAgICAgICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyBkb2NzXCJcbiAgICB9LFxuICAgIFwiZmlsZXNcIjogW1xuICAgICAgICBcImRpc3RcIlxuICAgIF0sXG4gICAgXCJrZXl3b3Jkc1wiOiBbXSxcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxuICAgIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxuICAgIH0sXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxuICAgICAgICBcIkB0eXBlcy9iaWcuanNcIjogXCJeNi4yLjJcIixcbiAgICAgICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNy44XCIsXG4gICAgICAgIFwiQHR5cGVzL251bWVyYWxcIjogXCJeMi4wLjVcIixcbiAgICAgICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjE3XCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMi4wXCIsXG4gICAgICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl40LjEuMFwiLFxuICAgICAgICBcIkB2dWUtbWFjcm9zL2RlZmluZS1yZW5kZXJcIjogXCJeMS42LjJcIixcbiAgICAgICAgXCJAdnVlLW1hY3Jvcy9yZWFjdGl2aXR5LXRyYW5zZm9ybVwiOiBcIl4xLjEuM1wiLFxuICAgICAgICBcImFudC1kZXNpZ24tdnVlXCI6IFwifjQuMi42XCIsXG4gICAgICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcbiAgICAgICAgXCJheGlvc1wiOiBcIl4xLjcuOFwiLFxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXG4gICAgICAgIFwicGF0aFwiOiBcIl4wLjEyLjdcIixcbiAgICAgICAgXCJwb3N0Y3NzXCI6IFwiXjguNC40OVwiLFxuICAgICAgICBcInFzXCI6IFwiXjYuMTMuMVwiLFxuICAgICAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xNVwiLFxuICAgICAgICBcInR5cGVzY3JpcHRcIjogXCJeNS43LjJcIixcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI6IFwiXjIuMTMuNVwiLFxuICAgICAgICBcInZpdGVcIjogXCJeNS40LjExXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb24yXCI6IFwiXjEuMy4xXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiNC4wLjAtYmV0YS4xXCIsXG4gICAgICAgIFwidml0ZXByZXNzXCI6IFwiXjEuNS4wXCIsXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xM1wiLFxuICAgICAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC41LjBcIixcbiAgICAgICAgXCJ2dWUtdHlwZXNcIjogXCJeNS4xLjNcIlxuICAgIH0sXG4gICAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIjQueFwiLFxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXG4gICAgICAgIFwicXNcIjogXCJeNi4xMy4xXCIsXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xMlwiXG4gICAgfSxcbiAgICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIFwiYmlnLmpzXCI6IFwiXjYuMi4yXCIsXG4gICAgICAgIFwiZXMtdG9vbGtpdFwiOiBcIl4xLjI3LjBcIlxuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsT0FBTyxTQUFTO0FBQy9SLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTOzs7QUNKaEI7QUFBQSxFQUNJLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFNBQVc7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
