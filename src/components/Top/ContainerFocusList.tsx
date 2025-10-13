/* =======================================
 * リタワーク[企業向け] 4つの特化リスト
 * URL:ssrc/components/Top/ContainerFocusList.tsx
 * Referenced in: : /app/page.tsx
 * Created: 2025-10-07
 * Last updated: 2025-10-07
 * ======================================= */

'use client';
import styles from '@/styles/TopFocusList.module.scss';
import { characters } from '@/data/FocusListMapCharacter';
import { appealItems } from '@/data/FocusListAppeal';
import { supportItems } from '@/data/FocusListSupport';
import { planTableData } from '@/data/FocusListPlanTable';
import ExternalLink from '@/components/common/ExternalLink';
import CheckIcon from '@/images/FocusList/check.svg';
import Image from 'next/image';

const ContainerFocusList = () => {
  return (
    <section className={styles.containerFocusList}>
      <article className={styles.blockFocus01}>
        <h2 style={{ '--data-number': '"01"' } as React.CSSProperties}>
          熊本県の「医療&介護」特化型転職サイト
        </h2>
        <h3>
          <i>ミスマッチを減らす</i>為に、地域と医療介護に特化。
        </h3>
        <p className={styles.sidebarH3}>
          経験者が集まるから、即戦力に出会える。
        </p>
        <div className={styles.boxContents}>
          <div className={styles.wrapText}>
            <h4>
              <span>熊本県特化の強み</span>
            </h4>
            <p>
              熊本県に絞った人材データベースだから、無駄のないマッチングが可能。
              <br />
              県内で転職を希望する求職者が多く集まり、地域密着の採用をスムーズに実現します。
            </p>
          </div>
          <div className={styles.wrapMap}>
            <div className={styles.innerMap}>
              {characters.map((character) => (
                <div
                  key={character.id}
                  className={styles.itemCharacter}
                  style={character.style}
                >
                  <Image src={character.src} alt={character.alt} width={49} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.wrapText}>
            <h4>
              <span>医療 & 介護職に特化</span>
            </h4>
            <p>
              看護師・介護士・PT・OT・STなど、医療・介護に携わる職種にフォーカス。
              <br />
              一般求人では埋もれがちな職種でも、専門性を理解した求職者に確実にリーチできます。
            </p>
          </div>
        </div>
      </article>
      <article className={styles.blockFocus02}>
        <h2 style={{ '--data-number': '"02"' } as React.CSSProperties}>
          圧倒的な事業所のリサーチ＆アピール力
        </h2>
        <h3>
          <i>職場の空気感を可視化</i>するから、惹きつけられる。
        </h3>
        <p className={styles.sidebarH3}>リアルな情報が採用競争力を生む。</p>
        <p className={styles.notice}>※有料プランの方のみご利用可能</p>
        <ul>
          {appealItems.map((item) => (
            <li key={item.id} className={`${styles[`item${item.id}`]}`}>
              <div className={styles.wrapImage}>
                <Image src={item.image} alt={item.alt} />
              </div>
              <div className={styles.wrapText}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <ExternalLink
                  href={item.link}
                  className={styles.itemPageLink}
                ></ExternalLink>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article className={styles.blockFocus03}>
        <h2 style={{ '--data-number': '"03"' } as React.CSSProperties}>
          求職者にしっかり寄り添った転職支援
        </h2>
        <h3>
          数字や経歴の先にある<i>“人”を知る。</i>
        </h3>
        <p className={styles.sidebarH3}>
          本当の価値を引き出し、長く活躍できる人材を紹介。
        </p>
        <div className={styles.boxContents}>
          <ul>
            {supportItems.map((item) => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.announce}>
          LINE登録後には、<i>相談・面接対策・職場案内・アフターケア</i>
          までトータルサポート。
          <br />
          安心して転職活動を進められるため、応募者の質と定着率が高まります。
        </p>
      </article>
      <article className={styles.blockFocus04}>
        <h2 style={{ '--data-number': '"04"' } as React.CSSProperties}>
          管理が把握しやすい明朗会計のプラン
        </h2>
        <h3>
          <i>必要な時に、必要な分だけ。</i>無駄のない料金体系。
        </h3>
        <p className={styles.sidebarH3}>
          細かなオプションなし、わかりやすい3つのプラン。
        </p>
        <ul className={styles.planTable}>
          <li className={styles.planHeader}>
            {planTableData.headers.map((header, index) => (
              <h4 key={`header-${index}`}>
                <span>{header}</span>
              </h4>
            ))}
          </li>
          <li className={styles.planPrices}>
            <h5>
              <span>月額料金</span>
            </h5>
            {planTableData.prices.map((price, index) => (
              <div key={index} className={styles.price}>
                <span>{price}</span>
              </div>
            ))}
          </li>
          {planTableData.rows.map((row, rowIndex) => (
            <li key={rowIndex} className={styles.planRow}>
              <h5>
                <span>{row.label}</span>
              </h5>
              {row.values.map((value, colIndex) => (
                <div key={colIndex} className={styles.rowValue}>
                  {value === true ? (
                    <Image
                      src={CheckIcon}
                      alt="チェックアイコン"
                      width={16}
                      height={16}
                    />
                  ) : value === false ? (
                    ''
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
        <div className={styles.itemPlus}></div>
        <div className={styles.boxBannerPlan}>
          <div className={styles.itemTitle}>
            <h4>
              <i>プレミアムプランをご契約の方</i>
              には追加のプランも。複数業種を募集の事業所様におすすめです。
            </h4>
          </div>
          <div className={styles.innerContents}>
            <div className={styles.wrapHead}>
              <h5>
                <span>
                  <i>10</i>社様
                  <br />
                  限定
                </span>
                特別バナープラン
              </h5>
              <div className={styles.itemPremium}>
                <h6>プレミアムプラン</h6>
                <span>
                  25,000<i>円</i>
                </span>
              </div>
              <div className={styles.itemPlanPrice}>
                <span>50,000</span>
                <i>円＋税</i>
              </div>
            </div>
            <ul>
              <li>
                <i>01</i>
                <p>TOPページ上部に10社限定特別枠にて事業所バナーを設置</p>
              </li>
              <li>
                <i>02</i>
                <p>事業所の紹介ページを別途1ページ追加</p>
                <span>・複数の募集職種を一覧で掲載可能</span>
                <span>・事業所の紹介動画を作成及びページへの設置</span>
              </li>
              <li>
                <i>03</i>
                <p>求人検索ページの広告枠にランダム表示</p>
              </li>
            </ul>
            <ExternalLink
              href="#"
              className={styles.itemPageLink}
            ></ExternalLink>
          </div>
        </div>
      </article>
    </section>
  );
};
export default ContainerFocusList;
