import { Modal } from '@/components/shared/modal';
import { ReactNode } from 'react';

export default function AuthLayout({
  children,
  auth,
}: {
  children: ReactNode;
  auth: ReactNode;
}) {
  return (
    <>
      {children}
      <Modal>{auth}</Modal>
    </>
  );
}
