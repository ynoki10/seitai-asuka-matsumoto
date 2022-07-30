import { MicroCMSListResponse } from 'microcms-js-sdk';

import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHeader from '@/components/PageHeader';
import Pagination from '@/components/Pagination';
import VoiceCard from '@/components/VoiceCard';
import { client } from '@/libs/client';
import { range } from '@/libs/range';
import { PER_PAGE } from '@/variables/voicesPerPage';

import type { Voice } from '@/types/Voice';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

type Props = { id: number; voices: Voice[]; totalCount: number };
type Params = { id: string };

const VoicesPaginatePage: NextPage<Props> = (props) => {
  const { id, voices, totalCount } = props;
  return (
    <>
      <PageHeader
        title={'お客様の声'}
        imgSrc={{
          sp: '/assets/images/header-voices_sp.jpg',
          pc: '/assets/images/header-voices_pc.jpg',
        }}
      />

      {/* お客様の声 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">お客様の声</Heading01>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto text-center`}>
            ※寄せられたメッセージは全て個人の感想です。
          </p>
        </Inner>
      </Container>

      {/* 一覧 */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <div className={`flex flex-col gap-y-10`}>
            {voices.map((voice) => {
              return (
                <VoiceCard
                  key={voice.id}
                  title={voice.title}
                  body={voice.body}
                  info={`${voice.customerInfo.name}さん(${voice.customerInfo.age}${voice.customerInfo.gender})`}
                  img={{
                    src: voice.image.url + '?fit=max&w=320&h=500',
                    alt: '',
                    width: voice.image.width,
                    height: voice.image.height,
                    quality: 100,
                    layout: 'responsive',
                  }}
                />
              );
            })}
          </div>
          <div className={`mt-6 md:mt-10`}>
            <Pagination totalCount={totalCount} currentPage={id} />
          </div>
        </Inner>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: MicroCMSListResponse<Voice> = await client.get({
    endpoint: 'voices',
    queries: { limit: 0 },
  });

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((pageNum) => {
    return {
      params: {
        id: pageNum.toString(),
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const id = params?.id ? params.id : '0';

  const data: MicroCMSListResponse<Voice> = await client.get({
    endpoint: 'voices',
    queries: { limit: PER_PAGE, offset: (Number(id) - 1) * PER_PAGE },
  });

  return {
    props: {
      id: Number(id),
      voices: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default VoicesPaginatePage;
