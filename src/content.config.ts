import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tldrCollection = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/features/tldr/content',
  }),
  schema: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    sourceUrl: z.string().url(),
    readDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    thoughts: z.string().optional().describe('Optional personal thoughts or commentary about the article'),
  }),
});

const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/features/blog/content',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()).optional(),
      relatedPosts: z.array(reference('blog')),
      readingTimeMinutes: z.number().optional(), // Added by remark plugin
      isDraft: z.boolean(),
      lang: z.enum(['en', 'fr']).optional().default('en'),
    }),
});

export const collections = {
  blog: blogCollection,
  tldr: tldrCollection,
};
