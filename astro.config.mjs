import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import starlightDocSearch from "@astrojs/starlight-docsearch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Morally Bankrupt Books",
      logo: {
        src: "./public/favicon.png",
        replacesTitle: true,
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
          appId: "BZW4A8NQYG",
          apiKey: "26e3e817488b9ed8c3e0b122cd7611ad",
          indexName: "morally-bankrupt-books",
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
