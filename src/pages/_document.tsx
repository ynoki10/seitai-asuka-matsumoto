import { Html, Head, Main, NextScript } from 'next/document';

import { mobileHeaderHeight } from '@/variables/headerVars';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="robots" content="noindex , nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Zen+Maru+Gothic:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="https://asuka-matsumoto.com/favicon.ico"></link>
        <style>
          {`:root {
            --mobile-header-height: ${mobileHeaderHeight};
            --z-index-mobile-header: 100;
            --z-index-mobile-menu: 200;
          }`}
        </style>
        <meta property="og:image" content="https://asuka-matsumoto.com/ogp.png" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="整体院あす香" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="font-sans font-medium text-black bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
