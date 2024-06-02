import "./global.css";
import GigaContext from "@/lib/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GigaContext>
          {children}
        </GigaContext>
      </body>
    </html>
  );
}