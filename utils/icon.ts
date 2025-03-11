// @keep-sorted
const techMap = {
    'Axios': 'simple-icons:axios',
    'Electron': 'file-icons:electron',
    'ESLint': 'logos:eslint',
    'Iconify': 'line-md:iconify2-static',
    'MongoDB': 'devicon:mongodb',
    'NaiveUI': 'logos:naiveui',
    'Next.js': 'logos:nextjs-icon',
    'Nitro': 'unjs:nitro',
    'Node.js': 'logos:nodejs-icon',
    'Nuxt': 'vscode-icons:file-type-nuxt',
    'Pinia': 'logos:pinia',
    'Sass': 'logos:sass',
    'Scss': 'vscode-icons:file-type-scss',
    'SQLite': 'vscode-icons:file-type-sqlite',
    'Stylelint': 'file-icons:stylelint',
    'TailwindCSS': 'logos:tailwindcss-icon',
    'TypeScript': 'vscode-icons:file-type-typescript-official',
    'UnoCSS': 'logos:unocss',
    'Vite': 'logos:vitejs',
    'VitePress': 'simple-icons:vitepress',
    'Vue 3': 'logos:vue',
    'VueUse': 'logos:vueuse',
}

export type Tech = keyof typeof techMap

export const getTechIcon = (tech: Tech) => techMap[tech]
