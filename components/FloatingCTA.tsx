"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative rounded-xl border border-blue-500/30 bg-[#0b1120] p-5 shadow-2xl shadow-blue-900/20 max-w-xs">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gray-700 text-gray-300 flex items-center justify-center hover:bg-gray-600 text-sm"
            >
              &times;
            </button>
            <p className="text-sm font-semibold text-white mb-1">
              Ready to get started?
            </p>
            <p className="text-xs text-gray-400 mb-3">
              Book a free discovery call with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
