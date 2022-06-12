import Image from 'next/image';
import Link from 'next/link';

import Inner from '@/components/Inner';

const footerMenuItems = [
  {
    path: '/',
    text: 'ホーム',
  },
  {
    path: '/beginner/',
    text: '初めての方へ',
  },
  {
    path: '/price/',
    text: '料金',
  },
  {
    path: '/about/',
    text: '当院について',
  },
  {
    path: '/voices/',
    text: 'お客様の声',
  },
  {
    path: '/knowledge/',
    text: '頭痛・肩こりの豆知識',
  },
  {
    path: '/access/',
    text: 'アクセス',
  },
  {
    path: '/faq/',
    text: 'よくあるご質問',
  },
  {
    path: '/contact/',
    text: 'お問い合わせ',
  },
];

const Footer = () => {
  return (
    <>
      <footer className={'py-10 mt-[100px] text-white bg-green03 md:pt-16'}>
        <Inner className={'md:relative'}>
          <div className={'md:flex md:gap-x-16'}>
            <div className={'shrink-0 md:max-w-[330px] lg:max-w-[400px]'}>
              <div className={'mx-auto max-w-[225px] md:mx-0 md:max-w-[280px]'}>
                <Link href="/">
                  <a>
                    <Image
                      src={'/assets/images/logo-txt-white.svg'}
                      alt="慢性頭痛・肩こり専門 整体院あす香"
                      width={280}
                      height={78}
                    />
                  </a>
                </Link>
              </div>
              <p
                className={
                  'mt-4 text-sm font-normal tracking-wider leading-relaxed text-center md:text-left lg:text-[16px]'
                }
              >
                〒390-1243
                <br />
                長野県松本市神林5108-8
                <br />
                【営業時間】10:00~19:00 不定休
              </p>
              <div className={'mt-6'}>
                <p className={'text-xs tracking-wider  text-center'}>
                  ご予約・ご相談 まずはお気軽にご連絡ください！※
                </p>
                <a
                  href="tel:070-1586-4141"
                  className={
                    'flex gap-x-2 justify-center items-center py-1.5 mt-2 bg-accent rounded-md'
                  }
                >
                  <Image src="/assets/images/ico-tel-white.svg" alt="" width="30" height="30" />
                  <span className={'text-[26px] tracking-wider'}>070-1586-4141</span>
                </a>
                <Link href={'/contact'}>
                  <a
                    className={
                      'flex gap-x-2 justify-center items-center py-1.5 mt-3 text-white bg-green01 rounded-md'
                    }
                  >
                    <Image src="/assets/images/ico-mail.svg" alt="" width={24} height={19} />
                    <span className={'tracking-wider'}>ご予約・お問い合わせフォーム</span>
                  </a>
                </Link>
                <ul className={'pl-2 mt-2 font-normal'}>
                  <li
                    className={
                      'before:block before:absolute relative before:top-0 before:left-[-1em] text-xxs tracking-wider before:content-["※"] lg:text-[12px] lg:leading-normal'
                    }
                  >
                    施術中は電話に出られないこともございます。
                  </li>
                  <li
                    className={
                      'before:block before:absolute relative before:top-0 before:left-[-1em] text-xxs tracking-wider before:content-["※"] lg:text-[12px] lg:leading-normal'
                    }
                  >
                    当院は完全予約制となっております。施術をご希望の方は電話かメールにてあらかじめご予約ください。
                  </li>
                </ul>
              </div>
            </div>
            <div className={'shrink w-full'}>
              <div className={'mt-8 h-60 md:mt-0'}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.4241757990085!2d137.92659903033748!3d36.18056454633208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d0f7941b2d531%3A0x8390612228059a08!2z5pW05L2T6ZmiIOOBguOBmemmmQ!5e0!3m2!1sja!2sjp!4v1655034934087!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <nav
                className={
                  'flex flex-col gap-y-6 items-center mt-8 md:flex-row md:flex-wrap md:gap-y-4'
                }
              >
                {footerMenuItems.map((item) => {
                  return (
                    <Link href={item.path} key={item.text}>
                      <a className={'font-normal md:mr-[1.5em] md:text-sm lg:text-base'}>
                        {item.text}
                      </a>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
          <small className={'block mt-10 text-xxs text-center md:mt-16'}>
            © 整体院あす香 All Rights Reserved.
          </small>
          <div
            className={'hidden absolute right-[40px] bottom-[-20px] w-[19%] max-w-[244px] md:block'}
          >
            <Image src={'/assets/images/footer-clover.svg'} alt="" width={244} height={182} />
          </div>
        </Inner>
      </footer>
    </>
  );
};

export default Footer;
