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
import { SignupFormData, signupSchema } from '@/schemas/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '@/app/auth/actions';
import { Field, FieldDescription } from '@/components/ui/field';
import { SignupForm } from '@/components/auth/sign-up-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (values: SignupFormData) => {
    const formData = new FormData();
    formData.append('fullname', values.fullname);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('confirmPassword', values.confirmPassword);

    const result = await signup(formData);

    if (result?.error) {
      toast.error(`Signup error: ${result.error}`);
    } else {
      toast.success('Signup successful! Confrim your email with OTP code!');
      localStorage.setItem('userEmail', values.email);
      setTimeout(() => router.push('/auth/otpVerify'), 10);
    }
  };

  return (
    <SignupForm>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    type="text"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Field>
            <Field className="grid grid-cols-2 gap-4">
              <Field>
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
              </Field>
              <Field>
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <PasswordInput field={field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Field>
            </Field>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
          </Field>
          <Field>
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Create Account
            </Button>
            <FieldDescription className="text-center">
              Already have an account? <a href="/auth/login">Login</a>
            </FieldDescription>
          </Field>
        </form>
      </Form>
    </SignupForm>
  );
}
