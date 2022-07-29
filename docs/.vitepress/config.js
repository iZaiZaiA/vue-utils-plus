import { defineConfig } from 'vitepress'
import nav from './router/nav'
import sidebar from './router/sidebar/index'

export default defineConfig({
    lang: 'zh-CN',
    title: 'Vue-Utils-Plus',
    description: 'Vue-Utils-Plus, 自己用的库而已.',
    lastUpdated: true,
    themeConfig: {
        nav,
        sidebar,
        editLink: {
            pattern: 'https://github.com/iZaiZaiA/vue-utils-plus/edit/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/iZaiZaiA/vue-utils-plus' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present iZaiZaiA'
        }
    }
})
