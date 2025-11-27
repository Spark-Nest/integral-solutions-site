"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses =
      variant === "outline"
        ? "border border-cyan-300/60 bg-white/10 text-cyan-100 hover:border-cyan-200 hover:text-white"
        : variant === "ghost"
          ? "text-cyan-100 hover:bg-white/10 hover:text-white focus-visible:ring-offset-0"
          : "bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 text-slate-900 shadow-lg hover:shadow-cyan-400/40 disabled:opacity-60";

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          variantClasses,
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
