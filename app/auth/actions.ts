'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { loginSchema, signupSchema } from '@/schemas/auth-schema';
import { toast } from 'sonner';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const result = loginSchema.safeParse(data);
  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');
    return { error: errorMessages };
  }

  const { error } = await supabase.auth.signInWithPassword(result.data);

  if (error) {
    redirect('/auth/error');
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  const result = signupSchema.safeParse(data);
  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');
    return { error: errorMessages };
  }

  const { error } = await supabase.auth.signUp(result.data);

  if (error) {
    redirect('/auth/error');
  }

  revalidatePath('/', 'layout');
  redirect('/auth/login');
}

export async function SignOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath('/', 'layout');
  redirect('/auth/login');
}

export async function SignInWithGitHub() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });

  if (error) {
    redirect('/auth/error');
  }

  if (data.url) {
    redirect(data.url);
  }
}
