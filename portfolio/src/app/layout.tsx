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

export const metadata: Metadata = {
  title: "Tôn Quỳnh Long — Fullstack Developer",
  description:
    "Fullstack Developer building production systems. Tutor Pro (solo, live) + Flood Rescue Coordination (Tech Lead, 6-person team).",
  openGraph: {
    title: "Tôn Quỳnh Long — Fullstack Developer",
    description: "I design the interface, architect the backend, and ship the whole thing.",
    url: "https://tonquynhlong.dev",
    siteName: "TQL Portfolio",
    locale: "en_US",
    type: "website",
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
