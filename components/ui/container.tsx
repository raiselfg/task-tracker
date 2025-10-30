import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)}>{children}</div>
  );
};
