import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  console.error("Set MONGODB_URI environment variable");
  process.exit(1);
}

const IMGS = {
  photo1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZoERUXCVMTQzaJq_e1S1Q8ybZOITGpUxoXTM76qb1QMhXq9yTz3HzPjkn46WDRforSDvxY2gyKwWhqXNx9PD3tT2flmlqA2TK7kKwwZrC0o_UfhOLPTlREEMIoHGWGXVt-ZGS8DWzHqdxVRn1dkCatxGPKvQitUh3bh5tAr94upysq3L2ECwi8rK6yI8Vlady3r0hynaEC6AQz49jrk0M8nsDcxItSFGXgf8_kGkYBMMGG5Gj4M2QjIY2TnImShFkJBBb3cxZ8iA",
  photo2: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0JmbUrL0VxZ31V3z6z3wCWda8rr9esTZW0Id5J2NiSiWnLvfczXSgRe3eoPxgVkITBU5fqDK19VV7fN8ulG-oeQ8DihT8MCOH7S4AC2vnlbiwgyHJppR5yUGz_12_j9ugHjzpi17dcwqCd2Opxv5Ff9xHX4T80XLBPVwy-iHLmUrdfUe6gwGljnc8RevhZyysLfcp8HIMBn6k9u0aixR4oL9hknWO3z_49EmHXaWtzWG1RJvVFUzwtRMRuwG9B1x6trXzRMJ0lHM",
  photo3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCol4vdWId7Jv259GKAZ2KnIH4hoUvrAvNEH97FuQ3HenZ1PRoFw7-V6aI36FsoamTglCgQZfVCnf8hS_5ZGsVBxRftpRZjluJaDbTzyp3NlEhId-Crty5Foz1BNBxgo9vOvjHDC1d61bKGWHNMw26LsErNOGhPp7-5_ea7VkGvrK0UnB6KYaqPeAx1WELL9EgVBUbXUdncjYTzb-3L5LrQYhAXRuJhuOCJzwGOWw72B7xXpg1qPqY1l0iZmFPr0UbfAp9QeSDa3Tc",
  photo4: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_-zI79n0t-QQhtoxyadxyE8P_Bezb_7JeU2a6luVkI7IXALfcrTFZZyiV1gK6h5yfMalRhYPk-oSNoS2q_kIlEI8pAiKYJmNmJb_YbB3-kl_lrBORB2g4iZ0PbNAoF6eya6MwRsyREHSptnKzWx8geHtZmTDDGohInHiZAaOpz5FMVjDOxcdFNchAmKs1lVkAJOvG0LEFoGxuUQrqATbwJeUU5dO4HV8bIecpxBPHklrKjvE8E6wbQcwCPKOUJl86myiRBSux0k",
  photo5: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8JSOEnqEQMZE4RhBlCs23bj9ewTjrpuH_CFrm0qXvSQlB2DvxKkehUG7OoTM0jK4Fz2Y3_E8uKfyy0gGkMPWPtubiBvLgWWfiHSlXGdQlUzWzTtPNgehbYMtqnEqOaQBpZMpCRyfqTp1zzQNZCibAYkUiSPhy_HXkLOrhItmCj10p8yq8Q0sgD7UwXJX7CHJb3AX8-PYTEpvm52G2Uy3uxaQVQz7MSgr1vf3t6rN9swJ99ZCx8WZSIRjUjobOXyu-V9X7mZQlLzI",
  photo6: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWZGEznsK8kmmjEPAHzLuQ8FisQGoA0NhHU76ROPJYvGIiw1eW_XcfoNIx5Hc90eUqdvb9WR0zUVhRNK2aejZv4ikXLrQxrOiGltvUJF9qcZKjMeyNqXOCqPg_VfGIyE_Y9oVPaVl30K8E3Rtrxm68Qx64IgqSI4jfnp47bEggzwiFRVv0kyYxS-EbDVNJMbZpnn3c4e0PjjHqTzls7WypNjCu1jJzBGx5zAvtvmc5sOQL6QwzRbckqKZlibuqexoCd6k_Mb2zZY",
  studio1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvaAIyifPSlH5g9kAhk_vqOg2HAkgWw9v4DAlah9Ak_uJ11pXVI6GTcMYEcOzSJ1Ueje8y_0H7-BVrAp0L3QJO5UIoWBeXe1DdmKXQDrxLeNVxqC7VMDBuT2wXIK7W-qhLUPf1gYdrjlFwqDgdVVr7KC4Pjq2kPRLh3ht_E-6edWn0UN9Obpm9N3oogRxdsmkABVe3ErXFg82m4bvrkQSMR6-Zim11l1eBEKiwzInHGaYVBdzNBc5TJqv-5jHvl5KTKPJ9tFciFXU",
  portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUfLqr9UXzTlIzo010vtQKgl0z7cz-II2ttCOZelOAHvdqsD1MUShChYAw4eq0h1jmjqg3alpf6pDOHwRJi7Wo2wZ5nIg91usI6cp4exaN5G-nkM8jebVyo98-DrCCVxX1ahoLIsqdJZbnsHHFOyM7LoejgQKQbrXhYC71BIkFdc0954punm3FTqJ9qTI4HBkUg4AcquuMRT1CX0HXyGmVa8arv1gdGj2tA00jgAtCChhBD0pa9AH9n5Ps-j10X-n-ZGHWeqUfsvg",
};

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  // Photography
  const Photography = mongoose.model(
    "Photography",
    new mongoose.Schema({
      title: String, year: String, count: String, format: String,
      description: String, images: [String], order: Number,
    }, { timestamps: true })
  );

  await Photography.deleteMany({});
  await Photography.insertMany([
    { title: "Brutalist Silence", year: "2024", count: "12 photographs", format: "35mm Archival Ink", description: "", images: [IMGS.photo6, IMGS.photo3], order: 0 },
    { title: "Fog & Pines", year: "2023", count: "8 photographs", format: "Medium Format Digital", description: "", images: [IMGS.photo1, IMGS.photo4], order: 1 },
    { title: "Concrete Rhythms", year: "2022", count: "24 photographs", format: "Infrared Exposure", description: "", images: [IMGS.photo2, IMGS.photo5], order: 2 },
    { title: "Monolith Shadows", year: "2021", count: "15 photographs", format: "Large Format Film", description: "", images: [IMGS.photo3, IMGS.photo6], order: 3 },
  ]);
  console.log("Seeded Photography");

  // Film
  const Film = mongoose.model(
    "Film",
    new mongoose.Schema({
      title: String, year: String, duration: String, type: String,
      description: String, thumbnailUrl: String, youtubeUrl: String, order: Number,
    }, { timestamps: true })
  );

  await Film.deleteMany({});
  await Film.insertMany([
    { title: "The Commute", year: "2024", duration: "12 min", type: "Short Film", description: "A meditation on urban solitude. Follows a figure through the daily rhythm of Baku at dawn.", thumbnailUrl: IMGS.photo5, youtubeUrl: "", order: 0 },
    { title: "Tidal Light", year: "2022", duration: "24 min", type: "Documentary", description: "Caspian fishermen and the ancient relationship between community and water.", thumbnailUrl: IMGS.photo1, youtubeUrl: "", order: 1 },
    { title: "Still Frame", year: "2021", duration: "6 min", type: "Experimental", description: "A single location, twelve hours, no cuts. Sound design by Narmin Hasanova.", thumbnailUrl: IMGS.photo3, youtubeUrl: "", order: 2 },
  ]);
  console.log("Seeded Film");

  // Design
  const Design = mongoose.model(
    "Design",
    new mongoose.Schema({
      title: String, year: String, category: String, description: String,
      images: [String], order: Number,
    }, { timestamps: true })
  );

  await Design.deleteMany({});
  await Design.insertMany([
    { title: "Studio Identity", year: "2023", category: "Brand Identity", description: "Visual identity for a Baku architecture studio. Wordmark, palette, and stationery system.", images: [IMGS.photo2], order: 0 },
    { title: "Type Systems", year: "2022", category: "Editorial Design", description: "Annual report design and custom type pairing for a Caucasus cultural foundation.", images: [IMGS.studio1], order: 1 },
    { title: "Archive Catalogue", year: "2022", category: "Print Design", description: "Exhibition catalogue for a group photography show. 120pp, Hahnemühle uncoated.", images: [IMGS.photo6], order: 2 },
    { title: "Wayfinding", year: "2021", category: "Signage System", description: "Environmental graphics for a contemporary art museum in Tbilisi.", images: [IMGS.photo3], order: 3 },
  ]);
  console.log("Seeded Design");

  // About
  const About = mongoose.model(
    "About",
    new mongoose.Schema({
      portrait: String, tagline: String, bio: [String],
      recognition: [{ title: String, detail: String }],
      email: String, location: String, roles: String,
    }, { timestamps: true })
  );

  await About.deleteMany({});
  await About.create({
    portrait: IMGS.portrait,
    tagline: "I work at the intersection of image, time, and mark.",
    bio: [
      "I grew up in Baku, where Soviet architecture and Caspian light collide in unexpected ways. That tension — between structure and softness, between permanence and flux — still runs through everything I make.",
      "I started shooting on a borrowed Zenit when I was sixteen. Later I studied graphic design, fell into filmmaking, and eventually realised these three practices aren't separate pursuits — they're a single way of looking.",
      "My photography focuses on landscapes and the built environment. My films are mostly short, observational — interested in the rhythm of everyday life. My design work is rooted in typography and the logic of print.",
      "I take on commissions that interest me: editorial projects, short film collaborations, brand identities for organisations doing considered work. I prefer long conversations to quick briefs.",
    ],
    recognition: [
      { title: "The Weight of Light", detail: "Group Exhibition — Yay Gallery, Baku 2024" },
      { title: "Monochrome Dialogues", detail: "Solo Show — ArtTer, Tbilisi 2022" },
      { title: "Archival Silence", detail: "Publication — Atlas of Contemporary Photography 2021" },
    ],
    email: "hello@asimanabdullazade.com",
    location: "Baku, Azerbaijan",
    roles: "Photographer · Filmmaker · Designer",
  });
  console.log("Seeded About");

  // HomeSettings
  const HomeSettings = mongoose.model(
    "HomeSettings",
    new mongoose.Schema({
      photographyHeroImage: String, filmHeroImage: String,
      filmHeroVideo: String, designHeroImage: String, stripText: String,
    }, { timestamps: true })
  );

  await HomeSettings.deleteMany({});
  await HomeSettings.create({
    photographyHeroImage: IMGS.photo3,
    filmHeroImage: IMGS.photo1,
    filmHeroVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    designHeroImage: IMGS.photo4,
    stripText: "Baku, Azerbaijan — 2026",
  });
  console.log("Seeded HomeSettings");

  await mongoose.disconnect();
  console.log("Done! Database seeded successfully.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
