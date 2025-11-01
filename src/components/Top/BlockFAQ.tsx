/* =======================================
 * リタワーク[企業向け] Q & A
 * URL:src/components/Top/BlockFAQ.tsx
 * Referenced in: : src/components/Top/ContainerResponse.tsx
 * Created: 2025-10-09
 * Last updated: 2025-10-09
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from '@/styles/TopResponse.module.scss';
type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  dataPath: string;
  initiallyOpenId?: number | null;
};

const BlockFAQ = ({ dataPath = '/data/faq.json', initiallyOpenId }: Props) => {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [openId, setOpenId] = useState<number | null>(initiallyOpenId ?? null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { ref, isVisible } = useScrollTrigger<HTMLDivElement>();

  useEffect(() => {
    const controller = new AbortController();

    const loadFaqData = async () => {
      try {
        const res = await fetch(dataPath, {
          signal: controller.signal,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('FAQデータの取得に失敗しました。');
        const json = (await res.json()) as FaqItem[];
        setItems(json);
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError('FAQデータの取得に失敗しました。');
          console.error('FAQ load failed:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadFaqData();
    return () => {
      controller.abort();
    };
  }, [dataPath]);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={clsx(styles.blockFAQ, {
        [styles['is-active']]: isVisible && !loading && !error,
      })}
      ref={ref}
    >
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>データを読み込んでいます...</p>
        </div>
      )}

      {error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button onClick={() => window.location.reload()}>再読み込み</button>
        </div>
      )}

      {!loading && !error && (
        <ul className={styles.blockFAQList}>
          {items.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;
            const faqHeadClass = clsx(styles.faqHead, {
              [styles.isOpen]: isOpen,
            });
            const faqButtonClass = clsx(styles.faqButton, {
              [styles.isOpen]: isOpen,
            });
            const faqPanelClass = clsx(styles.faqPanel, {
              [styles.isOpen]: isOpen,
            });

            return (
              <li
                key={item.id}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className={faqHeadClass}>
                  <div className={styles.faqNumber}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={faqButtonClass}
                    onClick={() => toggle(item.id)}
                  >
                    <p>{item.question}</p>
                    <span
                      className={clsx(styles.faqIcon, {
                        [styles.isOpen]: isOpen,
                      })}
                      aria-hidden
                    />
                  </button>
                </div>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={faqPanelClass}
                >
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BlockFAQ;
