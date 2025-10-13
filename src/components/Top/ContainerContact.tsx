/* =======================================
 * リタワーク[企業向け] ご相談・お問い合わせ
 * URL:src/components/Top/ContainerContact.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-10
 * Last updated: 2025-10-10
 * ======================================= */

import styles from '@/styles/TopContact.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import { SHOP_INFO } from '@/config/shop';
import BlockForm from '@/components/Top/BlockForm';

type StepItem = {
  step: string;
  title: string;
  text: string;
};

const stepList: StepItem[] = [
  {
    step: 'STEP 01',
    title: 'お問い合わせ',
    text: 'ご相談だけでも大丈夫です。メールフォームからお気軽にご連絡ください。',
  },
  {
    step: 'STEP 02',
    title: 'お打ち合わせ',
    text: '採用条件や課題を丁寧にヒアリングし、最適なプランをご提案します。',
  },
  {
    step: 'STEP 03',
    title: '取材・原稿作成',
    text: '取材内容をもとに、職場の魅力を引き出す原稿を制作いたします。',
  },
  {
    step: 'STEP 04',
    title: 'ご掲載スタート',
    text: '原稿確認後に掲載を開始。応募状況に応じた改善提案も行います。',
  },
];

const ContainerContact = () => {
  return (
    <section className={styles.containerContact}>
      <h2>ご相談・お問い合わせ</h2>
      <BlockForm />
      <article className={styles.blockFooter}>
        <ul className={styles.stepList}>
          {stepList.map((item, index) => (
            <li key={index} className={styles.stepItem}>
              <p className={styles.step}>{item.step}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
        <p className={styles.notice}>
          採用に関するお悩みや当サービスについてのご質問など、どのような内容でもお気軽にお問い合わせください。
          <br />
          ご連絡いただいた後は、担当者より丁寧にヒアリングのご案内をいたします。
          <br />
          初めての方でも安心してご利用いただけるよう、わかりやすいサポート体制を整えております。
        </p>
        <div className={styles.itemHr}>
          <a href="#"></a>
        </div>
        <div className={styles.boxFoot}>
          <div className={styles.itemLogo}>
            熊本「医療＆介護」特化型求人サイト
            <svg aria-label={SHOP_INFO.title}>
              <title>{SHOP_INFO.title}</title>
              <use href="#svg_logoFooter" />
            </svg>
          </div>
          <ExternalLink href="#">プライバシーポリシ</ExternalLink>
          <span>© 2025 RITAWORK</span>
        </div>
      </article>
    </section>
  );
};
export default ContainerContact;
