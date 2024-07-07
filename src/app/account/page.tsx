"use client";

import { Center, Container, Fieldset, Stack, Text, Title } from "@mantine/core";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { getBranchName } from "./account_info";
import React from "react";

export default function AccountPage() {
    const { data: session } = useSession();

    const [branchName, setBranchName] = React.useState<string | undefined>(undefined);

    if(!session) {
        redirect("/api/auth/signin");
    }

    React.useEffect(() => {
        getBranchName(session?.user?.email!).then(setBranchName);
    }, []);

    return <Container>
        <Center>
            <Title my="1.5em">Welcome, {session?.user?.name}</Title>
        </Center>

        <Fieldset legend="Account Details">
            <Stack>
                <Text><b>Name</b>: {session?.user?.name}</Text>
                <Text><b>Email</b>: {session?.user?.email}</Text>
                {branchName ? <Text><b>Branch</b>: {branchName}</Text> : <Text><b>Loading branch info...</b></Text>}
            </Stack>
        </Fieldset>
    </Container>
}