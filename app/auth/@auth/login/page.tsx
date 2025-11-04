'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/auth/password-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginFormData } from '@/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm } from '@/components/auth/login-form';
import { Field, FieldDescription } from '@/components/ui/field';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { login } from '@/app/auth/actions';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (values: LoginFormData) => {
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);

    const result = await login(formData);

    if (result?.error) {
      toast.error(`Login error: ${result.error}`);
    } else {
      toast.success('Login successful!');
      setTimeout(() => router.push('/'), 10);
    }
  };

  return (
    <LoginForm>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@mail.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Field>
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Login
            </Button>
            <FieldDescription className="text-center">
              Don&apos;t have an account? <a href="/auth/sign-up">Sign up</a>
            </FieldDescription>
          </Field>
        </form>
      </Form>
    </LoginForm>
  );
}
