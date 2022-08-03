import ButtonWithIcon from '@/components/ButtonWithIcon';
import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const AccessPage: NextPage = () => {
  return (
    <>
      <PageHead title="アクセス・営業時間" slug={'access'} />

      <PageHeader
        title={'アクセス・営業時間'}
        imgSrc={{
          sp: '/assets/images/header-access_sp.jpg',
          pc: '/assets/images/header-access_pc.jpg',
        }}
      />

      {/*  アクセス */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2"> アクセス</Heading01>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto text-center`}>
            〒390-1243
            <br />
            長野県松本市神林5108-8
          </p>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
            ＊神林のスーパーデリシア付近、麺処金太郎とスガノ薬品の間の路地を入ります。すぐ裏手、左側の一軒家が当院です。敷地内に駐車場あり。（小看板が立っている前が駐車スペースです。）
          </p>
          <div className={`mt-4 h-60 max-w-xl mx-auto`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.4243537870407!2d137.92660439429926!3d36.1805602165695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8390612228059a08!2z5pW05L2T6ZmiIOOBguOBmemmmQ!5e0!3m2!1sja!2sjp!4v1658645646615!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Inner>
      </Container>

      {/*  営業時間 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2"> 営業時間</Heading01>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto text-center`}>
            <span className={`text-[28px] md:text-[40px] leading-tight marker`}>10:00~19:00</span>
            <br />
            <span className={`text-[16px] md:text-[20px]`}>※不定休</span>
          </p>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto text-center`}>
            当院は完全予約制となっております。
            <br />
            施術をご希望の方は電話かメールにてあらかじめご予約ください。
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/contact/' }}
            className={`mt-2 md:mt-4 mx-auto max-w-sm`}
          >
            ご予約はこちら
          </ButtonWithIcon>
        </Inner>
      </Container>
    </>
  );
};

export default AccessPage;
