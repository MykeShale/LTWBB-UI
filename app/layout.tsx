import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Let's Talk with Bossbaby",
    template: "%s | Let's Talk with Bossbaby"
  },
  description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Book counseling, access resources, and join our community. Conversations save lives.",
  metadataBase: new URL("https://ltwbb.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Let's Talk with Bossbaby - Mental Health Support in Kenya",
    description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Book counseling, access resources, and join our community.",
    url: "https://ltwbb.org",
    siteName: "Let's Talk with Bossbaby",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Talk with Bossbaby - Mental Health Support in Kenya",
    description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Conversations save lives.",
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
      <body className="min-h-full flex flex-col bg-gradient-to-br from-brand-light/30 to-white" suppressHydrationWarning>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <AIChatbot />
      </body>
    </html>
  );
}
