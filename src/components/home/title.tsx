import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Title = ({ children,className }: { children: ReactNode,className?:string }) => (
  <h1
    className={cn(
      "relative z-30 mb-4 text-center  font-extrabold tracking-wide text-gray-800 antialiased ",className)}
  >
    {children}
  </h1>
);
