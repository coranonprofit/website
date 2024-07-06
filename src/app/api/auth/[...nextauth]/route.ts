import NextAuth, { AuthOptions } from "next-auth"
import Discord from "next-auth/providers/discord";

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

const authOptions: AuthOptions = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!
    })
  ],
  adapter: PrismaAdapter(prismaClient)
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }