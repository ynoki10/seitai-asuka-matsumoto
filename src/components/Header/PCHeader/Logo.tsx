import Image from 'next/image';

type Props = {
  as?: React.ElementType;
  className?: string;
};

const Logo: React.VFC<Props> = (props) => {
  const { as: CustomTag = 'p', className = '' } = props;
  return (
    <CustomTag className={className}>
      <Image
        src={'/assets/images/logo-txt-black.svg'}
        alt="慢性頭痛・肩こり専門 整体院あす香"
        width={225}
        height={62}
      />
    </CustomTag>
  );
};

export default Logo;
