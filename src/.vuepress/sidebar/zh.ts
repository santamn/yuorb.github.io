import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "语法文档",
      prefix: "docs/",
      link: "docs/readme.md",
      children: [
        "term",
        "cheat",
        {
          text: "正文",
          children: ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14", "15", "pt"],
        },
      ],
    },
  ],
    "/turorial": [
  {
      text: "同人教学",
      link: "",
      children: [
        "beginner","numerals","loanwords","idioms","old"
      ],
    },
  ],
  "/en/sup": [
    {
      text: "社区补助",
      link: "en/sup/",
      // children: [
      //   "beginner","numerals","loanwords","idioms","old"
      // ],
    },
  ],
});
