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
        header: "Inter",
        body: "Inter", 
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#0f1419",        // Dark navy background
          lightgray: "#1a1f29",    // Slightly lighter dark
          gray: "#8892a6",         // Medium gray
          darkgray: "#e8eaed",     // Light gray for text
          dark: "#ffffff",         // White text
          secondary: "#00a693",    // Teal links (Miami Dolphins aqua)
          tertiary: "#ff6900",     // Orange accents (Miami Dolphins orange)
          highlight: "rgba(0, 166, 147, 0.15)",  // Teal highlight
          textHighlight: "rgba(255, 105, 0, 0.2)", // Orange text highlight
        },
        darkMode: {
          light: "#0f1419",        // Same dark theme
          lightgray: "#1a1f29",    
          gray: "#8892a6",         
          darkgray: "#e8eaed",     
          dark: "#ffffff",         
          secondary: "#00a693",    // Teal links
          tertiary: "#ff6900",     // Orange accents
          highlight: "rgba(0, 166, 147, 0.15)",
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