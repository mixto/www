import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(3).max(30),
    description: z.string().min(10),
    date: z.iso.date()
  })
})

export const collections = { notes }
