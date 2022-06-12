import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuButton = (props: Props) => {
  const { setIsOpen } = props;
  return (
    <button
      className="flex flex-col justify-center items-center p-2 w-full h-full bg-green03"
      onClick={() => setIsOpen(true)}
    >
      <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
        <Image src="/assets/images/ico-menu.svg" alt="" width={29} height={18} />
      </div>
      <span className={'block mt-[2px] text-xs text-center text-white'}>メニュー</span>
    </button>
  );
};

export default MenuButton;
