---
layout: home

hero:
    name: 'Antd-Vue-DBThor'
    text: 'Antd增强版'
    tagline: 别问 用就是了！
    actions:
        - theme: brand
          text: 快速开始
          link: /documents/install
        - theme: alt
          text: Github
          link: https://github.com/ThorSmallice/ant-design-pro-vue
    image:
        src: /images/antd.svg
        alt: Antd-Vue-DBThor

features:
    - title: Feature A
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    - title: Feature B
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    - title: Feature C
      details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #25C3FF 30%, #F74A5C);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #25C3FF 50%, #F74A5C 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(100px);
  }
}
</style>
