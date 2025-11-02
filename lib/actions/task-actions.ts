'use server';

import { prisma } from '@/lib/prisma';
import { taskFormSchema, TaskFormType } from '@/schemas/task-schema';
import { createClient } from '../supabase/server';

export async function createTask(taskData: TaskFormType) {
  try {
    const validatedData = taskFormSchema.parse(taskData);

    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw new Error('Failed to fetch user');
    }

    const user = data.user;

    const task = await prisma.task.create({
      data: {
        title: validatedData.title,
        description: validatedData.description ?? '',
        status: validatedData.status,
        priority: validatedData.priority,
        assigneeId: validatedData.assigneeId ?? undefined,
        creatorId: user.id,
      },
    });

    return { success: true, task };
  } catch (error) {
    console.error('Error creating task:', error);

    return { success: false, error: 'Internal Server Error' };
  }
}
