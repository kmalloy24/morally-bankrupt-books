# Morally Bankrupt Books 😈📚

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Trade your soul for free copies of free e-books.

Built for the [Web Dev Challenge Hackathon #3 (E-comm Edition)](https://www.learnwithjason.dev/blog/web-dev-challenge-hackathon-algolia)

The app is a server-rendered [Astro](https://astro.build/) site, and uses the [Algolia DocSearch](https://docsearch.algolia.com/) plugin for the [Starlight](https://starlight.astro.build/) docs theme to provide analystics and SSR flexibility to

## Algolia

1. Configure [Astro SSR](https://docs.astro.build/en/guides/server-side-rendering/)
2. Deploy your Astro SSR app to your [desired provider](https://docs.astro.build/en/guides/server-side-rendering/#official-adapters) (this project uses Vercel)
3. Use your production link to [apply for DocSearch](https://docsearch.algolia.com/apply/) (response time varies)
4. [Add Algolia to Starlight](https://starlight.astro.build/guides/site-search/#algolia-docsearch)

> [!CAUTION]
> Algolia `appId`, `apiKey`, and `indexName` are safe to use client-side.
>
> `write` and `admin` have to stay secret.

## Astro/Starlight

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## References

- [Algolia DocSearch + Astro Starlight](https://www.algolia.com/blog/engineering/algolia-docsearch-astro-starlight/)
- [Algolia DocSearch + Astro Starlight Part 2](https://www.algolia.com/blog/engineering/algolia-docsearch-astro-starlight-part-2/)

## Adding Books

### Add Required Starlight Frontmatter to Markdown Files

Run the `.py` in `/scripts` in the directory of the markdown files. It will add a `Title` frontmatter property based on the file name.
