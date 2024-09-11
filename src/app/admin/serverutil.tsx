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

export async function updateBranch(branch: any) {
    return await prismaClient.branch.update({
        where: {
            id: branch.id
        },
        data: branch
    });
}

export async function deleteBranch(branchId: string) {
    return await prismaClient.branch.delete({
        where: {
            id: branchId
        }
    });
}

export async function getAllUsers() {
    return await prismaClient.user.findMany();
}

export async function updateUser(user: any) {
    return await prismaClient.user.update({
        where: {
            id: user.id
        },
        data: user
    })
}