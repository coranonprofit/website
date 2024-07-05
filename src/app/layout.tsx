"use client";
import '@mantine/core/styles.css';
import { AppShell, createTheme, Group, MantineProvider, Image, Text } from '@mantine/core';
import Link from 'next/link';

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

  const links = {
    "Home": "/",
    "About": "/about"
  };

  return <AppShell
    header={{ height: '4rem', offset: true }}
  >
    <AppShell.Header>
      <Group px="md" justify='space-between' p="md">
        <Group>
          <Image src="/logo.png" w={"xl"} alt="" />
          <Text>CORA</Text>
        </Group>
        <Group gap="xl">
          {Object.entries(links).map(([pageName, pageLink]) => <Text key={pageName} component={Link} href={pageLink}>
            {pageName}
          </Text>)}
        </Group>
      </Group>
    </AppShell.Header>

    <AppShell.Main style={{ width: '100%', maxHeight: '100vh', height: '90vh' }}>
      {props.children}
    </AppShell.Main>
  </AppShell>
}
