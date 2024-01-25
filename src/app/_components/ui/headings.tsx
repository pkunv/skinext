export function Heading1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
      {children}
    </h1>
  );
}

export function Heading2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-extrabold tracking-tight sm:text-[4rem]">
      {children}
    </h2>
  );
}
