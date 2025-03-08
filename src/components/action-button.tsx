import React, { type ReactNode } from "react";
import { Button } from "./ui/button";

export default function ActionButton({
  children,
  className,
  href,
  onClick,
  transition = true,
}: {
  children: ReactNode;
  className: string;
  href?: string;
  onClick?: () => void;
  transition?: boolean;
}) {

  if (href) {
    return (
      <a href={href} data-astro-prefetch={transition ? "tap" : undefined}>
        <Button className={className} onClick={onClick}>
          {children}
        </Button>
      </a>
    );
  }

  // Otherwise, render as a regular button with optional onClick
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
}
