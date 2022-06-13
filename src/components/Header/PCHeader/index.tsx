import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/components/Header/PCHeader/Logo';
import Inner from '@/components/Inner';
import { headerMenuItems } from '@/variables/headerMenuItems';

const PCHeader = () => {
  const router = useRouter();

  return (
    <>
      <header className={'pt-4'}>
        <Inner>
          <div className={'justify-between items-center lg:flex'}>
            <Link href="/">
              <a
                className={
                  'block mx-auto w-fit hover:opacity-75 transition-opacity duration-300 lg:mx-0'
                }
              >
                <Logo as={router.pathname === '/' ? 'h1' : 'p'} className={'inline-block'} />
              </a>
            </Link>
            <div className={'flex justify-center items-center mt-4 lg:justify-end lg:mt-0 lg:ml-6'}>
              <div className={'shrink-0'}>
                <p
                  className={
                    'py-1 px-4 mx-auto text-xs text-center text-white bg-accent rounded-full'
                  }
                >
                  ご予約・お問い合わせはこちらから
                </p>
                <a href="tel:070-1586-4141" className={'flex gap-x-2 justify-center items-center'}>
                  <Image src="/assets/images/ico-tel.svg" alt="" width="25" height="25" />
                  <span className={'text-[32px] font-bold tracking-wider'}>070-1586-4141</span>
                </a>
              </div>
              <p className={'ml-6 text-xs leading-5'}>
                【営業時間】10:00~19:00
                <br />
                【定休日】なし（不定休）
                <br />
                〒390-1243 長野県松本市神林5108-8
              </p>
              <Link href="/contact/">
                <a
                  className={
                    'flex shrink-0 justify-center items-center py-2 px-8  ml-6 max-w-[200px] text-white bg-green03 rounded-full hover:opacity-75 transition-opacity duration-300'
                  }
                >
                  <Image src="/assets/images/ico-mail.svg" alt="" width={20} height={15} />
                  <span className={'ml-2'}>お問い合わせ</span>
                </a>
              </Link>
            </div>
          </div>
          <nav className={'flex justify-between items-center py-6'}>
            {headerMenuItems.map((item) => {
              return (
                <Link href={item.path} key={item.path}>
                  <a
                    className={
                      'after:block relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] text-sm after:content-[""] after:bg-green03 after:rounded-full after:transition-transform after:duration-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left lg:text-base'
                    }
                  >
                    {item.text}
                  </a>
                </Link>
              );
            })}
          </nav>
        </Inner>
      </header>
    </>
  );
};

export default PCHeader;
