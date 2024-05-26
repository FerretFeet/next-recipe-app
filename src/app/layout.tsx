import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { alegreya, oleoScript, almarai } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oleoScript.variable} ${alegreya.variable} ${almarai.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
