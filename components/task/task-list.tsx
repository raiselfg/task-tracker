import { prisma } from '@/lib/prisma';
import { TaskCard } from './task-card';

export const TaskList = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
