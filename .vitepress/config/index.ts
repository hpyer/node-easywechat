import { defineConfig } from 'vitepress'
import { common } from './common'
import { zh } from './zh'

export default defineConfig({
  ...common,
  locales: {
    root: { label: '简体中文', ...zh },
  }
})
