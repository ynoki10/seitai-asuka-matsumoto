import Image from 'next/image';
import Link from 'next/link';

const Header: React.VFC = () => {
  return (
    <>
      <header className={'fixed top-0 left-0 w-full'}>
        <nav className={'sm:hidden'}>
          <ul className={'flex'}>
            <li className={'w-[20%]'}>
              <Link href="/">
                <a className="flex flex-col justify-center items-center p-2 h-full bg-green04">
                  <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
                    <Image src="/assets/images/ico-home.svg" alt="" width={30} height={28} />
                  </div>
                  <span className={'block mt-[2px] text-xs text-center text-white'}>ホーム</span>
                </a>
              </Link>
            </li>
            <li className={'w-[20%]'}>
              <Link href="/beginner/">
                <a className="flex flex-col justify-center items-center p-2 h-full bg-green04">
                  <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
                    <Image src="/assets/images/ico-beginner.svg" alt="" width={20} height={27} />
                  </div>
                  <span className={'block mt-[2px] text-[10px] text-center text-white'}>
                    初めての方へ
                  </span>
                </a>
              </Link>
            </li>
            <li className={'w-[20%]'}>
              <Link href="/">
                <a className="flex flex-col justify-center items-center p-2 h-full bg-green04">
                  <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
                    <Image src="/assets/images/ico-price.svg" alt="" width={24} height={26} />
                  </div>
                  <span className={'block mt-[2px] text-xs text-center text-white'}>料金</span>
                </a>
              </Link>
            </li>
            <li className={'w-[20%]'}>
              <Link href="/">
                <a className="flex flex-col justify-center items-center p-2 h-full bg-green04">
                  <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
                    <Image src="/assets/images/ico-access.svg" alt="" width={18} height={26} />
                  </div>
                  <span className={'block mt-[2px] text-xs text-center text-white'}>アクセス</span>
                </a>
              </Link>
            </li>
            <li className={'w-[20%]'}>
              <Link href="/">
                <a className="flex flex-col justify-center items-center p-2 h-full bg-green03">
                  <div className={'flex justify-center items-center w-[30px] h-[30px]'}>
                    <Image src="/assets/images/ico-menu.svg" alt="" width={29} height={18} />
                  </div>
                  <span className={'block mt-[2px] text-xs text-center text-white'}>メニュー</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
