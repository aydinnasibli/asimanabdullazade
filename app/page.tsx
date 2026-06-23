import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "Asiman Abdullazade — Photographer, Filmmaker, Designer",
  description:
    "Portfolio of Asiman Abdullazade — photographer, filmmaker, and designer based in Baku, Azerbaijan. Exploring landscapes, short films, and brand identity.",
  alternates: { canonical: "https://asimanabdullazade.com" },
  openGraph: {
    title: "Asiman Abdullazade",
    description:
      "Photographer, filmmaker, and designer based in Baku, Azerbaijan.",
    url: "https://asimanabdullazade.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asiman Abdullazade",
    description:
      "Photographer, filmmaker, and designer based in Baku, Azerbaijan.",
  },
};

export default function Home() {
  return <HomeHero />;
}
