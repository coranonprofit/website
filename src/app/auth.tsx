import NextAuth, { NextAuthConfig } from "next-auth"
import Discord from "next-auth/providers/discord";

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

const options: NextAuthConfig = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!
        })
    ],
    adapter: PrismaAdapter(prismaClient)
};

export const {auth, handlers, signIn, signOut, } = NextAuth(options);