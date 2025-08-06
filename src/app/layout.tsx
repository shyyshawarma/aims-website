import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "AIMS-DTU",
  description: "Artificial Intelligence and Machine Learning Society of DTU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      
      <body className={`${orbitron.variable}`}>{children}</body>
    </html>
  );
}