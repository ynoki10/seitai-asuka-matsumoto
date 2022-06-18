import Image from 'next/image';
import { A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-fade';

const MVSlider = () => {
  return (
    <>
      <div className={`relative`}>
        <Swiper
          modules={[A11y, Autoplay, EffectFade]}
          effect={'fade'}
          allowTouchMove={false}
          loop={true}
          speed={2000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          fadeEffect={{
            crossFade: true,
          }}
          className={`mt-4 md:mt-0`}
        >
          {['01', '02', '03', '04'].map((el) => {
            return (
              <SwiperSlide key={el}>
                <div className={`md:hidden h-[400px]`}>
                  <Image
                    src={`/assets/images/mv_sp${el}.jpg`}
                    alt=""
                    width={728}
                    height={400}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={`${el === '01' ? '0%' : '40%'} center`}
                    className={`rounded-[10px] overflow-hidden`}
                  />
                </div>
                <div className={`hidden md:block h-[480px]`}>
                  <Image
                    src={`/assets/images/mv_pc${el}.jpg`}
                    alt=""
                    width={1200}
                    height={480}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-2xl overflow-hidden`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p
          className={`absolute top-5 right-5 [writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] md:left-12 md:top-32 z-10 font-maru tracking-wider text-[#232C33] md:tracking-widest`}
        >
          <span
            className={`bg-[#fff] block py-3 px-2 text-[22px] h-fit md:text-[42px] md:w-fit md:pb-1 md:pt-0 md:px-5 md:rounded-[10px]`}
          >
            つらい頭痛・肩こりからの
          </span>
          <span
            className={`bg-[#fff] block mr-2 py-3 px-2 text-[22px] h-fit md:text-[42px] md:w-fit md:pb-1 md:pt-0 md:px-5 md:mt-3 md:mr-0 md:rounded-[10px]`}
          >
            <span className={`-mt-3 md:mt-0 md:-ml-5`}>「卒業」</span>
            <span className={`-mt-2 md:mt-0 md:-ml-4`}>をサポート</span>
          </span>
          <span
            className={`bg-[#fff] block mr-2 py-3 px-2 text-sm h-fit md:text-[20px] md:w-fit md:py-3 md:px-5 md:mt-3 md:mr-0 md:rounded-[10px]`}
          >
            痛みのない元気な毎日を過ごせるよう心を込めて
          </span>
        </p>
      </div>
    </>
  );
};

export default MVSlider;
