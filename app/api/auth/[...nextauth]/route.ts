import NextAuth, { NextAuthOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
// import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/libs/dbConfig';
import User from '@/models/userModel';
import { JWT } from 'next-auth';

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials: Credentials): Promise<AdapterUser | null> {
        const { email, password } = credentials as { email: string; password: string }

        try {
          await dbConnect();
          const user = await User.findOne({ email });

          if (!user) {
            console.log('Invalid Credentials');
            return Promise.resolve(null);
          }

          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            return Promise.resolve(null);
          }

          console.log(user)
          return Promise.resolve(user);

        } catch (error) {
          console.error('Error during user authorization:', error);
          return Promise.resolve(null);
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/auth/signin/email"
  },

  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if(user) {
        token.id = user.id;
        token.role = user.role;
        token.fullname = user.fullname;
      }
      return token;
    },
  async session({ session, token }: { session: any; token: JWT }): Promise<any> {
    if (token.id) {
      session.user.id = token.id;
      session.role = token.role;
        token.fullName = token.fullname;
    }
    return session;
  }
}
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import NextAuth from 'next-auth';
// import User from '@/models/userModel';
// import bcrypt from 'bcryptjs';
// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from '@/libs/dbConfig';
//
// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials;
//
//         try {
//           await dbConnect();
//           const user = User.findOne({email});
//
//           if (!user) {
//             return null;
//           }
//
//           const isValidPassword = await bcrypt.compare(password, user.password);
//
//           if (!isValidPassword) {
//             return null;
//           }
//
//           return null;
//           
//         } catch (error) {
//           
//         }
//             },
//     }),
//   ]
// }
// export default NextAuth(authOptions);
