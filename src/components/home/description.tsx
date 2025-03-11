import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Description = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "relative z-10 text-center text-gray-600 antialiased ",className
    )}
  >
    {children}
  </p>
);
