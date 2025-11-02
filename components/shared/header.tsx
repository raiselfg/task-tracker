import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { ThemeToggle } from '../ui/theme-toggle';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { CreateTaskButton } from '../task/create-task-button';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

export const Header = () => {
  return (
    <header className="mb-6 border-b py-6">
      <Container className="flex items-center justify-between">
        <Link href={'/'}>
          <p className="text-center text-3xl">@raiselfg</p>
        </Link>

        <SearchInput />

        <div className="flex items-center gap-2">
          <Suspense fallback={<Skeleton className="h-9 w-20" />}>
            <CreateTaskButton />
          </Suspense>

          <Link href={'/dashboard'}>
            <Button>Dashboard</Button>
          </Link>
          <Link href={'/favorite'}>
            <Button size={'icon'}>
              <Heart />
            </Button>
          </Link>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
};
