import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type ExtendedMetadata = Metadata & {
  robots: string;
};

export const metadata: ExtendedMetadata = {
  title: "tooExclusive.com | #1 Nigerian Music and Entertainment Website",
  description: "Nigerian Music and Entertainment site TooExclusive.com provides Nigerian Songs, Entertainment news &amp; Videos of your favorite Artists in 2024",
  authors: [{name:"TooExclusive"}],
  robots: "follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
