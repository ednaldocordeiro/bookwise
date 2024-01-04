import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { CustomPrismaAdapter } from '@/lib/auth/prisma-adapter'

export const authOptions: AuthOptions = {
  adapter: CustomPrismaAdapter(),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      console.log('session', session)
      return {
        ...session,
        user,
      }
    },
    async signIn({ account, user }) {
      console.log(account, user)
      return true
    },
  },
}
