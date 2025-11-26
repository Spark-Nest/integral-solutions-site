import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist_Mono, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/lenis-provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Integral Solutions",
  description: "Modern Next.js 14 starter with Tailwind, shadcn/ui, theming, and smooth scrolling.",
  keywords: [
    "Next.js 14",
    "TailwindCSS",
    "shadcn/ui",
    "lenis",
    "framer-motion",
    "next-themes",
  ],
  openGraph: {
    title: "Integral Solutions",
    description: "Modern Next.js 14 starter with Tailwind, shadcn/ui, theming, and smooth scrolling.",
    url: "https://example.com",
    siteName: "Integral Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Integral Solutions preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-white antialiased",
          inter.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="container mx-auto max-w-6xl px-6 py-12 md:py-16">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
