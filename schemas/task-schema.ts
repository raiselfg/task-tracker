import { addDays } from 'date-fns';
import { z } from 'zod';

export const taskFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  description: z.string().max(500, 'Description is too long').optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  assigneeId: z.string().cuid('Invalid user ID').optional(),
  dueDate: z
    .date()
    .optional()
    .refine(
      (date) => {
        if (!date) return true;
        return date >= addDays(new Date(), 1);
      },
      { message: 'Due date must be at least tomorrow' }
    ),
});

export type TaskFormType = z.infer<typeof taskFormSchema>;
