import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',
  description: 'node-easywechat 简单好用的非官方微信 SDK',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide('3.x') },
      '/2.x/guide/': { base: '/2.x/guide/', items: sidebarGuide('2.x') },
    },

    editLink: {
      pattern: 'https://github.com/hpyer/node-easywechat/edit/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2017-${new Date().getFullYear()} Hpyer`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '文档',
      items: [
        { text: '3.x', link: '/guide/' },
        { text: '2.x', link: '/2.x/guide/' },
      ],
    },
    {
      text: '讨论',
      link: 'https://github.com/hpyer/node-easywechat/discussions',
      target: '_blank',
    },
  ]
}

function sidebarGuide(version: string): DefaultTheme.SidebarItem[] {
  if (version === '2.x') {
    return [
      {
        text: '介绍',
        collapsed: false,
        items: [
          { text: '快速开始', link: 'index' },
        ]
      },
      {
        text: '公众号',
        collapsed: false,
        items: [
          { text: 'Markdown 扩展', link: 'markdown' },
        ]
      }
    ]
  }
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '快速开始', link: 'index' },
      ]
    },
    {
      text: '公众号',
      collapsed: false,
      items: [
        { text: '入门', link: 'official-account/index' },
        { text: 'API调用', link: 'client' },
        { text: '服务端', link: 'official-account/server' },
        { text: '网页授权', link: 'oauth' },
        { text: '工具', link: 'official-account/utils' },
        { text: '示例代码', link: 'official-account/examples' }
      ]
    },
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
