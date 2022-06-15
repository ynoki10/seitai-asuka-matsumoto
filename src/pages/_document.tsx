import { Html, Head, Main, NextScript } from 'next/document';

import { mobileHeaderHeight } from '@/variables/headerVars';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Zen+Maru+Gothic:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <style>
          {`:root {
            --mobile-header-height: ${mobileHeaderHeight};
          }`}
        </style>
      </Head>
      <body className="font-sans font-medium text-black bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
