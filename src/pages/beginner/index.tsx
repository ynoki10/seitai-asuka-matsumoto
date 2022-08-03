import Link from 'next/link';

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
          <p className={`mt-5 md:mt-8 flex justify-center items-center`}>
            <s className={`text-[16px] md:text-[20px]`}>7,000円</s>
            <span className={`mx-3`}>→</span>
            <span className={`flex flex-col items-center`}>
              <span className={`text-green03 font-bold leading-none`}>
                <span className={`text-[40px] md:text-[60px]`}>2</span>
                <span className={`text-[22px] md:text-[30px]`}>,</span>
                <span className={`text-[40px] md:text-[60px]`}>980</span>
                <span className={`text-[16px] md:text-[20px]`}>円</span>
              </span>
              <span
                className={`inline-block bg-accent text-white font-bold text-[12px] md:text-[14px] px-3 mt-2 md:mt-4`}
              >
                ※75分程度
              </span>
            </span>
          </p>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
            当院では頭痛や肩こりでお悩みの方に適切な対処法を知ってもらいたいという思いから、初回に限りお試し料金での施術を行っております。
          </p>
          <p className={`mt-5 md:mt-6 text-[12px] md:text-[14px] text-center`}>
            <strong>2回目以降の料金</strong>や<strong>回数券</strong>についてはこちら
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/price/' }}
            className={`mt-1 md:mt-0 mx-auto max-w-sm`}
          >
            料金
          </ButtonWithIcon>
        </Inner>
      </Container>

      {/* 施術の流れ */}
      <Container className={`bg-pale`} as="section">
        <Inner>
          <Heading01 as="h2">施術の流れ</Heading01>
          <ol className={`flex flex-col gap-y-6 md:gap-y-8 mt-4`}>
            {[
              {
                title: '1. 問診',
                body: 'まず、お身体の症状について詳しくお聞きします。頭痛の場合は、慢性的な一次性頭痛であると確認できたら施術を行います。',
              },
              {
                title: '2. 検査',
                body: '関節可動域等をチェックし、現在の状態を確認します。（筋膜が正常に滑走しさらに脳内セロトニンが分泌されると筋肉の等尺性が上がるので、関節可動域も変化が出ます）',
              },
              {
                title: '3. 筋膜リリース',
                body: (
                  <span>
                    お身体の症状に合わせて首肩周辺の筋硬結の原因部位を評価し、筋膜のつながりを使って緩めていきます。（
                    <Link href={'/knowledge/headache/#fascia'}>
                      <a className={`text-green03`}>筋膜について</a>
                    </Link>
                    ）
                  </span>
                ),
              },
              {
                title: '4. セロトニン活性療法',
                body: (
                  <span>
                    全身のポイントを使って、脳内セロトニンの分泌を促します。（
                    <Link href={'/knowledge/headache/#serotonin'}>
                      <a className={`text-green03`}>セロトニンについて</a>
                    </Link>
                    ）
                  </span>
                ),
              },
              {
                title: '5. チェック',
                body: '施術後のチェックで、痛みや可動域の変化を確認します。',
              },
              {
                title: '6. セルフケアのアドバイス',
                body: '脳内セロトニン活性のためのセルフケアの方法や痛みが始まった時の応急対処法をお伝えします。',
              },
              {
                title: '7. 施術終了',
                body: '今後の最適なご来院プランをお伝えします。',
              },
            ].map((item, index) => {
              return (
                <Card
                  as="li"
                  title={item.title}
                  body={item.body}
                  img={{
                    src: `/assets/images/therapy0${index + 1}.jpg`,
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
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto `}>
            当院ではお一人お一人の症状に合わせて、適切なご来院プランをご提案します。症状の強さや症状が続いてきた期間またその他ご事情も考慮し、納得してご利用いただけるよう丁寧にご来院ペースの調整を承っております。さらに、継続してご利用いただきやすいよう、お得な回数券をご用意しています。どうぞお気軽にご相談ください。
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/price/' }}
            className={`mt-4 md:mt-8 mx-auto max-w-sm`}
          >
            料金
          </ButtonWithIcon>
        </Inner>
      </Container>
    </>
  );
};

export default BeginnerPage;
