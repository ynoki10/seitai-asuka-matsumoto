import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  size?: 'normal' | 'lg';
};

const Inner = (props: Props) => {
  const { children, className = '', size = 'normal' } = props;
  return (
    <>
      <div
        className={`px-[clamp(20px,3.125vw,40px)] mx-auto box-content ${
          size === 'normal' ? 'max-w-3xl' : 'max-w-7xl'
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Inner;
