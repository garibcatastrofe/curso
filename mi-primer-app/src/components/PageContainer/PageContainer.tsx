import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: ContainerProps) {
  return (
    <section
      className={`flex flex-col w-full h-[calc(100vh-5rem)] z-40 text-center absolute transition-all duration-300 top-20 bg-neutral-100`}
    >
      <div className="flex">{children}</div>
    </section>
  );
}
