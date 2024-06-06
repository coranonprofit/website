import "./global.css";
import GigaContext from "@/lib/context";
import { Oswald, Open_Sans } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--text-font-heavy", 
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--text-font",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${open_sans.variable}`}>
      <body>
        <GigaContext>
          {children}
        </GigaContext>
      </body>
    </html>
  );
}