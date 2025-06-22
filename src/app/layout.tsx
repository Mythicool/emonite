import type { Metadata } from "next";
import { Creepster } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
});

export const metadata: Metadata = {
  title: "EmoNite - Millennial Emo Night Events",
  description: "Relive the glory days of emo with nostalgic nights featuring My Chemical Romance, Fall Out Boy, Panic! At The Disco, and all your favorite 2000s emo classics. Find emo night events near you.",
  keywords: "emo night, millennial nostalgia, My Chemical Romance, Fall Out Boy, Panic At The Disco, 2000s music, emo events, scene kids, alternative music",
  authors: [{ name: "EmoNite" }],
  openGraph: {
    title: "EmoNite - Millennial Emo Night Events",
    description: "Relive the glory days of emo with nostalgic nights featuring your favorite 2000s classics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmoNite - Millennial Emo Night Events",
    description: "Relive the glory days of emo with nostalgic nights featuring your favorite 2000s classics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData type="organization" />
      </head>
      <body className={`${creepster.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
