export interface SupportItem {
  id: number;
  title: string;
  description: string;
}

export const supportItems: SupportItem[] = [
  {
    id: 1,
    title: '不安を解消する\n相談サポート”',
    description:
      '求職者が現在の職場や検討中の職場への不安を事前に相談できるから、入職後のミスマッチを防ぎます。',
  },
  {
    id: 2,
    title: 'ノウハウで応募者の\n質を向上”',
    description:
      '就職活動の進め方や面接対策をサポートすることで、準備の整った応募者が集まり、採用の質が高まります。',
  },
  {
    id: 3,
    title: '適切なマッチングを\n実現',
    description:
      '専門的な視点で適切な職場を案内するため、求職者と企業の相性が高く、定着率の向上につながります。',
  },
  {
    id: 4,
    title: 'アフターケアで\n長期定着をサポート',
    description:
      '就職後も継続的なフォローを行うことで、早期離職を防ぎ、採用コストの削減に貢献します。',
  },
];
