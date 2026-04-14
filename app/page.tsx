import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM"
              alt="Concrete Rhythms"
              className="object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-[2s]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="pt-0">
      <HeroEditorialGrid />

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
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-highest">
                  <Image
                    fill
                    alt="Fog & Pines"
                    className="object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
                <p className="font-label text-[10px] tracking-[0.25em] uppercase text-outline mt-4">01 — FOG & PINES</p>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-highest">
                  <Image
                    fill
                    alt="Concrete Rhythms"
                    className="object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <p className="font-label text-[10px] tracking-[0.25em] uppercase text-outline mt-4">02 — CONCRETE RHYTHMS</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-6 md:col-start-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-highest">
                  <Image
                    fill
                    alt="Alpine Grain"
                    className="object-cover grayscale hover:scale-105 transition-transform duration-[1.5s]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
