type Props = {
  children: string;
  as: React.ElementType;
};

const Heading01 = (props: Props) => {
  const { children, as: CustomTag = 'p' } = props;
  return (
    <CustomTag className="block after:block relative after:mx-auto after:mt-3 w-full after:w-8 after:h-0.5 font-maru text-[22px] tracking-wider leading-normal text-center after:content-[''] md:after:w-12 md:text-[28px] after:heading01-after-bg">
      {children}
    </CustomTag>
  );
};

export default Heading01;
