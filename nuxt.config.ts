// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'App Landing Page - Download Our Mobile App',
      meta: [
        { name: 'description', content: 'Experience the future of mobile applications. Download our app today and join thousands of satisfied users worldwide.' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'App Landing Page - Download Our Mobile App' },
        { property: 'og:description', content: 'Experience the future of mobile applications. Download our app today and join thousands of satisfied users worldwide.' },
        { property: 'og:site_name', content: 'App Landing Page' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@leszekkrol' },
        { name: 'twitter:creator', content: '@leszekkrol' },
        { name: 'twitter:title', content: 'App Landing Page - Download Our Mobile App' },
        { name: 'twitter:description', content: 'Experience the future of mobile applications. Download our app today and join thousands of satisfied users worldwide.' },
        
        // Additional
        { name: 'author', content: 'Leszek W. Król' },
        { name: 'theme-color', content: '#6366f1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://yourdomain.com' },
      ],
    },
  },
  
  css: [
    '~/assets/main.css',
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})