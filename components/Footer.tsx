"use client";

import Link from "next/link";

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
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xl font-bold">
                ∫
              </div>
              <div>
                <p
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Integral Solutions Inc.
                </p>
                <p className="text-sm text-gray-500">
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
