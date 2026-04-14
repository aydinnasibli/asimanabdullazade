"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const collections = [
  {
    index: "01",
    year: "2024",
    count: "012 / 100",
    title: "Brutalist Silence",
    format: "35mm Archival Ink",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY",
  },
  {
    index: "02",
    year: "2023",
    count: "008 / 050",
    title: "Fog & Pines",
    format: "Medium Format Digital",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA",
  },
  {
    index: "03",
    year: "2022",
    count: "024 / 080",
    title: "Alpine Grain",
    format: "Infrared Exposure",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k",
  },
  {
    index: "04",
    year: "2021",
    count: "015 / 060",
    title: "Concrete Rhythms",
    format: "Large Format Film",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM",
  },
  {
    index: "05",
    year: "2020",
    count: "042 / 120",
    title: "Tidal Tones",
    format: "Medium Format Digital",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
  },
  {
    index: "06",
    year: "2019",
    count: "003 / 040",
    title: "Monolith Shadows",
    format: "35mm Archival Ink",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI",
  },
];

export default function ArchiveClient() {
  const [hovered, setHovered] = useState(0);

  return (
    <main className="flex-grow pt-12 md:pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Archive Header */}
        <Reveal>
          <header className="mb-16 md:mb-24 max-w-4xl">
            <h1 className="font-headline text-5xl md:text-7xl font-normal tracking-tight mb-8">
              Selected Archives
            </h1>
            <p className="font-body text-zinc-500 max-w-xl leading-relaxed">
              A chronological index of photographic explorations. A visual record of silence, texture,
              and the dialogue between light and monolithic landscapes.
            </p>
          </header>
        </Reveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left: scrollable list */}
          <div className="col-span-full md:col-span-7 border-t border-outline-variant">
            {collections.map((col, i) => (
              <Reveal key={col.index} delay={i * 100}>
                <a
                  href="#"
                  className="group block border-b border-outline-variant"
                  onMouseEnter={() => setHovered(i)}
                >
                  {/* Mobile: thumbnail row */}
                  <div className="flex md:hidden items-center gap-6 py-6">
                    <div className="w-14 h-18 flex-shrink-0 bg-surface-container-highest overflow-hidden"
                      style={{ height: "72px" }}>
                      <img
                        src={col.src}
                        alt={col.title}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-label text-[10px] tracking-widest text-outline uppercase">
                        {col.index} — {col.year}
                      </span>
                      <h2 className="font-headline text-2xl tracking-tight mt-1 truncate">{col.title}</h2>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors flex-shrink-0">
                      arrow_outward
                    </span>
                  </div>

                  {/* Desktop: full row */}
                  <div className="hidden md:flex items-center justify-between gap-8 py-10">
                    <div className="flex items-baseline gap-8">
                      <span className="font-label text-[10px] text-outline w-6 flex-shrink-0">
                        {col.index}
                      </span>
                      <h2
                        className={`font-headline text-4xl tracking-tight transition-all duration-300 ease-out ${
                          hovered === i ? "italic" : ""
                        }`}
                      >
                        {col.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-10 flex-shrink-0 text-right">
                      <div className="hidden lg:block">
                        <span className="font-label text-[10px] tracking-widest text-outline block uppercase">
                          Format
                        </span>
                        <span className="font-body text-xs uppercase">{col.format}</span>
                      </div>
                      <div>
                        <span className="font-label text-[10px] tracking-widest text-outline block uppercase">
                          Year
                        </span>
                        <span className="font-body text-xs uppercase">{col.year}</span>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Right: sticky image panel (desktop only) */}
          <Reveal delay={400} className="hidden md:block md:col-span-4 md:col-start-9 pl-10">
            <div className="sticky top-40">
              <div className="relative aspect-[3/4] bg-surface-container-highest overflow-hidden">
                {collections.map((col, i) => (
                  <img
                    key={col.index}
                    src={col.src}
                    alt={col.title}
                    className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out ${
                       hovered === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <span className="font-headline italic text-xl tracking-tight transition-all duration-300">
                  {collections[hovered].title}
                </span>
                <span className="font-label text-[10px] tracking-widest text-outline uppercase">
                  {collections[hovered].count}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pagination */}
        <Reveal delay={200}>
          <div className="mt-24 flex justify-center">
            <button className="font-label text-[10px] tracking-[0.4em] uppercase border-b border-black pb-2 hover:opacity-50 transition-opacity">
              VIEW FULL CATALOGUE
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
