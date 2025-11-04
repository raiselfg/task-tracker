'use client';

import { OTPForm } from '@/components/auth/otp-verify-form';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { OtpFormData, OtpSchema } from '@/schemas/otp-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { otpVerify } from '@/app/auth/actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OtpVerify() {
  const router = useRouter();
  const userEmail = localStorage.getItem('userEmail') || '';

  const form = useForm<OtpFormData>({
    resolver: zodResolver(OtpSchema),
    defaultValues: {
      otp: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (data: OtpFormData) => {
    const formData = new FormData();
    formData.append('otp', data.otp);

    const result = await otpVerify(formData, userEmail);

    if (result?.error) {
      toast.error(`Login error: ${result.error}`);
    } else {
      toast.success('Verification successful!');
      setTimeout(() => router.push('/auth/login'), 10);
    }
  };

  return (
    <OTPForm>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">
                      Verification code for {userEmail}
                    </FormLabel>
                    <FormControl>
                      <Field>
                        <InputOTP
                          maxLength={6}
                          id="otp"
                          required
                          containerClassName="gap-4"
                          {...field}
                        >
                          <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:h-16 *:data-[slot=input-otp-slot]:w-12 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border *:data-[slot=input-otp-slot]:text-xl">
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                        <FieldDescription className="">
                          <Link href={'/auth/sign-up'}>
                            Wrong email address? Back to Sign Up
                          </Link>
                        </FieldDescription>
                      </Field>
                    </FormControl>
                  </FormItem>
                )}
              />
            </Field>
            <Field>
              <Button type="submit">Verify</Button>
            </Field>
          </FieldGroup>
        </form>
      </Form>
    </OTPForm>
  );
}
