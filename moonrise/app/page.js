import { ChakraProvider } from '@chakra-ui/react';
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <Hero />
      </main>
    </ChakraProvider>

    
  )
}
