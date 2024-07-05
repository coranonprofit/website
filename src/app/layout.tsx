"use server";

import { getServerSession } from "next-auth";
import { PageLayout } from "./nav";
import SessionProvider from "./auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

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