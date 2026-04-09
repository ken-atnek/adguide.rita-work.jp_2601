/* =======================================
 * リタワーク[企業向け] ご契約会社の声
 * URL:src/components/Top/ContainerResponse.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-09
 * Last updated: 2025-10-10
 * ======================================= */

import styles from '@/styles/TopResponse.module.scss';
import ImageMascot01 from '@/images/mascot01.webp';
import ImageMascot02 from '@/images/mascot03.webp';
import Image from 'next/image';
import BlockFAQ from '@/components/Top/BlockFAQ';
// import BlockResponse from '@/components/Top/BlockResponse';

const ContainerResponse = () => {
  return (
    <section className={styles.containerResponse}>
      {/* <article>
        <h2>ご契約会社の声</h2>
        <BlockResponse />
      </article> */}
      <article>
        <h2>Q&A</h2>
        <BlockFAQ dataPath="/data/faq.json" />
      </article>
      <div className={styles.slideText}>
        <div className={styles.innerSlide01}>
          {/* スライド要素 */}
          <span>rita</span>
          <Image src={ImageMascot01} alt="マスコット1" />
          <span>work</span>
          <Image
            src={ImageMascot02}
            alt="マスコット2"
            className={styles.mascot02}
          />
        </div>
        <div className={styles.innerSlide02}>
          <span>rita</span>
          <Image src={ImageMascot01} alt="マスコット1" />
          <span>work</span>
          <Image
            src={ImageMascot02}
            alt="マスコット2"
            className={styles.mascot02}
          />
        </div>
      </div>
    </section>
  );
};
export default ContainerResponse;
