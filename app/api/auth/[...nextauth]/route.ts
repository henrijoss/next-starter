import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Here, you can access `user`, `account`, and `profile` to store custom information.
      if (account?.provider === 'github') {
        if (user.id === '44018513') {
          return true;
        }
        // user.githubId = profile.id.toString();
        // You can save other profile information to your database here
        // await prisma.user.upsert({
        //   where: { email: user.email },
        //   update: { githubId: user.githubId },
        //   create: {
        //     email: user.email,
        //     name: user.name,
        //     image: user.image,
        //     githubId: user.githubId,
        //     // Add other custom fields here
        //   },
        // });
      }
      return false;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
