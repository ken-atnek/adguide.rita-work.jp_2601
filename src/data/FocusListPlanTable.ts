/* =======================================
 * 料金プラン表データ
 * URL: src/data/FocusListPlanTable.ts
 * Created: 2025-10-08
 * ======================================= */

export const planTableData = {
  headers: ['ライトプラン', 'スタンダードプラン', 'プレミアムプラン'],
  prices: ['5,000', '15,000', '25,000'],
  rows: [
    { label: '管理画面の利用', values: [true, true, true] },
    { label: '情報入力代行', values: [true, true, true] },
    { label: 'フォトアルバム掲載', values: [true, true, true] },
    { label: '特徴的な福利厚生の紹介', values: [true, true, true] },
    { label: 'フリーテキストスペース', values: [true, true, true] },
    { label: '募集概要', values: [true, true, true] },
    { label: '事業所情報', values: [true, true, true] },
    { label: '職場インタビュー記事', values: [false, true, true] },
    { label: '優先表示', values: ['', '1.5', '5'] },
    { label: '職場紹介動画', values: [false, true, true] },
    { label: '施設360度カメラ動画', values: [false, false, true] },
    { label: '福利厚生の掲載', values: [false, false, true] },
    { label: 'TOP注目求人への掲載', values: [false, false, true] },
  ],
};
