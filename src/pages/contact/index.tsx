import Container from '@/components/Container';
import Inner from '@/components/Inner';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <>
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
          <div className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
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
