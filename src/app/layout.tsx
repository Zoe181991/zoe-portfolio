import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Abril_Fatface } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zoe Barkan",
  description: "full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/faviconZoe.png" sizes="any" />
    </head>
      <body className={abril.className}>{children}</body>
    </html>
  );
}
