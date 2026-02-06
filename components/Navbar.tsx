"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0a0f1e] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-end gap-8 py-2.5 text-sm text-gray-400">
            <a
              href="mailto:info@integralsolutionsinc.ca"
              className="hover:text-blue-400 transition"
            >
              info@integralsolutionsinc.ca
            </a>
            <a
              href="tel:+14034023670"
              className="hover:text-blue-400 transition"
            >
              +1 (403) 402-3670
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "bg-[#0b1120]/98 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-[#0b1120]/95 backdrop-blur-md border-white/5"
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xl font-bold shadow-lg shadow-blue-900/30">
                ∫
              </div>
              <div>
                <p
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Integral Solutions
                </p>
                <p className="text-[11px] text-gray-500 tracking-[0.15em] uppercase">
                  Engineering &middot; Reliability &middot; Integrity
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[15px] font-medium text-gray-300 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Contact button & mobile menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md shadow-blue-900/30"
              >
                Contact Us
              </Link>
              <button
                className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {open ? (
                  <span className="text-xl text-white leading-none">&times;</span>
                ) : (
                  <>
                    <span className="block w-5 h-[2px] bg-white rounded-full" />
                    <span className="block w-5 h-[2px] bg-white rounded-full" />
                    <span className="block w-3.5 h-[2px] bg-white rounded-full" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/5 bg-[#0b1120]"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block py-3 text-[15px] font-medium text-gray-300 hover:text-white border-b border-white/5 last:border-0"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block py-3 text-[15px] font-semibold text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
