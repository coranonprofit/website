"use client";

import React from "react";
import { getBranchInfo } from "./server";
import { Container, Loader, Stack, Text, Title } from "@mantine/core";

export default function BranchPage({ params }: { params: { name: string } }) {

    const [branchInfo, setBranchInfo] = React.useState<any>(undefined);

    React.useEffect(() => { getBranchInfo(params.name).then(setBranchInfo) }, [setBranchInfo, params]);

    if(!branchInfo) return <Loader />

    return <Container size="lg">
        <Stack>
            <Title>{branchInfo['name']} Branch</Title>
            <Text>{branchInfo['overview']}</Text>
            {/* TODO: add contact information and photos. */}
        </Stack>
    </Container>
}