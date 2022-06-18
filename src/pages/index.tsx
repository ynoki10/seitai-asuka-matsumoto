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
    </>
  );
};

export default HomePage;
