import MapPerson01 from '@/images/FocusList/map-person01.svg';
import MapPerson02 from '@/images/FocusList/map-person02.svg';
import MapPerson03 from '@/images/FocusList/map-person03.svg';
import MapPerson04 from '@/images/FocusList/map-person04.svg';
import MapPerson05 from '@/images/FocusList/map-person05.svg';
import MapPerson06 from '@/images/FocusList/map-person06.svg';
import { StaticImageData } from 'next/image';

export interface Character {
  id: number;
  src: StaticImageData; // 修正
  alt: string;
  style: {
    top: string;
    left: string;
    width: string;
    aspectRatio: string;
  };
}

export const characters: Character[] = [
  {
    id: 1,
    src: MapPerson01,
    alt: 'Person 1-1',
    style: { top: '15%', left: '47%', width: '7%', aspectRatio: '52 / 59' },
  },
  {
    id: 2,
    src: MapPerson01,
    alt: 'Person 1-2',
    style: { top: '80%', left: '52%', width: '7%', aspectRatio: '52 / 59' },
  },
  {
    id: 3,
    src: MapPerson01,
    alt: 'Person 1-3',
    style: { top: '69%', left: '5%', width: '7%', aspectRatio: '52 / 59' },
  },
  {
    id: 4,
    src: MapPerson02,
    alt: 'Person 2-1',
    style: { top: '20%', left: '77%', width: '7%', aspectRatio: '54 / 60' },
  },
  {
    id: 5,
    src: MapPerson02,
    alt: 'Person 2-2',
    style: { top: '57%', left: '50%', width: '7%', aspectRatio: '54 / 60' },
  },
  {
    id: 6,
    src: MapPerson03,
    alt: 'Person 3-1',
    style: { top: '29%', left: '65%', width: '7%', aspectRatio: '51 / 58' },
  },
  {
    id: 7,
    src: MapPerson04,
    alt: 'Person 4-1',
    style: { top: '38%', left: '53%', width: '7%', aspectRatio: '49 / 61' },
  },
  {
    id: 8,
    src: MapPerson04,
    alt: 'Person 4-2',
    style: { top: '72%', left: '70%', width: '7%', aspectRatio: '49 / 61' },
  },
  {
    id: 9,
    src: MapPerson05,
    alt: 'Person 5-1',
    style: { top: '48%', left: '69%', width: '7%', aspectRatio: '49 / 56' },
  },
  {
    id: 10,
    src: MapPerson06,
    alt: 'Person 6-1',
    style: { top: '57%', left: '23%', width: '7%', aspectRatio: '46 / 56' },
  },
  {
    id: 11,
    src: MapPerson06,
    alt: 'Person 6-2',
    style: { top: '60%', left: '63%', width: '7%', aspectRatio: '46 / 56' },
  },
];
