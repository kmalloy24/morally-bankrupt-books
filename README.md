# Morally Bankrupt Books 😈📚

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Trade your soul for free copies of free e-books.

Built for the [Web Dev Challenge Hackathon #3 (E-comm Edition)](https://www.learnwithjason.dev/blog/web-dev-challenge-hackathon-algolia)

The app is a server-rendered [Astro](https://astro.build/) site, and uses the [Algolia DocSearch](https://docsearch.algolia.com/) plugin for the [Starlight](https://starlight.astro.build/) theme.

## How It Works

### Adding Books

To add books written in markdown you will need to add the required frontmatter for the docs content collection in Starlight. Run `md-titles.py` from `/scripts` in the directory of the markdown files you wish to add the frontmatter to. It will add a `Title` property based on the file name.

### Selling Your Soul

The app uses [nanostores](https://docs.astro.build/en/recipes/sharing-state/) to share state between `Button.astro` and `EbookCard.astro`.

This provides a kind of fake route protection for the demostrative purposes of this hackathon.

But! You could add persistence, middleware, and a payment provider to essentially make an e-commerce site with a built in e-reader.

### Setting Up Algolia DocSearch

1. Configure [Astro SSR](https://docs.astro.build/en/guides/server-side-rendering/)
2. Deploy your app to your [desired provider](https://docs.astro.build/en/guides/server-side-rendering/#official-adapters) (this project uses Vercel)
3. Use your production link to [apply for DocSearch](https://docsearch.algolia.com/apply/)
4. [Add Algolia to Starlight](https://starlight.astro.build/guides/site-search/#algolia-docsearch)

> [!CAUTION]
> Algolia `appId`, `apiKey`, and `indexName` are safe to use client-side. `write` and `admin` stay secret.

### Running Astro/Starlight

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

---

## References

- [Algolia DocSearch + Astro Starlight](https://www.algolia.com/blog/engineering/algolia-docsearch-astro-starlight/)
- [Algolia DocSearch + Astro Starlight Part 2](https://www.algolia.com/blog/engineering/algolia-docsearch-astro-starlight-part-2/)
