import { StaticImageData } from 'next/image';
import AppealImage01 from '@/images/FocusList/appeal-list01.svg';
import AppealImage02 from '@/images/FocusList/appeal-list02.svg';
import AppealImage03 from '@/images/FocusList/appeal-list03.svg';

export interface AppealItem {
  id: number;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export const appealItems: AppealItem[] = [
  {
    id: 1,
    image: AppealImage01,
    alt: 'インタビュー',
    title: 'インタビューで伝える“リアルな声”',
    description:
      '職場担当者への取材で、雰囲気や人間関係など条件表だけでは見えない魅力を発信します。',
    link: 'https://www.yahoo.co.jp/',
  },
  {
    id: 2,
    image: AppealImage02,
    alt: '職場の写真',
    title: '動画で感じる“働く空気感””',
    description:
      '映像ならではの臨場感で、職場の魅力をダイレクトに伝え、求職者の安心感を高めます。',
    link: 'https://www.example.com/',
  },
  {
    id: 3,
    image: AppealImage03,
    alt: '動画紹介',
    title: '働き方と福利厚生を“見える化””',
    description:
      '制度やサポート体制を整理し、応募者が判断しやすい情報をわかりやすく提示します。',
    link: 'https://www.example.com/',
  },
];
