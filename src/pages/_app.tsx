import { ThemeProvider } from 'next-themes';
import './globalStyles.scss';
import type { AppProps } from 'next/app';

import Navbar from '@/cmp/Navbar/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
