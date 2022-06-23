import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Container = (props: Props) => {
  const { children, className = '', as: CustomTag = 'div' } = props;
  return (
    <CustomTag>
      <div className={`py-12 md:py-20 ${className}`}>{children}</div>
    </CustomTag>
  );
};

export default Container;
