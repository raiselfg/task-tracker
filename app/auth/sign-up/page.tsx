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
import { signupSchema, SignupFormData } from '@/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { signup } from '../actions';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { GitHubSignIn } from '@/components/auth/github-signin';

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: SignupFormData) => {
    setError(null);
    const formData = new FormData();
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('confirmPassword', values.confirmPassword);

    await signup(formData);
    toast.success(
      `Email confirmation link has been sended to ${values.email}`,
      { duration: 5000, position: 'top-center' }
    );
  };

  return (
    <Card className="absolute top-1/2 left-1/2 w-sm translate-[-50%]">
      <CardHeader>
        <CardTitle>Sign up to your account</CardTitle>
        <CardDescription>
          Sign up to your account via email and password or socials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {error &&
              toast.error(`Error while sign up: ${error}`, {
                duration: 5000,
                position: 'top-center',
              })}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@mail.com"
                      type="email"
                      {...field}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Sign up
            </Button>
          </form>
        </Form>
        <GitHubSignIn />
      </CardContent>
      <CardFooter>
        <Link href={'/auth/login'}>
          <p className="text-foreground/50 text-sm">
            Already have an account? Login.
          </p>
        </Link>
      </CardFooter>
    </Card>
  );
}
