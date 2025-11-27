"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BlueprintBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function BlueprintBackground({
  children,
  className,
}: BlueprintBackgroundProps) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
