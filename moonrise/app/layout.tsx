import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  )
}
