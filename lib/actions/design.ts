"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import Design from "@/models/Design";
import { verifySession } from "@/lib/auth";

export async function getDesignProjects() {
  await dbConnect();
  const projects = await Design.find().sort({ order: 1 }).lean();
  return JSON.parse(JSON.stringify(projects));
}

export async function getDesignById(id: string) {
  await dbConnect();
  const item = await Design.findById(id).lean();
  return item ? JSON.parse(JSON.stringify(item)) : null;
}

export async function createDesign(data: {
  title: string;
  year: string;
  category: string;
  description: string;
  images: string[];
}) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const count = await Design.countDocuments();
  const item = await Design.create({ ...data, order: count });
  revalidatePath("/design");
  revalidatePath("/admin/design");
  return JSON.parse(JSON.stringify(item));
}

export async function updateDesign(
  id: string,
  data: {
    title?: string;
    year?: string;
    category?: string;
    description?: string;
    images?: string[];
  }
) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const item = await Design.findByIdAndUpdate(id, data, { new: true }).lean();
  revalidatePath("/design");
  revalidatePath("/admin/design");
  return JSON.parse(JSON.stringify(item));
}

export async function deleteDesign(id: string) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Design.findByIdAndDelete(id);
  revalidatePath("/design");
  revalidatePath("/admin/design");
}

export async function reorderDesign(ids: string[]) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  await Promise.all(
    ids.map((id, index) => Design.findByIdAndUpdate(id, { order: index }))
  );
  revalidatePath("/design");
  revalidatePath("/admin/design");
}
