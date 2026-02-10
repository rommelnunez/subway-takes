import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getAssetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Subway Takes",
  description: "Social media sensation and SNL host Veronika Slowikowska desperately wishes for one thing: to be on Subway Takes.",
  icons: {
    icon: getAssetPath("/icon.svg"),
  },
  openGraph: {
    title: "Subway Takes",
    description: "Social media sensation and SNL host Veronika Slowikowska desperately wishes for one thing: to be on Subway Takes.",
    url: "https://rommelnunez.github.io/subway-takes/",
    siteName: "Subway Takes",
    images: [
      {
        url: "https://rommelnunez.github.io/subway-takes/headerimage.png",
        width: 1200,
        height: 630,
        alt: "Subway Takes with Veronika Slowikowska",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
