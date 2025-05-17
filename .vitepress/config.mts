import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: true,
  },
  base: "/1224045520/", // 部署时的基础路径
  title: "2supervisor",
  titleTemplate: "Tiancheng", // 页面标题的后缀
  description: "To my supervisor",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "致导师", link: "/2supervisor" },
      { text: "2025 记录", link: "/2025" },
      { text: "2026 记录", link: "/2026" },
    ],

    sidebar: [
      {
        text: "阅读",
        items: [
          { text: "致导师", link: "/2supervisor" },
          { text: "2025 记录", link: "/2025" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/161043261" },
      { icon: "qq", link: "https://qm.qq.com/q/YDORema7As" },
    ],
  },
});
