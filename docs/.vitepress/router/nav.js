import {version} from "../../package.json";

export default [
    {
        text: '指南',
        activeMatch: '/guide/',
        items: [
            {
                text: '这是什么？',
                link: '/guide/what.md'
            },
            {
                text: '立即开始',
                link: '/guide/started.md'
            }
        ]
    },
    {
        text: '函数',
        activeMatch: '/utils/',
        items: [
            {
                text: '类型判断',
                link: '/utils/isType/is.md'
            },
            {
                text: '内容验证',
                link: '/utils/isValidate/isUrlVal.md'
            },
            {
                text: '数组操作',
                link: '/utils/utilsArray/isItem.md'
            },
            {
                text: '对象处理',
                link: '/utils/utilsObject/deepClone.md'
            },
            {
                text: '文件处理',
                link: '/utils/utilsFile/isSize.md'
            },
            {
                text: '随机字符',
                link: '/utils/utilsRandom/UUID.md'
            },
            {
                text: '本地缓存',
                link: '/utils/utilsStore/getStoreData.md'
            },
            {
                text: '文本操作',
                link: '/utils/utilsText/priceFormat.md'
            },
            {
                text: '数据转换',
                link: '/utils/utilsTo/toInt.md'
            },
            {
                text: '日期时间',
                link: '/utils/utilsDate/getDateTime.md'
            },
        ]
    },
    {
        text: version,
        items: [
            {
                text: '更新日志',
                link: '/log/change.md'
            },
            {
                text: '建议反馈',
                link: 'https://github.com/iZaiZaiA/vue-utils-plus/issues/new'
            },
        ],
    },
]
