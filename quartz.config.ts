import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Michael Gerstl",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://michaelgerstl.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Quicksand",
        body: "Quicksand", 
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#2d2d2d",        // Dark grey background
          lightgray: "#3a3a3a",    // Slightly lighter grey
          gray: "#8892a6",         // Medium gray
          darkgray: "#e8eaed",     // Light gray for text
          dark: "#ffffff",         // White text
          secondary: "#00bfff",    // Aqua/light blue links
          tertiary: "#ff6900",     // Orange accents
          highlight: "rgba(0, 191, 255, 0.15)",  // Aqua highlight
          textHighlight: "rgba(255, 105, 0, 0.2)", // Orange text highlight
        },
        darkMode: {
          light: "#2d2d2d",        // Dark grey background
          lightgray: "#3a3a3a",    
          gray: "#8892a6",         
          darkgray: "#e8eaed",     
          dark: "#ffffff",         
          secondary: "#00bfff",    // Aqua/light blue links
          tertiary: "#ff6900",     // Orange accents
          highlight: "rgba(0, 191, 255, 0.15)",
          textHighlight: "rgba(255, 105, 0, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
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
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
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