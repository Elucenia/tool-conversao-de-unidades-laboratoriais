<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · ja · no clinical/professional/rights approval -->

# 検査値の単位換算

[条件・出典・許諾](https://elucenia.org/ja/tools/conversao-de-unidades-laboratoriais)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 検査

`an`

- `glicose` — グルコース
- `colesterol` — コレステロール（総、HDL、LDL）
- `triglicerideos` — 中性脂肪
- `creatinina` — クレアチニン
- `ureia` — 尿素
- `bun` — 血中尿素窒素（BUN）
- `calcio` — 総カルシウム
- `acido_urico` — 尿酸
- `bilirrubina` — ビリルビン

### 換算

`dir`

- `si` — mg/dLからSI単位へ
- `conv` — SI単位からmg/dLへ

### 値

`val`

範囲: 0–100000

## 方法の版

SI換算/Young 1987：モル質量と丸め係数を明記；BUN≠尿素

## 記載された計算式

mmol/L = mg/dL × 10 ÷ モル質量; µmol/L = mg/dL × 10000 ÷ モル質量.

グルコース (180.16 g/mol): × 0.0555 · コレステロール (386.65): × 0.02586 · 中性脂肪（トリオレインとして、 885.7): × 0.01129

クレアチニン (113.12): × 88.4 µmol/L · 尿酸 (168.11): × 59.48 µmol/L · ビリルビン (584.66): × 17.1 µmol/L

尿素 (60.06): × 0.1665 · BUN (尿素1 mol当たり窒素28 g): × 0.357 mmol/L 尿素 · BUN = 尿素 × 0.466 (尿素 = BUN × 2.14)

カルシウム (40.08): × 0.2495

## 限界・対象集団

分析対象物と単位を選択してください。質量濃度と物質量濃度は異なる量で、指定した化学種のモル質量を介して関連します。この画面の係数は丸められており、中性脂肪にはトリオレインを基準として用います。BUN は尿素窒素であり、尿素の質量ではないため、互換ではありません。変換は検査方法を変更せず、基準範囲も設定しません。Young 1987 の原表は完全には確認されておらず、すべての係数がその資料で認証されたとは主張しません。

## 参考文献

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
