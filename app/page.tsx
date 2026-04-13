import Reveal from "@/components/Reveal";

const MARQUEE_TEXT =
  "ARCHIVAL SILENCE\u2002—\u2002SVALBARD ARCHIPELAGO\u2002—\u2002MONOCHROMATIC\u2002—\u2002SILENT FRAME\u2002—\u2002ASIMAN ABDULLAZADE\u2002—\u20022019\u2002—\u20022024\u2002—\u2002";

const plates = [
  {
    plate: "Plate 01",
    title: "Geometric Monolith",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW9OLPdV0QT_lrPKUddXOeDtL4iowBsY7h42Ud9Ir4DlXtuciUBKt20tryCMXbXFLwDKPH8f05P5vNDkHrpF1Jdg3TVRvUKuYN1RKs0Ya6yoGVmOtr2H3RmGM9rZP7zRJEfUpcbn2eiwj_ACcSJh_AgPXvUBswNC2XhCoJTf3-PVfuaP4eI9v87IBQme4IKyGfPOJo3rb8rbD7Tk4tnmwuijtiTIUYZZpXf0Nio5DnQsMYOAmzRvk-uUNZrCzfmqk_5uwU470sHVQ",
  },
  {
    plate: "Plate 02",
    title: "The Tool of Observation",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjilNDp_cIQ0jWt6GhDR8rlgIhlU_xircEwSkhg610_dI685tMLElRMunBGWJcBCbJETVQyQQCuczqZS0NNoAqL_qe-fKj9VE0fq-7PdvXzsamuIiQARQPS7GifMiuTA3armEejUHOI6mNde37MKA3AEDQvwCOxqUuBihIN6im8i1o1uce8yEFGzwZsMmH4q80I4ojbZf1qtVdwC-I0e9sOHk7aGbJIePxnI6Smpv3777xLFU3S23jkt9ktAvw7jzQXjkX2MvFOxs",
  },
  {
    plate: "Plate 03",
    title: "Spectral Ridge",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqwuEdeSoW6cqjzP71Dr6V7qY_Uvhnd-rDh0DBCSiX2vBio6ehOQCnYGT9IWiRKCvLBz1uyjWdjGyzGItWAPC8S3fkn65EbI9H9-bGtL6ibasUQmlnR4ZuRnYoFqKl2WsJHdxrr11WQqDa2zbhp0EGfb-sTX6Bqya9zX5B-bsQwcHFZEW4wsCBCx5fYq9zU75QmT4vrjlllbdJ7Q3GFdRztfIVZYqsNNEylHHqEo0HjEjR2MvBxFmYbByC2Y8BxKcFY-y5ohA1IZQ",
  },
];

export default function Home() {
  return (
    <main className="pt-0">

      {/* ── Hero: Pure full-bleed image ─────────────────────── */}
      <section className="relative h-screen -mt-14 overflow-hidden">
        <img
          alt="Silent North Mountain"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMgsHzYpKZmBBhXY-j4EcxSzSDJ6HW0d1cVWcy1VImXY_SH8SoGd16Wtl76PlttxHyjjUdE5X6XpZLR0olGHVk6q96eq4vY0asYnt3OcTPgkXS-EQO0bfvYc7-hT3RqmlvtOlFNEOw-C-Q1FaVPnutMy9Ch8RhBoaHXTwbKn0Le9uIL9h2eTOjcDGvLU6Pme9e-9wq_fu67POCJ449l2TBXhw82lmXH4SnPQuzQ5mXNmXP5JyBXi_XgFWhQpZeGQq-1CH13K7oI0"
        />
        <div className="film-grain absolute inset-0 pointer-events-none z-10" />
      </section>

      {/* ── Series title strip ──────────────────────────────── */}
      <div className="border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-baseline justify-between gap-8">
          <div>
            <p className="font-label text-[10px] tracking-[0.4em] uppercase text-outline mb-3">
              Current Series
            </p>
            <h1 className="font-headline italic text-[10vw] md:text-[5vw] leading-[0.85] tracking-tighter text-on-surface">
              SILENT NORTH
            </h1>
          </div>
          <div className="text-right shrink-0 space-y-1">
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">Svalbard Archipelago</p>
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">2024</p>
          </div>
        </div>
      </div>

      {/* ── Plates: The Void ────────────────────────────────── */}
      <Reveal>
        <section className="mt-20 mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Section header */}
            <div className="flex items-baseline justify-between border-b border-outline-variant pb-5 mb-10">
              <span className="font-label text-[10px] tracking-[0.4em] uppercase text-outline">
                From the series — The Void
              </span>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-outline">
                Plates 01–03 &nbsp;·&nbsp; 2023–2024
              </span>
            </div>

            {/* Feature plate — landscape */}
            <div className="group mb-4">
              <div className="aspect-[16/9] overflow-hidden bg-surface-container-highest">
                <img
                  alt={plates[0].title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src={plates[0].src}
                />
              </div>
              <div className="flex justify-between items-baseline mt-3">
                <span className="font-label text-[10px] tracking-widest text-outline uppercase">{plates[0].plate}</span>
                <span className="font-body text-xs font-medium uppercase">{plates[0].title}</span>
              </div>
            </div>

            {/* Portrait pair */}
            <div className="grid grid-cols-2 gap-4">
              {[plates[1], plates[2]].map((plate) => (
                <div key={plate.plate} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest">
                    <img
                      alt={plate.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                      src={plate.src}
                    />
                  </div>
                  <div className="flex justify-between items-baseline mt-3">
                    <span className="font-label text-[10px] tracking-widest text-outline uppercase">{plate.plate}</span>
                    <span className="font-body text-xs font-medium uppercase">{plate.title}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* ── Marquee strip ───────────────────────────────────── */}
      <div aria-hidden className="overflow-hidden border-y border-outline-variant py-5 select-none mb-40">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
        </div>
      </div>

      {/* ── Quote ───────────────────────────────────────────── */}
      <Reveal>
        <section className="mb-40 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <blockquote className="font-headline text-2xl md:text-3xl italic leading-snug text-on-surface mb-8">
            "The noise of the modern world disappears in the arctic. What remains is not just silence, but a profound visual frequency that only the monochromatic lens can truly capture."
          </blockquote>
          <div className="w-8 h-px bg-outline mx-auto mb-6" />
          <cite className="not-italic">
            <span className="block font-label text-xs tracking-[0.2em] uppercase font-bold text-primary">Asiman Abdullazade</span>
            <span className="block font-label text-[10px] tracking-widest text-outline uppercase mt-1">Lead Photographer</span>
          </cite>
        </section>
      </Reveal>

    </main>
  );
}
