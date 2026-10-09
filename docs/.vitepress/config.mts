import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Add New Menu Builder',
  description: 'Customize, reorder, and extend the Unreal Editor Content Browser Add New menu.',
  base: '/AddNewMenuBuilderDoc/',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,

  head: [
    ['link', { rel: 'icon', href: '/AddNewMenuBuilderDoc/icon.png' }],
    ['meta', { name: 'theme-color', content: '#151515' }],
    ['meta', { property: 'og:title', content: 'Add New Menu Builder' }],
    ['meta', { property: 'og:description', content: 'Customize, reorder, and extend the Unreal Editor Content Browser Add New menu.' }]
  ],

  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'Add New Menu Builder',
    search: { provider: 'local' },

    nav: [
      { text: 'Quick Start', link: '/guide/quick-start' },
      { text: 'Rules', link: '/guide/rules' },
      { text: 'Troubleshooting', link: '/reference/troubleshooting' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Rules', link: '/guide/rules' },
          { text: 'Troubleshooting', link: '/reference/troubleshooting' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    outline: { level: [2, 3] },
    footer: {
      message: 'Add New Menu Builder documentation.',
      copyright: 'Copyright Shared Orbit'
    }
  }
})
