import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        isSocial: { label: "Is Social", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const email = (credentials.email as string).toLowerCase().trim();
        const isSocial = credentials.isSocial === "true";

        const user = await prisma.user.findFirst({
          where: {
            email: { equals: email, mode: "insensitive" },
          },
        });

        if (!user) return null;

        if (!isSocial) {
          if (!user.password || !credentials.password) return null;
          const password = credentials.password as string;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        const dbUser = await prisma.user.findFirst({
          where: {
            email: { equals: user.email!, mode: "insensitive" },
          },
          include: { progress: true },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
          token.picture = dbUser.image;
          token.nativeLanguage = dbUser.nativeLanguage;
          token.currentLevel = dbUser.progress?.currentLevel || "A1";
        }
      }
      if (trigger === "update" && session) {
        if (session.name) token.name = session.name;
        if (session.image) token.picture = session.image;
        if (session.nativeLanguage) token.nativeLanguage = session.nativeLanguage;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.image = token.picture as string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const user = session.user as any;
        user.role = token.role;
        user.nativeLanguage = token.nativeLanguage;
        user.currentLevel = token.currentLevel;
      }
      return session;
    },
  },
});
