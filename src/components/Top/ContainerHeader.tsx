/* =======================================
 * リタワーク[企業向け]  HEADER
 * URL:src/components/Top/ContainerHeader.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-01
 * Last updated: 2025-10-01
 * ======================================= */
'use client';
import styles from '@/styles/TopHero.module.scss';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { SHOP_INFO } from '@/config/shop';

const ContainerHeader = () => {
  const { ref, isVisible } = useScrollTrigger<HTMLElement>();
  return (
    <header
      className={`${styles.containerHeader} ${isVisible ? styles['is-active'] : ''}`}
      ref={ref}
    >
      <div className={styles.boxH1}>
        <span>
          求人掲載を
          <br className="sp" />
          ご検討の
          <br className="sp" />
          事業者様へ
        </span>
        <h1>
          熊本「医療＆介護」特化型求人サイト
          <svg aria-label={SHOP_INFO.title}>
            <title>{SHOP_INFO.title}</title>
            <use href="#svg_logoFooter" />
          </svg>
        </h1>
      </div>
      <div className={styles.blockTop}>
        <p className={styles.catch}>
          <span className={styles.textHead}>採用にも</span>
          <span className={styles.textBottom}>
            <i>勝</i>
            <i>ち</i>
            <i>筋</i>
            が
            <br className="sp" />
            ある
          </span>
        </p>
        <div className={styles.svgText}>
          <svg aria-label="人手不足の業界に先行く一手を！！">
            <title>人手不足の業界に先行く一手を！！</title>
            <use href="#svg_heroText" />
          </svg>
        </div>
        <a href="#" className={styles.linkContact}>
          <span>求人掲載の</span>
          ご相談・お申し込み
        </a>
      </div>
      <section className={styles.blockBottom}>
        <article>
          <div className={styles.text}>
            RITA
            <br className="pc" />
            WORK
            <br className="pc" />
            <i />
            is...
          </div>
          <div className={styles.wrapList}>
            <h2>
              その布石は、 <br className="sp" />
              <i>4</i>つの
              <br className="sp" />
              特化から。
            </h2>
            <nav>
              <a href="#">熊本県の「医療&介護」特化型転職サイト</a>
              <a href="#">圧倒的な事業所のリサーチ＆アピール力</a>
              <a href="#">求職者にしっかり寄り添った転職支援</a>
              <a href="#">管理が把握しやすい明朗会計のプラン</a>
            </nav>
          </div>
        </article>
      </section>
    </header>
  );
};
export default ContainerHeader;
