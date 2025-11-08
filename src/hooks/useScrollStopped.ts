/* =======================================
 * スクロール停止検知フック
 * URL:src/hooks/useScrollStopped.ts
 * Created: 2025-10-09
 * Last updated: 2025-10-10
 * ======================================= */
import { useEffect, useState } from 'react';

const useScrollStopped = (delay: number = 150) => {
  const [isScrollStopped, setIsScrollStopped] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // スクロール中は非表示
      setIsScrollStopped(false);

      // タイマーをクリア
      clearTimeout(timeoutId);

      // 指定時間後にスクロール停止とみなす
      timeoutId = setTimeout(() => {
        setIsScrollStopped(true);
      }, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return isScrollStopped;
};

export default useScrollStopped;
