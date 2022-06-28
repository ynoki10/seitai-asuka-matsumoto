import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import Card from '@/components/Card';
import Container from '@/components/Container';
import Heading02 from '@/components/Heading/Heading02';
import Inner from '@/components/Inner';
import MVSlider from '@/components/MVSlider';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
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
        </Inner>
      </Container>
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
          <div className={`flex flex-col gap-y-4 mt-10`}></div>
        </Inner>
      </Container>
    </>
  );
};

export default HomePage;
