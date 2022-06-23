type Props = {
  children: string;
  as: React.ElementType;
};

const Heading02 = (props: Props) => {
  const { children, as: CustomTag = 'p' } = props;
  return (
    <CustomTag className="block pl-2 text-[20px] tracking-wider leading-normal border-l-4 border-l-green03 md:text-[28px] md:leading-tight">
      {children}
    </CustomTag>
  );
};

export default Heading02;
