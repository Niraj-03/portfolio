import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niraj.dev"),
  title: "Niraj Vishwakarma | Full-Stack & AI Engineer",
  description:
    "Portfolio of Niraj Vishwakarma — full-stack developer and AI engineer crafting production-ready web experiences and intelligent systems.",
  keywords: [
    "Niraj Vishwakarma",
    "Full-Stack Developer",
    "AI Engineer",
    "Python Developer",
    "Django",
    "Next.js Portfolio",
    "RAG Systems",
    "React Developer",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Niraj Vishwakarma" }],
  creator: "Niraj Vishwakarma",
  alternates: {
    canonical: "https://niraj.dev",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Niraj Vishwakarma | Full-Stack & AI Engineer",
    description: "Crafting intelligent web applications and scalable architectures.",
    url: "https://niraj.dev",
    siteName: "Niraj Vishwakarma",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero.jpg",
        width: 2400,
        height: 1350,
        alt: "Niraj Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Vishwakarma | Full-Stack & AI Engineer",
    description: "Crafting intelligent web applications and scalable architectures.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[#020617] text-slate-100 selection:bg-[#3B82F6]/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}