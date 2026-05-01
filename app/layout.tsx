import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://asimanabdullazade.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asiman Abdullazade",
    template: "%s | Asiman Abdullazade",
  },
  description:
    "Portfolio of Asiman Abdullazade — photographer, filmmaker, and designer based in Baku, Azerbaijan.",
  keywords: [
    "Asiman Abdullazade",
    "photography",
    "film",
    "design",
    "Baku",
    "Azerbaijan",
    "portfolio",
  ],
  authors: [{ name: "Asiman Abdullazade", url: siteUrl }],
  creator: "Asiman Abdullazade",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Asiman Abdullazade",
    title: "Asiman Abdullazade",
    description:
      "Photographer, filmmaker, and designer based in Baku, Azerbaijan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable)}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1 flex flex-col" style={{ paddingTop: 56 }}>
          {children}
        </main>
        <ThemeToggle />
      </body>
    </html>
  );
}
