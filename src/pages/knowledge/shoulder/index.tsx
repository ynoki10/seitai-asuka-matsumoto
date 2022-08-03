import Image from 'next/image';

import ButtonWithIcon from '@/components/ButtonWithIcon';
import Container from '@/components/Container';
import Deco from '@/components/Deco';
import Heading02 from '@/components/Heading/Heading02';
import Heading04 from '@/components/Heading/Heading04';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';

import type { NextPage } from 'next';

const ShoulderPage: NextPage = () => {
  return (
    <>
      <PageHead title="肩こりの豆知識 | 頭痛・肩こりの豆知識" slug={'knowledge/shoulder'} />

      <PageHeader
        title={'肩こりの豆知識'}
        imgSrc={{
          sp: '/assets/images/header-price_sp.jpg',
          pc: '/assets/images/header-price_pc.jpg',
        }}
      />

      <Container as="div">
        <Inner>
          <div className={`max-w-xl mx-auto`}>
            {/* 目次 */}
            <div className={`bg-gray20 p-4`}>
              <p className={`text-[16px] md:text-[18px]`}>目次</p>
              <ul className={`list-disc pl-6`}>
                <li>
                  <a href="#cause" className={`text-green03`}>
                    実は、つらいところに原因はなかった！
                  </a>
                </li>
                <li>
                  <a href="#fascia" className={`text-green03`}>
                    筋膜リリースとは
                  </a>
                </li>
                <li>
                  <a href="#serotonin" className={`text-green03`}>
                    脳内物質セロトニンの正常化で全身が整う！
                  </a>
                </li>
                <li>
                  <a href="#serotonin-therapy" className={`text-green03`}>
                    セロトニン活性療法とは
                  </a>
                </li>
              </ul>
            </div>

            {/*  実は、つらいところに原因はなかった！ */}
            <section id="cause" className={`pt-10 md:pt-16 anchor`}>
              <Heading02 as="h3"> 事実① 実は、つらいところに原因はなかった！</Heading02>
              <p className={`mt-4 md:mt-6`}>
                肩こりの大きな原因となっているのは、「離れた場所の筋膜の硬さ」であることがほとんどです。
              </p>

              <section className={`mt-8 md:mt-12`}>
                <Heading04 as="h4">筋膜とは</Heading04>
                <p className={`mt-4 md:mt-6`}>
                  筋肉・内臓を含め、身体全体を覆うボディースーツのようなものです。
                  <br />
                  その一部に硬さや滑走不全が起こると、つながりのある他の場所に硬さや痛みを生じさせます。
                </p>
                <p className={`mt-4 md:mt-6`}>
                  筋膜は繊維質であるがために、長い期間動きが少なかったり偏った動きしかしないでいると、硬くなったりねじれてしまうことが多く、そこからつながっている別の場所を引っ張ることにより、離れた場所に痛みや動きの制限を起こします。
                </p>
                <p className={`mt-4 md:mt-6`}>
                  肩こりの原因も、実は「肩にはない！」ことがほとんどです。
                  <br />
                  ＊特に、手・腕・脇・お腹・腰・足首は、肩こりの原因になることが多いのです！
                  <br />
                  あなたの肩こりの原因がどこにあるのかを確認し、その原因部位の筋膜を正常化させることが大切です。
                </p>
                <div className={`mt-4 mx-auto w-fit`}>
                  <Image
                    src="/assets/images/shoulder01.png"
                    alt=""
                    width={200}
                    height={215}
                    quality={100}
                  />
                </div>
              </section>
            </section>

            <div className={`pt-10 md:pt-16 text-center`}>
              <Deco />
            </div>

            {/*  筋膜リリースとは */}
            <section id="fascia" className={`pt-10 md:pt-16 anchor`}>
              <Heading02 as="h3"> 筋膜リリースとは</Heading02>
              <div className={`mt-4 md:mt-6 text-center`}>
                <Image
                  src="/assets/images/headache04.png"
                  alt=""
                  width={335}
                  height={204}
                  quality={100}
                />
              </div>
              <p className={`mt-4 md:mt-6`}>
                筋膜リリースはソフトな手技で、筋膜同士の癒着や硬結を丁寧にほどくように緩めていきます。
                <br />
                決して強い圧では行いませんので、ご安心ください。
              </p>
              <p className={`mt-4 md:mt-6`}>
                細かく分けると、全身には複数の筋膜ラインがあり、ラインごとに筋膜がつながりあって様々な動きを作っています。
              </p>
              <p className={`mt-4 md:mt-6`}>
                そのため、痛いところと関わりの深い筋膜のラインを判断し施術していきます。
              </p>
              <p className={`mt-4 md:mt-6`}>
                当院では「痛いところには原因がない」という筋膜リリースの考え方に基づき、
              </p>
              <ol>
                <li className={`mt-4 md:mt-6 font-bold`}>
                  1. 肩こりの痛さや硬さのある部位から、原因となっている筋膜ラインを判断
                </li>
                <li className={`mt-4 md:mt-6 font-bold`}>
                  2. 離れた場所にある筋膜の硬結や滑走不全を緩め
                </li>
                <li className={`mt-4 md:mt-6 font-bold`}>
                  3.
                  結果としてつらい部位の痛みを軽減したり、滑走性を上げるようにアプローチしていきます。
                </li>
              </ol>
              <p className={`mt-4 md:mt-6`}>
                マッサージやリラクゼーションとは違うアプローチを実感してください。
              </p>
            </section>

            <div className={`pt-10 md:pt-16 text-center`}>
              <Deco />
            </div>

            {/*  脳内物質セロトニンの正常化で全身が整う！ */}
            <section id="serotonin" className={`pt-10 md:pt-16 anchor`}>
              <Heading02 as="h3"> 事実② 脳内物質セロトニンの正常化で全身が整う！</Heading02>
              <div className={`mt-4 mx-auto w-fit`}>
                <Image
                  src="/assets/images/headache02.png"
                  alt=""
                  width={160}
                  height={233}
                  quality={100}
                />
              </div>
              <div className={`mt-4 md:mt-6`}>
                <Heading04 as="h4">セロトニンとは</Heading04>
              </div>
              <p className={`mt-4 md:mt-6`}>
                情緒・ストレス・睡眠・覚醒・痛みの抑制・自律神経・血管・姿勢の維持などに関与する脳内物質です。
                <br />
                正常であれば、自動的・定期的に一定量ずつ分泌され、他の脳内物質の暴走をコントロールして身体と心の安定を保ちますが、過度に不足すると様々な症状を引き起こします。
                <br />
                特に肩こりについては、セロトニンの不足により筋肉がしなやかな動きを行うことができなくなったり、過度な緊張をもたらして痛みを引き起こしたりします。最近はテレビ番組などでも紹介されるようになり、聞いたことがあるかもしれません。
                <br />
                現在も研究が進められている、重要な脳内物質です。
              </p>
            </section>

            <div className={`pt-10 md:pt-16 text-center`}>
              <Deco />
            </div>

            {/*  セロトニン活性療法とは */}
            <section id="serotonin-therapy" className={`pt-10 md:pt-16 anchor`}>
              <Heading02 as="h3"> セロトニン活性療法とは</Heading02>
              <p className={`mt-4 md:mt-6`}>
                脳と整体の関係を脳波で測定しながら、脳内物質セロトニン活性化の効果を科学的に立証した手技です。
              </p>
              <p className={`mt-4 md:mt-6`}>
                手技により、ストレス物質を根本から消し、セロトニン神経を防御、その結果正常なセロトニン分泌を促す方法です。
              </p>
              <p className={`mt-4 md:mt-6`}>
                肩こりの原因になることの多いストレス物質のコントロールをして、脳からの指令が筋肉にきちんと伝わり正常に働くようになるため、コリや痛みの改善につながります。
              </p>
              <p className={`mt-4 md:mt-6`}>
                東邦大学名誉教授・脳生理学者の有田秀穂教授と、セロトニン活性療法協会・滝本裕之代表との共同研究であるセロトニン活性療法は、国際生命情報科学学会で学会発表され、医学誌にも掲載されています。
              </p>
              <p className={`mt-4 md:mt-6`}>当院ではこのセロトニン活性療法を取り入れています。</p>

              <figure className={`mt-4 mx-auto w-fit`}>
                <Image
                  src="/assets/images/headache03.jpg"
                  alt=""
                  width={335}
                  height={204}
                  quality={100}
                />
                <figcaption className={`text-[12px] md:text-[14px] text-center`}>
                  セロトニン活性療法協会 滝本裕之先生と
                </figcaption>
              </figure>
            </section>

            <div className={`pt-10 md:pt-16 text-center`}>
              <Deco />
            </div>

            <div className={`pt-10 md:pt-16 text-center`}>
              <ButtonWithIcon
                tag="a"
                linkProps={{ href: '/knowledge/headache/' }}
                className={`mt-4 mx-auto max-w-sm`}
              >
                頭痛の豆知識へ
              </ButtonWithIcon>
            </div>
          </div>
        </Inner>
      </Container>
    </>
  );
};

export default ShoulderPage;
