// export { default } from 'next-auth/middleware';
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { auth } from '@/firebaseAdminConfig'
//
// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get('token')?.value
//
//   if (!token) {
//     return NextResponse.redirect(new URL('/auth/signin/email', req.nextUrl))
//   }
//
//   try {
//     await auth.verifyIdToken(token)
//     return NextResponse.next() // Proceed to dashboard
//   } catch (error) {
//     return NextResponse.redirect(new URL('/auth/signin/email', req.nextUrl)) // Redirect to login if verification fails
//   }
// }
//
// // Specify the routes that require authentication
// export const config = {
//   matcher: ['/dashboard/:path*'], // Protect dashboard routes
// }

// export { default } from 'next-auth/middleware';
// //
// export const config = { matcher: ['/dashboard'] }
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/auth/signin/email' || path === '/auth/signup/email' || path === '/verifyemail' || path === '/' || path === "/auth/"


  const token = request.cookies.get('token')?.value || ''
  // const token = request.cookies.get('token')?.value;
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/signin/email', request.nextUrl))
  };

    if (!isPublicPath && token) {
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // '/',
    // '/profile',
    // '/dashboard/user',
    // '/dashboard/admin',
    // '/courses',
  ]
};

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path.startsWith('/auth') || 
                       path === '/' || 
                       path === '/verifyemail';

  // Retrieve token from cookies
  const token = request.cookies.get('token')?.value || '';

  // Redirect authenticated users trying to access public pages
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  // Redirect unauthenticated users trying to access protected pages
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/signin/email', request.nextUrl));
  }

  // Allow the request to proceed if authentication is valid or no redirect needed
  return NextResponse.next();
}

// Specify which routes the middleware should apply to
// export const config = {
//   matcher: [
//     '/dashboard/:path*', // Protect all dashboard routes
//     '/profile/:path*',   // Example: Protect profile routes
//     '/courses',          // Example: Protect courses page
//   ],
// };
