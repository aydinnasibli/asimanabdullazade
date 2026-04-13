"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";

// --- HERO OPTION 1: THE ARCHIVAL DESK ---
const HeroArchivalDesk = () => (
  <section className="relative h-screen -mt-14 overflow-hidden bg-surface-container-low flex items-center justify-center cursor-default">
    {/* Texture Overlay */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dust.png')" }} />
    <div className="film-grain absolute inset-0 pointer-events-none opacity-20" />

    {/* Massive Immersive Background Text */}
    <h1 className="absolute font-headline font-bold uppercase text-[20vw] leading-[0.8] tracking-tighter text-outline-variant/10 whitespace-nowrap select-none pointer-events-none z-0 mix-blend-multiply blur-[2px]">
      ARCHIVE
    </h1>

    {/* The Desk / Scattered Prints */}
    <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center">
      
      {/* Print 1 (Left) */}
      <div className="absolute left-[10%] md:left-[20%] top-[20%] md:top-[15%] w-[45vw] md:w-[25vw] aspect-[4/5] bg-background p-2 md:p-3 shadow-2xl -rotate-6 hover:-translate-y-4 hover:rotate-[-2deg] transition-all duration-500 ease-out z-10 filter grayscale hover:grayscale-0">
        <div className="w-full h-full relative overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" className="object-cover w-full h-full" alt="" />
        </div>
      </div>

      {/* Print 2 (Center) */}
      <div className="absolute left-[25%] md:left-[35%] top-[30%] md:top-[25%] w-[55vw] md:w-[35vw] aspect-[1/1] bg-background p-3 md:p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)] rotate-2 hover:-translate-y-6 hover:rotate-[0deg] transition-all duration-500 ease-out z-30 filter grayscale hover:grayscale-0 group cursor-pointer">
        <div className="w-full h-full relative overflow-hidden bg-black/5">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" alt="" />
        </div>
        <div className="absolute bottom-6 right-6 font-label text-[10px] tracking-widest text-white/80 mix-blend-difference hidden md:block">Plate 01 — The Silence</div>
      </div>

      {/* Print 3 (Right) */}
      <div className="absolute right-[10%] md:right-[15%] top-[45%] md:top-[40%] w-[40vw] md:w-[22vw] aspect-[3/4] bg-background p-2 shadow-xl rotate-[12deg] hover:-translate-y-2 hover:rotate-[8deg] transition-all duration-500 ease-out z-20 filter grayscale hover:grayscale-0">
        <div className="w-full h-full relative overflow-hidden">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="object-cover w-full h-full" alt="" />
        </div>
      </div>
      
    </div>

    {/* Hero Text Overlay */}
    <div className="absolute bottom-12 md:bottom-24 w-full px-6 flex flex-col md:flex-row justify-between items-end z-40 pointer-events-none mix-blend-difference text-white">
      <div>
        <h2 className="font-headline text-3xl md:text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter">
          Asiman<br/>Abdullazade
        </h2>
        <p className="font-label text-[10px] tracking-[0.4em] uppercase mt-4 opacity-80">
          Fine-Art Photography
        </p>
      </div>
      <div className="hidden md:block text-right">
        <p className="font-label text-[10px] tracking-[0.3em] uppercase opacity-60">Curated Archive</p>
        <p className="font-label text-[10px] tracking-[0.3em] uppercase opacity-60">2026</p>
      </div>
    </div>
  </section>
);

// --- HERO OPTION 2: THE FILM STRIP ---
const HeroFilmStrip = () => (
  <section className="relative h-screen -mt-14 overflow-hidden bg-[#0A0A0A] flex flex-col justify-center cursor-default">
    {/* Cinematic Header Text */}
    <div className="absolute top-32 w-full text-center z-10 text-white/90">
      <h1 className="font-headline uppercase text-lg md:text-2xl tracking-[0.5em] md:tracking-[0.8em] font-light">
        Asiman Abdullazade
      </h1>
      <div className="w-px h-12 bg-white/20 mx-auto mt-8 mb-4"></div>
      <p className="font-label text-[9px] tracking-[0.4em] uppercase text-white/50">
        The Monochromatic Lens
      </p>
    </div>

    {/* Infinite Scrolling Film Strip */}
    <div className="w-full relative mt-16 z-0 py-3 md:py-6 h-[32vh] md:h-[45vh]">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
      
      {/* Strip Container wrapped in a fast marquee */}
      <div className="flex gap-4 md:gap-8 min-w-max animate-marquee h-full hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4 md:gap-8 h-full">
            <div className="aspect-[4/3] h-full relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-110 transition-all duration-700" alt="" />
            </div>
            <div className="aspect-[2/3] h-full relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-110 transition-all duration-700" alt="" />
            </div>
            <div className="aspect-[1/1] h-full relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-110 transition-all duration-700" alt="" />
            </div>
            <div className="aspect-[4/5] h-full relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-110 transition-all duration-700" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Discovery Link */}
    <div className="absolute bottom-12 w-full text-center z-10">
      <Link href="/archive" className="font-label text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">
        Enter the Exhibition
      </Link>
    </div>
  </section>
);

