// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'JetBrains Mono': [400, 700],
      'VT323': [400]
    },
    display: 'swap'
  },
  app: {
  head: {
    style: [
      { innerHTML: 'html { scroll-behavior: smooth; }' }
    ]
  }
}
})