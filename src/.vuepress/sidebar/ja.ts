import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/docs": [
    {
      text: "新イスクイル文法書",
      link: "",
      children: [
        "term",
        "cheat",
        {
          text: "目次",
          children: ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14", "15", "pt"],
        },
      ],
    },
  ],
  "/turorial": [
  {
      text: "チュートリアル",
      link: "",
      children: [
        "beginner","numerals","loanwords","idioms","old"
      ],
    },
  ],
  "/en/sup": [
    "",
  ],
});
