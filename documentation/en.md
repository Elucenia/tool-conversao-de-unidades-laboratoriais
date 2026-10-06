<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · en · no clinical/professional/rights approval -->

# Laboratory unit conversion

[conditions, sources and permissions](https://elucenia.org/en/tools/conversao-de-unidades-laboratoriais)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Examination

`an`

- `glicose` — Glucose
- `colesterol` — Cholesterol (total, HDL, LDL)
- `triglicerideos` — Triglycerides
- `creatinina` — Creatinine
- `ureia` — Urea
- `bun` — BUN (blood urea nitrogen)
- `calcio` — Total calcium
- `acido_urico` — Uric acid
- `bilirrubina` — Bilirubin

### Convert

`dir`

- `si` — From mg/dL to SI units
- `conv` — From SI units to mg/dL

### Value

`val`

range: 0–100000

## Method edition

SI conversions/Young 1987: explicit molar masses and rounded factors; BUN≠urea

## Documented formula

mmol/L = mg/dL × 10 ÷ molar mass; µmol/L = mg/dL × 10000 ÷ molar mass.

Glucose (180.16 g/mol): × 0.0555 · cholesterol (386.65): × 0.02586 · triglycerides (as triolein, 885.7): × 0.01129

Creatinine (113.12): × 88.4 µmol/L · uric acid (168.11): × 59.48 µmol/L · bilirubin (584.66): × 17.1 µmol/L

Urea (60.06): × 0.1665 · BUN (28 g nitrogen per mole of urea): × 0.357 mmol/L of urea · BUN = urea × 0.466 (urea = BUN × 2.14)

Calcium (40.08): × 0.2495

## Limits and population

Select the analyte and unit: mass concentration and amount-of-substance concentration are different quantities, linked by the molar mass of the specified entity. Factors in this interface are rounded; triglycerides use a triolein basis. BUN expresses urea nitrogen rather than urea mass, so they are not interchangeable. Conversion does not change the laboratory method or establish a reference interval. The original Young 1987 tables have not been fully checked; certification of all factors by that source is not claimed.

## References

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

100 mg/dL = 5.55 mmol/L

| Result details | |
| --- | --- |
| Factor (mg/dL → mmol/L) | × 0.0555 |


### 2

1.00 mg/dL = 88 µmol/L

| Result details | |
| --- | --- |
| Factor (mg/dL → µmol/L) | × 88.4 |


### 3

5.00 mmol/L = 193 mg/dL

| Result details | |
| --- | --- |
| Factor (mg/dL → mmol/L) | × 0.0259 |


### 4

40 mg/dL = 6.66 mmol/L

| Result details | |
| --- | --- |
| Equivalent BUN | 18.7 mg/dL |
| Factor (mg/dL → mmol/L) | × 0.1665 |


### 5

20 mg/dL = 7.14 mmol/L of urea

| Result details | |
| --- | --- |
| Equivalent urea | 42.9 mg/dL |
| Factor (mg/dL → mmol/L of urea) | × 0.3570 |


### 6

17 µmol/L = 1.0 mg/dL

| Result details | |
| --- | --- |
| Factor (mg/dL → µmol/L) | × 17.1 |


### 7

10.0 mg/dL = 2.50 mmol/L

| Result details | |
| --- | --- |
| Factor (mg/dL → mmol/L) | × 0.2495 |

