import Reveal from "@/components/Reveal";

const MARQUEE_TEXT =
  "ARCHIVAL SILENCE\u2002—\u2002SVALBARD ARCHIPELAGO\u2002—\u2002MONOCHROMATIC\u2002—\u2002SILENT FRAME\u2002—\u2002ASIMAN ABDULLAZADE\u2002—\u20022019\u2002—\u20022024\u2002—\u2002";

const plates = [
  {
    number: "01",
    plate: "Plate 01",
    title: "Geometric Monolith",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW9OLPdV0QT_lrPKUddXOeDtL4iowBsY7h42Ud9Ir4DlXtuciUBKt20tryCMXbXFLwDKPH8f05P5vNDkHrpF1Jdg3TVRvUKuYN1RKs0Ya6yoGVmOtr2H3RmGM9rZP7zRJEfUpcbn2eiwj_ACcSJh_AgPXvUBswNC2XhCoJTf3-PVfuaP4eI9v87IBQme4IKyGfPOJo3rb8rbD7Tk4tnmwuijtiTIUYZZpXf0Nio5DnQsMYOAmzRvk-uUNZrCzfmqk_5uwU470sHVQ",
  },
  {
    number: "02",
    plate: "Plate 02",
    title: "The Tool of Observation",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjilNDp_cIQ0jWt6GhDR8rlgIhlU_xircEwSkhg610_dI685tMLElRMunBGWJcBCbJETVQyQQCuczqZS0NNoAqL_qe-fKj9VE0fq-7PdvXzsamuIiQARQPS7GifMiuTA3armEejUHOI6mNde37MKA3AEDQvwCOxqUuBihIN6im8i1o1uce8yEFGzwZsMmH4q80I4ojbZf1qtVdwC-I0e9sOHk7aGbJIePxnI6Smpv3777xLFU3S23jkt9ktAvw7jzQXjkX2MvFOxs",
  },
  {
    number: "03",
    plate: "Plate 03",
    title: "Spectral Ridge",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqwuEdeSoW6cqjzP71Dr6V7qY_Uvhnd-rDh0DBCSiX2vBio6ehOQCnYGT9IWiRKCvLBz1uyjWdjGyzGItWAPC8S3fkn65EbI9H9-bGtL6ibasUQmlnR4ZuRnYoFqKl2WsJHdxrr11WQqDa2zbhp0EGfb-sTX6Bqya9zX5B-bsQwcHFZEW4wsCBCx5fYq9zU75QmT4vrjlllbdJ7Q3GFdRztfIVZYqsNNEylHHqEo0HjEjR2MvBxFmYbByC2Y8BxKcFY-y5ohA1IZQ",
  },
];

