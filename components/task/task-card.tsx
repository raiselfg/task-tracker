'use client';

import { Task } from '@/app/generated/prisma';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { Suspense } from 'react';

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge>{task.status}</Badge>
          <Badge>{task.priority}</Badge>
        </div>
        {task.dueDate && (
          <Suspense
            fallback={
              <p className="text-muted-foreground text-sm">
                Loading due date...
              </p>
            }
          >
            <p className="text-muted-foreground text-sm">
              Due: {format(new Date(task.dueDate), 'PPP')}
            </p>
          </Suspense>
        )}
        <p className="text-muted-foreground text-sm">
          Assignee: {task.assigneeId || 'Unassigned'}
        </p>
      </CardContent>
      <CardFooter>
        {/* Add any actions here, e.g., edit or delete buttons */}
      </CardFooter>
    </Card>
  );
};
