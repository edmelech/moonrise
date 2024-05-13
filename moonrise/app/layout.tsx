import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    // <ChakraProvider>
      <html lang="en">
        <body>
          <div>
            <Navbar />
              <main className='relative overflow-hidden'>
                {children}
              </main>
            <Footer />
          </div> 
        </body>
      </html>      
    
    // </ChakraProvider>
  )
}


export default dynamic (() => Promise.resolve(RootLayout), {ssr: false})