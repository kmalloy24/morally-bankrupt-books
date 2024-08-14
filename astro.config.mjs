import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import starlightDocSearch from "@astrojs/starlight-docsearch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      logo: {
        src: "./public/favicon.png",
      },
      favicon: "/favicon.png",
      social: {
        github: "https://github.com/kmalloy24/morally-bankrupt-books",
      },
      sidebar: [
        {
          label: "Eloquent Javascript",
          autogenerate: {
            directory: "eloquent-js",
          },
        },
        {
          label: "Intro to Git & Github",
          autogenerate: {
            directory: "intro-git",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      plugins: [
        starlightDocSearch({
          appId: "YOUR_APP_ID",
          apiKey: "YOUR_SEARCH_API_KEY",
          indexName: "YOUR_INDEX_NAME",
        }),
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
