import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

import Heading03 from '@/components/Heading/Heading03';

type Props = {
  title: string;
  body: string;
  img: ComponentPropsWithoutRef<typeof Image>;
  className?: string;
  as?: React.ElementType;
};

const Card = (props: Props) => {
  const { title, body, img, className = '', as: CustomTag = 'div' } = props;
  return (
    <CustomTag
      className={`p-5 bg-white shadow-md flex flex-col gap-y-3 md:grid md:card-grid-template md:gap-y-4 md:gap-x-6 ${className}`}
    >
      <Heading03 as="h3" className="md:[grid-area:ttl]">
        {title}
      </Heading03>
      <p className="md:[grid-area:body] md:self-center">{body}</p>
      <Image alt={img.alt || ''} {...img} className="md:[grid-area:img]" />
    </CustomTag>
  );
};

export default Card;
