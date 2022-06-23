type Props = {
  children: string;
  as: React.ElementType;
};

const Heading03 = (props: Props) => {
  const { children, as: CustomTag = 'p' } = props;
  return (
    <CustomTag className="block after:block after:mt-2 w-fit after:w-full after:h-0.5 text-[18px] tracking-wider leading-normal after:content-[''] md:text-[20px] after:heading03-after-bg">
      {children}
    </CustomTag>
  );
};

export default Heading03;
