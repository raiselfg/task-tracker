'use server';

import { prisma } from '@/lib/prisma';
import { taskFormSchema, TaskFormType } from '@/schemas/task-schema';

export async function createTask(taskData: TaskFormType) {
  try {
    const validatedData = taskFormSchema.parse(taskData);

    const task = await prisma.task.create({
      data: {
        title: validatedData.title,
        description: validatedData.description ?? null,
        status: validatedData.status,
        priority: validatedData.priority,
        assigneeId: validatedData.assigneeId ?? null,
        dueDate: validatedData.dueDate ?? null,
        projectId: validatedData.projectId ?? null,
      },
    });

    return { success: true, task };
  } catch (error) {
    console.error('Error creating task:', error);

    return { success: false, error: 'Internal Server Error' };
  }
}
