// config.js
module.exports = {
  title: "我的博客",
  description: "Web学习",
  base: "/blog/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "codinglin 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/726107228492253" },
          { text: "Github", link: "https://github.com/coding-lin" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/sudoswap/start",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/sudoswap/start" },
          { title: "第二篇", path: "/sudoswap/step1" },
        ],
      },
    ],
    sidebarDepth: 4, // 标题深度
    displayAllHeaders: true, // 显示所有标题
    lastUpdated: "Last Updated", // 最后更新时间
  },
};
