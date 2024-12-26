
// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      fullname:string;
      email:string;
      // Add other custom properties here
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    fullname:string;
    email:string;
    // Add other custom properties here
  }
}
