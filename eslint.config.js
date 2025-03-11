import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    rules: {
        'jsonc/indent': ['error', 2],
        'vue/block-lang': ['warn', {
            script: { lang: ['ts', 'tsx'] },
        }],
        'vue/enforce-style-attribute': ['warn', {
            allow: ['scoped'],
        }],
        'yaml/indent': ['error', 2],
    },
}, {
    files: ['**/*.json'],
    rules: {
        'jsonc/sort-keys': 'off',
        'style/eol-last': 'off',
    },
})
