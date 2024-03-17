import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🛋️ MURUNG",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'goatcounter', websiteId: 'murung'
    },
    locale: "en-US",
    baseUrl: "murung.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans Korean",
        body: "Noto Sans Korean",
        code: "Nanum Gothic Coding",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // page background
          lightgray: "#e0e0e0", // borders, serach bar
          gray: "#2e2e2e", // graph links, heavier borders
          darkgray: "#4e4e4e", // body text
          dark: "#2b2b2b", // header text and icons
          secondary: "#4c79cd", // link color, current graph node
          tertiary: "#4c79cd", // hover states and visited graph nodes
          highlight: "rgba(255, 208, 0, 0.4)", //internal link background, highlighted text, highlighted lines of code
        },
        darkMode: {
          light: "#1c2127",
          lightgray: "#5a5f63",
          gray: "#f0f0f0",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#4c79cd",
          tertiary: "#4c79cd",
          highlight: "rgba(255, 208, 0, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
