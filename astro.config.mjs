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
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              slug: "guides/example",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
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