// --- HERO OPTION 3: THE CURTAIN REVEAL ---
const HeroCurtainReveal = () => (
  <section className="relative h-screen -mt-14 overflow-hidden flex bg-background cursor-default">
    {/* Left Panel */}
    <div className="flex-1 relative group overflow-hidden border-r border-outline-variant/30 flex items-center justify-center">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-out" alt="" />
      <div className="absolute inset-0 bg-background mix-blend-color pointer-events-none" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-700">
        <h2 className="font-headline font-bold uppercase text-[8vw] leading-none text-on-surface opacity-10">
          Land
        </h2>
      </div>
    </div>
    
    {/* Center Typography Overlay */}
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-difference text-white">
      <h1 className="font-headline font-normal uppercase leading-[0.85] tracking-tighter text-center" style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}>
        ASIMAN<br />ABDULLAZADE
      </h1>
    </div>

    {/* Right Panel */}
    <div className="flex-1 relative group overflow-hidden flex items-center justify-center">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-out" alt="" />
      <div className="absolute inset-0 bg-background mix-blend-color pointer-events-none" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-700">
        <h2 className="font-headline font-bold uppercase text-[8vw] leading-none text-on-surface opacity-10">
          Form
        </h2>
      </div>
    </div>

    {/* Bottom Metadata */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 font-label text-[10px] tracking-[0.4em] uppercase text-white/50 mix-blend-difference">
      Hover to reveal
    </div>
  </section>
);

// --- HERO OPTION 4: THE CLASSIC CENTER ---
const HeroClassicCenter = () => (
  <section className="relative h-screen -mt-14 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0 bg-surface-container-highest">
      <img
        alt="Mountain Ridge"
        className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply transition-transform duration-[3s] hover:scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc"
      />
    </div>

    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-black/10 to-black/30" />
    <div className="film-grain absolute inset-0 z-10 pointer-events-none opacity-50" />

    <div className="relative z-20 text-center px-6 max-w-4xl flex flex-col justify-center items-center h-full">
      <Reveal>
        <span className="block font-label text-xs tracking-[0.4em] uppercase mb-8 text-outline">
          Fine-Art Photography
        </span>
      </Reveal>
      
      <Reveal delay={0.2}>
        <h1 className="font-headline uppercase text-[12vw] md:text-8xl lg:text-9xl leading-[0.8] tracking-tighter text-white drop-shadow-sm mb-6">
          ASIMAN<br />
          <span className="text-white/90">ABDULLAZADE</span>
        </h1>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="font-body text-base md:text-lg text-outline-variant max-w-2xl mx-auto leading-relaxed mt-12 mb-12">
          An ongoing study of monolithic silence, structural isolation, and the architectural memory of landscapes.
        </p>
      </Reveal>
    </div>
  </section>
);


