import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    status: z.enum(['draft', 'published', 'deprecated', 'archived']).default('published'),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { docs };
