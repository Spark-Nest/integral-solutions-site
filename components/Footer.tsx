"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Maintenance Management", href: "/services" },
    { label: "Plant Reliability", href: "/services" },
    { label: "Fixed Equipment Integrity", href: "/services" },
    { label: "Engineering Consulting", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060a14] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Brand & Contact */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/images/projects/integral_logo.jpg"
                  alt="Integral Solutions Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <p className="text-xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Integral Solutions Inc.
                </p>
                <p className="mt-1 text-[10px] font-medium tracking-[0.22em] text-blue-400/75 uppercase">
                  Engineering &middot; Reliability &middot; Integrity
                </p>
              </div>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed">
              We help industrial facilities across North America achieve
              operational excellence through innovative reliability, integrity,
              and asset management solutions.
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-gray-400 text-sm">
              <a
                href="mailto:info@integralsolutionsinc.ca"
                className="block hover:text-blue-400 transition-colors"
              >
                info@integralsolutionsinc.ca
              </a>
              <a
                href="tel:+14034023670"
                className="block hover:text-blue-400 transition-colors"
              >
                +1 (403) 402-3670
              </a>
              <p>Calgary, Alberta, Canada</p>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Integral Solutions Inc. All rights
            reserved.
          </p>
          <Link
            href="/contact"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Start a Project &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