const HeroEditorialGrid = () => (
  <section className="bg-background pt-8 md:pt-16 pb-12 cursor-default">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Top Meta */}
      <div className="flex justify-between items-baseline mb-8 md:mb-12 border-b border-outline-variant/30 pb-4">
        <span className="font-label text-[10px] tracking-[0.4em] uppercase text-outline">Fine-Art Photography</span>
        <span className="font-label text-[10px] tracking-[0.4em] uppercase text-outline">London / High Atlas</span>
      </div>

      {/* Massive Typography & Single Statement Image */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        <div className="flex-1 flex flex-col justify-between">
           <h1 className="font-headline font-normal uppercase text-on-surface leading-[0.85] tracking-tighter" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
             ASIMAN<br />ABDULLAZADE
           </h1>
           <div className="mt-12 lg:mt-0 max-w-sm">
              <p className="font-body text-sm text-on-surface-variant leading-relaxed border-l-[2px] border-outline-variant/40 pl-6">
                 A curated archive of monolithic landscapes and architectural silence. Exploring light, texture, and isolation in the modern void.
              </p>
           </div>
        </div>
        
        {/* Editorial Feature Portrait */}
        <div className="w-full lg:w-[40%] xl:w-[35%] shrink-0">
           <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-highest">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-[2s]" alt="Concrete Rhythms"/>
           </div>
        </div>
      </div>
      
    </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [activeHero, setActiveHero] = useState<1 | 2 | 3 | 4 | 5>(5);

  return (
    <main className="pt-0">

      {/* ── Dynamic Hero Chooser Panel (For Testing) ─────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[100] bg-white/90 backdrop-blur border border-black/10 p-3 rounded-xl shadow-2xl flex flex-wrap max-w-[calc(100vw-3rem)] justify-end gap-2 shadow-black/20">
         <button 
            onClick={() => setActiveHero(5)}
            className={`font-label text-[10px] tracking-widest uppercase px-4 py-2 transition-colors rounded ${activeHero === 5 ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
         >
            Editorial Grid
         </button>
         <button 
            onClick={() => setActiveHero(4)}
            className={`font-label text-[10px] tracking-widest uppercase px-4 py-2 transition-colors rounded ${activeHero === 4 ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
         >
            Classic Center
         </button>
         <button 
            onClick={() => setActiveHero(1)}
            className={`font-label text-[10px] tracking-widest uppercase px-4 py-2 transition-colors rounded ${activeHero === 1 ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
         >
            Desk
         </button>
         <button 
            onClick={() => setActiveHero(2)}
            className={`font-label text-[10px] tracking-widest uppercase px-4 py-2 transition-colors rounded ${activeHero === 2 ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
         >
            Film Strip
         </button>
         <button 
            onClick={() => setActiveHero(3)}
            className={`font-label text-[10px] tracking-widest uppercase px-4 py-2 transition-colors rounded ${activeHero === 3 ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
         >
            Curtain
         </button>
      </div>

      {/* ── Active Hero Render ──────────────────────────────── */}
      {activeHero === 1 && <HeroArchivalDesk />}
      {activeHero === 2 && <HeroFilmStrip />}
      {activeHero === 3 && <HeroCurtainReveal />}
      {activeHero === 4 && <HeroClassicCenter />}
      {activeHero === 5 && <HeroEditorialGrid />}

      {/* ── Visual Showcase ──────────────────────────────── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
          
          {/* Section Header */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/50 pb-8 gap-6">
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline block mb-4">
                Curated Exhibition
              </span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight text-on-surface">
                Selected Works
              </h2>
            </div>
            <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed md:text-right">
              A monochromatic record of silence and texture. Exploring the dialogue between light and monolithic landscapes.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-16">
             {/* Asymmetrical Grid */}
             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
                <div className="md:col-span-7">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container-highest">
                    <img
                      alt="Fog & Pines"
                      className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA"
                    />
                  </div>
                  <p className="font-label text-[10px] tracking-[0.25em] uppercase text-outline mt-4">01 — FOG & PINES</p>
                </div>
                <div className="md:col-span-5">
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest">
                    <img
                      alt="Concrete Rhythms"
                      className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM"
                    />
                  </div>
                  <p className="font-label text-[10px] tracking-[0.25em] uppercase text-outline mt-4">02 — CONCRETE RHYTHMS</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
               <div className="md:col-span-6 md:col-start-4">
                 <div className="aspect-[4/5] overflow-hidden bg-surface-container-highest">
                    <img
                      alt="Alpine Grain"
                      className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k"
                    />
                  </div>
                  <p className="font-label text-[10px] tracking-[0.25em] uppercase text-outline mt-4">03 — ALPINE GRAIN</p>
               </div>
             </div>
          </div>
        </section>
      </Reveal>

      {/* ── Manifesto Teaser ──────────────────────────────── */}
      <Reveal>
        <section className="bg-background py-32 md:py-48 px-6 border-t border-outline-variant/30">
          <div className="max-w-4xl mx-auto flex flex-col items-start text-left pl-0 md:pl-12">
             <p className="font-label text-[9px] tracking-[0.5em] uppercase text-outline mb-12">Manifesto</p>
             <h2 className="font-headline font-normal text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-on-surface mb-16 max-w-3xl tracking-tight">
               Working at the boundary of silence and geological time. <br className="hidden md:block" /> <span className="italic text-on-surface-variant flex mt-2">The image is not a capture of time, but an extraction of it.</span>
             </h2>
             <Link href="/about" className="group flex items-center gap-6">
                <div className="w-8 h-[1px] bg-outline group-hover:w-16 transition-all duration-700 ease-out" />
                <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface group-hover:text-on-surface-variant transition-colors">
                  Read Full Philosophy
                </span>
             </Link>
          </div>
        </section>
      </Reveal>

    </main>
  );
}
