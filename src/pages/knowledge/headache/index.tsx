import Image from 'next/image';

import ButtonWithIcon from '@/components/ButtonWithIcon';
import Container from '@/components/Container';
import Deco from '@/components/Deco';
import Heading02 from '@/components/Heading/Heading02';
import Heading04 from '@/components/Heading/Heading04';
import Inner from '@/components/Inner';
import PageHead from '@/components/PageHead';
import PageHeader from '@/components/PageHeader';
import SelfCareCard from '@/components/SelfCareCard';

import type { NextPage } from 'next';

const HeadachePage: NextPage = () => {
  return (
    <>
      <PageHead title="頭痛の豆知識 | 頭痛・肩こりの豆知識" slug={'knowledge/headache'} />

      <PageHeader
        title={'頭痛の豆知識'}
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
                  <a href="#type">
                    <span className={`text-green03`}>頭痛の種類</span>
                  </a>
                </li>
                <li>
                  <a href="#mechanism">
                    <span className={`text-green03`}>片(偏)頭痛が起こるメカニズム</span>
                  </a>
                </li>
                <li>
                  <a href="#serotonin">
                    <span className={`text-green03`}>セロトニンについて</span>
                  </a>
                </li>
                <li>
                  <a href="#self-care">
                    <span className={`text-green03`}>セロトニン活性のためのセルフケア</span>
                  </a>
                </li>
                <li>
                  <a href="#brain">
                    <span className={`text-green03`}>痛みや不調は脳が送るサイン</span>
                  </a>
                </li>
              </ul>
            </div>

            {/*  頭痛の種類 */}
            <section id="type" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> 頭痛の種類</Heading02>
              <dl>
                <div className={`mt-4 md:mt-6`}>
                  <dt className={`font-bold`}>一次性頭痛</dt>
                  <dd>
                    基礎疾患のない頭痛。３種類に分類されます。
                    <br />
                    当院ではこの一次性頭痛のみを施術対象としています。
                  </dd>
                </div>
                <div className={`mt-4 md:mt-6`}>
                  <dt className={`font-bold`}>二次性頭痛</dt>
                  <dd>
                    脳や体に病気があって、それが原因で起こる頭痛。脳血管障害による頭痛や脳腫瘍による頭痛、風邪やインフルエンザなど感染症による頭痛、急性緑内障発作による頭痛など。
                  </dd>
                </div>
              </dl>
              <div className={`mx-auto mt-4 w-fit`}>
                <Image
                  src="/assets/images/headache01.png"
                  alt=""
                  width={200}
                  height={214}
                  quality={100}
                />
              </div>

              <section className={`mt-8 md:mt-12`}>
                <Heading04 as="h4">一次性頭痛の３つの分類</Heading04>
                <dl>
                  <div className={`mt-4 md:mt-6`}>
                    <dt className={`font-bold`}>緊張性頭痛</dt>
                    <dd>
                      頸部や側頭部の異常な筋収縮が原因で起こります。それにより血管の収縮が痛みを引き起こします。頭部を圧迫、締め付けられるような痛み。体を動かすことで痛みが増すことはなく、むしろ軽減することが多いです。
                    </dd>
                  </div>
                  <div className={`mt-4 md:mt-6`}>
                    <dt className={`font-bold`}>片(偏)頭痛</dt>
                    <dd>
                      様々な説がありますが、現在有力である「
                      <a href="#nerve" className={`text-green03`}>
                        三叉神経血管説
                      </a>
                      」によると何らかの刺激により誘発された血管の拡張と炎症が原因で起こります。脈拍と一緒にズキンズキンという拍動性の痛みが出ますが、時間が経過すると持続性の痛みとなります。体を動かすと痛みは増悪し、多くが悪心・嘔吐をともないます。閃輝暗点などの前兆があるケースもあります。
                    </dd>
                  </div>
                  <div className={`mt-4 md:mt-6`}>
                    <dt className={`font-bold`}>群発頭痛</dt>
                    <dd>
                      一年～数年に数回程度、1～3ヶ月続く「群発期」があり、この期間はほぼ毎日、片側の眼の奥とその周囲に想像を絶するほどの激しい痛みが短時間（数分～２時間程度）出現します。メカニズムは必ずしも明らかではありませんが、血管の拡張が関わっていると考えられています。
                    </dd>
                  </div>
                </dl>
              </section>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            {/*  片(偏)頭痛が起こるメカニズム */}
            <section id="mechanism" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> 片(偏)頭痛が起こるメカニズム</Heading02>
              <p className={`mt-4 md:mt-6`}>
                現在でも片頭痛の根本原因は明らかにされていませんが、そのメカニズムは徐々に解明されてきています。現在最も有力であるのが「三叉神経血管説」とされています。
              </p>
              <p id="nerve" className={`mt-4 md:mt-6`}>
                <span className={`text-[16px] font-bold md:text-[18px]`}>
                  三叉神経血管説とは・・・
                </span>
                <br />
                （まだ解明されていない何らかの刺激である）誘発因子の情報が、脳の視床に伝えられます。するとすぐその下にある視床下部が反応し、セロトニンという脳内物質の量を減少させます。
              </p>
              <p className={`mt-4 md:mt-6`}>
                セロトニンは身体のリズムを正常にコントロールする機能を持っています。これが減ると、脳神経の一つである三叉神経がコントロールから外れて興奮し、CGRPという血管拡張物質を放出します。これによって脳内の血管が拡張すると、炎症を起こす物質が周辺の組織に染み出し痛みを引き起こします。
              </p>
              <p className={`mt-4 md:mt-6`}>
                片頭痛はいったん脳に記憶されると、発症と記憶が繰り返されて悪循環になりがちです。
              </p>
              <p className={`mt-4 md:mt-6`}>
                片頭痛に効果的なトリプタン系薬剤は、セロトニンの代わりに三叉神経に働きかけて興奮を抑え、CGRPの放出を抑えて痛みを解消させます。近年ではCGRPそのものに対応する薬も開発されました。
              </p>
              <p className={`mt-4 md:mt-6`}>
                しかし、薬に頼り続けるより大切なのは、もともと脳内にあるべきセロトニンの量を十分に保つことです。
                <br />
                もちろんストレス・疲れ・天候やその他さまざま指摘されている誘発因子を避けることも一つの手段ですが、そもそも脳内のセロトニン量が十分に保たれていることが、片頭痛解消に対する大切な要件となります。
              </p>
              <div className={`mx-auto mt-4 w-fit`}>
                <Image
                  src="/assets/images/headache02.png"
                  alt=""
                  width={160}
                  height={233}
                  quality={100}
                />
              </div>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            {/*  セロトニンについて */}
            <section id="serotonin" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> セロトニンについて</Heading02>
              <p className={`mt-4 md:mt-6`}>
                セロトニンとは情緒・ストレス・睡眠・覚醒・痛みの抑制・自律神経・血管・姿勢の維持などに関与する脳内物質です。正常であれば、自動的・定期的に一定量ずつ分泌され、他の脳内物質の暴走をコントロールして身体と心の安定を保ちますが、過度に不足すると様々な症状を引き起こします。
                <br />
                特に片(偏)頭痛には重要な役割を果たすことが知られています。（セロトニンは他に小腸など内臓でも分泌されますが、その果たす役割が異なります。頭痛に関わっているのは、脳内のセロトニン量です。）
              </p>

              <section className={`mt-4 md:mt-6`}>
                <Heading04 as="h4">セロトニン活性療法とは</Heading04>
                <p className={`mt-4 md:mt-6`}>
                  脳と整体の関係を脳波で測定しながら、その効果を科学的に立証した手技です。
                </p>
                <p className={`mt-4 md:mt-6`}>
                  手技により、ストレス物質を根本から消し、セロトニン神経を防御、その結果正常なセロトニン分泌を促す方法です。
                  <br />
                  東邦大学名誉教授・脳生理学者の有田秀穂教授とセロトニン活性療法協会・滝本裕之代表との共同研究であるセロトニン活性療法は、国際生命情報科学学会で学会発表され、医学誌にも掲載されています。
                </p>
                <p className={`mt-4 md:mt-6`}>当院ではこのセロトニン活性療法を取り入れています。</p>

                <figure className={`mx-auto mt-4 w-fit`}>
                  <Image
                    src="/assets/images/headache03.jpg"
                    alt=""
                    width={335}
                    height={204}
                    quality={100}
                  />
                  <figcaption className={`text-center text-[12px] md:text-[14px]`}>
                    セロトニン活性療法協会 滝本裕之先生と
                  </figcaption>
                </figure>
              </section>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            {/*  セロトニン活性のためのセルフケア */}
            <section id="self-care" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> セロトニン活性のためのセルフケア</Heading02>
              <p className={`mt-4 md:mt-6`}>
                セロトニンセルフケア（トレーニング）の刺激により、自分でセロトニン神経を鍛えられます。
                <br />
                それによってセロトニン受容体の変化を脳が感知し、セロトニンの放出量を増やします。（施術による強制的なセロトニン分泌と合わせて行うことが効果的です。）
              </p>
              <p className={`mt-4 md:mt-6`}>
                以下では、ご自身でセロトニン分泌を正常に促す方法をご案内します。
              </p>
              <p className={`mt-4 font-bold md:mt-6`}>
                ※セルフケアトレーニングによってセロトニン神経の構造が変化しはじめるのは３か月経過するころからです。そのため、最初の３ヶ月がとても重要！少しの時間でよいので、続けて行ってみましょう。
              </p>
              <ol>
                <SelfCareCard
                  as="li"
                  index={2}
                  title="朝から午後３時ころまでに５分程度日光を浴びる"
                  body="直接日光を見るのではなく、照度（明るさ）を目が感じ取れればOKです。外に出られなくても、明るい窓際で照度を感じられれば大丈夫です。（曇天でも屋外なら照度は十分ですが、室内の照明程度では照度は足りません。）"
                  img={{
                    src: '/assets/images/selfcare01.png',
                    width: 303,
                    height: 227,
                    quality: 90,
                  }}
                  className={`mt-4 md:mt-6`}
                />
                <SelfCareCard
                  as="li"
                  index={1}
                  title="軽いリズム運動を５分～３０分疲れない程度に行う"
                  body="ウオーキング・ヨガ・ラジオ体操などもよいですが、効果的なのは肩甲骨回しと、胸椎の回旋運動です（ご来院の都度、練習しながらお伝えします）。日光の照度を感じ取りながら行うとさらに効果的です。"
                  img={{
                    src: '/assets/images/selfcare02.png',
                    width: 303,
                    height: 227,
                    quality: 90,
                  }}
                  className={`mt-4 md:mt-6`}
                />
                <SelfCareCard
                  as="li"
                  index={3}
                  title="トリプトファン・ビタミンB6・炭水化物を含む食品を摂取する"
                  body="セロトニンを作り出すトリプトファンと、その合成に必要なビタミンB6、脳内でセロトニン神経のエネルギーとなる炭水化物を意識して取り入れることが大切です。それぞれに適している食品がありますので、ご来院の際に一覧をお渡しします。"
                  img={{
                    src: '/assets/images/selfcare03.png',
                    width: 303,
                    height: 227,
                    quality: 90,
                  }}
                  className={`mt-4 md:mt-6`}
                />
              </ol>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            {/*  痛みや不調は脳が送るサイン */}
            <section id="brain" className={`anchor pt-10 md:pt-16`}>
              <Heading02 as="h3"> 痛みや不調は脳が送るサイン</Heading02>
              <div className={`mt-4 text-center md:mt-6`}>
                <Image
                  src="/assets/images/headache06.png"
                  alt="セロトニンは脳の奥の「脳幹」にある。"
                  width={257}
                  height={228}
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
                それには、脳にもう一度正しい体や目の動き、バランス器官の正しい位置などをインプットし直してあげることが必要です。そうやって日常生活で使えていない「体の感覚」を思い出すことで、脳が体を正しく認識することができると、必要以上に出されていた痛みや症状が変化していきます。
              </p>
              <p className={`mt-4 md:mt-6`}>
                頭痛の場合は、前述のセロトニンに関わる部位であり脳神経の始まりである「脳幹」は重要ですが、それ以外にも重要な脳部位がたくさんあります。
                <br />
                特に、体のバランスに関わる前庭・小脳、さらに自律神経と大きな関わりのある島皮質などが大切なポイントです。
                <br />
                当院ではそれらに注目し、「脳が感じる危険」を減らし、その結果つらい痛みを軽減していく道筋を考えます。
              </p>
              <p className={`mt-4 md:mt-6`}>
                あなたも「毎日を楽にする」ために、体と向き合ってみませんか？
              </p>
            </section>

            <div className={`pt-10 text-center md:pt-16`}>
              <Deco />
            </div>

            <div className={`pt-10 text-center md:pt-16`}>
              <ButtonWithIcon
                tag="a"
                linkProps={{ href: '/knowledge/shoulder/' }}
                className={`mx-auto mt-4 max-w-sm`}
              >
                肩こりの豆知識へ
              </ButtonWithIcon>
            </div>
          </div>
        </Inner>
      </Container>
    </>
  );
};

export default HeadachePage;
