export default defineNuxtConfig({
    css: [
        '~/assets/main.scss',
    ],

    compatibilityDate: '2025-03-11',

    future: {
        compatibilityVersion: 4,
    },

    routeRules: {
        '/favicon.ico': { redirect: 'https://wsrv.nl/?url=github.com/L33Z22L11.png%3fsize=96&mask=circle' },
    },

    modules: [
        '@unocss/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/icon',
    ],

    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },
})
