import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/ui/context/LanguageContext";

const openSans = Open_Sans({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Zoe Barkan | Website & Landing Page Design",
  description:
    "Wix websites and landing pages designed by Zoe Barkan for businesses, therapists, entrepreneurs and nonprofits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="icon" href="/faviconZoe.png" sizes="any" />
      </head>
      <body className={openSans.variable}>
        <LanguageProvider>{children}</LanguageProvider>
        <script src="https://cdn.enable.co.il/licenses/enable-L25299s2thfdv7lq-0324-83229/init.js"></script>
      </body>
    </html>
  );
}
