import "./globals.css";
import { Metadata } from "next";
import NeueMedium from 'next/font/local'
import NeueBold from 'next/font/local'
import GlacialRegular from 'next/font/local'
import GlacialBold from 'next/font/local'
import { Montserrat } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
  weight: ['600'],
  variable: '--font-montserrat',
  style: ['normal'],
  subsets: ['latin'],
});

const montserratBold = Montserrat({
  weight: ['700'],
  variable: '--font-montserrat-bold',
  style: ['normal'],
  subsets: ['latin'],
});

const neue = NeueMedium({
  src: '../../public/fonts/Neue/NeueMontreal-Medium.otf',
  variable: '--font-neue-medium',
  display: 'swap',
})

const neueBold = NeueBold({
  src: '../../public/fonts/Neue/NeueMontreal-Bold.otf',
  variable: '--font-neue-bold',
  display: 'swap',
})

const glacialRegular = GlacialRegular({
  src: '../../public/fonts/Glacial/GlacialIndifference-Regular.otf',
  variable: '--font-glacial-regular',
  display: 'swap',
})

const glacialBold = GlacialBold({
  src: '../../public/fonts/Glacial/GlacialIndifference-Bold.otf',
  variable: '--font-glacial-bold',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pt-br" className={`${neue.variable} ${glacialBold.variable} ${glacialRegular.variable} ${neueBold.variable} ${montserrat.variable} ${montserratBold.variable}`}>
      <GoogleTagManager gtmId="GTM-TVRWH47F" />
      <body>
        {children}
      </body>
    </html>
  );
}
