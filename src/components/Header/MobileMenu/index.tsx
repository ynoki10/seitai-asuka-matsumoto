import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, Fragment, SetStateAction } from 'react';

import { headerMenuItems } from '@/variables/headerMenuItems';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = (props: Props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={'fixed inset-0 z-20 bg-white'}>
            <Dialog.Panel
              className={'overflow-x-hidden overflow-y-auto relative py-16 px-5 w-full h-full'}
            >
              <Dialog.Title className={'sr-only'}>サイトメニュー</Dialog.Title>
              <button onClick={() => setIsOpen(false)} className={'fixed top-5 right-5'}>
                <Image src={'/assets/images/ico-close.svg'} width="24" height={23} alt="閉じる" />
              </button>

              <div className={'mx-auto max-w-md'}>
                <nav className={'flex flex-col gap-y-6 items-center'}>
                  {headerMenuItems.map((item) => {
                    return (
                      <Link href={item.path} key={item.text}>
                        <a className={'text-gray100'}>{item.text}</a>
                      </Link>
                    );
                  })}
                </nav>

                <div className={'mt-10'}>
                  <p
                    className={'py-1 px-4 mx-auto w-fit text-xs text-white bg-accent rounded-full'}
                  >
                    ご予約・お問い合わせはこちらから
                  </p>
                  <a
                    href="tel:070-1586-4141"
                    className={'flex gap-x-2 justify-center items-center'}
                  >
                    <Image src="/assets/images/ico-tel.svg" alt="" width="25" height="25" />
                    <span className={'text-[32px] font-bold tracking-wider'}>070-1586-4141</span>
                  </a>
                  <p className={'text-xs font-normal tracking-wide leading-[1.5] text-center'}>
                    【営業時間】10:00~19:00 不定休
                    <br />
                    まずはお気軽にご連絡ください！※
                  </p>
                </div>

                <div>
                  <Link href="/contact/">
                    <a
                      className={
                        'flex gap-x-2 justify-center items-center py-2 px-4 mt-4 bg-green03 rounded-md'
                      }
                    >
                      <Image src="/assets/images/ico-mail.svg" alt="" width={24} height={19} />
                      <span className={'tracking-wider text-white'}>
                        メールでご予約・お問い合わせ
                      </span>
                    </a>
                  </Link>
                  <ul className={'pl-2 mt-5'}>
                    <li
                      className={
                        'before:block before:absolute relative before:top-0 before:left-[-1em] text-xxs before:content-["※"]'
                      }
                    >
                      施術中は電話に出られないこともございます。
                    </li>
                    <li
                      className={
                        'before:block before:absolute relative before:top-0 before:left-[-1em] text-xxs before:content-["※"]'
                      }
                    >
                      当院は完全予約制となっております。施術をご希望の方は電話かメールにてあらかじめご予約ください。
                    </li>
                  </ul>
                </div>
              </div>

              <div className={'fixed -top-10 -left-10 -z-10 opacity-25'}>
                <Image src="/assets/images/menu-clover01.svg" alt="" width={240} height={240} />
              </div>
              <div className={'fixed -right-14 -bottom-10 -z-10 opacity-25'}>
                <Image src="/assets/images/menu-clover02.svg" alt="" width={277} height={277} />
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
