"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  onClose?: (id: string) => void;
};

export function Toast({ id, title, description, onClose }: ToastProps) {
  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur transition",
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
        <div className="flex-1 space-y-1">
          {title ? <p className="text-sm font-semibold text-white">{title}</p> : null}
          {description ? (
            <p className="text-xs text-gray-200 leading-relaxed">{description}</p>
          ) : null}
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={() => onClose(id)}
            className="text-xs font-semibold text-gray-200 transition hover:text-white"
            aria-label="Dismiss"
          >
            ✕
          </button>
        ) : null}
      </div>
    </div>
  );
}
