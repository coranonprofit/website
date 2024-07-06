import { Container } from "@mantine/core";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function getAllBranches() {
    return await prismaClient.branch.findMany();
}

export default function BranchManagement() {
    return <Container>
        Branch manager
    </Container>
}