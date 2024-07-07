"use server";

import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();

export async function createBranch(name: string) {
    return await prismaClient.branch.create({
        data: {
            name: name
        }
    })
}


export async function getAllBranches() {
    return await prismaClient.branch.findMany();
}