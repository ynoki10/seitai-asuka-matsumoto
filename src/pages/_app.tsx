import '@/styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={'flex flex-col min-h-screen'}>
        <Header />
        <main className={`pt-[var(--mobile-header-height)] md:pt-0`}>
          <Component {...pageProps} />
        </main>
        <div className={'mt-auto'}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
