import './globalStyles.scss';
import type { AppProps } from 'next/app';

import Navbar from '@/cmp/Navbar/Navbar';
import Footer from '@/cmp/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
