import { z } from 'zod';

export const taskFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  description: z.string().max(500, 'Description is too long').optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  assigneeId: z.string().uuid('Invalid user ID').optional(),
  dueDate: z
    .date()
    .min(new Date(), 'Due date must be in the future')
    .optional(),
  projectId: z.string().uuid('Invalid project ID'),
});

export type TaskFormType = z.infer<typeof taskFormSchema>;
