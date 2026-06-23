import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import HomeSettings from "@/models/HomeSettings";

export async function GET() {
  try {
    await dbConnect();
    const settings = await HomeSettings.findOne().lean();
    if (!settings) {
      return NextResponse.json({});
    }
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({});
  }
}
