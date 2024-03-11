// Importe o componente Head do next
import Head from 'next/head';
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conste Marketing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <Head>
        <link rel="preload" href="/fonts/Montserrat-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NeueMontreal-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NeueMontreal-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NeueMontreal-Light.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/NeueMontreal-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Glacialindifference-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Glacialindifference-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
