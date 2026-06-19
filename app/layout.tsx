import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Space_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/chat/AIChatbot";
import HydrationGuard from "@/components/ui/HydrationGuard";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Let's Talk with Bossbaby -Mental Health Support in Kenya",
    template: "%s | Let's Talk with Bossbaby"
  },
  description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Counseling, programs, and community support since 2021. Conversations save lives.",
  metadataBase: new URL("https://ltwbb.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Let's Talk with Bossbaby -Mental Health Support in Kenya",
    description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Counseling, programs, and community support since 2021. Conversations save lives.",
    url: "https://ltwbb.org",
    siteName: "Let's Talk with Bossbaby",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Talk with Bossbaby -Mental Health Support in Kenya",
    description: "LTWBB CBO creates safe spaces for mental health conversations across Kenya. Counseling, programs, and community support since 2021. Conversations save lives.",
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
      className={`${cormorantGaramond.variable} ${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full bg-white" suppressHydrationWarning={true}>
          <HydrationGuard>
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <AIChatbot />
            <Toaster position="top-center" />
          </HydrationGuard>
      </body>
    </html>
  );
}
