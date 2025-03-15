// @keep-sorted
const techMap = {
    'Axios': 'simple-icons:axios',
    'Electron': 'file-icons:electron',
    'Mongoose': 'devicon:mongoose-wordmark',
    'NaiveUI': 'logos:naiveui',
    'Nitro': 'unjs:nitro',
    'Nuxt': 'vscode-icons:file-type-nuxt',
    'Pinia': 'logos:pinia',
    'Scss': 'vscode-icons:file-type-scss',
    'TypeScript': 'vscode-icons:file-type-typescript-official',
    'UnoCSS': 'logos:unocss',
    'VitePress': 'simple-icons:vitepress',
    'Vue 3': 'logos:vue',
    'VueUse': 'logos:vueuse',
}

export type Tech = keyof typeof techMap

export const getTechIcon = (tech: Tech) => techMap[tech] || 'ri:code-line'
