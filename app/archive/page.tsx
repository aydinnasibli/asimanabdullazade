export default function Archive() {
  return (
    <main className="flex-grow pt-40 px-6 md:px-12 pb-24 max-w-[1600px] mx-auto">
      {/* Archive Header */}
      <header className="mb-24 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-7xl font-normal tracking-tight mb-8">Selected Archives</h1>
        <p className="font-body text-zinc-500 max-w-xl leading-relaxed">
          A chronological index of photographic explorations. A visual record of silence, texture, and the dialogue between light and monolithic landscapes.
        </p>
      </header>

      {/* Archive Index Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 border-t border-outline-variant pt-12">
        {/* Entry 1: 2024 - Brutalist Silence */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white architecture photo of minimalist concrete structure with sharp shadows"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2024</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">012 / 100</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Brutalist Silence</h2>
          </div>
        </div>

        {/* Entry 2: 2023 - Fog & Pines */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white nature photo of dense forest in heavy fog with vertical lines of trees"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2023</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">008 / 050</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Fog & Pines</h2>
          </div>
        </div>

        {/* Entry 3: 2022 - Alpine Grain */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white nature photo of rugged mountain peaks with high contrast light"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2022</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">024 / 080</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Alpine Grain</h2>
          </div>
        </div>

        {/* Entry 4: 2021 - Concrete Rhythms */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white texture photo of weathered concrete wall with cracks and stains"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2021</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">015 / 060</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Concrete Rhythms</h2>
          </div>
        </div>

        {/* Entry 5: 2020 - Tidal Tones */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white nature photo of rhythmic sea waves with white foam against dark water"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2020</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">042 / 120</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Tidal Tones</h2>
          </div>
        </div>

        {/* Entry 6: 2019 - Monolith Shadows */}
        <div className="group flex flex-col gap-6 cursor-pointer">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="black and white structure photo of a tall skyscraper corner meeting the sky"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-zinc-400">2019</span>
              <span className="font-label text-[10px] tracking-[0.1em] text-zinc-400">003 / 040</span>
            </div>
            <h2 className="font-headline italic text-3xl tracking-tight group-hover:text-primary transition-colors">Monolith Shadows</h2>
          </div>
        </div>
      </section>

      {/* Pagination/Navigation hint */}
      <div className="mt-32 flex justify-center">
        <button className="font-label text-[10px] tracking-[0.4em] uppercase border-b border-black pb-2 hover:opacity-50 transition-opacity">
          VIEW FULL CATALOGUE
        </button>
      </div>
    </main>
  );
}
