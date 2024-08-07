// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/global-plugin.js'
  ],
  // nitro:{
  //   output:{
  //     publicDir:'docs'
  //   }
  // },
  app:{
    head:{
      link:[
        { rel: 'stylesheet', href: '/assets/libs/bootstrap-5.3.3-dist/bootstrap.rtl.min.css' },
        { rel: 'stylesheet', href: '/assets/css/app.css' },
        { rel: 'stylesheet', href: '/assets/css/Vazirmatn-font-face.css' },
        { rel: 'icon', type: 'image/png', href: "/assets/img/icon.png" }
      ],
      script:[
        {'src':'/assets/libs/bootstrap-5.3.3-dist/bootstrap.bundle.js'},
        {'src':'/assets/libs/code-highlighter/prism.js'},
        {'src':'/assets/libs/showdown/showdown.min.js'},


      ],
      meta:[
        {name:'google-site-verification',content:'MoFA0Adxt_rMY1UHDdCNVWB1DKBsQIAQHQFXRDf4hEA'},
      ],
    },
  }
  
})
