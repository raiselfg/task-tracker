'use client';

import { SignOut } from '@/app/auth/actions';
import { Button } from '../ui/button';

export const SignOutButton = () => {
  return (
    <>
      <Button onClick={async () => SignOut()}>Sign out</Button>
    </>
  );
};
