"use client";

import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { MantineProvider } from '@mantine/core';

import { AppShell, AppShellHeader, AppShellMain, Group, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AccountIcon } from './components/AccountIcon';

const queryClient = new QueryClient();

export function PageLayout(props: {
    children: any
}) {

    const router = useRouter();

    const links = {
        "Home": "/",
        "About": "/about"
    };

    return <MantineProvider>
        <AppShell
            header={{ height: '4rem', offset: true }}
        >
            <AppShellHeader>
                <Group px="md" justify='space-between' p="md">
                    <Group onClick={() => router.push("/")}>
                        <Image src="/logo.png" w={"xl"} alt="" />
                        <Text>CORA</Text>
                    </Group>
                    <Group gap="xl">
                        {Object.entries(links).map(([pageName, pageLink]) => <Text key={pageName} component={Link} href={pageLink}>
                            {pageName}
                        </Text>)}
                        <AccountIcon />
                    </Group>
                </Group>
            </AppShellHeader>

            <AppShellMain style={{ width: '100%', maxHeight: '100vh', height: '90vh' }}>
                <QueryClientProvider client={queryClient}>
                    <ModalsProvider>
                        {props.children}
                    </ModalsProvider>
                </QueryClientProvider>
            </AppShellMain>
        </AppShell>
    </MantineProvider>
}