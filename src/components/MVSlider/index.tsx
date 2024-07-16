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
          {['01', '02', '03', '04'].map((el, i) => {
            return (
              <SwiperSlide key={el}>
                <div className={`h-[400px] md:hidden`}>
                  <Image
                    src={`/assets/images/mv_sp${el}.jpg`}
                    alt=""
                    priority={i === 0}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={`${el === '01' ? '0%' : '40%'} center`}
                    className={`overflow-hidden rounded-[10px]`}
                  />
                </div>
                <div className={`hidden h-[480px] md:block`}>
                  <Image
                    src={`/assets/images/mv_pc${el}.jpg`}
                    alt=""
                    quality={100}
                    priority={i === 0}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    layout="fill"
                    objectFit="cover"
                    className={`overflow-hidden rounded-2xl`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p
          className={`absolute right-5 top-5 z-10 font-maru tracking-wider text-[#232C33] [writing-mode:vertical-rl] md:left-12 md:top-32 md:tracking-widest md:[writing-mode:horizontal-tb]`}
        >
          <span
            className={`block h-fit bg-[#fff] px-2 py-3 text-[22px] md:w-fit md:rounded-[10px] md:px-5 md:pb-1 md:pt-0 md:text-[42px]`}
          >
            痛みや不調の原因は？
          </span>
          <span
            className={`mr-2 block h-fit bg-[#fff] px-2 py-3 text-[22px] md:mr-0 md:mt-3 md:w-fit md:rounded-[10px] md:px-5 md:pb-1 md:pt-0 md:text-[42px]`}
          >
            脳からカラダを考える整体院
          </span>
          <span
            className={`mr-2 block h-fit bg-[#fff] px-2 py-3 text-sm md:mr-0 md:mt-3 md:w-fit md:rounded-[10px] md:px-5 md:py-3 md:text-[20px]`}
          >
            痛みのない元気な毎日を過ごせるよう心を込めて
          </span>
        </p>
      </div>
    </>
  );
};

export default MVSlider;
