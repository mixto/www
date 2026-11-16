import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().min(3).max(30).trim(),
    description: z.string().max(60).optional(),
    date: z.iso.date(),
    draft: z.boolean().optional().default(false)
  })
})

export const collections = { notes }
