//TODO: add this to the navbar, but only if the user is an admin.

import { Center, Container, Tabs, TabsList, TabsPanel, TabsTab, Title } from "@mantine/core";
import UserManagement from "./users";
import BranchManagement from "./branches";


export default function AdminPage() {
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


