// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
  ],

  nitro: {
    storage: {
      data: {
        driver: 'cloudflare-kv-binding',
        binding: 'KV_HEADCOUNT',
      },
    },
    devStorage: {
      data: {
        driver: 'fsLite',
        base: '.nuxt/data',
      },
    },
  },
})
