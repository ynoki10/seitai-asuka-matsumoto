import Head from 'next/head';

type Props = {
  top?: boolean;
  title?: string;
  description?: string;
  slug: string;
};

const PageHead = (props: Props) => {
  const {
    top = false,
    title,
    description = '長野県松本市にある、女性整体師による、慢性頭痛と肩こり専門の整体院。「頭痛が起きにくい体質づくり」をサポートします。完全予約制。',
    slug,
  } = props;
  const pageTitle =
    top || !title
      ? '整体院あす香｜長野県松本市の慢性頭痛・肩こり専門整体院'
      : `${title} | 整体院あす香｜長野県松本市の慢性頭痛・肩こり専門整体院`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={`https://asuka-matsumoto.com/${slug}`} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default PageHead;
