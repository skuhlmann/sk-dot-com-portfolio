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

export const metadata: Metadata = {
  title: "Sam Kuhlmann",
  description: "Structured Record Access Layer — SBI-FA",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sam Kuhlmann",
    description: "Structured Record Access Layer — SBI-FA",
    type: "website",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Sam Kuhlmann",
    description: "Structured Record Access Layer — SBI-FA",
    images: ["/android-chrome-512x512.png"],
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
