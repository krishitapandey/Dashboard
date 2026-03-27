import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  body: z.string().min(10, 'Body must be at least 10 characters long'),
});

export type PostFormValues = z.infer<typeof postSchema>;