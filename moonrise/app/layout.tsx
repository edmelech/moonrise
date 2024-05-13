import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html>
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
    
  )
}
