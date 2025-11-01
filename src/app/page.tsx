/* =======================================
 * リタワーク[企業向け]  TOPページ
 * URL: /app/page.tsx
 * Created: 2025-10-01
 * Last updated: 2025-10-01
 * ======================================= */

import type { Metadata } from 'next';
import { isRealProduction } from '@/lib/env';
import ContainerHeader from '@/components/Top/ContainerHeader';
import ContainerFocusList from '@/components/Top/ContainerFocusList';
import ContainerStructure from '@/components/Top/ContainerStructure';
import ContainerResponse from '@/components/Top/ContainerResponse';
import ContainerContact from '@/components/Top/ContainerContact';

export const generateMetadata = (): Metadata => {
  return {
    title: 'リタワーク｜求人掲載をご検討の事業者様へ',
    description: isRealProduction
      ? 'リタワークのディスクリプション'
      : undefined,
  };
};
export default function Home() {
  return (
    <>
      <ContainerHeader />
      <ContainerFocusList />
      <ContainerStructure />ｔ
      <ContainerResponse />
      <ContainerContact />
    </>
  );
}
