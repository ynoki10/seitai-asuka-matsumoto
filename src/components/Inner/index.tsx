import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Inner = (props: Props) => {
  const { children, className = '' } = props;
  return (
    <>
      <div className={`px-5 mx-auto max-w-7xl lg:px-10 ${className}`}>{children}</div>
    </>
  );
};

export default Inner;
