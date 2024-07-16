import Container from '@/components/Container';
import Faq from '@/components/Faq';
import Heading01 from '@/components/Heading/Heading01';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

type faq = {
  question: string;
  answer: string;
};

const FaqPage: NextPage = () => {
  const faqs: faq[] = [
    {
      question: 'どんな頭痛にも対応していますか？',
      answer:
        '頭痛の症状を詳しくお聞きし、慢性の一次性頭痛であることを確認してから施術を行います。二次性頭痛（脳や体に病気があって、それが原因で起こる頭痛）の疑いがある場合は、施術は行わず、病院への受診をお勧めする場合があります。',
    },
    {
      question: 'ボキボキしたり、痛かったりしませんか？',
      answer:
        'オールハンド（手技）によるやさしい施術を行うので痛みはほとんどありません。安心してご来院ください。（強い圧による身体の緊張が、かえって施術の効果を弱めることがあるため、強圧ご希望の方はご遠慮ください）',
    },
    {
      question: '一回行けば頭痛は治りますか？',
      answer:
        'まず初回施術をお試ししていただき、スッキリしたらぜひ続けて来院してみてください。なぜなら、施術後のお身体の良い状態を脳に記憶させるため、繰り返しの施術が大切だからです。さらに、ご自身でのセルフケア（とてもカンタンですが、ちょっとしたコツがあります。）が重要です。お忙しい毎日かと思いますが、ご都合を伺いながら最適なご来院プランをご提案しますので、しばらくの間ぜひご一緒に頑張っていきましょう。',
    },
    {
      question: '予約しなくても施術を受けられますか？',
      answer:
        '当院は完全予約制となっております。また、ご予約の変更などはできるだけ早めにお願いいたします。ご連絡なくキャンセルが続く場合は、ご予約をお断りすることがあります。',
    },
    {
      question: '一回の施術時間はどのくらいですか？',
      answer:
        '60分程度の施術となっております。また初回のみ、問診の時間も含め75分程度のお時間をいただいております。',
    },
  ];
  return (
    <>
      <PageHead title="よくあるご質問" slug={'faq'} />

      <PageHeader
        title={'よくあるご質問'}
        imgSrc={{
          sp: '/assets/images/header-faq_sp.jpg',
          pc: '/assets/images/header-faq_pc.jpg',
        }}
      />

      {/*  FAQ */}
      <Container as="section">
        <Inner>
          <Heading01 as="h2"> FAQ</Heading01>
          <dl>
            {faqs.map((item, index) => {
              return <Faq key={index} question={item.question} answer={item.answer} />;
            })}
          </dl>
        </Inner>
      </Container>
    </>
  );
};

export default FaqPage;
