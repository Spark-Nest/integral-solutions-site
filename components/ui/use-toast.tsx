"use client";

import * as React from "react";
import { Toast } from "./toast";

type ToastConfig = {
  title?: string;
  description?: string;
};

type ToastContextValue = {
  toast: (config: ToastConfig) => void;
};

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<
    Array<ToastConfig & { id: string }>
  >([]);

  const toast = React.useCallback((config: ToastConfig) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...config, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismiss = (id: string) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="pointer-events-none fixed inset-0 z-[120] flex items-start justify-end px-4 py-6 sm:items-start">
        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          {toasts.map((t) => (
            <Toast
              key={t.id}
              id={t.id}
              title={t.title}
              description={t.description}
              onClose={dismiss}
            />
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
