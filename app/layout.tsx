import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// import { Lora } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Providers } from './providers';

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

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${myFont.variable } `}>
      <Providers>
        <DynamicNavbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer />
      </Providers>
      </body>
    </html>
  );
}