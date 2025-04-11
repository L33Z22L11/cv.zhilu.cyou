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
        // 网站图标
        '/favicon.ico': { redirect: 'https://wsrv.nl/?url=github.com/L33Z22L11.png%3fsize=96&mask=circle' },
    },

    runtimeConfig: {
        public: {
            // 从 .env 文件中读取的变量
            name: process.env.NAME,
            phone: process.env.PHONE,
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
        server: {
            // 预先允许从其他域名访问开发环境，但 --host 才会在所有网络接口上启动监听
            allowedHosts: true,
        },
    },

    modules: [
        '@unocss/nuxt',
        '@nuxt/icon',
    ],

    icon: {
        // 默认是 CSS Mask 模式，在低级 PDF 阅读器中可能无法正常显示
        mode: 'svg',
    },
})
