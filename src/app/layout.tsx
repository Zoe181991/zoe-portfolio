import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
