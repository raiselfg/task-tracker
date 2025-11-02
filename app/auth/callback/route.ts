import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  let next = searchParams.get('next') ?? '/';
  if (!next.startsWith('/')) {
    next = '/';
  }

  if (code) {
    const supabase = await createClient();
    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('OAuth exchange error:', error.message);
      return NextResponse.redirect(`${origin}/auth/auth-code-error`);
    }

    if (session?.user) {
      await prisma.profile.upsert({
        where: { id: session.user.id, email: session.user.email },
        update: {
          email: session.user.email ?? '',
          fullname:
            session.user.user_metadata.full_name ||
            session.user.user_metadata.name ||
            '', // Для GitHub: 'name'
          avatarUrl: session.user.user_metadata.avatar_url || '',
          provider: session.user.app_metadata.provider || '',
        },
        create: {
          id: session.user.id,
          email: session.user.email ?? '',
          fullname:
            session.user.user_metadata.full_name ||
            session.user.user_metadata.name ||
            '',
          avatarUrl: session.user.user_metadata.avatar_url || '',
          provider: session.user.app_metadata.provider || '',
        },
      });
    }

    // Безопасный redirect с учётом forwarded host
    const forwardedHost = request.headers.get('x-forwarded-host');
    const forwardedProto = request.headers.get('x-forwarded-proto') ?? 'https';
    const redirectUrl = forwardedHost
      ? `${forwardedProto}://${forwardedHost}${next}`
      : `${origin}${next}`;

    return NextResponse.redirect(redirectUrl);
  }

  // Ошибка: нет кода
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
