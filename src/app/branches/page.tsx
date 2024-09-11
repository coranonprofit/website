"use client";
import { Card, Center, Container, Loader, Stack, Text, Title } from "@mantine/core";
import { useBranches } from "./hooks"
import { useRouter } from "next/navigation";

export default function BranchList() {
    const { branches } = useBranches();

    if (!branches) return <Center><Loader /></Center>

    {/* TODO: a world map with clickable points */ }

    return <Container p="sm">
        <Stack gap="lg">
            {branches?.map(branch => <BranchSection branch={branch} />)}
        </Stack>
    </Container>
}

function BranchSection(props: { branch: any }) {
    const router = useRouter();
    return <Card shadow="sm" padding="lg" radius="md" withBorder style={{cursor: 'pointer'}} onClick={() => router.push("/branches/" + props.branch.name)}>
        <Title order={3}>{props.branch.name}</Title>
        <Text>{props.branch.overview}</Text>
    </Card>
}