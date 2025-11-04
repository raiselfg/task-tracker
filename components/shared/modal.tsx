export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/70">
      <div className="absolute top-1/2 left-1/2 w-full max-w-sm translate-[-50%]">
        {children}
      </div>
    </div>
  );
}
