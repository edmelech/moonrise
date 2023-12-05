import { Inter } from 'next/font/google'
import { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moonrise',
  description: 'The high-water mark in civil engineering recruitment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
