module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fastblock exchange',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css' },
      { rel: 'stylesheet', href: 'https://www.w3schools.com/lib/w3-theme-black.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.10/css/all.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  srcDir: 'frontend/',
  /*
  ** Add axios globally
  */
  build: {
    vendor:[
      'axios'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
