/* =======================================
 * リタワーク[企業向け] リタワークの仕組み
 * URL:src/components/Top/ContainerStructure.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-08
 * Last updated: 2025-10-08
 * ======================================= */
'use client';
import styles from '@/styles/TopStructure.module.scss';
import clsx from 'clsx';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { SHOP_INFO } from '@/config/shop';
import ImageSeeker from '@/images/FocusList/map-person05.svg';
import ImageCompany from '@/images/FocusList/map-person07.svg';
import LogoRitaJinji from '@/images/logo-rita-jinji.svg';
import LogoKpta from '@/images/logo-kpta.svg';
import Image from 'next/image';

const ContainerStructure = () => {
  const { ref: block01Ref, isVisible: block01Visible } =
    useScrollTrigger<HTMLElement>();
  const { ref: block02Ref, isVisible: block02Visible } =
    useScrollTrigger<HTMLElement>();
  const { ref: block03Ref, isVisible: block03Visible } =
    useScrollTrigger<HTMLElement>();
  return (
    <section className={styles.containerStructure}>
      <h3>
        <svg aria-label={SHOP_INFO.title}>
          <title>{SHOP_INFO.title}</title>
          <use href="#svg_logoFooter" />
        </svg>
        の仕組み
      </h3>
      <h4>
        <i>積み重ねた信頼があるから</i>、厚みのある支援が実現できる。
      </h4>
      <p className={styles.sidebarH4}>
        単なる求人紹介ではなく、業界を理解する専門性と地域で培った信頼を組み合わせ、採用から定着まで
        <br />
        一貫したサポートを提供します。厚みのある支援体制が、企業と人材の未来を支えます。
      </p>
      <article
        className={clsx(styles.blockStructure, {
          [styles['is-active']]: block01Visible,
        })}
        ref={block01Ref}
      >
        <div className={styles.wrapSide}>
          <div className={styles.itemHead}>
            <Image src={ImageSeeker} alt="求職者" />
            <span>求職者</span>
          </div>
          <h5>安心して選べる</h5>
          <ul>
            <li>自分に合った職場が見つかる</li>
            <li>経験やスキルを活かせる</li>
            <li>不安や悩みを相談できる</li>
            <li>市場価値がわかる</li>
          </ul>
        </div>
        <div className={styles.wrapArrow}>
          <div className={styles.ArrowTop}>
            <span>企業の提案</span>
            <span>求職活動</span>
          </div>
          <div className={styles.ArrowBottom}>
            <span>採用PR</span>
            <span>相談</span>
          </div>
        </div>
        <div className={styles.wrapRIta}>
          <div className={styles.itemRitaWork}>
            <span>
              医療&介護業界向け
              <br />
              転職求人サービス
            </span>
            <svg aria-label="リタワークロゴ" className={styles.logoMark}>
              <use href="#svg_logoMark" />
            </svg>
            <svg aria-label="リタワーク ロゴ" className={styles.logoText}>
              <use href="#svg_logoHero" />
            </svg>
            <i className={styles.itemCross}></i>
          </div>
          <div className={styles.itemRitaJinji}>
            <span>
              医療&介護業界向け
              <br />
              人事採用代行サービス
            </span>
            <Image src={LogoRitaJinji} alt="リタジンジ" />
          </div>
        </div>
        <div className={styles.wrapArrow}>
          <div className={styles.ArrowTop}>
            <span>求人掲載</span>
            <span>
              紹介
              <br />
              定着支援
            </span>
          </div>
          <div className={styles.ArrowBottom}>
            <span>業務を丸投げ</span>
            <span>応募数アップ</span>
          </div>
        </div>
        <div className={styles.wrapSide}>
          <div className={styles.itemHead}>
            <Image src={ImageCompany} alt="求人企業" />
            <span>求人企業</span>
          </div>
          <h5>効率的に採れる</h5>
          <ul>
            <li>欲しい人材に確実に届く</li>
            <li>採用業務を効率化できる</li>
            <li>採用システムを構築できる</li>
            <li>応募数と定着率を両立できる</li>
          </ul>
        </div>
      </article>
      <article
        className={clsx(styles.blockCompany, {
          [styles['is-active']]: block02Visible,
        })}
        ref={block02Ref}
      >
        <i className={styles.itemMark}></i>
        <div className={styles.boxJinji}>
          <span>
            医療&介護業界向け
            <br />
            人事採用代行サービス
          </span>
          <Image src={LogoRitaJinji} alt="リタジンジ" />
        </div>
        <h5>応募から定着まで、採用を支えるもう一つの手。</h5>
        <p>
          リタジンジは、RITAが運営する採用代行サービスです。求人掲載を担うリタワークと連携し、企業の採用課題を一気通貫でサポート。現場理解から応募対応、面接調整までを代行し、採用の手間を削減します。リタワークのネットワークと組み合わせることで、応募から定着までの流れをよりスムーズにします。
        </p>
      </article>
      <article
        className={clsx(styles.blockCompany, {
          [styles['is-active']]: block03Visible,
        })}
        ref={block03Ref}
      >
        <i className={styles.itemMark}></i>
        <div className={styles.boxKpta}>
          <Image src={LogoKpta} alt="KPTA" />
          <span>
            official<i>partner</i>
          </span>
        </div>
        <h5>地域の医療を支える、確かな連携体制。</h5>
        <p>
          リタワークは、熊本県理学療法士協会と公式パートナーシップを結び、地域医療と介護の発展に貢献しています。協会との連携により、地域の現場課題や採用ニーズを的確に把握し、より信頼性の高いマッチングを実現。専門職に寄り添うネットワークを活かし、企業と求職者の双方にとって安心と信頼の採用支援を行っています。
        </p>
      </article>
    </section>
  );
};
export default ContainerStructure;
