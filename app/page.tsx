export default function Home() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-32 max-w-[1600px] mx-auto">
        <div className="relative w-full aspect-[21/9] bg-surface-container overflow-hidden">
          <img
            alt="Silent North Mountain"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMgsHzYpKZmBBhXY-j4EcxSzSDJ6HW0d1cVWcy1VImXY_SH8SoGd16Wtl76PlttxHyjjUdE5X6XpZLR0olGHVk6q96eq4vY0asYnt3OcTPgkXS-EQO0bfvYc7-hT3RqmlvtOlFNEOw-C-Q1FaVPnutMy9Ch8RhBoaHXTwbKn0Le9uIL9h2eTOjcDGvLU6Pme9e-9wq_fu67POCJ449l2TBXhw82lmXH4SnPQuzQ5mXNmXP5JyBXi_XgFWhQpZeGQq-1CH13K7oI0"
          />
          <div className="absolute inset-0 flex items-end p-6 md:p-12 bg-gradient-to-t from-black/40 to-transparent">
            <h1 className="font-headline italic text-5xl md:text-7xl lg:text-9xl text-white tracking-tighter">
              SILENT NORTH
            </h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <p className="font-body text-on-surface-variant leading-relaxed">
              A study of isolation and geological permanence in the high latitudes. Captured during the winter solstice cycles by lead photographer Asiman Abdullazade.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-outline">LOCATION</span>
            <span className="font-label text-sm font-bold uppercase">Svalbard Archipelago</span>
          </div>
        </div>
      </section>

      {/* Current Series: The Void */}
      <section className="mb-48 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-headline text-4xl md:text-5xl italic">Current Series: The Void</h2>
          <div className="h-[1px] flex-grow bg-outline-variant mx-8 hidden md:block"></div>
          <span className="font-label text-xs tracking-[0.3em] uppercase">2023 — 2024 Collection</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Large Vertical */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-surface-container-highest aspect-[3/4] overflow-hidden">
              <img
                alt="The Void I"
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW9OLPdV0QT_lrPKUddXOeDtL4iowBsY7h42Ud9Ir4DlXtuciUBKt20tryCMXbXFLwDKPH8f05P5vNDkHrpF1Jdg3TVRvUKuYN1RKs0Ya6yoGVmOtr2H3RmGM9rZP7zRJEfUpcbn2eiwj_ACcSJh_AgPXvUBswNC2XhCoJTf3-PVfuaP4eI9v87IBQme4IKyGfPOJo3rb8rbD7Tk4tnmwuijtiTIUYZZpXf0Nio5DnQsMYOAmzRvk-uUNZrCzfmqk_5uwU470sHVQ"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-primary"></div>
              <div>
                <p className="font-label text-[10px] tracking-widest text-outline uppercase">Plate 01</p>
                <p className="font-body text-sm font-medium uppercase">Geometric Monolith</p>
              </div>
            </div>
          </div>
          {/* Spacing/Asymmetry */}
          <div className="hidden md:block md:col-span-1"></div>
          {/* Two Smaller/Square Stack */}
          <div className="md:col-span-6 flex flex-col justify-center gap-24">
            <div className="space-y-6 self-end w-full md:w-3/4">
              <div className="bg-surface-container-highest aspect-square overflow-hidden">
                <img
                  alt="The Void II"
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjilNDp_cIQ0jWt6GhDR8rlgIhlU_xircEwSkhg610_dI685tMLElRMunBGWJcBCbJETVQyQQCuczqZS0NNoAqL_qe-fKj9VE0fq-7PdvXzsamuIiQARQPS7GifMiuTA3armEejUHOI6mNde37MKA3AEDQvwCOxqUuBihIN6im8i1o1uce8yEFGzwZsMmH4q80I4ojbZf1qtVdwC-I0e9sOHk7aGbJIePxnI6Smpv3777xLFU3S23jkt9ktAvw7jzQXjkX2MvFOxs"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-primary"></div>
                <div>
                  <p className="font-label text-[10px] tracking-widest text-outline uppercase">Plate 02</p>
                  <p className="font-body text-sm font-medium uppercase">The Tool of Observation</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 w-full md:w-3/4">
              <div className="bg-surface-container-highest aspect-video overflow-hidden">
                <img
                  alt="The Void III"
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqwuEdeSoW6cqjzP71Dr6V7qY_Uvhnd-rDh0DBCSiX2vBio6ehOQCnYGT9IWiRKCvLBz1uyjWdjGyzGItWAPC8S3fkn65EbI9H9-bGtL6ibasUQmlnR4ZuRnYoFqKl2WsJHdxrr11WQqDa2zbhp0EGfb-sTX6Bqya9zX5B-bsQwcHFZEW4wsCBCx5fYq9zU75QmT4vrjlllbdJ7Q3GFdRztfIVZYqsNNEylHHqEo0HjEjR2MvBxFmYbByC2Y8BxKcFY-y5ohA1IZQ"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-primary"></div>
                <div>
                  <p className="font-label text-[10px] tracking-widest text-outline uppercase">Plate 03</p>
                  <p className="font-body text-sm font-medium uppercase">Spectral Ridge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Selection */}
      <section className="mb-48 bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-outline">Selected Collections</span>
            <h2 className="font-headline text-5xl md:text-6xl mt-4">The Archive</h2>
          </header>
          <div className="space-y-0">
            {/* Archive Item 1 */}
            <a href="#" className="group block py-12 border-t border-outline-variant hover:bg-surface transition-colors">
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
            {/* Archive Item 2 */}
            <a href="#" className="group block py-12 border-t border-outline-variant hover:bg-surface transition-colors">
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
            {/* Archive Item 3 */}
            <a href="#" className="group block py-12 border-t border-b border-outline-variant hover:bg-surface transition-colors">
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

      {/* Quote Section */}
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
    </main>
  );
}
