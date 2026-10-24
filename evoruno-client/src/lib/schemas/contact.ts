import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().max(100).optional(),
  service: z.enum(['website', 'mobile-app', 'seo', 'other'], {
    message: 'Please select a valid service',
  }),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().max(0, 'Spam detected').optional(), // Bot trap
});

export type ContactInput = z.infer<typeof contactSchema>;
