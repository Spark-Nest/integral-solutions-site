"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const checked = mounted ? resolvedTheme === "dark" : false;

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-wide text-white/70 dark:border-white/5 dark:bg-black/20">
      <span>Light</span>
      <Switch
        aria-label="Toggle theme"
        checked={checked}
        onCheckedChange={(state) => setTheme(state ? "dark" : "light")}
      />
      <span>Dark</span>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border border-white/10 bg-white/5 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl dark:border-white/5 dark:bg-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-semibold text-accent dark:border-white/10 dark:bg-white/5">
            ∫
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-white">
              Integral Solutions Inc.
            </p>
            <p className="text-sm text-white/70">
              Asset Management & Engineering Consulting
            </p>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide text-white/80 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative pb-1 transition-colors hover:text-white"
            >
              <span
                className={cn(
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#38bdf8] after:transition-transform after:duration-200 hover:after:scale-x-100",
                )}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#38bdf8]/50 hover:text-[#38bdf8] dark:border-white/5 dark:bg-black/30 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="w-full border-t border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl dark:border-white/5">
              <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wide text-white/80">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="relative rounded-lg px-2 py-2 transition hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className={cn(
                        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#38bdf8] after:transition-transform after:duration-200 hover:after:scale-x-100",
                      )}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <ModeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
