const postsCollection = defineCollection({
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
      'Technology'
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});
