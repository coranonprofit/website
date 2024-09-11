"use server";

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function getBranchName(userEmail: string) {
    const user = await prismaClient.user.findUnique({
        where: {
            email: userEmail
        },
        include: {
            branch: {
                select: {
                    name: true
                }
            }
        }
    });

    if(user && user.branch) return user.branch.name;
    return "No Branch!";
}