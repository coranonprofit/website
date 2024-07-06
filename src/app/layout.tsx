"use server";

import { auth } from "./auth";
import { PageLayout } from "./nav";
import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <PageLayout>
            {children}
          </PageLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
