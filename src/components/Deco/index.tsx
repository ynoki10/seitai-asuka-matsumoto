type Props = {
  className?: string;
};

const Deco = (props: Props) => {
  const { className = '' } = props;
  return <span className={`inline-block w-8 h-0.5 md:w-12 deco-bg ${className}`}></span>;
};

export default Deco;
