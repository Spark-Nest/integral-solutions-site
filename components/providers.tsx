"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  useLenis();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
