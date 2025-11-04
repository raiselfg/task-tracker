import { TaskCard } from './task-card';
import { prisma } from '@/lib/prisma';

export default async function TaskList() {
  const tasks = await prisma.project.findMany();
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id}>{/*<TaskCard task={task} />*/}</div>
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
}
