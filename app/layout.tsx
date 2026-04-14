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

const siteUrl = "https://asimanabdullazade.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asiman Abdullazade | Fine-Art Photographer",
    template: "%s | Asiman Abdullazade",
  },
  description:
    "Portfolio of Asiman Abdullazade — fine-art and medium-format photographer based between London and the High Atlas. Archival prints, editorial work, and exhibition photography.",
  keywords: [
    "Asiman Abdullazade",
    "fine-art photography",
    "medium format photographer",
    "archival prints",
    "black and white photography",
    "landscape photography",
    "editorial photography",
    "London photographer",
    "High Atlas photography",
  ],
  authors: [{ name: "Asiman Abdullazade", url: siteUrl }],
  creator: "Asiman Abdullazade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Asiman Abdullazade",
    title: "Asiman Abdullazade | Fine-Art Photographer",
    description:
      "A curated archive of monolithic landscapes and architectural silence. Fine-art and medium-format photography by Asiman Abdullazade.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asiman Abdullazade — Fine-Art Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiman Abdullazade | Fine-Art Photographer",
    description:
      "A curated archive of monolithic landscapes and architectural silence. Fine-art and medium-format photography by Asiman Abdullazade.",
    images: ["/og-image.jpg"],
    creator: "@asimanabdullazade",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
