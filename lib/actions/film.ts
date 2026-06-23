"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import Film from "@/models/Film";
import { verifySession } from "@/lib/auth";

export async function getFilms() {
  await dbConnect();
  const films = await Film.find().sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(films));
}

export async function getFilmById(id: string) {
  await dbConnect();
  const item = await Film.findById(id).lean();
  return item ? JSON.parse(JSON.stringify(item)) : null;
}

export async function createFilm(data: {
  title: string;
  year: string;
  duration: string;
  type: string;
  description: string;
  thumbnailUrl: string;
  youtubeUrl: string;
}) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const count = await Film.countDocuments();
  const item = await Film.create({ ...data, order: count });
  revalidatePath("/film");
  revalidatePath("/admin/film");
  return JSON.parse(JSON.stringify(item));
}

export async function updateFilm(
  id: string,
  data: {
    title?: string;
    year?: string;
    duration?: string;
    type?: string;
    description?: string;
    thumbnailUrl?: string;
    youtubeUrl?: string;
  }
) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const item = await Film.findByIdAndUpdate(id, data, { new: true }).lean();
  revalidatePath("/film");
  revalidatePath("/admin/film");
  return JSON.parse(JSON.stringify(item));
}

export async function deleteFilm(id: string) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Film.findByIdAndDelete(id);
  revalidatePath("/film");
  revalidatePath("/admin/film");
}

export async function reorderFilms(ids: string[]) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Promise.all(
    ids.map((id, index) => Film.findByIdAndUpdate(id, { order: index }))
  );
  revalidatePath("/film");
  revalidatePath("/admin/film");
}
