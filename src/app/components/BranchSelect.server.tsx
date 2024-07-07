"use server";

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function getBranchList() {
    return prismaClient.branch.findMany({
        select: {
            name: true,
            id: true
        }
    })
}