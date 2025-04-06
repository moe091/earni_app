import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';

console.log("GOOGLE ID", process.env.GOOGLE_ID);
// Define auth options
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

// Create NextAuth handler
const handler = NextAuth(authOptions);

// Export as GET and POST
export { handler as GET, handler as POST };