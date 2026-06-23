"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import HomeSettings from "@/models/HomeSettings";
import { verifySession } from "@/lib/auth";

export async function getHomeSettings() {
  await dbConnect();
  const settings = await HomeSettings.findOne().lean();
  return settings ? JSON.parse(JSON.stringify(settings)) : null;
}

export async function updateHomeSettings(data: {
  photographyHeroImage?: string;
  filmHeroImage?: string;
  filmHeroVideo?: string;
  designHeroImage?: string;
  stripText?: string;
}) {
  if (!(await verifySession())) throw new Error("Unauthorized");
  await dbConnect();
  const settings = await HomeSettings.findOne();
  if (settings) {
    Object.assign(settings, data);
    await settings.save();
  } else {
    await HomeSettings.create(data);
  }
  revalidatePath("/");
  revalidatePath("/admin/home");
}
