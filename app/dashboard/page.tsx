import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import { SignOutButton } from '@/components/auth/sign-out-button';

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/sign-in');
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <SignOutButton />
    </>
  );
}
