import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

const BASE_URL = "https://tonquynhlong.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tôn Quỳnh Long — Fullstack Developer",
    template: "%s · Tôn Quỳnh Long",
  },
  description:
    "Fullstack Developer (Next.js + Spring Boot) building production systems. Tutor Pro — solo EdTech SaaS live in production. Flood Rescue Coordination — Tech Lead of 6-person microservices team.",
  keywords: [
    "Fullstack Developer",
    "Next.js",
    "Spring Boot",
    "Java",
    "React",
    "TypeScript",
    "Ho Chi Minh City",
    "Vietnam",
    "internship",
    "fresher",
    "Tôn Quỳnh Long",
    "portfolio",
  ],
  authors: [{ name: "Tôn Quỳnh Long", url: BASE_URL }],
  creator: "Tôn Quỳnh Long",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tôn Quỳnh Long",
    title: "Tôn Quỳnh Long — Fullstack Developer",
    description:
      "I design the interface, architect the backend, and ship the whole thing. 2 production projects. Seeking fullstack internship 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tôn Quỳnh Long — Fullstack Developer",
    description:
      "I design the interface, architect the backend, and ship the whole thing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}