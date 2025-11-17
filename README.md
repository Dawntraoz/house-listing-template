# House Listing template

This repository contains a house listing project including a listing page with a search and a details page. The data was obtained from sample APIs, for which an API token is required.

> If you do not have a valid API token, feel free to change the endpoints to read your own sample data.

Built with [Nuxt](https://nuxt.com).

## Setup, development & deployment

Make sure to install dependencies:

> This project was created using pnpm, but you are free to use whichever package manager you prefer.

```bash
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Deploy (Prod)

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project decisions

1. I used `app.vue` as layout with `<NuxtPage />` as the "`<slot />`" since there is only one layout in this application (see [Nuxt docs](https://nuxt.com/docs/4.x/directory-structure/app/layouts) for reference).

2. [`UnoCSS`](https://unocss.dev/integrations/nuxt) was used for quick prototyping.
