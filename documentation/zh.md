<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · zh · no clinical/professional/rights approval -->

# 实验室单位换算

[条件、来源与许可](https://elucenia.org/zh/tools/conversao-de-unidades-laboratoriais)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 检查

`an`

- `glicose` — 葡萄糖
- `colesterol` — 胆固醇（总、HDL、LDL）
- `triglicerideos` — 甘油三酯
- `creatinina` — 肌酐
- `ureia` — 尿素
- `bun` — 血尿素氮（BUN）
- `calcio` — 总钙
- `acido_urico` — 尿酸
- `bilirrubina` — 胆红素

### 换算

`dir`

- `si` — 由 mg/dL 转换为 SI 单位
- `conv` — 由 SI 单位转换为 mg/dL

### 数值

`val`

范围: 0–100000

## 方法版本

SI转换/Young 1987：明确列出摩尔质量与舍入系数；BUN≠尿素

## 已记录的公式

mmol/L = mg/dL × 10 ÷ 摩尔质量; µmol/L = mg/dL × 10000 ÷ 摩尔质量.

葡萄糖 (180.16 g/mol): × 0.0555 · 胆固醇 (386.65): × 0.02586 · 甘油三酯（按三油酸甘油酯， 885.7): × 0.01129

肌酐 (113.12): × 88.4 µmol/L · 尿酸 (168.11): × 59.48 µmol/L · 胆红素 (584.66): × 17.1 µmol/L

尿素 (60.06): × 0.1665 · BUN (每摩尔尿素含28 g氮): × 0.357 mmol/L 尿素 · BUN = 尿素 × 0.466 (尿素 = BUN × 2.14)

钙 (40.08): × 0.2495

## 限制与适用人群

请选择分析物和单位：质量浓度与物质的量浓度是不同的量，通过所指定实体的摩尔质量联系。此界面的换算系数经过舍入；甘油三酯以三油酸甘油酯为基础。BUN 表示尿素氮，而非尿素质量，因此二者不能互换。换算不改变实验室方法，也不建立参考区间。Young 1987 的原始表格尚未完整核对；不声称全部系数已由该来源认证。

## 参考文献

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
