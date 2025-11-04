import TaskList from '@/components/task/task-list';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 10 }, (_, index) => (
              <Skeleton key={index} className="h-48 w-full max-w-md" />
            ))}
          </div>
        }
      >
        <TaskList />
      </Suspense>
    </>
  );
}
