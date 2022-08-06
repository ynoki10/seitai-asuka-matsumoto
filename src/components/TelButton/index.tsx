import Image from 'next/image';

type Props = {
  small?: boolean;
};

const TelButton = (props: Props) => {
  const { small = true } = props;

  return (
    <a
      href="tel:070-1586-4141"
      className={
        'flex gap-x-2 justify-center items-center py-1.5 mt-2 bg-accent rounded-md hover:brightness-105 transition-all duration-300'
      }
    >
      <Image src="/assets/images/ico-tel-white.svg" alt="" width="30" height="30" />
      <span className={`${small ? 'text-[24px]' : 'text-[26px'} tracking-wider text-white`}>
        070-1586-4141
      </span>
    </a>
  );
};

export default TelButton;
