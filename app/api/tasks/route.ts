import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { taskFormSchema, TaskFormType } from '@/schemas/task-schema';

export async function POST(request: NextRequest) {
  try {
    const taskData: TaskFormType = await request.json();
    const { data: validatedTaskData, success } =
      taskFormSchema.safeParse(taskData);
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Invalid data' },
        { status: 400 }
      );
    }
    const task = await prisma.task.create({
      data: {
        title: validatedTaskData.title,
        description: validatedTaskData.description ?? null,
        status: validatedTaskData.status,
        priority: validatedTaskData.priority,
        assigneeId: validatedTaskData.assigneeId ?? null,
        dueDate: validatedTaskData.dueDate ?? null,
        projectId: validatedTaskData.projectId ?? null,
      },
    });

    return NextResponse.json({ success: true, task }, { status: 201 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();

    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
