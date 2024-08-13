import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const common = defineConfig({
  title: "EasyWechat for node.js",

  base: '/node-easywechat/',

  rewrites: {
    'zh/3.x/:rest': ':rest',
    'zh/3.x/:dir/:rest': ':dir/:rest',
    'zh/3.x/:dir/:subdir/:rest': ':dir/:subdir/:rest',
    'zh/2.x/:rest': '2.x/:rest',
    'zh/2.x/:dir/:rest': '2.x/:dir/:rest',
  },

  lastUpdated: true,
  cleanUrls: false,
  metaChunk: true,

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  /* prettier-ignore */
  // head: [
  //   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
  //   ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  //   ['meta', { name: 'theme-color', content: '#5f67ee' }],
  //   ['meta', { property: 'og:type', content: 'website' }],
  //   ['meta', { property: 'og:locale', content: 'en' }],
  //   ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
  //   ['meta', { property: 'og:site_name', content: 'VitePress' }],
  //   ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
  //   ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  //   ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  // ],

  themeConfig: {
    // logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hpyer/node-easywechat' }
    ],

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: {
    //       ...zhSearch,
    //     }
    //   }
    // },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
