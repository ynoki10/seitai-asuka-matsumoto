import Image from 'next/image';

import Container from '@/components/Container';
import Deco from '@/components/Deco';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <>
      <PageHead title="当院について" slug={'about'} />

      <PageHeader
        title={'当院について'}
        imgSrc={{
          sp: '/assets/images/header-about_sp.jpg',
          pc: '/assets/images/header-about_pc.jpg',
        }}
      />

      {/* 「頭痛・肩こり専門」の整体院 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">「頭痛・肩こり専門」の整体院</Heading01>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
            整体院あす香では、お客様がつらい痛みや不調から「卒業」し、元気な毎日を過ごせるよう、心をこめてサポートいたします。頭痛・肩こりの根本原因を「脳とカラダのつながり」から考えてアプローチする確かな技術、オールハンド（手技）によるやさしい施術、「頭痛・肩こりの起きにくい体質」を作るための日々のセルフケア指導まで、あらゆる面からお客様の症状と向き合います。どうぞお気軽にご相談ください。
          </p>
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
                この苦しさをなんとかしたい！との想いでセラピストとして長年に渡って施術経験を積む一方、身体の不調に根本的にアプローチできる理論・技術を求めて、数々の団体にて関節や筋肉・筋膜へのアプローチを学んできました。
                <br />
                しかし、本当に体に良い変化をもたらすにはそれだけでは足りないと気づき、さらに根本的な解決を目的とした機能神経学に出会い、「脳」から考える痛みや不調の捉え方やその解決方法を深く学ぶことができました。
                <br />
                小さな整体院ですが、あなたが痛みや不調から卒業し元気な毎日を迎えられるよう、心を込めてサポートします。どうぞお気軽にご相談下さい。
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
                  '施術実績 延べ10,000件以上',
                  'AKS療法（クラニアル・fascia・関節・筋肉調節）継続研鑽中',
                  'BDC機能神経学トレーニング（脳と身体のつながり）継続研鑽中',
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
    </>
  );
};

export default AboutPage;
