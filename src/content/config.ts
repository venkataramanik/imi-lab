import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('IMI Lab'),

    category: z.enum([
      'Warehousing',
      'Transportation',
      'Procurement',
      'AI/ML',
      'Sustainability',
      'Strategy',
      'Planning',
      'Logistics',
      'Finance',
      'Technology',
      'Analytics',
      'Manufacturing',
      'E-commerce',
      'Risk-Management',
      'Innovation',
      'Last-Mile',
      'Engineering',
      'Inventory-Physics',
      'Cold-Chain',
      'Retail',
      'Circular-Economy',
      'Robotics',
      'Cybersecurity',
      'International-Trade',
      'Labor-Management',
      'Compliance',
      'Data-Science',
      'Customer-Experience',
      'Operations',
      'Leadership'
    ]),

    
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
