"use server";

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getBranchInfo(name: string) {
    return await prisma.branch.findUnique({
        where: {
            name: name
        }
    })
}