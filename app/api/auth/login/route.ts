import { NextRequest, NextResponse } from "next/server";
import { createSession, verifyPassword } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import LoginAttempt from "@/models/LoginAttempt";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

function getClientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  await dbConnect();

  // Check rate limit
  const record = await LoginAttempt.findOne({ ip });
  if (record) {
    const timeSince = Date.now() - record.lastAttempt.getTime();
    if (record.attempts >= MAX_ATTEMPTS && timeSince < LOCKOUT_MS) {
      const minutesLeft = Math.ceil((LOCKOUT_MS - timeSince) / 60000);
      return NextResponse.json(
        { error: `Too many attempts. Try again in ${minutesLeft} minutes.` },
        { status: 429 }
      );
    }
    if (timeSince >= LOCKOUT_MS) {
      await LoginAttempt.deleteOne({ ip });
    }
  }

  const { password } = await req.json();

  if (!password || !verifyPassword(password)) {
    await LoginAttempt.findOneAndUpdate(
      { ip },
      { $inc: { attempts: 1 }, $set: { lastAttempt: new Date() } },
      { upsert: true }
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await LoginAttempt.deleteOne({ ip });
  await createSession();
  return NextResponse.json({ success: true });
}
