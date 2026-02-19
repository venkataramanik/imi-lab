import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('IMI Lab'),
    // Added 'Planning', 'Finance', 'Logistics', and 'Technology' to match your recent content
    category: z.enum([
      'Warehousing', 
      'Transportation', 
      'Procurement', 
      'AI/ML', 
      'Sustainability', 
      'Strategy', 
      'Planning', 
      'Finance', 
      'Logistics', 
      'Technology'
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
