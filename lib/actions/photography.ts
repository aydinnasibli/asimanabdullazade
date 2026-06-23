"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import Photography from "@/models/Photography";
import { verifySession } from "@/lib/auth";

export async function getPhotographySeries() {
  await dbConnect();
  const series = await Photography.find().sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(series));
}

export async function getPhotographyById(id: string) {
  await dbConnect();
  const item = await Photography.findById(id).lean();
  return item ? JSON.parse(JSON.stringify(item)) : null;
}

export async function createPhotography(data: {
  title: string;
  year: string;
  count: string;
  format: string;
  description: string;
  images: string[];
}) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const count = await Photography.countDocuments();
  const item = await Photography.create({ ...data, order: count });
  revalidatePath("/photography");
  revalidatePath("/admin/photography");
  return JSON.parse(JSON.stringify(item));
}

export async function updatePhotography(
  id: string,
  data: {
    title?: string;
    year?: string;
    count?: string;
    format?: string;
    description?: string;
    images?: string[];
  }
) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const item = await Photography.findByIdAndUpdate(id, data, { new: true }).lean();
  revalidatePath("/photography");
  revalidatePath("/admin/photography");
  return JSON.parse(JSON.stringify(item));
}

export async function deletePhotography(id: string) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Photography.findByIdAndDelete(id);
  revalidatePath("/photography");
  revalidatePath("/admin/photography");
}

export async function reorderPhotography(ids: string[]) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Promise.all(
    ids.map((id, index) => Photography.findByIdAndUpdate(id, { order: index }))
  );
  revalidatePath("/photography");
  revalidatePath("/admin/photography");
}
