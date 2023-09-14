import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/styles/panda.css',
  ],

  alias: {
    'styled-system': resolve('./styled-system'),
  },

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },

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
