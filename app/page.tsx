"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

// --- HERO COMPONENT DEFINITIONS ---

const HeroArchivalDesk = () => (
  <section className="relative h-screen -mt-14 overflow-hidden bg-[#050505] flex items-center justify-center cursor-default">
    <div className="film-grain absolute inset-0 pointer-events-none z-0 opacity-20" />
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
       {/* Fog & Pines */}
       <div className="absolute top-[8%] left-[2%] md:left-[5%] w-[45vw] md:w-[35vw] max-w-[320px] aspect-[4/3] -rotate-6 transition-all duration-[1.2s] ease-out shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto hover:scale-110 hover:rotate-0 hover:z-50 border-[6px] border-white/5">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700" alt=""/>
       </div>
       {/* Concrete */}
       <div className="absolute bottom-[5%] left-[8%] md:left-[12%] w-[35vw] md:w-[25vw] max-w-[280px] aspect-square rotate-3 transition-all duration-[1.2s] ease-out shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto hover:scale-110 hover:rotate-0 hover:z-50 border-[6px] border-white/5">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700" alt=""/>
       </div>
       {/* Portrait */}
       <div className="absolute top-[-2%] left-[65%] md:left-[55%] -translate-x-1/2 w-[35vw] md:w-[22vw] max-w-[240px] aspect-[3/4] rotate-12 transition-all duration-[1.2s] ease-out shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto hover:scale-110 hover:rotate-0 hover:z-50 border-[6px] border-white/5">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-700" alt=""/>
       </div>
       {/* Tidal */}
       <div className="absolute top-[20%] right-[5%] w-[30vw] max-w-[340px] aspect-[16/9] -rotate-6 transition-all duration-[1.2s] ease-out shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto hover:scale-110 hover:rotate-0 hover:z-50 border-[6px] border-white/5 hidden md:block">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700" alt=""/>
       </div>
       {/* Monolith */}
       <div className="absolute bottom-[8%] md:bottom-[10%] right-[2%] md:right-[12%] w-[40vw] md:w-[25vw] max-w-[280px] aspect-[4/5] rotate-6 transition-all duration-[1.2s] ease-out shadow-[-10px_10px_30px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto hover:scale-110 hover:rotate-0 hover:z-50 border-[6px] border-white/5">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity duration-700" alt=""/>
       </div>
    </div>
    <div className="relative z-30 text-center px-6 mix-blend-difference pointer-events-none flex flex-col items-center justify-center w-full h-full">
      <p className="font-label text-[10px] tracking-[0.5em] uppercase text-white/50 mb-10 md:mb-16 mt-[-10vh]">The Archival Silence</p>
      <h1 className="font-headline font-normal uppercase text-white leading-[0.85] tracking-tighter" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>ASIMAN<br />ABDULLAZADE</h1>
    </div>
  </section>
);

const HeroFilmStrip = () => (
  <section className="relative h-screen -mt-14 overflow-hidden bg-background flex flex-col pt-14">
    <div className="flex-1 flex items-end justify-center pb-2 md:pb-8 relative z-10 w-full">
      <h1 className="font-headline font-normal uppercase text-on-surface tracking-widest leading-[0.8]" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>ASIMAN</h1>
    </div>
    <div className="w-full h-[32vh] md:h-[45vh] bg-surface-container-highest shadow-[inset_0px_2px_15px_rgba(0,0,0,0.05)] border-y border-outline-variant/30 overflow-hidden flex relative z-20">
      <div className="flex animate-marquee h-full hover:[animation-play-state:paused] items-center">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex h-full py-3 md:py-6 gap-4 md:gap-8 px-2 md:px-4 shrink-0 pointer-events-auto">
             <div className="h-full aspect-[4/3] bg-black overflow-hidden shadow-xl border-[4px] border-surface-container-highest">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1s]" alt=""/>
             </div>
             <div className="h-full aspect-[3/4] bg-black overflow-hidden shadow-xl border-[4px] border-surface-container-highest">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1s]" alt=""/>
             </div>
             <div className="h-full aspect-[16/9] bg-black overflow-hidden shadow-xl border-[4px] border-surface-container-highest hidden md:block">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1s]" alt=""/>
             </div>
             <div className="h-full aspect-square bg-black overflow-hidden shadow-xl border-[4px] border-surface-container-highest">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1s]" alt=""/>
             </div>
             <div className="h-full aspect-[4/5] bg-black overflow-hidden shadow-xl border-[4px] border-surface-container-highest">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[1s]" alt=""/>
             </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 flex items-start justify-center pt-4 md:pt-12 relative z-10 w-full mb-[4vh] md:mb-0">
      <h1 className="font-headline font-normal uppercase text-on-surface tracking-widest leading-[0.8]" style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}>ABDULLAZADE</h1>
    </div>
  </section>
);

