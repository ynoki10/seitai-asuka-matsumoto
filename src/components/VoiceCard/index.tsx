import React, { ComponentPropsWithoutRef } from 'react';

import Heading03 from '@/components/Heading/Heading03';
import MicroCMSImage from '@/components/microCMSImage';

type Props = {
  title: string;
  body: string;
  info: string;
  img: ComponentPropsWithoutRef<typeof MicroCMSImage>;
  className?: string;
  as?: React.ElementType;
};

const VoiceCard = (props: Props) => {
  const { title, body, info, img, className = '', as: CustomTag = 'div' } = props;
  return (
    <CustomTag
      className={`p-5 bg-white shadow-md flex flex-col gap-y-3 md:grid md:card-grid-template md:gap-y-4 md:gap-x-6 ${className}`}
    >
      <Heading03 as="h3" className="md:[grid-area:ttl]">
        {title}
      </Heading03>
      <div className="md:[grid-area:img]">
        <div className={`max-w-xs mx-auto`}>
          <MicroCMSImage {...img} />
        </div>
      </div>
      <div className={`md:[grid-area:body] md:self-center`}>
        <p className="">{body}</p>
        <p className={`text-right mt-2`}>{info}</p>
      </div>
    </CustomTag>
  );
};

export default VoiceCard;
