import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SystemHeader from "@/components/SystemHeader";
import SiteFooter from "@/components/SiteFooter";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
);

const previewImage = {
  url: "/apple-touch-icon-152x152.png",
  width: 152,
  height: 152,
  alt: "Sam Kuhlmann",
};

export const metadata: Metadata = {
  metadataBase,
  title: "Sam Kuhlmann",
  description: "Structured Record Access Layer — SBI-FA",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sam Kuhlmann",
    description: "Structured Record Access Layer — SBI-FA",
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary",
    title: "Sam Kuhlmann",
    description: "Structured Record Access Layer — SBI-FA",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} h-full`}>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
      >
        <SystemHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
