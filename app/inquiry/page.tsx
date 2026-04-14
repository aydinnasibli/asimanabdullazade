import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Get in touch with Asiman Abdullazade for limited edition prints, commercial licensing, exhibition inquiries, or general correspondence. Studio based in Baku.",
  alternates: {
    canonical: "https://asimanabdullazade.com/inquiry",
  },
  openGraph: {
    title: "Inquiry | Asiman Abdullazade",
    description:
      "Contact Asiman Abdullazade for prints, licensing, exhibitions, or general correspondence. Studio: Baku, Azerbaijan.",
    url: "https://asimanabdullazade.com/inquiry",
  },
};

export default function Inquiry() {
  return (
    <main className="flex-grow pt-12 md:pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="font-headline text-[12vw] md:text-[8rem] leading-[0.9] tracking-tighter uppercase">INQUIRY</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
          {/* Left: Inquiry Form */}
          <div className="md:col-span-7">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary" htmlFor="name">NAME</label>
                  <input
                    className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder-zinc-300 transition-all outline-none"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </div>
                <div className="space-y-4">
                  <label className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary" htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder-zinc-300 transition-all outline-none"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary" htmlFor="subject">SUBJECT</label>
                <select
                  className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 text-on-surface appearance-none cursor-pointer outline-none"
                  id="subject"
                  name="subject"
                  defaultValue=""
                >
                  <option disabled value="">Select an option</option>
                  <option value="prints">Limited Edition Prints</option>
                  <option value="commercial">Commercial License</option>
                  <option value="exhibition">Exhibition Inquiry</option>
                  <option value="general">General Correspondence</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary" htmlFor="message">MESSAGE</label>
                <textarea
                  className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 text-on-surface placeholder-zinc-300 transition-all resize-none outline-none"
                  id="message"
                  name="message"
                  placeholder="Details of your inquiry..."
                  rows={5}
                ></textarea>
              </div>
              <div className="pt-8">
                <button
                  className="w-full md:w-auto px-16 py-5 bg-primary text-on-primary font-label text-xs tracking-[0.3em] uppercase font-bold hover:bg-zinc-800 transition-colors active:scale-95 duration-300"
                  type="submit"
                >
                  SUBMIT INQUIRY
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact Details & Visual */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between">
            <div className="space-y-16">
              {/* Location Block */}
              <div className="space-y-4">
                <h3 className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary">STUDIO</h3>
                <div className="space-y-1">
                  <p className="font-headline italic text-2xl tracking-tight text-on-surface">Baku Studio</p>
                  <p className="font-body text-sm text-zinc-500 leading-relaxed max-w-[240px]">Nizami Street 12, Sahil District, Baku AZ1000</p>
                </div>
              </div>
              {/* General Contact */}
              <div className="space-y-4">
                <h3 className="font-label text-[10px] tracking-[0.2em] uppercase font-medium text-secondary">DIRECT</h3>
                <div className="space-y-2">
                  <a className="block font-headline italic text-2xl tracking-tight text-on-surface hover:opacity-60 transition-opacity underline underline-offset-8 decoration-1 decoration-outline-variant" href="mailto:hello@asimanabdullazade.com">
                    hello@asimanabdullazade.com
                  </a>
                  <p className="font-body text-[10px] tracking-widest text-zinc-400 uppercase">+994 50 123 45 67</p>
                </div>
              </div>
              {/* Image Anchor */}
              <div className="mt-8 aspect-[3/4] bg-surface-container overflow-hidden group">
                <img
                  alt="Minimalist architectural detail showing clean lines and soft shadows on a textured wall"
                  className="w-full h-full object-cover filter grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8IC3PRcXwHGCIV5zqOac2PHcpqalY4X56CseIWWGXP6B8ivkySGS3J3OAGATgIuXcYQIxoBGRSOIMRsDkuoLobfy8igayCveHR6oDOrNl9tBKqZZf40_bJNOVdIEymmp61VxiRDRmhPyJTIt6rzJGNxKRal3muCq8Yx1vqxVye0IHMPzt8VJfYk9Tyrs_WDYnVX1P9BsZz5UG4KI5EzWmO1ccwkuI8YwZAIx7Bg6oLxmUC_OY7uQjxYFmsvfvGwgFYBoSfRH67y4"
                />
              </div>
            </div>
            {/* Subtle Footer/Social Hint within side column */}
            <div className="hidden md:block pt-12">
              <p className="font-label text-[10px] tracking-[0.2em] text-zinc-400 uppercase">OFFICE HOURS: 10:00 — 19:00 AZT</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
