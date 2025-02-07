import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies
  const role = req.cookies.get("role")?.value;   // Get role from cookies

  const url = req.nextUrl.clone();

  if (!token) {
    // Redirect unauthenticated users to login
    return NextResponse.redirect(new URL("/auth/signin/email", req.url));
  }
  if (token) {
    if (role === "admin" && !url.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } else if (role === "instructor" && !url.pathname.startsWith("/instructor")) {
      return NextResponse.redirect(new URL("/instructor/dashboard", req.url));
    } else if (role === "student" && !url.pathname.startsWith("/student")) {
      return NextResponse.redirect(new URL("/student/dashboard", req.url));
    } else if (!role) {
      // Redirect to login if role is invalid or missing
      return NextResponse.redirect(new URL("/auth/signin/email", req.url));
    }

    // Allow valid requests to continue
    return NextResponse.next();
  };
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/instructor/:path*",
    "/student/:path*",
  ],
};
