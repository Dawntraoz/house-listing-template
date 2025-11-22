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

1. Uses `app.vue` as layout with `<NuxtPage />` as the "`<slot />`" since there is only one layout in this application (see [Nuxt docs](https://nuxt.com/docs/4.x/directory-structure/app/layouts) for reference).

2. Styling:

   - [`UnoCSS`](https://unocss.dev/integrations/nuxt) was used for quick prototyping.
   - [CSS Modules](https://vuejs.org/api/sfc-css-features.html#css-modules) in combination with the `@apply` rule to avoid repetitive atomic classes when the styled element is repeated or it is too verbose.

3. It uses [universal rendering](https://nuxt.com/docs/4.x/guide/concepts/rendering#universal-rendering) (SSR + hydration) and leverages internal composables, such us [`useFetch`](https://nuxt.com/docs/4.x/getting-started/data-fetching#usefetch), to perform network requests.

4. It adds the [@nuxt/image](https://image.nuxt.com/) module to improve image optimization.

5. _Search_ page:

   - Uses route `query` parameters combined with a reactive variable for listing pagination.
   - Handles rendering of the `status` with values: `pending` (loading), `success` with data or empty, and `error`.

6. It includes a custom error page.

7. _Details_ page:

   - Uses [`swiper`](https://swiperjs.com/vue) library for the image gallery slider.
   - Uses an embed iframe of Google Maps to show the address.

## Future Improvements

1. API endpoints:

   - Use the `pick` option to retrieve only the necessary information.
   - Add a mapping method to ensure compatibility with other APIs while maintaining compatibility with the front end.

2. Image network loading on listings (search page) and swiper slider based on the user viewport and current slide.
