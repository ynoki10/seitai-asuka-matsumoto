import Image from 'next/image';

import Inner from '@/components/Inner';
import MVSlider from '@/components/MVSlider';

import type { NextPage } from 'next';
const HomePage: NextPage = () => {
  return (
    <>
      <Inner>
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
      <section className={`mt-20 md:mt-24 bg-pale py-12 md:py-20`}>
        <Inner>
          <div className={`relative max-w-[800px] mx-auto`}>
            <div className={`relative z-10`}>
              <h2
                className={`font-bold text-xl text-green03 tracking-wider md:text-[28px] md:tracking-widest`}
              >
                「頭痛・肩こり専門」の整体院
              </h2>
              <p
                className={`mt-2 md:mt-4`}
              >
                整体院あす香は、頭痛・肩こり専門の整体院です。お客様がつらい頭痛・肩こりから「卒業」し、痛みのない元気な毎日を過ごせるよう、心をこめてサポートいたします。
                <br />
                頭痛・肩こりの根本原因にアプローチする確かな技術、オールハンド（手技）によるやさしい施術、「頭痛・肩こりの起きにくい体質」を作るための日々のセルフケア指導まで、あらゆる面からお客様の症状と向き合います。
                <br />
                どうぞお気軽にご相談ください！
              </p>
            </div>
            <div className={`absolute -bottom-2 right-3 z-0 w-[106px] h-auto md:w-[160px] md:-bottom-5`}>
              <Image src="/assets/images/about-clover.svg" alt="" width={160} height={99} />
            </div>
          </div>
        </Inner>
      </section>
    </>
  );
};

export default HomePage;
