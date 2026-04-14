"use client";

import Link from "next/link";
import Image from "next/image";
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
      {/* Top bar – hidden on mobile to prevent horizontal overflow on small screens */}
      <div className="hidden md:block bg-linear-to-r from-[#05101f] via-[#061326] to-[#05101f] border-b border-cyan-500/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-end gap-8 py-2.5 text-sm text-gray-400">
            <a
              href="mailto:info@integralsolutionsinc.ca"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@integralsolutionsinc.ca
            </a>
            <a
              href="tel:+14034023670"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (403) 402-3670
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar – pt-safe offsets content below the device notch/Dynamic Island */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300 pt-safe",
          scrolled
            ? "bg-[#0b1120]/98 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-[#0b1120]/95 backdrop-blur-md border-white/5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0">
                <Image
                  src="/images/projects/integral_logo.jpg"
                  alt="Integral Solutions Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-lg sm:text-xl font-extrabold tracking-tight leading-none truncate bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Integral Solutions
                </p>
                <p className="mt-1 text-[9px] sm:text-[10px] font-medium tracking-[0.22em] text-blue-400/75 uppercase truncate">
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

            {/* Contact button & mobile menu toggle */}
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md shadow-blue-900/30"
              >
                Contact Us
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {open ? (
                  <span className="text-xl text-white leading-none">&times;</span>
                ) : (
                  <>
                    <span className="block w-5 h-0.5 bg-white rounded-full" />
                    <span className="block w-5 h-0.5 bg-white rounded-full" />
                    <span className="block w-3.5 h-0.5 bg-white rounded-full" />
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
              <div className="px-4 sm:px-6 py-4 space-y-1">
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
