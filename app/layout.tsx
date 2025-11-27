import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist_Mono, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
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
  metadataBase: new URL("https://integralsolutionsinc.ca"),
  title: {
    default: "Integral Solutions Inc. | Engineering • Reliability • Integrity",
    template: "%s | Integral Solutions Inc.",
  },
  description:
    "Integral Solutions Inc. provides engineering consulting, plant reliability services, fixed equipment integrity management, and asset management solutions across North America.",
  keywords: [
    "engineering consulting",
    "asset management",
    "plant reliability",
    "RBI",
    "pressure equipment integrity",
    "RCM",
    "maintenance optimization",
    "industrial engineering",
    "pipeline integrity",
  ],
  openGraph: {
    type: "website",
    url: "https://integralsolutionsinc.ca",
    title: "Integral Solutions Inc. | Engineering • Reliability • Integrity",
    description:
      "Supporting industrial facilities across North America with engineering expertise in reliability, integrity, maintenance, and asset management.",
    siteName: "Integral Solutions Inc.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Integral Solutions Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Solutions Inc.",
    description: "Engineering, reliability, maintenance, and integrity expertise.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
