import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@/app/globals.css'; // Import global styles here
import RootLayout from '@/app/layout'; // Import your RootLayout component
import { AppProps } from 'next/app'; // Import AppProps type from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default MyApp;