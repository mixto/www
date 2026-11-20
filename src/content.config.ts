import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.yml', base: './src/content/projects' }),
    schema: ({ image }) =>
      z.object({
        name: z.string().min(3),
        description: z.string().optional(),
        url: z.url().optional(),
        repo: z.url(),
        contributors: z
          .array(
            z.object({
              name: z.string(),
              avatar: image().optional(),
              url: z.url()
            })
          )
          .optional()
      })
  }),
  notes: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
    schema: ({ image }) =>
      z.object({
        title: z.string().min(3).max(30),
        description: z.string().max(60).optional(),
        date: z.iso.date(),
        cover: z
          .object({
            source: image(),
            alt: z.string()
          })
          .optional(),
        draft: z.boolean().optional().default(false)
      })
  })
}
