import process from 'node:process'

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh',
            },
        },
    },

    css: [
        '~/assets/main.scss',
    ],

    compatibilityDate: '2025-03-11',

    devtools: {
        enabled: false,
    },

    features: {
        inlineStyles: false,
    },

    future: {
        compatibilityVersion: 4,
    },

    routeRules: {
        '/favicon.ico': { redirect: 'https://wsrv.nl/?url=github.com/L33Z22L11.png%3fsize=96&mask=circle' },
    },

    runtimeConfig: {
        public: {
            name: process.env.NAME,
            phone: process.env.PHONE,
        },
    },

    modules: [
        '@unocss/nuxt',
        '@nuxt/icon',
    ],

    icon: {
        mode: 'svg',
    },
})
