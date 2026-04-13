export default function About() {
  return (
    <main className="pt-12 md:pt-20 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      {/* Hero Section: Asymmetrical Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Side: Large Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden">
            <img
              alt="Asiman Abdullazade Photographer"
              className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 transition duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg"
            />
          </div>
          <div className="mt-8">
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-outline">ASIMAN ABDULLAZADE</p>
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-outline">FOUNDER & LEAD PHOTOGRAPHER</p>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:pt-12">
          <div className="max-w-2xl">
            <h1 className="font-headline italic text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
              "The image is not a capture of time, but an extraction of it. In the stillness, we find the archive of the unsaid."
            </h1>
            <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg">
              <p>
                ASIMAN ABDULLAZADE was born from a rejection of the digital saturation that defines our modern visual landscape. Founded by Asiman Abdullazade, the studio operates on the principle of <span className="text-primary italic">Archival Silence</span>—a method that prioritizes the space between subjects as much as the subjects themselves.
              </p>
              <p>
                Our philosophy is rooted in the belief that true luxury in photography lies in intentionality. The 'Silent Frame' method involves a meditative approach to composition, often spending hours observing light shifts before a single shutter release. This patience ensures that every photograph is not just a digital file, but a curated artifact of light and shadow.
              </p>
              <p>
                Based between London and the High Atlas, Abdullazade’s work bridges the gap between commercial precision and fine-art abstraction. Each commission is treated as a collaborative archival project, documenting the transient with a permanence that only medium-format clarity can provide.
              </p>
            </div>
          </div>

          {/* Equipment & Technical Meta */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-outline-variant/20">
            <div className="bg-surface-container p-8 border-l-2 border-primary">
              <h3 className="font-label text-xs tracking-[0.2em] uppercase font-bold mb-6">EQUIPMENT</h3>
              <ul className="space-y-4 font-body text-sm text-on-surface-variant">
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span>CAMERA SYSTEM</span>
                  <span className="text-primary">Phase One XF</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span>OPTICS</span>
                  <span className="text-primary">80mm Schneider Kreuznach</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span>DIGITAL BACK</span>
                  <span className="text-primary">IQ4 150MP</span>
                </li>
                <li className="flex justify-between">
                  <span>LIGHTING</span>
                  <span className="text-primary">Available / Profoto D2</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-label text-xs tracking-[0.2em] uppercase font-bold">SELECTED EXHIBITIONS</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold">THE WEIGHT OF LIGHT</p>
                  <p className="text-xs text-outline tracking-wider">ROYAL ACADEMY, LONDON — 2023</p>
                </div>
                <div>
                  <p className="text-sm font-bold">MONOCHROME DIALOGUES</p>
                  <p className="text-xs text-outline tracking-wider">GALERIE VERNON, PARIS — 2021</p>
                </div>
                <div>
                  <p className="text-sm font-bold">ARCHIVAL SILENCE</p>
                  <p className="text-xs text-outline tracking-wider">SOLO EXHIBITION, NYC — 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Spacer / Philosophy Section */}
      <section className="mt-32 py-32 bg-surface-container-low flex flex-col items-center text-center px-6">
        <span className="material-symbols-outlined text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>camera</span>
        <h2 className="font-headline italic text-3xl max-w-3xl leading-relaxed">
          "We do not seek to represent reality. We seek to curate a version of it that resonates with the quietest parts of the observer."
        </h2>
        <div className="mt-12 h-24 w-px bg-primary"></div>
      </section>

      {/* Studio Space Gallery */}
      <section className="mt-32">
        <div className="flex justify-between items-baseline mb-12">
          <h3 className="font-label text-xs tracking-[0.2em] uppercase">THE STUDIO</h3>
          <p className="text-outline text-[10px] tracking-widest uppercase">LONDON, UK</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-square bg-surface-container overflow-hidden">
            <img
              alt="Studio Interior"
              className="w-full h-full object-cover grayscale hover:scale-105 transition duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvaAIyifPSlH5g9kAhk_vqOg2HAkgWw9v4DAlah9Ak_uJ11pXVI6GTcMYEcOzSJ1Ueje8y_0H7-BVrAp0L3QJO5UIoWBeXe1DdmKXQDrxLeNVxqC7VMDBuT2wXIK7W-qhLUPf1gYdrjlFwqDgdVVr7KC4Pjq2kPRLh3ht_E-6edWn0UN9Obpm9N3oogRxdsmkABVe3ErXFg82m4bvrkQSMR6-Zim11l1eBEKiwzInHGaYVbdzNBc5TJqv-5jHvl5KTKPJ9tFciFXU"
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden">
            <img
              alt="Camera Detail"
              className="w-full h-full object-cover grayscale hover:scale-105 transition duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jPZ-XJZ0QWSOyvYf976JwGXVnefQBmWCMmYs9SRRjiVjqryPNozBWhtc9qlolYpc-2Ju7pFfOgs1tie3m-BuwPKGoKrD019TvSYgTzcaZf_Do9wCZdsMM4ZeterGWktFkP3bkgd3QAOIOqVLYdO9KCqhAFJo-BM49muRGffgysyy_wLHGJqtJ_Ah7bcvLUvQTjARiQEIe_CHJZv1EWYEpWfnCb22cLWhACljbbyiBWa-w4OZl4f2Tm-yTC03QkyWNjFJ_NlhR8k"
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden">
            <img
              alt="Archive Drawer"
              className="w-full h-full object-cover grayscale hover:scale-105 transition duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA19d9J4Tm74niCEBenhCV3pRNGSUInT3_p6XltdolJPOzrB_W0eHlY1S-ZRJj2_DCYjlnJDwwvhVQFOY1t5u-UjR2cl51ZqGtRXxLUHSY6Ru5-1Y2nzOteft7YamUKFrMAwZ5wGZBNQzawCR9YOs5oaeKubv1GIPv5uf3hQMvyjLOwXQ_CktFMY7A73BytfwG5xXE1ry53HknKHlReCjitOr2t-p94IOWfze2RI_VapUogXu3LtMYppONvKmzuWAGZ6Xb0ytOp_94"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
