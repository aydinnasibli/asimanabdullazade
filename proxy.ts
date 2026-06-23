import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function verifyToken(signed: string, secret: string): boolean {
  const idx = signed.lastIndexOf(".");
  if (idx === -1) return false;
  const value = signed.slice(0, idx);
  const providedSig = signed.slice(idx + 1);

  // Check session expiry
  const parts = value.split(":");
  const timestamp = parseInt(parts[1], 10);
  if (isNaN(timestamp) || Date.now() - timestamp > MAX_AGE_MS) return false;

  // Verify HMAC signature with Node.js crypto
  const expectedSig = createHmac("sha256", secret).update(value).digest("hex");

  try {
    const a = Buffer.from(providedSig);
    const b = Buffer.from(expectedSig);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_session")?.value;
  const secret = process.env.AUTH_SECRET;

  if (!token || !secret || !verifyToken(token, secret)) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/upload/:path*",
    "/api/photography/:path*",
    "/api/film/:path*",
    "/api/design/:path*",
    "/api/about/:path*",
    "/api/home/:path*",
    "/api/auth/logout",
  ],
};
