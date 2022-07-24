import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <PageHeader
        title={'料金'}
        imgSrc={{
          sp: '/assets/images/header-price_sp.jpg',
          pc: '/assets/images/header-price_pc.jpg',
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
        </Inner>
      </Container>

      {/* 通常施術料金 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">通常施術料金</Heading01>
          <p className={`mt-5 md:mt-8 flex justify-center items-center`}>
            <span className={`flex flex-col items-center`}>
              <span className={`text-green03 font-bold leading-none`}>
                <span className={`text-[40px] md:text-[60px]`}>7</span>
                <span className={`text-[22px] md:text-[30px]`}>,</span>
                <span className={`text-[40px] md:text-[60px]`}>000</span>
                <span className={`text-[16px] md:text-[20px]`}>円 / 回</span>
              </span>
              <span
                className={`inline-block bg-accent text-white font-bold text-[12px] md:text-[14px] px-3 mt-2 md:mt-4`}
              >
                ※60分程度
              </span>
            </span>
          </p>
        </Inner>
      </Container>

      {/* 回数券について */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">回数券について</Heading01>
          <p className={`mt-4`}>
            頭痛・肩こりからの卒業には継続的な施術と日々のセルフケアが大切です。継続してご来院いただく方にはお得な回数券をご用意しています。
          </p>
          <ul>
            <li className={`mt-8 md:mt-10`}>
              <h3 className={`text-center text-[16px] leading-none md:text-[22px]`}>3回回数券</h3>
              <p
                className={`mt-2 text-center text-green03 font-bold text-[30px] md:text-[48px] leading-none`}
              >
                19,500<span className={`text-[16px] md:text-[20px]`}>円</span>
              </p>
              <p className={`mt-3 text-center`}>
                一回あたりの施術料金が
                <span className={`marker`}>
                  <s>7,000円</s> → 6,500円
                </span>
                となります。
                <br />
                通常施術料金より合計<span className={`marker`}>1,500円お得</span>です。
              </p>
            </li>
            <li className={`mt-8 md:mt-10`}>
              <h3 className={`text-center text-[16px] leading-none md:text-[22px]`}>5回回数券</h3>
              <p
                className={`mt-2 text-center text-green03 font-bold text-[30px] md:text-[48px] leading-none`}
              >
                30,000<span className={`text-[16px] md:text-[20px]`}>円</span>
              </p>
              <p className={`mt-3 text-center`}>
                一回あたりの施術料金が
                <span className={`marker`}>
                  <s>7,000円</s> → 6,000円
                </span>
                となります。
                <br />
                通常施術料金より合計
                <span className={`marker`}>5,000円お得</span>です。
              </p>
            </li>
          </ul>
        </Inner>
      </Container>
    </>
  );
};

export default HomePage;
