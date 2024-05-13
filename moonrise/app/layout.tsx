import { ReactNode } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;