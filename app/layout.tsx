import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// import { Lora } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Providers } from './providers';
import NavbarWrapper from '@/components/NavbarWrapper'; // Import the new Client Component

const myFont = localFont({
  src: '../public/fonts/NewakeFont.otf',
  display: 'swap',
  variable: "--font-newake"
})

const inter = Inter({ subsets: ['latin'] })
// const lora = Lora({ 
//   subsets: ['latin'],
//   weight: "400",
//   variable: "--font-lora"
// })

export const metadata: Metadata = {
  title: 'Moonrise',
  description: 'The high-water mark in talent solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} ${myFont.variable } `}>
      <Providers>
        <NavbarWrapper />
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer />
      </Providers>
      </body>
    </html>
  );
}