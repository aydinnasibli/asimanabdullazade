import type { Metadata } from "next";
import { Inter, Newsreader, Geist } from "next/font/google";
import "./globals.css";
import Navigation from  "@/components/Navigation";
import Footer from  "@/components/Footer";
import MobileNav from  "@/components/MobileNav";
import CustomCursor from "@/components/CustomCursor";
import { cn } from  "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-newsreader"
});

export const metadata: Metadata = {
  title: "Asiman Abdullazade | Photographer",
  description: "Portfolio of Asiman Abdullazade, Lead Photographer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} antialiased flex flex-col min-h-screen`}>
        <CustomCursor />
        <Navigation />
        <div className="flex-1 flex flex-col pt-14 max-w-screen-2xl mx-auto w-full">
          {children}
          <Footer />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
