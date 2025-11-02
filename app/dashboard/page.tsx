import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import { SignOutButton } from '@/components/auth/sign-out-button';
import { Header } from '@/components/shared/header';

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <>
      <Header />
      <p>Hello {data.user.email}</p>
      <SignOutButton />
    </>
  );
}
