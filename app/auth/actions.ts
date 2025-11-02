'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { loginSchema, signupSchema } from '@/schemas/auth-schema';
import { prisma } from '@/lib/prisma';
import { OtpSchema } from '@/schemas/otp-schema';

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
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const data = {
    fullname: formData.get('fullname') as string,
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
  const { fullname, email, password } = result.data;
  const { data: authData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
      },
    },
  });
  if (error) {
    console.error('Supabase signup error:', error.message);
    return { error: error.message };
  }
  if (authData.user) {
    await prisma.profile.upsert({
      where: { id: authData.user.id, email: authData.user.email },
      update: {
        email: authData.user.email ?? email,
        fullname: fullname ?? null,
        avatarUrl: authData.user.user_metadata.avatarUrl ?? null,
        provider: authData.user.app_metadata.provider,
      },
      create: {
        id: authData.user.id,
        email: authData.user.email ?? email,
        fullname: fullname ?? null,
        avatarUrl: authData.user.user_metadata.avatarUrl ?? null,
        provider: authData.user.app_metadata.provider,
      },
    });
  }
  revalidatePath('/', 'layout');
}

export async function SignOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath('/', 'layout');
}

export async function SignInWithGitHub() {
  const supabase = await createClient();

  const { data: authData, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });

  if (error) {
    redirect('/auth/error');
  }

  if (authData.url) {
    redirect(authData.url);
  }
}

export async function otpVerify(formData: FormData, userEmail: string) {
  const supabase = await createClient();
  const data = {
    otp: formData.get('otp') as string,
  };
  const result = OtpSchema.safeParse(data);
  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');
    return { error: errorMessages };
  }
  const { otp } = result.data;

  const { error } = await supabase.auth.verifyOtp({
    email: userEmail,
    token: otp,
    type: 'email',
  });

  if (error) {
    redirect('/auth/error');
  }
}
