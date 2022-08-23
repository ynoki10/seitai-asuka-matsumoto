import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { mobileHeaderHeight } from '@/variables/headerVars';

const url = process.env.VERCEL_URL || 'localhost:3000';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="robots" content="noindex , nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Zen+Maru+Gothic:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href={`https://${url}/favicon.ico`}></link>
        <style>
          {`:root {
            --mobile-header-height: ${mobileHeaderHeight};
            --z-index-mobile-header: 100;
            --z-index-mobile-menu: 200;
          }`}
        </style>
        <meta property="og:image" content={`https://${url}/ogp.png`} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="整体院あす香" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
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
      </Head>
      <body className="font-sans font-medium text-black bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
