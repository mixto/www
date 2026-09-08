// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      cssVariable: '--font-jetbrains-mono',
      name: 'JetBrains Mono',
      provider: fontProviders.google()
    }
  ]
})
