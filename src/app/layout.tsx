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
  title: "SBI Field Archive",
  description: "Structured Record Access Layer — SBI-FA",
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
