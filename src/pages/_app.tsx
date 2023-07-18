/* eslint-disable react/function-component-definition */
import './globalStyles.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

import { urqlClient } from '@/lib/urqlClient';
import Navbar from '@/cmp/Navbar/Navbar';
import Footer from '@/cmp/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={urqlClient}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
