import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { alegreya, oleoScript, almarai } from "@/fonts";
import { SiteHeader } from "@/components/framework/SiteHeader/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let testLinks: string[] = ["home", "about"];

  return (
    <html
      lang="en"
      className={`${oleoScript.variable} ${alegreya.variable} ${almarai.variable}`}
    >
      <body className={inter.className}>
        <SiteHeader links={testLinks} />
        {children}
      </body>
    </html>
  );
}
