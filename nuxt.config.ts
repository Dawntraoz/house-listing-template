// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/image'
  ],
  image: {
    domains: ['cloud.funda.nl'],
  },
  runtimeConfig: {
    baseURL: process.env.NUXT_BASE_URL || 'https://partnerapi.funda.nl/feeds/Aanbod.svc/json',
    apiToken: process.env.NUXT_API_TOKEN || '',
  },
  // Seo configuration: https://nuxt.com/docs/4.x/getting-started/seo-meta
  app: {
    head: {
      title: 'House Listing template',
      meta: [
        { name: 'description', content: 'Browse our listings of houses for sale.' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  // Cloudflare pages configuration: https://nuxt.com/deploy/cloudflare
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
