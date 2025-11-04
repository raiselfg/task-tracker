import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { ThemeToggle } from '../ui/theme-toggle';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';
import { TaskManageButton } from '../task/task-manage-button';
import { createClient } from '@/lib/supabase/server';

export const Header = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <header className="mb-6 border-b py-6">
      <Container className="flex items-center justify-between">
        <Link href={'/'}>
          <p className="text-center text-3xl">@raiselfg</p>
        </Link>

        <SearchInput />

        <div className="flex items-center gap-2">
          <Suspense fallback={<Skeleton className="h-9 w-20" />}>
            <TaskManageButton />
          </Suspense>

          {!data.user ? (
            <Button>
              <Link href={'/auth/login'}>Login</Link>
            </Button>
          ) : (
            <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
            </Link>
          )}

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
