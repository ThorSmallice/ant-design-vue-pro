// docs/.vitepress/config.ts
import { defineConfig as defineConfig5 } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@20.17.8_async-validator@4.2.5_axios_pj7rsyrjs6rovq2y2eeosd6j3u/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/base.ts
import vueJsx2 from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.0_vite@5.4.11_@types+node@20.17.8_terser@5.37.0__vue@3.5.13_typescript@5.7.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig as defineConfig3 } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@20.17.8_async-validator@4.2.5_axios_pj7rsyrjs6rovq2y2eeosd6j3u/node_modules/vitepress/dist/node/index.js";
import ReactivityTransform2 from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@vue-macros+reactivity-transform@1.1.4_rollup@4.27.4_vue@3.5.13_typescript@5.7.2_/node_modules/@vue-macros/reactivity-transform/dist/vite.js";
import terser2 from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.27.4/node_modules/@rollup/plugin-terser/dist/es/index.js";

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
  version: "1.0.69",
  description: "",
  main: "index.js",
  scripts: {
    dev: "cross-env NODE_ENV=development vite",
    test: 'echo "Error: no test specified" && exit 1',
    build: "tsc && vite build",
    "docs:dev": "cross-env NODE_ENV=development vitepress dev docs",
    "docs:build": "cross-env NODE_ENV=production vitepress build docs",
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
    tailwindcss: "^3.4.15",
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
var external = Object.keys(package_default.peerDependencies);
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
  "@/": resolve(__vite_injected_original_dirname, "./"),
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

// utils/env.ts
import { loadEnv } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.8_terser@5.37.0/node_modules/vite/dist/node/index.js";
var envFilter = ["VITE_", "GL_"];
var envResolve = (mode = process.env.NODE_ENV, filter = envFilter) => {
  return loadEnv(mode, process.cwd(), filter);
};

// docs/.vitepress/zh.ts
import { createRequire } from "module";
import { defineConfig as defineConfig2 } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@20.17.8_async-validator@4.2.5_axios_pj7rsyrjs6rovq2y2eeosd6j3u/node_modules/vitepress/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/project/ant-design-vue-pro/docs/.vitepress/zh.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var pkg = require2("../../package.json");
var zh = defineConfig2({
  lang: "zh-Hans",
  description: "\u7531 Vite \u548C Vue \u9A71\u52A8\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/documents/": {
        base: "/documents/",
        items: sidebarDocuments()
      },
      "/components/": {
        base: "/components/",
        items: sidebarComponents()
      }
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      message: "\u57FA\u4E8E MIT \u8BB8\u53EF\u53D1\u5E03",
      copyright: `\u7248\u6743\u6240\u6709 \xA9 2019-${(/* @__PURE__ */ new Date()).getFullYear()} DB-Thor`
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F"
  }
});
function nav() {
  return [
    { text: "\u6307\u5357", link: "/documents/quickstart", activeMatch: "/documents" },
    { text: "\u7EC4\u4EF6", link: "/components/Table", activeMatch: "/components" },
    {
      text: pkg.version,
      items: [{ text: "", link: "" }]
    }
  ];
}
function sidebarDocuments() {
  return [
    {
      text: "\u7B80\u4ECB",
      collapsed: true,
      items: [
        {
          text: "\u5FEB\u901F\u5F00\u59CB",
          link: "quickstart"
        }
      ]
    }
  ];
}
function sidebarComponents() {
  return [
    {
      text: "\u6570\u636E\u5C55\u793A",
      items: [
        {
          text: "Table",
          link: "Table"
        }
        // {
        //     text: 'Modal',
        //     link: 'Modal',
        // },
      ]
    }
  ];
}
var search = {
  root: {
    placeholder: "\u641C\u7D22\u6587\u6863",
    translations: {
      button: {
        buttonText: "\u641C\u7D22\u6587\u6863",
        buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          cancelButtonText: "\u53D6\u6D88",
          cancelButtonAriaLabel: "\u53D6\u6D88"
        },
        startScreen: {
          recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
          noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
          saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
          removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
          favoriteSearchesTitle: "\u6536\u85CF",
          removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
        },
        errorScreen: {
          titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
          helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
        },
        footer: {
          selectText: "\u9009\u62E9",
          navigateText: "\u5207\u6362",
          closeText: "\u5173\u95ED",
          searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
        },
        noResultsScreen: {
          noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
          suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
          reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
          reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
        }
      }
    }
  }
};

