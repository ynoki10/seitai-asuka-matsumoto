import ButtonWithIcon from '@/components/ButtonWithIcon';
import Container from '@/components/Container';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const KnowledgePage: NextPage = () => {
  return (
    <>
      <PageHead title="頭痛・肩こりの豆知識" slug={'knowledge'} />

      <PageHeader
        title={'頭痛・肩こりの豆知識'}
        imgSrc={{
          sp: '/assets/images/header-price_sp.jpg',
          pc: '/assets/images/header-price_pc.jpg',
        }}
      />

      {/*  当院の施術の特徴 */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2"> 当院の施術の特徴</Heading01>
          <p className={`mt-4 md:mt-8 max-w-xl mx-auto`}>
            当院では「筋膜リリース」と「セロトニン活性療法」という考えに基づいた施術を行っています。科学的に立証されたこれらの手法によって、あなたの頭痛や肩こりの根本原因にアプローチしていきます。
            <br />
            頭痛・肩こりについて詳しく知りたい方のために、それぞれの原因と当院の施術について解説をご用意しました。よろしければぜひご覧ください。
          </p>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/knowledge/headache/' }}
            className={`mt-4 mx-auto max-w-sm`}
          >
            頭痛の豆知識
          </ButtonWithIcon>
          <ButtonWithIcon
            tag="a"
            linkProps={{ href: '/knowledge/shoulder/' }}
            className={`mt-4 mx-auto max-w-sm`}
          >
            肩こりの豆知識
          </ButtonWithIcon>
        </Inner>
      </Container>
    </>
  );
};

export default KnowledgePage;
