import Image from 'next/image';
import Link from 'next/link';

type Props = {
  path: string;
  icon: {
    path: string;
    width: number;
    height: number;
  };
  text: string;
  textSize?: 'xs' | '[10px]';
};

const IconLink: React.VFC<Props> = (props) => {
  const { path, icon, text, textSize = 'xs' } = props;
  return (
    <Link href={path}>
      <a className="flex flex-col justify-center items-center p-2 h-full bg-green04">
        <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
          <Image src={icon.path} alt="" width={icon.width} height={icon.height} />
        </div>
        <span className={`block mt-[2px] text-${textSize} text-center text-white`}>{text}</span>
      </a>
    </Link>
  );
};

export default IconLink;
