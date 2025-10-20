import { ReactNode } from "react";

export function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className="absolute top-0 left-0 z-50 flex items-center justify-end w-full h-20 px-2 py-4 shadow-md shadow-neutral-400/10 bg-neutral-100">
      <ul className="flex gap-2">{children}</ul>
    </nav>
  );
}
