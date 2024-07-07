//TODO: add this to the navbar, but only if the user is an admin.

import { Center, Container, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";
import UserManagement from "./users/";
import BranchManagement from "./branches/";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

export default async function AdminPage() {

    if(!(await hasAdminPowers())) redirect("/");

    return <Container size="xl">
        <Center><Title my="xl">Admin Dashboard</Title></Center>
        <Tabs orientation="vertical" defaultValue="users" h={"calc(100vh - 12rem)"}>
            <TabsList>
                <TabsTab value="users">User Management</TabsTab>
                <TabsTab value="branches">Branch Management</TabsTab>
            </TabsList>

            <TabsPanel value="users">
                <UserManagement />
            </TabsPanel>
            <TabsPanel value="branches">
                <BranchManagement />
            </TabsPanel>
        </Tabs>
    </Container>
}

const prismaClient = new PrismaClient();

async function hasAdminPowers() {
    const session = await auth();
    if(!session) return false;

    return (await prismaClient.user.findUnique({
        where: {
            email: session.user?.email!
        },
        select: {
            admin: true
        }
    }))?.admin || false;
}

