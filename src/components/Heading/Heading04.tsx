type Props = {
  children: string;
  as: React.ElementType;
};

const Heading04 = (props: Props) => {
  const { children, as: CustomTag = 'p' } = props;
  return (
    <CustomTag className="block pb-1 w-fit text-[16px] tracking-wider leading-normal border-b-2 border-b-green03 md:text-[18px]">
      {children}
    </CustomTag>
  );
};

export default Heading04;
