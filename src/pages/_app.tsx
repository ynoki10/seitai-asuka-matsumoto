import '@/styles/globals.css';
import Script from 'next/script';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WXQPCCZYF3"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WXQPCCZYF3');
          `,
        }}
      />
      <div className={'flex flex-col min-h-screen'}>
        <Header />
        <main
          className={`pt-[var(--mobile-header-height)] md:pt-0 text-[14px] tracking-wider leading-relaxed md:text-[16px]`}
        >
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
