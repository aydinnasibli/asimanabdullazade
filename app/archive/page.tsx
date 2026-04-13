import type { Metadata } from "next";
import ArchiveClient from "./ArchiveClient";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "A chronological index of photographic explorations by Asiman Abdullazade — archival prints, landscape series, and limited-edition collections from 2019 to present.",
  alternates: {
    canonical: "https://asimanabdullazade.com/archive",
  },
  openGraph: {
    title: "Archive | Asiman Abdullazade",
    description:
      "A visual record of silence, texture, and the dialogue between light and monolithic landscapes. Selected collections from 2019 to present.",
    url: "https://asimanabdullazade.com/archive",
  },
};

export default function Archive() {
  return <ArchiveClient />;
}
