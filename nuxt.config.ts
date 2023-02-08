export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:3000',
            siteName: process.env.SITE_NAME || '笔趣阁'  ,
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
            title: process.env.SITE_NAME,
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            script: [
                { src: 'https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js' },
            ],
        }
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@element-plus/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
    ],
    tailwindcss: {
        exposeConfig: true
    },
    headlessui: {
        prefix: 'Headless'
    },
    elementPlus: {
    },
    image: {
    },
    colorMode: {
        classSuffix: ''
    },
})
