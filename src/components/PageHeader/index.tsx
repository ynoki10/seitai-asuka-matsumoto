import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  imgSrc: {
    sp: string;
    pc: string;
  };
};

const PageHeader = (props: Props) => {
  const { title, imgSrc } = props;
  return (
    <header
      className={`relative grid place-items-center max-w-[1280px] mx-auto h-[150px] md:h-[280px]`}
    >
      <div className={'absolute top-0 left-0 z-0 w-full h-full md:hidden'}>
        <Image
          src={imgSrc.sp}
          alt=""
          layout={'fill'}
          objectFit={'cover'}
          className={`md:hidden`}
          width={750}
          height={300}
          quality={100}
        />
      </div>
      <div className={'hidden absolute top-0 left-0 z-0 w-full h-full md:block'}>
        <Image
          src={imgSrc.pc}
          alt=""
          layout={'fill'}
          objectFit={'cover'}
          className={`hidden md:block`}
          width={1200}
          height={280}
          quality={100}
        />
      </div>
      <h1
        className={
          'inline-block relative py-1.5 px-6 font-maru text-[18px] font-bold text-white bg-green03/75 rounded md:py-3 md:px-8 md:text-[24px] md:rounded-lg'
        }
      >
        {title}
      </h1>
    </header>
  );
};

export default PageHeader;
