"use client";
import '@mantine/core/styles.css';
import { AppShell, createTheme, Group, MantineProvider, Image, Text } from '@mantine/core';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <PageLayout>
            {children}
          </PageLayout>
        </MantineProvider>
      </body>
    </html>
  );
}

function PageLayout(props: {
  children: any
}) {
  return <AppShell>
    <AppShell.Header>
      <Group px="md" justify='space-between' p="md">
        <Group>
          <Image src="/logo.png" w={"xl"} />
          <Text>CORA</Text>
        </Group>
        <Group gap="xl">
          {["Home", "About", "etc."].map(pageName => <Text key={pageName}>
            {pageName}
          </Text>)}
        </Group>
      </Group>
    </AppShell.Header>

    <AppShell.Main>{props.children}</AppShell.Main>
  </AppShell>
}
