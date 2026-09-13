import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    tag: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    comments: z.boolean().default(true),
  }),
});

export const collections = { blog };
