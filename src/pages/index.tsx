import { MicroCMSListResponse } from 'microcms-js-sdk';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import ButtonWithIcon from '@/components/ButtonWithIcon';
import Card from '@/components/Card';
import Container from '@/components/Container';
import Deco from '@/components/Deco';
import Heading01 from '@/components/Heading/Heading01';
import Heading02 from '@/components/Heading/Heading02';
import Inner from '@/components/Inner';
import MVSlider from '@/components/MVSlider';
import VoiceCard from '@/components/VoiceCard';
import { client } from '@/libs/client';

import type { Voice } from '@/types/Voice';
import type { NextPage } from 'next';

type Props = {
  voices: Voice[];
};

const HomePage: NextPage<Props> = ({ voices }) => {
  return (
    <>
      {/* MV */}
      <Inner size="lg">
        <p className={'mt-4 text-center md:hidden'}>
          <Image
            src={'/assets/images/logo-txt-black.svg'}
            alt="慢性頭痛・肩こり専門 整体院あす香"
            width={200}
            height={55}
          />
        </p>
        <MVSlider />
      </Inner>

      {/* Intro */}
      <Container className={`mt-20 md:mt-24 bg-pale`} as="section">
        <Inner>
          <div className={'relative'}>
            <div className={`relative z-10`}>
              <h2
                className={`font-bold text-xl text-green03 tracking-wider md:text-[28px] md:tracking-widest`}
              >
                「頭痛・肩こり専門」の整体院
              </h2>
              <p className={`mt-2 md:mt-4`}>
                整体院あす香は、頭痛・肩こり専門の整体院です。お客様がつらい頭痛・肩こりから「卒業」し、痛みのない元気な毎日を過ごせるよう、心をこめてサポートいたします。
                <br />
                頭痛・肩こりの根本原因にアプローチする確かな技術、オールハンド（手技）によるやさしい施術、「頭痛・肩こりの起きにくい体質」を作るための日々のセルフケア指導まで、あらゆる面からお客様の症状と向き合います。
                <br />
                どうぞお気軽にご相談ください！
              </p>
            </div>
            <div
              className={`absolute -bottom-2 right-3 z-0 w-[106px] h-auto md:w-[160px] md:-bottom-5`}
            >
              <Image src="/assets/images/about-clover.svg" alt="" width={160} height={99} />
            </div>
          </div>
        </Inner>
      </Container>

      {/* お悩み */}
      <Container as="section">
        <Inner>
          <Heading02 as="h2">こんなことでお悩みではありませんか？ </Heading02>
          <div className={`md:flex md:flex-row-reverse mt-5 md:gap-x-[clamp(20px,3.125vw,40px)]`}>
            <div className={`md:w-[38%] md:flex-shrink-0`}>
              <div className={`hidden md:block`}>
                <Image
                  src={'/assets/images/top-headache.jpg'}
                  alt=""
                  width={300}
                  height={300}
                  quality={90}
                  layout="responsive"
                />
              </div>
              <div className={'md:hidden'}>
                <Image
                  src={'/assets/images/top-headache_sp.jpg'}
                  alt=""
                  width={670}
                  height={414}
                  quality={90}
                  layout="responsive"
                />
              </div>
            </div>
            <ul className={`flex flex-col gap-y-4 mt-4 md:mt-0`}>
              {[
                '頭痛が始まると動けなくなり、日常生活に支障をきたしてしまう。',
                '病院で検査しても「異常なし」と言われ、どうしたらよいか分からない。',
                '頭痛薬を持ち歩いているが、本当は薬を飲み続けることも不安。',
                'このつらい頭痛をなんとかしたい！と思うが、自分でできる対処法が分からない。',
                'デスクワーク・リモートワークが続き、つらい肩こりに悩んでいる。',
              ].map((text) => {
                return (
                  <li className={`flex gap-1`} key={text}>
                    <IoMdCheckmarkCircleOutline
                      className={`flex-shrink-0 text-green03 text-[1.5em] mt-[0.05em]`}
                    />
                    <p className={`text-[15px] tracking-normal leading-normal`}>{text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`w-[82px] h-4 mt-6 bg-pale03 [clip-path:polygon(50%_100%,0_0,100%_0)] mx-auto`}
          ></div>
          <p
            className={`text-center text-green03 font-bold tracking-widest leading-snug text-[24px] md:text-[28px] mt-6`}
          >
            ぜひ一度当院の施術を
            <br className={`md:hidden`} />
            お試しください!
          </p>
          <div
            className={`md:flex md:flex-row-reverse md:items-center mt-10 md:mt-12 md:gap-x-[20px]`}
          >
            <div className={`md:w-[45%] md:flex-shrink-0`}>
              <Image
                src={'/assets/images/top-therapy.jpg'}
                alt=""
                width={670}
                height={414}
                quality={90}
                layout="responsive"
              />
            </div>
            <p className={`mt-4 md:mt-0 w-fit mx-auto`}>
              <span
                className={`font-bold text-[min(4.8vw,22px)] md:text-[24px] tracking-normal text-green03 underline decoration-accent decoration-2 underline-offset-[6px]`}
              >
                根本原因へのアプローチ
              </span>
              <span
                className={`inline-block ml-2 text-[min(3.73vw,18px)] md:text-[18px] tracking-normal font-bold`}
              >
                と
              </span>
              <br />
              <span
                className={`block w-fit font-bold mt-2 text-[min(4.8vw,22px)] md:text-[24px] tracking-normal text-green03 underline decoration-accent decoration-2 underline-offset-[6px]`}
              >
                頭痛・肩こりの起きにくい体質づくり
              </span>
              <span className={`block mt-2 text-[min(3.73vw,18px)] md:text-[16px]`}>
                によってあなたの悩みを根本から解決します。
              </span>
            </p>
          </div>
          <div className={`text-center mt-6 md:mt-16`}>
            <Link href="/price">
              <a className={`hover:opacity-75 transition-opacity`}>
                <Image
                  src={'/assets/images/price-bnr.png'}
                  alt="初めてのお客様はお試し料金！ 2980円"
                  width={400}
                  height={140}
                  quality={100}
                />
              </a>
            </Link>
          </div>
        </Inner>
      </Container>

      {/* 5つのポイント */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <div className={`text-center`}>
            <Image src={'/assets/images/top-points-clover.svg'} alt="" width={39} height={39} />
          </div>
          <h2
            className={`text-center text-[20px] leading-normal tracking-widest font-normal mt-2 md:text-[28px]`}
          >
            <span>整体院あす香の</span>
            <span className={`text-green03 text-[40px] font-bold md:text-[52px]`}>5</span>
            <span>つのポイント</span>
          </h2>
          <ol className={`flex flex-col gap-y-6 md:gap-y-8 mt-4`}>
            {[
              {
                title: '1. 頭痛・肩こりを原因から改善',
                body: '「筋膜リリース」と「セロトニン活性療法」という、科学的に裏付けられた方法で頭痛の根本原因にアプローチします。',
              },
              {
                title: '2. セルフケアまでサポート',
                body: '日常生活で心がけるべきことや体操の仕方をていねいに教え、サポートいたします。日々のケアによって「頭痛・肩こりの起きにくい体質」をつくることができます。',
              },
              {
                title: '3. ソフトな施術',
                body: 'オールハンド（手技）によるやさしい施術を行います。痛みはほとんどありません。リラックスして施術を受けていただけます。施術中に思わず眠ってしまう方もいらっしゃいます。',
              },
              {
                title: '4. コミュニケーションを大切に',
                body: 'ていねいにお客様のお話をうかがい、症状に応じた施術を行います。こちらの都合に合わせるような対応はいたしません。',
              },
              {
                title: '5. 落ち着いた空間',
                body: '当院は完全予約制となっております。また、お客様にリラックスしていただけるような空間づくりを心がけておりますので、安心してお越しください。',
              },
            ].map((item, index) => {
              return (
                <Card
                  as="li"
                  title={item.title}
                  body={item.body}
                  img={{
                    src: `/assets/images/point0${index + 1}.jpg`,
                    alt: '',
                    width: 590,
                    height: 414,
                    quality: 90,
                  }}
                  key={item.title}
                ></Card>
              );
            })}
          </ol>
          <div className={`flex flex-col gap-y-4 mt-10 md:flex-row md:gap-x-6`}>
            <ButtonWithIcon tag="a" linkProps={{ href: '/about' }} className="md:w-full">
              当院について
            </ButtonWithIcon>
            <ButtonWithIcon tag="a" linkProps={{ href: '/therapy' }} className="md:w-full">
              施術の流れについて
            </ButtonWithIcon>
          </div>
        </Inner>
      </Container>

      {/* 初めてのお客さま */}
      <Container as="section">
        <Inner>
          <Heading02 as="h2">初めてのお客さま限定！</Heading02>
          <div className={`mt-4 md:mt-6 flex flex-col-reverse md:flex-row gap-y-4 md:gap-x-10`}>
            <div className={`md:w-full`}>
              <p>
                当院では頭痛や肩こりでお悩みの方に適切な対処法を知ってもらいたいという思いから、初回に限りお試し料金での施術を行っております。また、お得な回数券もご用意しております。
              </p>
              <ButtonWithIcon tag="a" linkProps={{ href: '/price/' }} className="mt-4">
                料金について
              </ButtonWithIcon>
            </div>
            <div className={`text-center md:w-full`}>
              <Link href="/price">
                <a className={`hover:opacity-75 transition-opacity`}>
                  <Image
                    src={'/assets/images/price-bnr.png'}
                    alt="初めてのお客様はお試し料金！ 2980円"
                    width={400}
                    height={140}
                    quality={100}
                  />
                </a>
              </Link>
            </div>
          </div>
        </Inner>
      </Container>

      {/* ごあいさつ */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <Heading01 as="h2">院長ごあいさつ</Heading01>
          <div
            className={`bg-white shadow-md mt-4 md:mt-6 p-4 md:p-8 md:grid md:top-message-grid-template md:gap-y-2`}
          >
            <div className={`-mx-4 -mt-4 md:mx-0 md:mt-0 md:[grid-area:img] md:self-center`}>
              <Image
                src="/assets/images/top-message.jpg"
                alt=""
                width={335}
                height={207}
                quality={90}
                layout="responsive"
              />
            </div>
            <div className={`mt-4 md:mt-0 md:[grid-area:message]`}>
              <p>
                はじめまして。
                <br />
                私自身もそして家族も頭痛・肩こりで悩んだ経験があります。ご本人はもちろん、周りのご家族もつらいですよね。
                <br />
                この苦しさをなんとかしたい！との想いでセラピストとして長年に渡って施術経験を積む一方、身体の不調に根本的にアプローチできる理論・技術を求めて、理学療法士主催の疼痛リハビリセミナーにて、今日まで継続して学んできました。
                <br />
                さらに頭痛に関わりの深いセロトニンについて学び、具体的なアプローチプログラムを修了・習得することができました。
                <br />
                小さな整体院ですが、あなたが頭痛から卒業し痛みのない元気な毎日を迎えられるよう、心を込めてサポートします。どうぞお気軽にご相談下さい。
              </p>
              <p className={`mt-2 font-bold text-[18px] text-green03`}>整体師 くすのき 延枝</p>
            </div>
            <div className={`mt-4 md:mt-0 md:[grid-area:info;] md:p-4`}>
              <p
                className={`text-center text-[16px] tracking-wider leading-relaxed flex flex-col items-center gap-y-1`}
              >
                <span>実績・資格等</span>
                <Deco />
              </p>
              <ul className={`mt-2`}>
                {[
                  'セロトニン活性療法協会 セロトニン活性療法マスタープログラム修了',
                  '日本リラクゼーション業協会 リラクゼーションセラピスト 1級',
                  '施術実績 延べ9,000件以上',
                  'AKS療法 継続習得中（クラニアル・fascia・関節・筋肉調整）',
                ].map((text) => {
                  return (
                    <li
                      key={text}
                      className={`relative pl-[1.2em] before:content-['・'] before:absolute before:left-0`}
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Inner>
      </Container>

      {/* 新聞記事 */}
      <Container as="section">
        <Inner>
          <Heading02 as="h2">MGプレス(信濃毎日新聞)に特集記事が掲載されました！</Heading02>
          <div className={`mt-4 md:flex md:items-center md:justify-center md:gap-x-6 lg:gap-x-10`}>
            <div className={`w-full md:max-w-[280px]`}>
              <Image
                src="/assets/images/newspaper.jpg"
                alt=""
                width={335}
                height={251}
                layout="responsive"
                quality={90}
              />
            </div>
            <p className={`mt-4 md:mt-0 md:max-w-[320px]`}>
              慢性頭痛を予防するための日々のセルフケアや、頭痛の予防体操について紹介させていただきました。
            </p>
          </div>
        </Inner>
      </Container>

      {/* お客さまの声 */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <Heading01 as="h2">お客さまの声</Heading01>
          <div className={`flex flex-col gap-y-10 mt-6`}>
            {voices.map((voice) => {
              return (
                <VoiceCard
                  key={voice.id}
                  title={voice.title}
                  body={voice.body}
                  info={`${voice.customerInfo.name}さん(${voice.customerInfo.age}${voice.customerInfo.gender})`}
                  img={{
                    src: voice.image.url,
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
          <p className={`mt-6 md:mt-8 text-[16px] md:text-[20px] md:text-center`}>
            他にもたくさんのお客さまから喜びの声をいただいています！
          </p>
          <div className={`mt-6 md:mt-8 md:max-w-[50%] md:mx-auto`}>
            <ButtonWithIcon tag="a" linkProps={{ href: '/voices/' }}>
              お客さまの声
            </ButtonWithIcon>
          </div>
        </Inner>
      </Container>

      {/* 施術の特徴 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">当院の施術の特徴</Heading01>
          <div
            className={`mt-4 md:mt-8 flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between`}
          >
            <p className={`md:w-1/2`}>
              当院では「筋膜リリース」と「セロトニン活性療法」という考えに基づいた施術を行っています。科学的に立証されたこれらの手法によって、あなたの頭痛や肩こりの根本原因にアプローチしていきます。
              <br />
              頭痛・肩こりについて詳しく知りたい方のために、それぞれの原因と当院の施術について解説をご用意しました。よろしければぜひご覧ください。
            </p>
            <div className={`flex flex-col gap-y-4 md:w-[45%]`}>
              <ButtonWithIcon tag="a" linkProps={{ href: '/knowledge/headache/' }}>
                頭痛の豆知識
              </ButtonWithIcon>
              <ButtonWithIcon tag="a" linkProps={{ href: '/knowledge/shoulder/' }}>
                肩こりの豆知識
              </ButtonWithIcon>
            </div>
          </div>
        </Inner>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data: MicroCMSListResponse<Voice> = await client.get({
    endpoint: 'voices',
    queries: { filters: 'showTopPage[equals]true' },
  });

  return {
    props: {
      voices: data.contents,
    },
  };
};

export default HomePage;
