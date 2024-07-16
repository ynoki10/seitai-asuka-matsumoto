import Image from 'next/image';

import ButtonWithIcon from '@/components/ButtonWithIcon';
import Container from '@/components/Container';
import Deco from '@/components/Deco';
import Heading02 from '@/components/Heading/Heading02';
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
          <div className={`mx-auto max-w-xl`}>
            {/* 目次 */}
            <div className={`bg-gray20 p-4`}>
              <p className={`text-[16px] md:text-[18px]`}>目次</p>
              <ul className={`list-disc pl-6`}>
                <li>
                  <a href="#brain" className={`text-green03`}>
                    痛みや不調は脳が送るサイン
                  </a>
                </li>
                <li>
                  <a href="#cause" className={`text-green03`}>
                    肩だけが原因ではない！？
                  </a>
                </li>
              </ul>
            </div>

            {/*  痛みや不調は脳が送るサイン */}
            <section id="brain" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3">痛みや不調は脳が送るサイン</Heading02>
              <div className={`mt-4 text-center md:mt-6`}>
                <Image
                  src="/assets/images/headache07.png"
                  alt=""
                  width={249}
                  height={269}
                  quality={100}
                />
              </div>
              <p className={`mt-4 md:mt-6`}>
                痛みや不調は「脳が危険を予測」して、体を守るために作り出す反応です。
                <br />
                脳が自分の体の感覚を正常に認識できていないとき、それは「危険」と判断されて、痛みや不調が起こってくるのです。
              </p>
              <p className={`mt-4 md:mt-6`}>
                本来、人間はすべての関節をすべての可動域で動かせたり、目を全部の方向に無理なく向けられたり、三半規管が全方向で正常に働いて体のバランスを保てたりするものなのですが、私たちは日常生活の中で体を同じ方向ばかりに動かして使いすぎたり、また逆に使わなさすぎたりするうちに、脳が体の使い方を正しく理解することができなくなりがちです。
              </p>
              <p className={`mt-4 md:mt-6`}>
                そんな時、脳が「このままでは危険だよ！」「これ以上無理をしてはいけないよ！」というサインを「痛みや不調」として出しているわけです。
              </p>
              <p className={`mt-4 md:mt-6`}>
                では、どうすれば痛みや不調が解決するのでしょうか。
                <br />
                それには、脳にもう一度正しい体や目の動き、バランス器官の正しい位置などをインプットし直してあげることが必要です。
                <br />
                そうやって日常生活で使えていない「体の感覚」を思い出すことで、脳が体を正しく認識することができると、必要以上に出されていた痛みや症状が変化していきます。
              </p>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            {/*  肩だけが原因ではない！？ */}
            <section id="cause" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> 肩だけが原因ではない！？</Heading02>
              <div className={`mt-4 text-center md:mt-6`}>
                <Image
                  src="/assets/images/headache08.png"
                  alt=""
                  width={312}
                  height={179}
                  quality={100}
                />
              </div>
              <p className={`mt-4 md:mt-6`}>
                特に肩こりや肩の痛みの場合は、肩の筋肉・筋膜・関節だけですべてを考えてしまいがちですが、肩に近い、胸、脇・肘・手首の状態を考えるのももちろんのことです。
              </p>
              <p className={`mt-4 md:mt-6`}>
                しかし、もっと根本を考えると、脳の中で肩の不調とつながりの深い部位、つまり小脳（虫部・前庭小脳）、脳幹、皮質の影響も考えていく事で、不調が変化する可能性が広がっていきます。
              </p>
              <p className={`mt-4 md:mt-6`}>
                そのため当院では、肩の不調であっても、前庭器官や目の動きのチェック、体のバランスのチェックなど、広範囲の可能性を考えたテストを行い、より効率的に症状が変化するよう、施術を行っていきます。
              </p>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            <div className={`pt-10 text-center md:pt-16`}>
              <ButtonWithIcon
                tag="a"
                linkProps={{ href: '/knowledge/headache/' }}
                className={`mx-auto mt-4 max-w-sm`}
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
