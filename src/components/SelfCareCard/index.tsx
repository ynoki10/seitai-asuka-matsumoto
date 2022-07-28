import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

import Heading03 from '@/components/Heading/Heading03';

type Props = {
  title: string;
  index: number;
  body: string;
  img: ComponentPropsWithoutRef<typeof Image>;
  className?: string;
  as?: React.ElementType;
};

const SelfCareCard = (props: Props) => {
  const { title, index, body, img, className = '', as: CustomTag = 'div' } = props;
  return (
    <CustomTag
      className={`p-5 bg-[#fff] shadow-md flex flex-col gap-y-3 md:grid md:card-grid-template md:gap-y-4 md:gap-x-6 ${className}`}
    >
      <div className="md:[grid-area:ttl]">
        <p>セルフケアその{index}</p>
        <Heading03 as="h4">{title}</Heading03>
      </div>
      <div className="text-center md:[grid-area:img] md:self-center">
        <Image {...img} alt={img.alt} />
      </div>
      <div className={`md:[grid-area:body] md:self-center`}>
        <p className="">{body}</p>
      </div>
    </CustomTag>
  );
};

export default SelfCareCard;
