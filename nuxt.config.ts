// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "App Landing Page in Nuxt3",
    },
  },
  css: [
    '~/assets/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})