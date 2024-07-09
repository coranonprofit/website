"use server";


import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function getAllBranches() {
    return await prismaClient.branch.findMany();
}