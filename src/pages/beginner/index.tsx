import ButtonWithIcon from '@/components/ButtonWithIcon';
import Card from '@/components/Card';
import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const BeginnerPage: NextPage = () => {
  return (
    <>
      <PageHead title="初めての方へ" slug={'beginner'} />

      <PageHeader
        title={'初めての方へ'}
        imgSrc={{
          sp: '/assets/images/header-beginner_sp.jpg',
          pc: '/assets/images/header-beginner_pc.jpg',
        }}
      />

      {/* 初回お試し料金 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">初回お試し料金</Heading01>
          <p className={`mt-5 flex items-center justify-center md:mt-8`}>
            <s className={`text-[16px] md:text-[20px]`}>7,000円</s>
            <span className={`mx-3`}>→</span>
            <span className={`flex flex-col items-center`}>
              <span className={`font-bold leading-none text-green03`}>
                <span className={`text-[40px] md:text-[60px]`}>2</span>
                <span className={`text-[22px] md:text-[30px]`}>,</span>
                <span className={`text-[40px] md:text-[60px]`}>980</span>
                <span className={`text-[16px] md:text-[20px]`}>円</span>
              </span>
              <span
                className={`mt-2 inline-block bg-accent px-3 text-[12px] font-bold text-white md:mt-4 md:text-[14px]`}
              >
                ※75分程度
              </span>
            </span>
          </p>
          <p className={`mx-auto mt-4 max-w-xl md:mt-8`}>
            当院では頭痛や肩こりでお悩みの方に適切な対処法を知ってもらいたいという思いから、初回に限りお試し料金での施術を行っております。
          </p>
          <p className={`mt-5 text-center text-[12px] md:mt-6 md:text-[14px]`}>
            <strong>2回目以降の料金</strong>や<strong>回数券</strong>についてはこちら
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/price/' }}
            className={`mx-auto mt-1 max-w-sm md:mt-0`}
          >
            料金
          </ButtonWithIcon>
        </Inner>
      </Container>

      {/* 施術の流れ */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <Heading01 as="h2">施術の流れ</Heading01>
          <ol className={`mt-4 flex flex-col gap-y-6 md:gap-y-8`}>
            {[
              {
                title: '1. 問診',
                body: 'まず、お身体の症状について詳しくお聞きします。頭痛の場合は、慢性的な一次性頭痛であると確認できたら施術を行います。',
                img: '/assets/images/therapy01.jpg',
              },
              {
                title: '2. 検査',
                body: '関節の動き方や痛み、前庭器官（三半規管・耳石器）、目の動きなどをチェックし、現在の状態を確認します。',
                img: '/assets/images/therapy02.jpg',
              },
              {
                title: '3. 施術',
                body: 'お身体の状態に合わせて、痛みや不調の原因に基づいた施術を行っていきます。（すべてソフトな手法を使用しておりますので、ご安心ください。）',
                img: '/assets/images/therapy04.jpg',
              },
              {
                title: '4. チェック',
                body: '施術後のチェックで、痛みや可動域の変化を確認します。',
                img: '/assets/images/therapy05.jpg',
              },
              {
                title: '5. セルフケアのアドバイス',
                body: '現在のお身体の症状に合わせた、簡単なセルフケアをお伝えします。',
                img: '/assets/images/therapy06.jpg',
              },
              {
                title: '6. 施術終了',
                body: '今後の最適なご来院プランをお伝えします。',
                img: '/assets/images/therapy07.jpg',
              },
            ].map((item) => {
              return (
                <Card
                  as="li"
                  title={item.title}
                  body={item.body}
                  img={{
                    src: item.img,
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
        </Inner>
      </Container>

      {/* ご来院プラン */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">ご来院プラン</Heading01>
          <p className={`mx-auto mt-4 max-w-xl md:mt-8 `}>
            当院ではお一人お一人の症状に合わせて、適切なご来院プランをご提案します。症状の強さや症状が続いてきた期間またその他ご事情も考慮し、納得してご利用いただけるよう丁寧にご来院ペースの調整を承っております。さらに、継続してご利用いただきやすいよう、お得な回数券をご用意しています。どうぞお気軽にご相談ください。
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/price/' }}
            className={`mx-auto mt-4 max-w-sm md:mt-8`}
          >
            料金
          </ButtonWithIcon>
        </Inner>
      </Container>
    </>
  );
};

export default BeginnerPage;
