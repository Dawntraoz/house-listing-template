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
  }
})
