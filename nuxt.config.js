export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Mi curriculum vitae',
    htmlAttrs: { lang: 'es' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Betzabeth Linares&apos; curriculum vitae',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Main CSS file
   */
  css: ['~assets/scss/tailwind.scss'],

  /*
   ** Load nuxt modules
   */
  modules: [],

  /*
   ** Load nuxt build-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active',
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#2085D5' },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false,
        },
      },
      // Change the postcss-preset-env settings
      preset: {
        autoprefixer: {
          cascade: false,
          grid: false,
        },
      },
    },

    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {},
  },
}
