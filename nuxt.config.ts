// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  // logLevel: 'silent',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-rating',
    '@nuxtjs/supabase',
    '@formkit/nuxt',
    '@nuxtjs/google-fonts',
    ['@nuxtjs/google-fonts', {
      families: {
        Tajawal: true,
        download: true,
        fontsDir: 'assets/fonts',
      },
    }],
  ],

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/register', '/role', '/register-student', '/register-teacher'],
    },
  },

  compatibilityDate: '2024-09-15',
})
