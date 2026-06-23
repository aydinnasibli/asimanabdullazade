"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import About from "@/models/About";
import { verifySession } from "@/lib/auth";

export async function getAbout() {
  await dbConnect();
  const about = await About.findOne().lean();
  return about ? JSON.parse(JSON.stringify(about)) : null;
}

export async function updateAbout(data: {
  portrait?: string;
  tagline?: string;
  bio?: string[];
  recognition?: { title: string; detail: string }[];
  email?: string;
  location?: string;
  roles?: string;
}) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const about = await About.findOne();
  if (about) {
    Object.assign(about, data);
    await about.save();
  } else {
    await About.create(data);
  }
  revalidatePath("/about");
  revalidatePath("/admin/about");
}
