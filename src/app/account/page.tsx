"use client";

import { Center, Container, Fieldset, Stack, Text, Title } from "@mantine/core";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function AccountPage() {
    const { data: session } = useSession();


    if(!session) {
        redirect("/api/auth/signin");
    }

    return <Container>
        <Center>
            <Title my="1.5em">Welcome, {session?.user?.name}</Title>
        </Center>

        <Fieldset legend="Account Details">
            <Stack>
                <Text><b>Name</b>: {session?.user?.name}</Text>
                <Text><b>Email</b>: {session?.user?.email}</Text>
            </Stack>
        </Fieldset>
    </Container>
}