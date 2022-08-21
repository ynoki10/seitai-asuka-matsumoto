import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Heading04 from '@/components/Heading/Heading04';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';
import TelButton from '@/components/TelButton';

import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <>
      <PageHead title="お問い合わせ" slug={'contact'} />

      <PageHeader
        title={'お問い合わせ'}
        imgSrc={{
          sp: '/assets/images/header-price_sp.jpg',
          pc: '/assets/images/header-price_pc.jpg',
        }}
      />

      {/*  お問い合わせフォーム */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2">お問い合わせ・ご予約について</Heading01>
          <div className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
            <p>
              当院は完全予約制となっております。
              <br />
              予約はお電話、メールから承っております。ご希望の時間をお決めになった上で、いずれかの方法でご連絡ください。
              <br />
              また、施術に関する質問やご相談も受け付けておりますのでまずはお気軽にご連絡ください。
            </p>
          </div>

          <div className={`mt-12 max-w-xl mx-auto`}>
            <Heading04 as="h3">お電話でのご予約・お問い合わせ</Heading04>
            <div className={`md:max-w-[320px] mx-auto mt-4 md:mt-6`}>
              <TelButton small={true} />
            </div>
            <p className={`mt-1 text-[12px] text-center`}>
              ※施術中は電話に出られないこともございます。
            </p>
            <p className={`mt-2 text-center text-[16px] md:text-[18px]`}>
              【電話受付時間】10:00~19:00 不定休
            </p>
          </div>

          <div className={`mt-12 max-w-xl mx-auto anchor`} id={'mail'}>
            <Heading04 as="h3">お問い合わせフォーム</Heading04>
            <div className={`mt-2 md:mt-4 max-w-xl mx-auto`}></div>
            <p>
              以下のフォームに必要事項をご入力の上、送信してください。できるだけ早くお返事できるよう心がけております。
              <br />
              お気軽にご連絡ください。
            </p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxBS4UCiUIzUyzzKzd6Q_TMOZl3JT3CrS34-7LBq57Lme_cg/viewform?embedded=true"
              width="100%"
              height="1260px"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              読み込んでいます…
            </iframe>
          </div>
        </Inner>
      </Container>
    </>
  );
};

export default ContactPage;
