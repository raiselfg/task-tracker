import { NextRequest, NextResponse } from 'next/server';
import { taskFormSchema } from '@/schemas/task-schema';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = taskFormSchema.safeParse({
      ...body,
      dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const newTask = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
        priority: data.priority,
        dueDate: data.dueDate,
        assigneeId: data.assigneeId || null,
        creatorId: 'cmhcisi960000dn8gui03p7ag',
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const tasks = await prisma.task.findMany();

    return NextResponse.json({
      tasks,
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
