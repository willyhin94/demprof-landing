import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    image: z.string(),
    description: z.string(),
    order: z.number(),
    category: z.enum(['done', 'process']).default('done'),
  }),
});

export const collections = { portfolio };
