'use client';

import useSWR from 'swr';
import { api } from '@/lib/axios';
import { Task } from '@/app/generated/prisma';

const fetcher = (url: string) => api.get<Task[]>(url).then((res) => res.data);

export function useTasks() {
  const { data, error, isLoading } = useSWR('/tasks', fetcher);

  return {
    tasks: data ?? [],
    isLoading,
    isError: error,
  };
}
