// vite.config.ts
import terser from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.39.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
import Vue from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vi_eeabd95a492deaec51c2e5a538d87d1b/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1._36255328a77de4738e99ae3a88d3efc9/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import ReactivityTransform from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/@vue-macros+reactivity-tran_830dd3fcadc67538243b09309dca3626/node_modules/@vue-macros/reactivity-transform/dist/vite.js";
import { resolve } from "path";
import { defineConfig } from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite@5.4.17_@types+node@20._05b8dbc186aa95bdc81d3f5561b57ff7/node_modules/vite/dist/node/index.js";
import { compression } from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite-plugin-compression2@1._643e30f2afe3ced8dc93d7931fd2940d/node_modules/vite-plugin-compression2/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite-plugin-css-injected-by_3523b0f187efb153d7bd57b0447c31f0/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import dts from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite-plugin-dts@4.5.3_@type_1b57996d751b79f630a9ebab3a271aa7/node_modules/vite-plugin-dts/dist/index.mjs";
import removeConsole from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite-plugin-remove-console@2.2.0/node_modules/vite-plugin-remove-console/dist/index.mjs";

// package.json
var package_default = {
  name: "antd-vue-dbthor",
  homepage: "https://www.dbice.cn/antd-vue-dbthor/docs/",
  type: "module",
  private: false,
  version: "1.0.131",
  description: "",
  repository: {
    type: "git",
    url: "https://gitee.com/db-thor/antd-vue-dbthor.git"
  },
  main: "index.js",
  scripts: {
    dev: "cross-env NODE_ENV=development vite",
    "dev:preview": "cross-env NODE_ENV=preview vite",
    test: 'echo "Error: no test specified" && exit 1',
    build: "tsc && vite build",
    "docs:dev": "cross-env NODE_ENV=development vitepress dev docs",
    "docs:build": "cross-env NODE_ENV=production vitepress build docs",
    push: "npm publish",
    "push:scet": "npm publish --registry https://dev.scet.com.cn/verdaccio/"
  },
  files: [
    "dist"
  ],
  types: "./dist/types/src/main.d.ts",
  exports: {
    ".": {
      import: "./dist/lib/index.es.js",
      require: "./dist/lib/index.umd.js",
      types: "./dist/types/src/main.d.ts",
      default: "./dist/lib/index.umd.js"
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
    "@vue/compiler-sfc": "^3.5.13",
    "@vue/runtime-core": "^3.5.13",
    "@vueuse/core": "^13.1.0",
    "ant-design-vue": "~4.2.6",
    autoprefixer: "^10.4.20",
    axios: "^1.7.8",
    "big.js": "^6.2.2",
    "cross-env": "^7.0.3",
    dayjs: "^1.11.13",
    "es-toolkit": "^1.27.0",
    "js-file-downloader": "^1.1.25",
    mime: "^4.0.6",
    numeral: "^2.0.6",
    path: "^0.12.7",
    "pinyin-pro": "^3.26.0",
    postcss: "^8.4.49",
    qs: "^6.13.1",
    "resize-observer-polyfill": "^1.5.1",
    rimraf: "^6.0.1",
    "rollup-plugin-visualizer": "^5.14.0",
    "sass-embedded": "^1.87.0",
    tailwindcss: "^3.4.15",
    typescript: "^5.7.2",
    "unplugin-vue-macros": "^2.13.8",
    vite: "^5.4.11",
    "vite-plugin-compression2": "^1.3.1",
    "vite-plugin-css-injected-by-js": "^3.5.2",
    "vite-plugin-dts": "4.5.3",
    "vite-plugin-remove-console": "^2.2.0",
    vitepress: "^1.5.0",
    vue: "^3.5.13",
    "vue-router": "^4.5.0"
  },
  peerDependencies: {
    "@ant-design/icons-vue": "^7.0.1",
    "@vueuse/core": "^13.1.0",
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
    tailwindcss: "^3.4.15",
    vue: "^3.5.13"
  }
};

// utils/env.ts
import { loadEnv } from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/vite@5.4.17_@types+node@20._05b8dbc186aa95bdc81d3f5561b57ff7/node_modules/vite/dist/node/index.js";
var envFilter = ["VITE_", "GL_"];
var envResolve = (mode = process.env.NODE_ENV, filter = envFilter) => {
  return loadEnv(mode, process.cwd(), filter);
};

// script/generated-exports.ts
import { camelCase, upperFirst } from "file:///D:/project/antd-vue-dbthor/node_modules/.pnpm/es-toolkit@1.34.1/node_modules/es-toolkit/dist/index.mjs";
import { closeSync, openSync, readdirSync, statSync, writeSync } from "fs";
import { join } from "path";
var generated_exports_default = async (dirPath, inputFilePath, exportsPathPrefix = ".") => {
  try {
    let fileContent = "";
    const dirs = readdirSync(dirPath)?.filter?.(
      (item) => statSync(join(dirPath, item))?.isDirectory()
    );
    dirs?.forEach?.((dirname) => {
      fileContent += `
                export * from '${exportsPathPrefix}/${dirname}';
                export { default as ${upperFirst(
        camelCase(dirname)
      )} } from '${exportsPathPrefix}/${dirname}';
            `;
    });
    fileContent = fileContent.replace(/^\s+/gm, "");
    const file = openSync(inputFilePath, "w");
    writeSync(file, fileContent);
    closeSync(file);
    Promise.resolve();
  } catch (error) {
    Promise.reject();
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "D:\\project\\antd-vue-dbthor";
await generated_exports_default(
  resolve(__vite_injected_original_dirname, "./src/components"),
  resolve(__vite_injected_original_dirname, "./src/components/components.ts"),
  "@comps"
);
var generateGlobals = (arr) => {
  const obj = {};
  arr?.forEach?.((key) => {
    const val = key.replace(/^@/, "").split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    obj[`${key}`] = val;
  });
  return obj;
};
var external = Object.keys(package_default.peerDependencies);
var globals = generateGlobals(external);
var proxy = {
  "/api": {
    target: "https://www.dbice.cn",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, "/admin-server/api/v1")
  },
  "/admin-api": {
    target: "https://iot.scet.com.cn",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/admin-api/, "/micro-dev-api")
  },
  "/test-api": {
    target: "http://localhost:30001",
    changeOrigin: false,
    rewrite: (path) => path.replace(/^\/test-api/, "/api/v1")
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
  "@script": resolve(__vite_injected_original_dirname, "./script"),
  "@/": resolve(__vite_injected_original_dirname, "./"),
  [package_default.name]: resolve(
    __vite_injected_original_dirname,
    process.env.NODE_ENV === "production" ? "./dist/lib/index.es.js" : "./src/main.ts"
  )
};
var define = {
  __PKG_NAME__: JSON.stringify(package_default.name)
};
var { VITE_DOCS_BASE_URL } = envResolve();
var vite_config_default = defineConfig({
  mode: process.env.NODE_ENV,
  envDir: process.cwd(),
  plugins: [
    Vue(),
    vueJsx(),
    dts({
      outDir: "dist/types",
      staticImport: true,
      insertTypesEntry: true,
      exclude: ["node_modules"]
    }),
    compression(),
    cssInjectedByJsPlugin({
      topExecutionPriority: true
    }),
    removeConsole({
      includes: ["log"]
    }),
    ReactivityTransform({
      version: 3
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/main.ts"),
      name: package_default.name,
      fileName: (format) => {
        return `lib/index.${format}.js`;
      }
    },
    rollupOptions: {
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log"]
          },
          format: {
            comments: false
          }
        })
      ],
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
  },
  define
});
export {
  alias,
  vite_config_default as default,
  define,
  external,
  generateGlobals,
  globals,
  proxy
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIiwgInV0aWxzL2Vudi50cyIsICJzY3JpcHQvZ2VuZXJhdGVkLWV4cG9ydHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudGQtdnVlLWRidGhvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnRkLXZ1ZS1kYnRob3JcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvYW50ZC12dWUtZGJ0aG9yL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcbmltcG9ydCBSZWFjdGl2aXR5VHJhbnNmb3JtIGZyb20gJ0B2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtL3ZpdGUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFNlcnZlck9wdGlvbnMgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBjb21wcmVzc2lvbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMidcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgcmVtb3ZlQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZSdcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IHsgZW52UmVzb2x2ZSB9IGZyb20gJy4vdXRpbHMvZW52J1xyXG5pbXBvcnQgd3JpdGVFeHBvcnQgZnJvbSAnLi9zY3JpcHQvZ2VuZXJhdGVkLWV4cG9ydHMnXHJcblxyXG5hd2FpdCB3cml0ZUV4cG9ydChcclxuICAgIHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMudHMnKSxcclxuICAgICdAY29tcHMnXHJcbilcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlR2xvYmFscyA9IChhcnI6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSB7fVxyXG4gICAgYXJyPy5mb3JFYWNoPy4oKGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGtleVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXkAvLCAnJylcclxuICAgICAgICAgICAgLnNwbGl0KC9bLV9dLykgLy8gXHU2MzA5XHU3MTY3IGAtYCBcdTYyMTYgYF9gIFx1NTIwNlx1NTI3MlxyXG4gICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkgLy8gXHU1QzA2XHU2QkNGXHU5MEU4XHU1MjA2XHU5OTk2XHU1QjU3XHU2QkNEXHU1OTI3XHU1MTk5XHJcbiAgICAgICAgICAgIC5qb2luKCcnKVxyXG5cclxuICAgICAgICBvYmpbYCR7a2V5fWBdID0gdmFsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9ialxyXG59XHJcbmV4cG9ydCBjb25zdCBleHRlcm5hbCA9IE9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKVxyXG5leHBvcnQgY29uc3QgZ2xvYmFscyA9IGdlbmVyYXRlR2xvYmFscyhleHRlcm5hbClcclxuXHJcbmV4cG9ydCBjb25zdCBwcm94eTogU2VydmVyT3B0aW9uc1sncHJveHknXSA9IHtcclxuICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vd3d3LmRiaWNlLmNuJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hZG1pbi1zZXJ2ZXIvYXBpL3YxJyksXHJcbiAgICB9LFxyXG4gICAgJy9hZG1pbi1hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9pb3Quc2NldC5jb20uY24nLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hZG1pbi1hcGkvLCAnL21pY3JvLWRldi1hcGknKSxcclxuICAgIH0sXHJcbiAgICAnL3Rlc3QtYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMDEnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogZmFsc2UsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGg6IHN0cmluZykgPT4gcGF0aC5yZXBsYWNlKC9eXFwvdGVzdC1hcGkvLCAnL2FwaS92MScpLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgY29uc3QgYWxpYXMgPSB7XHJcbiAgICAnQHNyYyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICdAY29tcHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuICAgICdAaG9va3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXHJcbiAgICAnQGNvbmZpZyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29uZmlnJyksXHJcbiAgICAnQHRvb2xzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy90b29scycpLFxyXG4gICAgJ0BleGFtcGxlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzL2V4YW1wbGVzJyksXHJcbiAgICAnQGRvY3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vZG9jcycpLFxyXG4gICAgJ0BzY3JpcHQnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyaXB0JyksXHJcbiAgICAnQC8nOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksXHJcbiAgICBbcGtnLm5hbWVdOiByZXNvbHZlKFxyXG4gICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy4vZGlzdC9saWIvaW5kZXguZXMuanMnIDogJy4vc3JjL21haW4udHMnXHJcbiAgICApLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVmaW5lID0ge1xyXG4gICAgX19QS0dfTkFNRV9fOiBKU09OLnN0cmluZ2lmeShwa2cubmFtZSksXHJcbn1cclxuXHJcbmNvbnN0IHsgVklURV9ET0NTX0JBU0VfVVJMIH0gPSBlbnZSZXNvbHZlKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcclxuICAgIGVudkRpcjogcHJvY2Vzcy5jd2QoKSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBWdWUoKSxcclxuICAgICAgICB2dWVKc3goKSxcclxuICAgICAgICBkdHMoe1xyXG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJyxcclxuICAgICAgICAgICAgc3RhdGljSW1wb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgICAgICAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcyddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbXByZXNzaW9uKCksXHJcbiAgICAgICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHtcclxuICAgICAgICAgICAgdG9wRXhlY3V0aW9uUHJpb3JpdHk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcmVtb3ZlQ29uc29sZSh7XHJcbiAgICAgICAgICAgIGluY2x1ZGVzOiBbJ2xvZyddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFJlYWN0aXZpdHlUcmFuc2Zvcm0oe1xyXG4gICAgICAgICAgICB2ZXJzaW9uOiAzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9tYWluLnRzJyksXHJcbiAgICAgICAgICAgIG5hbWU6IHBrZy5uYW1lLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBsaWIvaW5kZXguJHtmb3JtYXR9LmpzYFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgdGVyc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBleHRlcm5hbCxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFscyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcclxuICAgICAgICBwb3J0OiAxMzgwMCxcclxuICAgICAgICBwcm94eSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXMsXHJcbiAgICB9LFxyXG4gICAgZGVmaW5lLFxyXG59KVxyXG4iLCAie1xyXG4gICAgXCJuYW1lXCI6IFwiYW50ZC12dWUtZGJ0aG9yXCIsXHJcbiAgICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly93d3cuZGJpY2UuY24vYW50ZC12dWUtZGJ0aG9yL2RvY3MvXCIsXHJcbiAgICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICAgIFwicHJpdmF0ZVwiOiBmYWxzZSxcclxuICAgIFwidmVyc2lvblwiOiBcIjEuMC4xMzFcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXHJcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGVlLmNvbS9kYi10aG9yL2FudGQtdnVlLWRidGhvci5naXRcIlxyXG4gICAgfSxcclxuICAgIFwibWFpblwiOiBcImluZGV4LmpzXCIsXHJcbiAgICBcInNjcmlwdHNcIjoge1xyXG4gICAgICAgIFwiZGV2XCI6IFwiY3Jvc3MtZW52IE5PREVfRU5WPWRldmVsb3BtZW50IHZpdGVcIixcclxuICAgICAgICBcImRldjpwcmV2aWV3XCI6IFwiY3Jvc3MtZW52IE5PREVfRU5WPXByZXZpZXcgdml0ZVwiLFxyXG4gICAgICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIkVycm9yOiBubyB0ZXN0IHNwZWNpZmllZFxcXCIgJiYgZXhpdCAxXCIsXHJcbiAgICAgICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICAgICAgXCJkb2NzOmRldlwiOiBcImNyb3NzLWVudiBOT0RFX0VOVj1kZXZlbG9wbWVudCB2aXRlcHJlc3MgZGV2IGRvY3NcIixcclxuICAgICAgICBcImRvY3M6YnVpbGRcIjogXCJjcm9zcy1lbnYgTk9ERV9FTlY9cHJvZHVjdGlvbiB2aXRlcHJlc3MgYnVpbGQgZG9jc1wiLFxyXG4gICAgICAgIFwicHVzaFwiOiBcIm5wbSBwdWJsaXNoXCIsXHJcbiAgICAgICAgXCJwdXNoOnNjZXRcIjogXCJucG0gcHVibGlzaCAtLXJlZ2lzdHJ5IGh0dHBzOi8vZGV2LnNjZXQuY29tLmNuL3ZlcmRhY2Npby9cIlxyXG4gICAgfSxcclxuICAgIFwiZmlsZXNcIjogW1xyXG4gICAgICAgIFwiZGlzdFwiXHJcbiAgICBdLFxyXG4gICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC90eXBlcy9zcmMvbWFpbi5kLnRzXCIsXHJcbiAgICBcImV4cG9ydHNcIjoge1xyXG4gICAgICAgIFwiLlwiOiB7XHJcbiAgICAgICAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2xpYi9pbmRleC5lcy5qc1wiLFxyXG4gICAgICAgICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvbGliL2luZGV4LnVtZC5qc1wiLFxyXG4gICAgICAgICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3R5cGVzL3NyYy9tYWluLmQudHNcIixcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiLi9kaXN0L2xpYi9pbmRleC51bWQuanNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuLypcIjogXCIuLypcIlxyXG4gICAgfSxcclxuICAgIFwia2V5d29yZHNcIjogW1xyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWUtcHJvXCJcclxuICAgIF0sXHJcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxyXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgICBcInB1Ymxpc2hDb25maWdcIjoge1xyXG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI6IFwiXjAuNC40XCIsXHJcbiAgICAgICAgXCJAdHlwZXMvYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvbWltZS10eXBlc1wiOiBcIl4yLjEuNFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTcuOFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL251bWVyYWxcIjogXCJeMi4wLjVcIixcclxuICAgICAgICBcIkB0eXBlcy9waW55aW5cIjogXCJeMi4xMC4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjE3XCIsXHJcbiAgICAgICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4yLjBcIixcclxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4xLjBcIixcclxuICAgICAgICBcIkB2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtXCI6IFwiXjEuMS40XCIsXHJcbiAgICAgICAgXCJAdnVlL2NvbXBpbGVyLXNmY1wiOiBcIl4zLjUuMTNcIixcclxuICAgICAgICBcIkB2dWUvcnVudGltZS1jb3JlXCI6IFwiXjMuNS4xM1wiLFxyXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEzLjEuMFwiLFxyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCJ+NC4yLjZcIixcclxuICAgICAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjIwXCIsXHJcbiAgICAgICAgXCJheGlvc1wiOiBcIl4xLjcuOFwiLFxyXG4gICAgICAgIFwiYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJjcm9zcy1lbnZcIjogXCJeNy4wLjNcIixcclxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcclxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXHJcbiAgICAgICAgXCJqcy1maWxlLWRvd25sb2FkZXJcIjogXCJeMS4xLjI1XCIsXHJcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXHJcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXHJcbiAgICAgICAgXCJwYXRoXCI6IFwiXjAuMTIuN1wiLFxyXG4gICAgICAgIFwicGlueWluLXByb1wiOiBcIl4zLjI2LjBcIixcclxuICAgICAgICBcInBvc3Rjc3NcIjogXCJeOC40LjQ5XCIsXHJcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcclxuICAgICAgICBcInJlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbFwiOiBcIl4xLjUuMVwiLFxyXG4gICAgICAgIFwicmltcmFmXCI6IFwiXjYuMC4xXCIsXHJcbiAgICAgICAgXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjogXCJeNS4xNC4wXCIsXHJcbiAgICAgICAgXCJzYXNzLWVtYmVkZGVkXCI6IFwiXjEuODcuMFwiLFxyXG4gICAgICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy40LjE1XCIsXHJcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNy4yXCIsXHJcbiAgICAgICAgXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI6IFwiXjIuMTMuOFwiLFxyXG4gICAgICAgIFwidml0ZVwiOiBcIl41LjQuMTFcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMlwiOiBcIl4xLjMuMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI6IFwiXjMuNS4yXCIsXHJcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCI0LjUuM1wiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGVcIjogXCJeMi4yLjBcIixcclxuICAgICAgICBcInZpdGVwcmVzc1wiOiBcIl4xLjUuMFwiLFxyXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xM1wiLFxyXG4gICAgICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjUuMFwiXHJcbiAgICB9LFxyXG4gICAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEzLjEuMFwiLFxyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIjogXCI0LnhcIixcclxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNy44XCIsXHJcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcclxuICAgICAgICBcImRheWpzXCI6IFwiXjEuMTEuMTNcIixcclxuICAgICAgICBcImVzLXRvb2xraXRcIjogXCJeMS4yNy4wXCIsXHJcbiAgICAgICAgXCJqcy1maWxlLWRvd25sb2FkZXJcIjogXCJeMS4xLjI1XCIsXHJcbiAgICAgICAgXCJtaW1lXCI6IFwiXjQuMC42XCIsXHJcbiAgICAgICAgXCJudW1lcmFsXCI6IFwiXjIuMC42XCIsXHJcbiAgICAgICAgXCJwaW55aW4tcHJvXCI6IFwiXjMuMjYuMFwiLFxyXG4gICAgICAgIFwicXNcIjogXCJeNi4xMy4xXCIsXHJcbiAgICAgICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTVcIixcclxuICAgICAgICBcInZ1ZVwiOiBcIl4zLjUuMTNcIlxyXG4gICAgfVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnRkLXZ1ZS1kYnRob3JcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50ZC12dWUtZGJ0aG9yXFxcXHV0aWxzXFxcXGVudi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9hbnRkLXZ1ZS1kYnRob3IvdXRpbHMvZW52LnRzXCI7aW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmNvbnN0IGVudkZpbHRlciA9IFsnVklURV8nLCAnR0xfJ11cclxuZXhwb3J0IGNvbnN0IGVudlJlc29sdmUgPSAoXHJcbiAgICBtb2RlOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViBhcyBzdHJpbmcsXHJcbiAgICBmaWx0ZXI6IHN0cmluZyB8IHN0cmluZ1tdID0gZW52RmlsdGVyXHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgZmlsdGVyKVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnRkLXZ1ZS1kYnRob3JcXFxcc2NyaXB0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudGQtdnVlLWRidGhvclxcXFxzY3JpcHRcXFxcZ2VuZXJhdGVkLWV4cG9ydHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvYW50ZC12dWUtZGJ0aG9yL3NjcmlwdC9nZW5lcmF0ZWQtZXhwb3J0cy50c1wiOy8vIENvcHlyaWdodCAoYykgMjAyNSBEQi1UaG9yPGRiOTEyMzU2ODQ3QGdtYWlsLmNvbT5cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbmltcG9ydCB7IGNhbWVsQ2FzZSwgdXBwZXJGaXJzdCB9IGZyb20gJ2VzLXRvb2xraXQnXHJcbmltcG9ydCB7IGNsb3NlU3luYywgb3BlblN5bmMsIHJlYWRkaXJTeW5jLCBzdGF0U3luYywgd3JpdGVTeW5jIH0gZnJvbSAnZnMnXHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZGlyUGF0aDogc3RyaW5nLCBpbnB1dEZpbGVQYXRoOiBzdHJpbmcsIGV4cG9ydHNQYXRoUHJlZml4OiBzdHJpbmcgPSAnLicpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGZpbGVDb250ZW50ID0gJydcclxuICAgICAgICBjb25zdCBkaXJzID0gcmVhZGRpclN5bmMoZGlyUGF0aCk/LmZpbHRlcj8uKChpdGVtKSA9PlxyXG4gICAgICAgICAgICBzdGF0U3luYyhqb2luKGRpclBhdGgsIGl0ZW0pKT8uaXNEaXJlY3RvcnkoKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgZGlycz8uZm9yRWFjaD8uKChkaXJuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGZpbGVDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgICAgIGV4cG9ydCAqIGZyb20gJyR7ZXhwb3J0c1BhdGhQcmVmaXh9LyR7ZGlybmFtZX0nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IHsgZGVmYXVsdCBhcyAke3VwcGVyRmlyc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZWxDYXNlKGRpcm5hbWUpXHJcbiAgICAgICAgICAgICAgICApfSB9IGZyb20gJyR7ZXhwb3J0c1BhdGhQcmVmaXh9LyR7ZGlybmFtZX0nO1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudC5yZXBsYWNlKC9eXFxzKy9nbSwgJycpXHJcbiAgICAgICAgY29uc3QgZmlsZSA9IG9wZW5TeW5jKGlucHV0RmlsZVBhdGgsICd3JylcclxuICAgICAgICB3cml0ZVN5bmMoZmlsZSwgZmlsZUNvbnRlbnQpXHJcbiAgICAgICAgY2xvc2VTeW5jKGZpbGUpXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoKVxyXG4gICAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsT0FBTyxZQUFZO0FBQ3pSLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyx5QkFBeUI7QUFDaEMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW1DO0FBQzVDLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjs7O0FDVDFCO0FBQUEsRUFDSSxNQUFRO0FBQUEsRUFDUixVQUFZO0FBQUEsRUFDWixNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixZQUFjO0FBQUEsSUFDVixNQUFRO0FBQUEsSUFDUixLQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1AsS0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osY0FBYztBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDTDtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQVM7QUFBQSxFQUNULFNBQVc7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNELFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxNQUNYLE9BQVM7QUFBQSxNQUNULFNBQVc7QUFBQSxJQUNmO0FBQUEsSUFDQSxPQUFPO0FBQUEsRUFDWDtB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
