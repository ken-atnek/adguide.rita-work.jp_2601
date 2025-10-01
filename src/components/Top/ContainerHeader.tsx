/* =======================================
 * リタワーク[企業向け]  HEADER
 * URL:src/components/Top/ContainerHeader.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-01
 * Last updated: 2025-10-01
 * ======================================= */

import styles from '@/styles/PageTop.module.scss';
import { SHOP_INFO } from '@/config/shop';

const ContainerHeader = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.boxH1}>
        <span>求人掲載をご検討の事業者様へ</span>
        <h1>
          熊本「医療＆介護」特化型求人サイト
          <svg aria-label={SHOP_INFO.title}>
            <title>{SHOP_INFO.title}</title>
            <use href="#svg_logoFooter" />
          </svg>
        </h1>
      </div>
      <section className={styles.blockTop}>
        <p className={styles.catch}>
          <span>採用にも</span>
          <span>
            <i>勝</i>
            <i>ち</i>
            <i>筋</i>がある
          </span>
        </p>
      </section>
    </header>
  );
};
export default ContainerHeader;
