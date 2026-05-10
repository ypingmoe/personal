import type { Metadata } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ypingmoe.github.io/personal"),
  title: {
    default: "Yping Moe | Full-Stack & AI Developer",
    template: "%s | Yping More",
  },
  description:
    "Full-stack developer and AI developer specializing in C#, Java, trading bot development, blockchain + AI systems, and Polymarket bot development.",
  keywords: [
    "full-stack developer",
    "ai developer",
    "c# developer",
    "java developer",
    "trading bot developer",
    "blockchain and ai master",
    "polymarket bot developer",
    "next.js developer portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yping Moe | Full-Stack & AI Developer",
    description:
      "Portfolio of a full-stack developer and AI developer building C#, Java, trading bots, blockchain AI systems, and Polymarket bots.",
    url: "/",
    siteName: "Yping Moe Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yping Moe | Full-Stack & AI Developer",
    description:
      "Full-stack developer, AI developer, C#/Java developer, trading bot developer, blockchain + AI builder.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