// docs/.vitepress/base.ts
var { VITE_DOCS_BASE_URL } = envResolve();
var base = defineConfig3({
  title: "Antd-Vue-Dbthor",
  description: "Antd\u589E\u5F3A\u7248",
  srcDir: "md",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  base: VITE_DOCS_BASE_URL,
  rewrites: {
    "zh/:rest*": ":rest*"
  },
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: `${VITE_DOCS_BASE_URL}images/logo.svg` }
    ]
  ],
  vite: {
    plugins: [vueJsx2(), ReactivityTransform2()],
    build: {
      rollupOptions: {
        plugins: [terser2()],
        external,
        output: {
          globals
        }
      }
    },
    resolve: {
      alias
    },
    server: {
      host: "0.0.0.0",
      port: 13801,
      proxy
    }
  },
  themeConfig: {
    logo: { src: "/images/logo.svg", width: 24, height: 24 },
    socialLinks: [
      { icon: "github", link: "https://github.com/ThorSmallice/ant-design-pro-vue" }
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          ...search
        }
      }
    }
  }
});

// docs/.vitepress/en.ts
import { createRequire as createRequire2 } from "module";
import { defineConfig as defineConfig4 } from "file:///D:/project/ant-design-vue-pro/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.15.0_@types+node@20.17.8_async-validator@4.2.5_axios_pj7rsyrjs6rovq2y2eeosd6j3u/node_modules/vitepress/dist/node/index.js";
var __vite_injected_original_import_meta_url2 = "file:///D:/project/ant-design-vue-pro/docs/.vitepress/en.ts";
var require3 = createRequire2(__vite_injected_original_import_meta_url2);
var pkg2 = require3("../../package.json");
var en = defineConfig4({
  lang: "en-US",
  description: "\u7531 Vite \u548C Vue \u9A71\u52A8\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668",
  themeConfig: {
    nav: nav2(),
    sidebar: {
      "/en/documents/": {
        base: "/en/documents/",
        items: sidebarDocuments2()
      },
      "/en/components/": {
        base: "/en/components/",
        items: sidebarComponents2()
      }
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright \xA9 2019-${(/* @__PURE__ */ new Date()).getFullYear()} DB-Thor`
    }
  }
});
function nav2() {
  return [
    { text: "documents", link: "/en/documents/install", activeMatch: "/en/documents" },
    { text: "components", link: "/en/components/Table", activeMatch: "/en/components" }
    // {
    //     text: pkg.version,
    //     items: [],
    // },
  ];
}
function sidebarDocuments2() {
  return [
    {
      text: "profile",
      collapsed: true,
      items: [
        {
          text: "install",
          link: "install"
        }
      ]
    }
  ];
}
function sidebarComponents2() {
  return [
    {
      text: "data display",
      items: [
        {
          text: "Table",
          link: "Table"
        },
        {
          text: "Modal",
          link: "Modal"
        }
      ]
    }
  ];
}

// docs/.vitepress/config.ts
var config_default = defineConfig5({
  ...base,
  locales: {
    root: { label: "\u7B80\u4F53\u4E2D\u6587", ...zh },
    en: { label: "English", ...en }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvYmFzZS50cyIsICJ2aXRlLmNvbmZpZy50cyIsICJwYWNrYWdlLmpzb24iLCAidXRpbHMvZW52LnRzIiwgImRvY3MvLnZpdGVwcmVzcy96aC50cyIsICJkb2NzLy52aXRlcHJlc3MvZW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvYW50LWRlc2lnbi12dWUtcHJvL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJ1xyXG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgnXHJcbmltcG9ydCB7IGVuIH0gZnJvbSAnLi9lbidcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIC4uLmJhc2UsXHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgcm9vdDogeyBsYWJlbDogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NycsIC4uLnpoIH0sXHJcbiAgICAgICAgZW46IHsgbGFiZWw6ICdFbmdsaXNoJywgLi4uZW4gfSxcclxuICAgIH0sXHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmFzZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9hbnQtZGVzaWduLXZ1ZS1wcm8vZG9jcy8udml0ZXByZXNzL2Jhc2UudHNcIjtpbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcblxyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB3aXRoQmFzZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IFJlYWN0aXZpdHlUcmFuc2Zvcm0gZnJvbSAnQHZ1ZS1tYWNyb3MvcmVhY3Rpdml0eS10cmFuc2Zvcm0vdml0ZSdcclxuaW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInXHJcbmltcG9ydCB7IGV4dGVybmFsLCBnbG9iYWxzLCBwcm94eSwgYWxpYXMgfSBmcm9tICcuLi8uLi92aXRlLmNvbmZpZydcclxuaW1wb3J0IHsgZW52UmVzb2x2ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2VudidcclxuaW1wb3J0IHsgc2VhcmNoIGFzIHpoU2VhcmNoIH0gZnJvbSAnLi96aCdcclxuXHJcbmNvbnN0IHsgVklURV9ET0NTX0JBU0VfVVJMIH0gPSBlbnZSZXNvbHZlKClcclxuZXhwb3J0IGNvbnN0IGJhc2UgPSBkZWZpbmVDb25maWcoe1xyXG4gICAgdGl0bGU6ICdBbnRkLVZ1ZS1EYnRob3InLFxyXG4gICAgZGVzY3JpcHRpb246ICdBbnRkXHU1ODlFXHU1RjNBXHU3MjQ4JyxcclxuICAgIHNyY0RpcjogJ21kJyxcclxuICAgIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gICAgbWV0YUNodW5rOiB0cnVlLFxyXG4gICAgYmFzZTogVklURV9ET0NTX0JBU0VfVVJMLFxyXG4gICAgcmV3cml0ZXM6IHtcclxuICAgICAgICAnemgvOnJlc3QqJzogJzpyZXN0KicsXHJcbiAgICB9LFxyXG4gICAgaGVhZDogW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ2xpbmsnLFxyXG4gICAgICAgICAgICB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2Uvc3ZnK3htbCcsIGhyZWY6IGAke1ZJVEVfRE9DU19CQVNFX1VSTH1pbWFnZXMvbG9nby5zdmdgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIF0sXHJcbiAgICB2aXRlOiB7XHJcbiAgICAgICAgcGx1Z2luczogW3Z1ZUpzeCgpLCBSZWFjdGl2aXR5VHJhbnNmb3JtKCldLFxyXG4gICAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFt0ZXJzZXIoKV0sXHJcbiAgICAgICAgICAgICAgICBleHRlcm5hbCxcclxuXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgYWxpYXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICAgICAgICBwb3J0OiAxMzgwMSxcclxuXHJcbiAgICAgICAgICAgIHByb3h5LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAgICAgbG9nbzogeyBzcmM6ICcvaW1hZ2VzL2xvZ28uc3ZnJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH0sXHJcbiAgICAgICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UaG9yU21hbGxpY2UvYW50LWRlc2lnbi1wcm8tdnVlJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uemhTZWFyY2gsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9hbnQtZGVzaWduLXZ1ZS1wcm8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXHJcbmltcG9ydCBSZWFjdGl2aXR5VHJhbnNmb3JtIGZyb20gJ0B2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtL3ZpdGUnXHJcbmltcG9ydCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzJ1xyXG5pbXBvcnQgcmVtb3ZlQ29uc29sZSBmcm9tICd2aXRlLXBsdWdpbi1yZW1vdmUtY29uc29sZSdcclxuaW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInXHJcbmltcG9ydCB7IGNvbXByZXNzaW9uIH0gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24yJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlR2xvYmFscyA9IChhcnI6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSB7fVxyXG4gICAgYXJyPy5mb3JFYWNoPy4oKGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGtleVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXkAvLCAnJylcclxuICAgICAgICAgICAgLnNwbGl0KC9bLV9dLykgLy8gXHU2MzA5XHU3MTY3IGAtYCBcdTYyMTYgYF9gIFx1NTIwNlx1NTI3MlxyXG4gICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkgLy8gXHU1QzA2XHU2QkNGXHU5MEU4XHU1MjA2XHU5OTk2XHU1QjU3XHU2QkNEXHU1OTI3XHU1MTk5XHJcbiAgICAgICAgICAgIC5qb2luKCcnKVxyXG5cclxuICAgICAgICBvYmpbYCR7a2V5fWBdID0gdmFsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9ialxyXG59XHJcbmV4cG9ydCBjb25zdCBleHRlcm5hbCA9IE9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKVxyXG5leHBvcnQgY29uc3QgZ2xvYmFscyA9IGdlbmVyYXRlR2xvYmFscyhleHRlcm5hbClcclxuXHJcbmV4cG9ydCBjb25zdCBwcm94eSA9IHtcclxuICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMTYuMTc3LjQxLjg5Ojg4ODgnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2huei9hZG1pbi1hcGknKSxcclxuICAgIH0sXHJcbiAgICAnL2FkbWluLWFwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwczovL2lvdC5zY2V0LmNvbS5jbicsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FkbWluLWFwaS8sICcvbWljcm8tZGV2LWFwaScpLFxyXG4gICAgfSxcclxufVxyXG5leHBvcnQgY29uc3QgYWxpYXMgPSB7XHJcbiAgICAnQHNyYyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICdAY29tcHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuICAgICdAaG9va3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2hvb2tzJyksXHJcbiAgICAnQGNvbmZpZyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29uZmlnJyksXHJcbiAgICAnQHRvb2xzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy90b29scycpLFxyXG4gICAgJ0BleGFtcGxlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9kb2NzL2V4YW1wbGVzJyksXHJcbiAgICAnQGRvY3MnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vZG9jcycpLFxyXG4gICAgJ0AvJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLycpLFxyXG4gICAgW3BrZy5uYW1lXTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tYWluLnRzJyksXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBWdWUoKSxcclxuICAgICAgICB2dWVKc3goKSxcclxuICAgICAgICBkdHMoe1xyXG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgICAgICAgc3RhdGljSW1wb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNvbXByZXNzaW9uKCksXHJcbiAgICAgICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHtcclxuICAgICAgICAgICAgdG9wRXhlY3V0aW9uUHJpb3JpdHk6IHRydWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcmVtb3ZlQ29uc29sZSh7XHJcbiAgICAgICAgICAgIGluY2x1ZGVzOiBbJ2xvZyddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFJlYWN0aXZpdHlUcmFuc2Zvcm0oKSxcclxuICAgIF0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIGxpYjoge1xyXG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi50cycpLFxyXG4gICAgICAgICAgICBuYW1lOiBwa2cubmFtZSxcclxuICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBsaWIvaW5kZXguJHtmb3JtYXR9LmpzYCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBsdWdpbnM6IFt0ZXJzZXIoKV0sXHJcbiAgICAgICAgICAgIGV4dGVybmFsLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICAgIHBvcnQ6IDEzODAwLFxyXG4gICAgICAgIHByb3h5LFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhcyxcclxuICAgIH0sXHJcbn0pXHJcbiIsICJ7XHJcbiAgICBcIm5hbWVcIjogXCJhbnRkLXZ1ZS1kYnRob3JcIixcclxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gICAgXCJwcml2YXRlXCI6IGZhbHNlLFxyXG4gICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjY5XCIsXHJcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxyXG4gICAgXCJzY3JpcHRzXCI6IHtcclxuICAgICAgICBcImRldlwiOiBcImNyb3NzLWVudiBOT0RFX0VOVj1kZXZlbG9wbWVudCB2aXRlXCIsXHJcbiAgICAgICAgXCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmJiBleGl0IDFcIixcclxuICAgICAgICBcImJ1aWxkXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcclxuICAgICAgICBcImRvY3M6ZGV2XCI6IFwiY3Jvc3MtZW52IE5PREVfRU5WPWRldmVsb3BtZW50IHZpdGVwcmVzcyBkZXYgZG9jc1wiLFxyXG4gICAgICAgIFwiZG9jczpidWlsZFwiOiBcImNyb3NzLWVudiBOT0RFX0VOVj1wcm9kdWN0aW9uIHZpdGVwcmVzcyBidWlsZCBkb2NzXCIsXHJcbiAgICAgICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyBkb2NzXCIsXHJcbiAgICAgICAgXCJwdXNoXCI6IFwibnBtIHB1Ymxpc2hcIlxyXG4gICAgfSxcclxuICAgIFwiZmlsZXNcIjogW1xyXG4gICAgICAgIFwiZGlzdFwiXHJcbiAgICBdLFxyXG4gICAgXCJ0eXBlc1wiOiBcImRpc3QvaW5kZXguZC50c1wiLFxyXG4gICAgXCJleHBvcnRzXCI6IHtcclxuICAgICAgICBcIi5cIjoge1xyXG4gICAgICAgICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9saWIvaW5kZXguZXMuanNcIixcclxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2xpYi9pbmRleC51bWQuanNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuLypcIjogXCIuLypcIlxyXG4gICAgfSxcclxuICAgIFwia2V5d29yZHNcIjogW1xyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWUtcHJvXCJcclxuICAgIF0sXHJcbiAgICBcImF1dGhvclwiOiBcImRidGhvclwiLFxyXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXHJcbiAgICBcInB1Ymxpc2hDb25maWdcIjoge1xyXG4gICAgICAgIFwicmVnaXN0cnlcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgICAgICBcIkBhbnQtZGVzaWduL2ljb25zLXZ1ZVwiOiBcIl43LjAuMVwiLFxyXG4gICAgICAgIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI6IFwiXjAuNC40XCIsXHJcbiAgICAgICAgXCJAdHlwZXMvYmlnLmpzXCI6IFwiXjYuMi4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvbWltZS10eXBlc1wiOiBcIl4yLjEuNFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTcuOFwiLFxyXG4gICAgICAgIFwiQHR5cGVzL251bWVyYWxcIjogXCJeMi4wLjVcIixcclxuICAgICAgICBcIkB0eXBlcy9waW55aW5cIjogXCJeMi4xMC4yXCIsXHJcbiAgICAgICAgXCJAdHlwZXMvcXNcIjogXCJeNi45LjE3XCIsXHJcbiAgICAgICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4yLjBcIixcclxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjogXCJeNC4xLjBcIixcclxuICAgICAgICBcIkB2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtXCI6IFwiXjEuMS40XCIsXHJcbiAgICAgICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIn40LjIuNlwiLFxyXG4gICAgICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcclxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNy44XCIsXHJcbiAgICAgICAgXCJiaWcuanNcIjogXCJeNi4yLjJcIixcclxuICAgICAgICBcImNyb3NzLWVudlwiOiBcIl43LjAuM1wiLFxyXG4gICAgICAgIFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxyXG4gICAgICAgIFwiZXMtdG9vbGtpdFwiOiBcIl4xLjI3LjBcIixcclxuICAgICAgICBcImpzLWZpbGUtZG93bmxvYWRlclwiOiBcIl4xLjEuMjVcIixcclxuICAgICAgICBcIm1pbWVcIjogXCJeNC4wLjZcIixcclxuICAgICAgICBcIm51bWVyYWxcIjogXCJeMi4wLjZcIixcclxuICAgICAgICBcInBhdGhcIjogXCJeMC4xMi43XCIsXHJcbiAgICAgICAgXCJwaW55aW4tcHJvXCI6IFwiXjMuMjYuMFwiLFxyXG4gICAgICAgIFwicG9zdGNzc1wiOiBcIl44LjQuNDlcIixcclxuICAgICAgICBcInFzXCI6IFwiXjYuMTMuMVwiLFxyXG4gICAgICAgIFwicmltcmFmXCI6IFwiXjYuMC4xXCIsXHJcbiAgICAgICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuMTVcIixcclxuICAgICAgICBcInR5cGVzY3JpcHRcIjogXCJeNS43LjJcIixcclxuICAgICAgICBcInVucGx1Z2luLXZ1ZS1tYWNyb3NcIjogXCJeMi4xMy42XCIsXHJcbiAgICAgICAgXCJ2aXRlXCI6IFwiXjUuNC4xMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb24yXCI6IFwiXjEuMy4xXCIsXHJcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIjogXCJeMy41LjJcIixcclxuICAgICAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIjQuMC4wLWJldGEuMVwiLFxyXG4gICAgICAgIFwidml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGVcIjogXCJeMi4yLjBcIixcclxuICAgICAgICBcInZpdGVwcmVzc1wiOiBcIl4xLjUuMFwiLFxyXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xM1wiLFxyXG4gICAgICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjUuMFwiLFxyXG4gICAgICAgIFwidnVlLXR5cGVzXCI6IFwiXjUuMS4zXCJcclxuICAgIH0sXHJcbiAgICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgICAgIFwiQGFudC1kZXNpZ24vaWNvbnMtdnVlXCI6IFwiXjcuMC4xXCIsXHJcbiAgICAgICAgXCJhbnQtZGVzaWduLXZ1ZVwiOiBcIjQueFwiLFxyXG4gICAgICAgIFwiYXhpb3NcIjogXCJeMS43LjhcIixcclxuICAgICAgICBcImJpZy5qc1wiOiBcIl42LjIuMlwiLFxyXG4gICAgICAgIFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxyXG4gICAgICAgIFwiZXMtdG9vbGtpdFwiOiBcIl4xLjI3LjBcIixcclxuICAgICAgICBcImpzLWZpbGUtZG93bmxvYWRlclwiOiBcIl4xLjEuMjVcIixcclxuICAgICAgICBcIm1pbWVcIjogXCJeNC4wLjZcIixcclxuICAgICAgICBcIm51bWVyYWxcIjogXCJeMi4wLjZcIixcclxuICAgICAgICBcInBpbnlpbi1wcm9cIjogXCJeMy4yNi4wXCIsXHJcbiAgICAgICAgXCJxc1wiOiBcIl42LjEzLjFcIixcclxuICAgICAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xNVwiLFxyXG4gICAgICAgIFwidnVlXCI6IFwiXjMuNS4xMlwiXHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFx1dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxhbnQtZGVzaWduLXZ1ZS1wcm9cXFxcdXRpbHNcXFxcZW52LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0L2FudC1kZXNpZ24tdnVlLXByby91dGlscy9lbnYudHNcIjtpbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuY29uc3QgZW52RmlsdGVyID0gWydWSVRFXycsICdHTF8nXVxyXG5leHBvcnQgY29uc3QgZW52UmVzb2x2ZSA9IChcclxuICAgIG1vZGU6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIGFzIHN0cmluZyxcclxuICAgIGZpbHRlcjogc3RyaW5nIHwgc3RyaW5nW10gPSBlbnZGaWx0ZXJcclxuKSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCBmaWx0ZXIpXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9hbnQtZGVzaWduLXZ1ZS1wcm8vZG9jcy8udml0ZXByZXNzL3poLnRzXCI7aW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ21vZHVsZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybClcclxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJylcclxuXHJcbmV4cG9ydCBjb25zdCB6aCA9IGRlZmluZUNvbmZpZyh7XHJcbiAgICBsYW5nOiAnemgtSGFucycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1x1NzUzMSBWaXRlIFx1NTQ4QyBWdWUgXHU5QTcxXHU1MkE4XHU3Njg0XHU5NzU5XHU2MDAxXHU3QUQ5XHU3MEI5XHU3NTFGXHU2MjEwXHU1NjY4JyxcclxuXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG4gICAgICAgIG5hdjogbmF2KCksXHJcblxyXG4gICAgICAgIHNpZGViYXI6IHtcclxuICAgICAgICAgICAgJy9kb2N1bWVudHMvJzoge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogJy9kb2N1bWVudHMvJyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzaWRlYmFyRG9jdW1lbnRzKCksXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAnL2NvbXBvbmVudHMvJzoge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogJy9jb21wb25lbnRzLycsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2lkZWJhckNvbXBvbmVudHMoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlZGl0TGluazoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcy9lZGl0L21haW4vZG9jcy86cGF0aCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1OTc2MicsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdcdTU3RkFcdTRFOEUgTUlUIFx1OEJCOFx1NTNFRlx1NTNEMVx1NUUwMycsXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogYFx1NzI0OFx1Njc0M1x1NjI0MFx1NjcwOSBcdTAwQTkgMjAxOS0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gREItVGhvcmAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgICAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICAgICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1JyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnXHU5ODc1XHU5NzYyXHU1QkZDXHU4MjJBJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsYXN0VXBkYXRlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU0RThFJyxcclxuICAgICAgICAgICAgZm9ybWF0T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLFxyXG4gICAgICAgICAgICAgICAgdGltZVN0eWxlOiAnbWVkaXVtJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsYW5nTWVudUxhYmVsOiAnXHU1OTFBXHU4QkVEXHU4QTAwJyxcclxuICAgICAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcclxuICAgICAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU4M0RDXHU1MzU1JyxcclxuICAgICAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU0RTNCXHU5ODk4JyxcclxuICAgICAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICAgICAgZGFya01vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICB9LFxyXG59KVxyXG5cclxuZnVuY3Rpb24gbmF2KCk6IERlZmF1bHRUaGVtZS5OYXZJdGVtW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7IHRleHQ6ICdcdTYzMDdcdTUzNTcnLCBsaW5rOiAnL2RvY3VtZW50cy9xdWlja3N0YXJ0JywgYWN0aXZlTWF0Y2g6ICcvZG9jdW1lbnRzJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1N0VDNFx1NEVGNicsIGxpbms6ICcvY29tcG9uZW50cy9UYWJsZScsIGFjdGl2ZU1hdGNoOiAnL2NvbXBvbmVudHMnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBwa2cudmVyc2lvbixcclxuICAgICAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICcnLCBsaW5rOiAnJyB9XSxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWRlYmFyRG9jdW1lbnRzKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU3QjgwXHU0RUNCJyxcclxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICdxdWlja3N0YXJ0JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lkZWJhckNvbXBvbmVudHMoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTY1NzBcdTYzNkVcdTVDNTVcdTc5M0EnLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJ1RhYmxlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dDogJ01vZGFsJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsaW5rOiAnTW9kYWwnLFxyXG4gICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnNbJ2xvY2FsZXMnXSA9IHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXHJcbiAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQm94OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25BcmlhTGFiZWw6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdcdTUzRDZcdTZEODgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJ1x1NTNENlx1NkQ4OCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhcnRTY3JlZW46IHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlbnRTZWFyY2hlc1RpdGxlOiAnXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcclxuICAgICAgICAgICAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogJ1x1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RkREXHU1QjU4XHU4MUYzXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiAnXHU2NTM2XHU4NUNGJyxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NTM2XHU4NUNGXHU0RTJEXHU3OUZCXHU5NjY0JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvclNjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogJ1x1NjVFMFx1NkNENVx1ODNCN1x1NTNENlx1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscFRleHQ6ICdcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hCeVRleHQ6ICdcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDUnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogJ1x1NEY2MFx1NTNFRlx1NEVFNVx1NUMxRFx1OEJENVx1NjdFNVx1OEJFMicsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiAnXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGJyxcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c0xpbmtUZXh0OiAnXHU3MEI5XHU1MUZCXHU1M0NEXHU5OTg4JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGFudC1kZXNpZ24tdnVlLXByb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcYW50LWRlc2lnbi12dWUtcHJvXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9hbnQtZGVzaWduLXZ1ZS1wcm8vZG9jcy8udml0ZXByZXNzL2VuLnRzXCI7aW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ21vZHVsZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybClcclxuY29uc3QgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJylcclxuXHJcbmV4cG9ydCBjb25zdCBlbiA9IGRlZmluZUNvbmZpZyh7XHJcbiAgICBsYW5nOiAnZW4tVVMnLFxyXG4gICAgZGVzY3JpcHRpb246ICdcdTc1MzEgVml0ZSBcdTU0OEMgVnVlIFx1OUE3MVx1NTJBOFx1NzY4NFx1OTc1OVx1NjAwMVx1N0FEOVx1NzBCOVx1NzUxRlx1NjIxMFx1NTY2OCcsXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG4gICAgICAgIG5hdjogbmF2KCksXHJcblxyXG4gICAgICAgIHNpZGViYXI6IHtcclxuICAgICAgICAgICAgJy9lbi9kb2N1bWVudHMvJzoge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogJy9lbi9kb2N1bWVudHMvJyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzaWRlYmFyRG9jdW1lbnRzKCksXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAnL2VuL2NvbXBvbmVudHMvJzoge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogJy9lbi9jb21wb25lbnRzLycsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2lkZWJhckNvbXBvbmVudHMoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlZGl0TGluazoge1xyXG4gICAgICAgICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcy9lZGl0L21haW4vZG9jcy86cGF0aCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1OTc2MicsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcclxuICAgICAgICAgICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAyMDE5LSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBEQi1UaG9yYCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuXHJcbmZ1bmN0aW9uIG5hdigpOiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnZG9jdW1lbnRzJywgbGluazogJy9lbi9kb2N1bWVudHMvaW5zdGFsbCcsIGFjdGl2ZU1hdGNoOiAnL2VuL2RvY3VtZW50cycgfSxcclxuICAgICAgICB7IHRleHQ6ICdjb21wb25lbnRzJywgbGluazogJy9lbi9jb21wb25lbnRzL1RhYmxlJywgYWN0aXZlTWF0Y2g6ICcvZW4vY29tcG9uZW50cycgfSxcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHRleHQ6IHBrZy52ZXJzaW9uLFxyXG4gICAgICAgIC8vICAgICBpdGVtczogW10sXHJcbiAgICAgICAgLy8gfSxcclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lkZWJhckRvY3VtZW50cygpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ3Byb2ZpbGUnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2luc3RhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICdpbnN0YWxsJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lkZWJhckNvbXBvbmVudHMoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdkYXRhIGRpc3BsYXknLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJ1RhYmxlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ01vZGFsJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnTW9kYWwnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsU0FB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QUEsTUFDTixPQUFPO0FBQUEsUUFDSDtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKOzs7QU56RUEsSUFBTyxpQkFBUUMsY0FBYTtBQUFBLEVBQ3hCLEdBQUc7QUFBQSxFQUNILFNBQVM7QUFBQSxJQUNMLE1BQU0sRUFBRSxPQUFPLDRCQUFRLEdBQUcsR0FBRztBQUFBLElBQzdCLElBQUksRUFBRSxPQUFPLFdBQVcsR0FBRyxHQUFHO0FBQUEsRUFDbEM7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAidnVlSnN4IiwgImRlZmluZUNvbmZpZyIsICJSZWFjdGl2aXR5VHJhbnNmb3JtIiwgInRlcnNlciIsICJkZWZpbmVDb25maWciLCAicmVxdWlyZSIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgInZ1ZUpzeCIsICJSZWFjdGl2aXR5VHJhbnNmb3JtIiwgInRlcnNlciIsICJjcmVhdGVSZXF1aXJlIiwgImRlZmluZUNvbmZpZyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgInJlcXVpcmUiLCAiY3JlYXRlUmVxdWlyZSIsICJwa2ciLCAiZGVmaW5lQ29uZmlnIiwgIm5hdiIsICJzaWRlYmFyRG9jdW1lbnRzIiwgInNpZGViYXJDb21wb25lbnRzIiwgImRlZmluZUNvbmZpZyJdCn0K