const HeroCurtainReveal = () => (
  <section className="relative h-screen -mt-14 overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center pt-24 pb-8 md:pb-12 px-3 md:px-8">
    <div className="film-grain absolute inset-0 pointer-events-none z-0 opacity-20" />
    <div className="relative z-10 text-center w-full mb-6 md:mb-10 mt-6 md:mt-20">
       <h1 className="font-headline font-normal uppercase text-white tracking-[0.1em] text-3xl md:text-5xl lg:text-7xl">ASIMAN ABDULLAZADE</h1>
       <div className="flex justify-center items-center gap-6 mt-6 opacity-40 hidden sm:flex">
         <span className="font-label text-[10px] tracking-[0.4em] uppercase text-white">Fine-Art</span>
         <span className="w-1 h-1 rounded-full bg-white block" />
         <span className="font-label text-[10px] tracking-[0.4em] uppercase text-white">Archival Silence</span>
       </div>
    </div>
    <div className="relative z-20 w-full flex-1 max-h-[80vh] flex flex-row gap-1 md:gap-2">
        {[
          { title: "Fog & Pines", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA" },
          { title: "Alpine Grain", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k" },
          { title: "Concrete Rhythms", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM" },
          { title: "Tidal Tones", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc" }
        ].map((item, index) => (
           <div key={index} className="relative h-full flex-1 hover:[flex-grow:4] group transition-all duration-[800ms] ease-in-out border border-white/10 bg-surface-container-highest cursor-crosshair overflow-hidden">
              <img src={item.src} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]" alt={item.title}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1s]" />
              <div className="absolute inset-x-0 bottom-12 flex justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-white/50" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                   {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute bottom-10 md:bottom-16 left-6 md:left-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0 w-max max-w-[80vw]">
                 <p className="font-headline italic text-2xl md:text-4xl lg:text-5xl text-white">{item.title}</p>
              </div>
           </div>
        ))}
    </div>
  </section>
);


const HeroClassicCenter = () => (
  <section className="relative h-screen -mt-14 overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-black/45 z-10" />
    <div className="film-grain absolute inset-0 pointer-events-none z-20 opacity-30" />
    <img
      src="https://images.unsplash.com/photo-1775840535417-71811b19db5a?q=80&w=2800&auto=format&fit=crop"
      alt=""
      className="absolute inset-0 w-full h-full object-cover grayscale"
    />
    <div className="relative z-30 text-center px-4 pointer-events-none mt-10">
      <h1 className="font-headline font-normal uppercase text-white tracking-widest leading-[0.9]" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
        ASIMAN<br />ABDULLAZADE
      </h1>
      <p className="font-label text-[10px] tracking-[0.4em] uppercase text-white/70 mt-8 mb-4">
        Fine-Art Photography
      </p>
    </div>
  </section>
);


// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [activeHero, setActiveHero] = useState<1 | 2 | 3 | 4>(4);

  return (
    <main className="pt-0">

      {/* ── Dynamic Hero Chooser Panel (For Testing) ─────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[100] bg-white/90 backdrop-blur border border-black/10 p-3 rounded-xl shadow-2xl flex flex-wrap max-w-[calc(100vw-3rem)] justify-end gap-2 shadow-black/20">
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
        <section className="bg-surface-container-low py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center border-y border-outline-variant/30">
          <h2 className="font-headline italic text-2xl md:text-4xl lg:text-5xl leading-relaxed max-w-4xl text-on-surface">
            "Working at the boundary of silence and geological time. The image is not a capture of time, but an extraction of it."
          </h2>
          <div className="w-px h-16 bg-outline-variant my-12" />
          <Link href="/about" className="group flex items-center gap-3">
             <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant group-hover:text-primary transition-colors">
               Read the full manifesto
             </span>
             <span className="material-symbols-outlined text-[14px] text-outline group-hover:text-primary transition-transform group-hover:translate-x-1">
                arrow_forward
             </span>
          </Link>
        </section>
      </Reveal>

    </main>
  );
}
