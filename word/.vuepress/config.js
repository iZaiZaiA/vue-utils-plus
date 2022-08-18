const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

const version = '1.0.2'

module.exports = {
    lang: 'zh-CN',
    title: 'Vue-Utils-Plus',
    description: 'vue-utils-plus, 自己用的库而已',
    theme: defaultTheme({
        docsDir: 'word',
        navbar: [
            {
                text: '指南',
                link: '/docs/guide/index.md/#立即开始',
            },
            {
                text: '方法函数',
                children: [
                    {
                        text: '类型判断',
                        link: '/docs/utils/isType/README.md',
                    },
                    {
                        text: '内容验证',
                        link: '/docs/utils/isValidate/README.md',
                    },
                    {
                        text: '数组操作',
                        link: '/docs/utils/utilsArray/README.md',
                    },
                    {
                        text: '对象处理',
                        link: '/docs/utils/utilsObject/README.md',
                    },
                    {
                        text: '文件处理',
                        link: '/docs/utils/utilsFile/README.md',
                    },
                    {
                        text: '随机字符',
                        link: '/docs/utils/utilsRandom/README.md',
                    },
                    {
                        text: '本地缓存',
                        link: '/docs/utils/utilsStore/README.md',
                    },
                    {
                        text: '文本操作',
                        link: '/docs/utils/utilsText/README.md',
                    },
                    {
                        text: '数据转换',
                        link: '/docs/utils/utilsTo/README.md',
                    },
                    {
                        text: '日期时间',
                        link: '/docs/utils/utilsDate/README.md',
                    },
                ],
            },
            {
                text: '文章记录',
                children: [
                    {
                        text: '数组操作',
                        link: '/docs/article/Array.md',
                    },
                    {
                        text: '文本操作',
                        link: '/docs/article/text.md',
                    }
                ],
            },
            {
                text: version,
                children: [
                    {
                        text: '更新日志',
                        link: '/docs/log/change',
                    },
                    {
                        text: '建议反馈',
                        link: 'https://github.com/iZaiZaiA/vue-utils-plus/issues/new',
                    }
                ],
            }
        ],
        sidebarDepth: 1,
        repo: 'https://github.com/iZaiZaiA/vue-utils-plus',
        docsRepo: 'https://github.com/iZaiZaiA/vue-utils-plus',
        docsBranch: 'master',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
    }),
    plugins: [
        searchPlugin({
            // 排除首页
            isSearchable: (page) => page.path !== '/',
        }),
    ],
}
