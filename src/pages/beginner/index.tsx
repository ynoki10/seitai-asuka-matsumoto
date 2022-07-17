import Container from '@/components/Container';
import Inner from '@/components/Inner';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <PageHeader
        title={'初めての方へ'}
        imgSrc={{
          sp: '/assets/images/header-beginner_sp.jpg',
          pc: '/assets/images/header-beginner_pc.jpg',
        }}
      />

      {/*  */}
      <Container as="section">
        <Inner></Inner>
      </Container>
    </>
  );
};

export default HomePage;
