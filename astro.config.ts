// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.org',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      cssVariable: '--font-iosevka',
      name: 'Iosevka',
      provider: fontProviders.fontsource()
    }
  ]
})
