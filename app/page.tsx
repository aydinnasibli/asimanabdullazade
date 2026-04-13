import Reveal from "@/components/Reveal";

const MARQUEE_TEXT =
  "ARCHIVAL SILENCE\u2002—\u2002SVALBARD ARCHIPELAGO\u2002—\u2002MONOCHROMATIC\u2002—\u2002SILENT FRAME\u2002—\u2002ASIMAN ABDULLAZADE\u2002—\u20022019\u2002—\u20022024\u2002—\u2002";

export default function Home() {
  return (
    <main className="pt-0">

      {/* ── Hero: Identity ──────────────────────────────────── */}
      <section className="relative h-screen -mt-14 overflow-hidden flex items-center justify-center">
        <img
          aria-hidden
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="https://images.unsplash.com/photo-1775840535417-71811b19db5a?q=80&w=2800&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="film-grain absolute inset-0 pointer-events-none z-20" />

        <div className="relative z-30 text-center px-6 select-none">
          <p className="font-label text-[9px] tracking-[0.55em] uppercase text-white/35 mb-10">
            Fine&#8209;Art Photography &nbsp;·&nbsp; Est. 2019
          </p>
          <h1
            className="font-headline font-bold uppercase text-white leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", letterSpacing: "0.12em" }}
          >
            ASIMAN<br />ABDULLAZADE
          </h1>
          <div className="w-10 h-px bg-white/25 mx-auto mt-12" />
        </div>
      </section>

      {/* ── Practice Statement ──────────────────────────────── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-center">

            {/* Portrait */}
            <div className="md:col-span-5">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-highest">
                <img
                  alt="Asiman Abdullazade"
                  className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-7 space-y-8">
              <p className="font-label text-[10px] tracking-[0.4em] uppercase text-outline">
                Practice
              </p>
              <p className="font-headline italic text-3xl md:text-4xl leading-snug text-on-surface">
                "Working at the boundary of silence and geological time."
              </p>
              <div className="space-y-5 font-body text-on-surface-variant leading-relaxed text-[15px]">
                <p>
                  Asiman Abdullazade's practice is built on a single conviction: that the most truthful photographs are not made in the decisive moment, but in the sustained act of waiting. Each body of work is the result of months of stillness — a meditative approach to landscapes that resist easy interpretation.
                </p>
                <p>
                  Working exclusively in monochrome, Abdullazade treats the absence of colour not as a constraint but as a discipline. What remains is texture, weight, and the quality of light that only reveals itself to those patient enough to witness it.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant">
                <span className="font-label text-xs tracking-[0.2em] uppercase font-bold block">
                  Asiman Abdullazade
                </span>
                <span className="font-label text-[10px] tracking-widest text-outline uppercase block mt-1">
                  Baku &nbsp;·&nbsp; London &nbsp;·&nbsp; High Atlas
                </span>
              </div>
            </div>

          </div>
        </section>
      </Reveal>

      {/* ── Marquee ─────────────────────────────────────────── */}
      <div aria-hidden className="overflow-hidden border-y border-outline-variant py-5 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
          <span className="font-label text-[10px] tracking-[0.35em] uppercase text-outline">
            {MARQUEE_TEXT.repeat(6)}
          </span>
        </div>
      </div>

      {/* ── Closing image ───────────────────────────────────── */}
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="aspect-[16/9] overflow-hidden bg-surface-container-highest">
            <img
              alt=""
              aria-hidden
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY"
            />
          </div>
          <p className="font-label text-[10px] tracking-[0.3em] uppercase text-outline mt-4 text-right">
            Brutalist Silence &nbsp;·&nbsp; 2024
          </p>
        </div>
      </Reveal>

    </main>
  );
}
