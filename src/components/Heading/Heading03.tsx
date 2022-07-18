import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as: React.ElementType;
};

const Heading03 = (props: Props) => {
  const { children, className = '', as: CustomTag = 'p' } = props;
  return (
    <CustomTag
      className={`block after:block after:mt-1 w-fit after:w-full after:h-0.5 text-[18px] tracking-wider leading-normal after:content-[''] md:text-[20px] after:heading03-after-bg ${className}`}
    >
      {children}
    </CustomTag>
  );
};

export default Heading03;