export default function Home() {
  return (
    <main className="pt-0">

      {/* ── Hero: Viewport Split ─────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: typography + meta */}
        <div className="flex flex-col justify-between px-6 md:px-12 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="flex-1 flex items-center">
            <h1 className="font-headline italic leading-[0.85] tracking-tighter text-on-surface text-[18vw] lg:text-[9vw]">
              SILENT<br />NORTH
            </h1>
          </div>
          <div className="border-t border-outline-variant pt-8 space-y-6">
            <p className="font-body text-on-surface-variant leading-relaxed max-w-sm">
              A study of isolation and geological permanence in the high latitudes. Captured during the winter solstice cycles by lead photographer Asiman Abdullazade.
            </p>
            <div>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline block">LOCATION</span>
              <span className="font-label text-sm font-bold uppercase mt-1 block">Svalbard Archipelago</span>
            </div>
          </div>
        </div>

        {/* Right: full-height image */}
        <div className="relative h-[60vw] lg:h-auto overflow-hidden bg-surface-container">
          <img
            alt="Silent North Mountain"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMgsHzYpKZmBBhXY-j4EcxSzSDJ6HW0d1cVWcy1VImXY_SH8SoGd16Wtl76PlttxHyjjUdE5X6XpZLR0olGHVk6q96eq4vY0asYnt3OcTPgkXS-EQO0bfvYc7-hT3RqmlvtOlFNEOw-C-Q1FaVPnutMy9Ch8RhBoaHXTwbKn0Le9uIL9h2eTOjcDGvLU6Pme9e-9wq_fu67POCJ449l2TBXhw82lmXH4SnPQuzQ5mXNmXP5JyBXi_XgFWhQpZeGQq-1CH13K7oI0"
          />
          <div className="film-grain absolute inset-0 pointer-events-none z-10" />
        </div>
      </section>

      {/* ── Current Series: The Void ─────────────────────────── */}
      <Reveal>
        <section className="mb-48 mt-32 px-6 md:px-12 max-w-[1600px] mx-auto">

          {/* Header — large italic title, hairline, tiny meta */}
          <div className="mb-16">
            <p className="font-label text-[10px] tracking-[0.4em] uppercase text-outline mb-4">Current Series</p>
            <h2 className="font-headline italic text-[12vw] md:text-[7vw] leading-[0.85] tracking-tighter text-on-surface">
              The Void
            </h2>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-outline-variant">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">Plates 01 — 03</span>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">2023 — 2024</span>
            </div>
          </div>

          {/* Staggered 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Plate 01 — portrait, top-aligned */}
            <div className="group space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest">
                <img
                  alt={plates[0].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src={plates[0].src}
                />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-label text-[10px] tracking-widest text-outline uppercase">{plates[0].plate}</span>
                <span className="font-body text-xs font-medium uppercase">{plates[0].title}</span>
              </div>
            </div>

            {/* Plate 02 — square, pushed down */}
            <div className="group space-y-4 md:mt-24">
              <div className="aspect-square overflow-hidden bg-surface-container-highest">
                <img
                  alt={plates[1].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src={plates[1].src}
                />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-label text-[10px] tracking-widest text-outline uppercase">{plates[1].plate}</span>
                <span className="font-body text-xs font-medium uppercase">{plates[1].title}</span>
              </div>
            </div>

            {/* Plate 03 — portrait, mid offset */}
            <div className="group space-y-4 md:mt-12">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest">
                <img
                  alt={plates[2].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src={plates[2].src}
                />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-label text-[10px] tracking-widest text-outline uppercase">{plates[2].plate}</span>
                <span className="font-body text-xs font-medium uppercase">{plates[2].title}</span>
              </div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* ── Marquee strip ───────────────────────────────────── */}
      <div aria-hidden className="overflow-hidden border-y border-outline-variant py-5 select-none mb-48">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
        </div>
      </div>

      {/* ── Archive Selection ────────────────────────────────── */}
      <Reveal>
        <section className="mb-48 bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <header className="mb-16">
              <span className="font-label text-xs tracking-[0.4em] uppercase text-outline">Selected Collections</span>
              <h2 className="font-headline text-5xl md:text-6xl mt-4">The Archive</h2>
            </header>
            <div className="space-y-0">
              <a href="/archive" className="group block py-12 border-t border-outline-variant hover:bg-surface transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-8">
                    <span className="font-label text-xs text-outline">01</span>
                    <h3 className="font-headline text-3xl md:text-4xl group-hover:italic transition-all">Ghost Harbor</h3>
                  </div>
                  <div className="flex gap-12 text-left md:text-right">
                    <div className="hidden lg:block">
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Format</span>
                      <span className="font-body text-xs uppercase">35mm Archival Ink</span>
                    </div>
                    <div>
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Year</span>
                      <span className="font-body text-xs uppercase">2021</span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors hidden md:block">arrow_outward</span>
                  </div>
                </div>
              </a>
              <a href="/archive" className="group block py-12 border-t border-outline-variant hover:bg-surface transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-8">
                    <span className="font-label text-xs text-outline">02</span>
                    <h3 className="font-headline text-3xl md:text-4xl group-hover:italic transition-all">Black Desert</h3>
                  </div>
                  <div className="flex gap-12 text-left md:text-right">
                    <div className="hidden lg:block">
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Format</span>
                      <span className="font-body text-xs uppercase">Medium Format Digital</span>
                    </div>
                    <div>
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Year</span>
                      <span className="font-body text-xs uppercase">2020</span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors hidden md:block">arrow_outward</span>
                  </div>
                </div>
              </a>
              <a href="/archive" className="group block py-12 border-t border-b border-outline-variant hover:bg-surface transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-8">
                    <span className="font-label text-xs text-outline">03</span>
                    <h3 className="font-headline text-3xl md:text-4xl group-hover:italic transition-all">Ethereal Frost</h3>
                  </div>
                  <div className="flex gap-12 text-left md:text-right">
                    <div className="hidden lg:block">
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Format</span>
                      <span className="font-body text-xs uppercase">Infrared Exposure</span>
                    </div>
                    <div>
                      <span className="font-label text-[10px] tracking-widest text-outline block uppercase">Year</span>
                      <span className="font-body text-xs uppercase">2019</span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors hidden md:block">arrow_outward</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Quote ───────────────────────────────────────────── */}
      <Reveal>
        <section className="mb-48 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <span className="material-symbols-outlined text-4xl text-outline mb-8">format_quote</span>
          <blockquote className="font-headline text-2xl md:text-3xl lg:text-5xl italic leading-tight text-on-surface mb-12">
            "The noise of the modern world disappears in the arctic. What remains is not just silence, but a profound visual frequency that only the monochromatic lens can truly capture."
          </blockquote>
          <cite className="not-italic">
            <span className="block font-label text-xs tracking-[0.2em] uppercase font-bold text-primary">Asiman Abdullazade</span>
            <span className="block font-label text-[10px] tracking-widest text-outline uppercase mt-1">Lead Photographer</span>
          </cite>
        </section>
      </Reveal>

    </main>
  );
}
