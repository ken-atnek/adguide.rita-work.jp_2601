/* =======================================
 * リタワーク[企業向け] Layout
 * URL:src/app/layout.tsx
 * Created: 2025-10-01
 * Last updated: 2025-10-01
 * ======================================= */
/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import SvgDefs from '@/components/SvgDefs';

import { isRealProduction } from '@/lib/env';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE || 'https://adguide.rita-work.jp/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: '/ogp.png',
          width: 1200,
          height: 630,
          alt: 'リタワークのOGP画像',
        },
      ],
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon/favicon-light.svg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
      },
      // { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Zen+Kaku+Gothic+Antique:wght@400;500;700;900&display=swap"
        />
      </head>
      <body>
        <SvgDefs />
        <main>{children}</main>
        <div id="modal-root" />
      </body>
    </html>
  );
}
