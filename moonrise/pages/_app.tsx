import { AppProps } from 'next/app';
import RootLayout from '../app/layout';
import '../app/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;