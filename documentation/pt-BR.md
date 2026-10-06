<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · pt-BR · no clinical/professional/rights approval -->

# Conversão de unidades laboratoriais

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/conversao-de-unidades-laboratoriais)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Exame

`an`

- `glicose` — Glicose
- `colesterol` — Colesterol (total, HDL, LDL)
- `triglicerideos` — Triglicerídeos
- `creatinina` — Creatinina
- `ureia` — Ureia
- `bun` — BUN (nitrogênio ureico)
- `calcio` — Cálcio total
- `acido_urico` — Ácido úrico
- `bilirrubina` — Bilirrubina

### Converter

`dir`

- `si` — De mg/dL para SI
- `conv` — De SI para mg/dL

### Valor

`val`

intervalo: 0–100000

## Edição do método

Conversões SI/Young 1987:massa molar e fatores arredondados explicitados; BUN≠ureia

## Fórmula documentada

mmol/L = mg/dL × 10 ÷ massa molar; µmol/L = mg/dL × 10.000 ÷ massa molar.

Glicose (180,16 g/mol): × 0,0555 · colesterol (386,65): × 0,02586 · triglicerídeos (como trioleína, 885,7): × 0,01129

Creatinina (113,12): × 88,4 µmol/L · ácido úrico (168,11): × 59,48 µmol/L · bilirrubina (584,66): × 17,1 µmol/L

Ureia (60,06): × 0,1665 · BUN (28 g de nitrogênio por mol de ureia): × 0,357 mmol/L de ureia · BUN = ureia × 0,466 (ureia = BUN × 2,14)

Cálcio (40,08): × 0,2495

## Limites e população

Selecione o analito e a unidade: concentração de massa e concentração de quantidade de substância são grandezas diferentes, ligadas pela massa molar da entidade especificada. Os fatores desta interface são arredondados; triglicerídeos usam a base trioleína. BUN expressa nitrogênio ureico e não a massa de ureia, portanto não são intercambiáveis. A conversão não altera o método laboratorial nem estabelece intervalo de referência. As tabelas originais de Young 1987 não foram integralmente conferidas; não se declara certificação de todos os fatores por essa fonte.

## Referências

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

100 mg/dL = 5,55 mmol/L

| Detalhes do resultado | |
| --- | --- |
| Fator (mg/dL → mmol/L) | × 0,0555 |


### 2

1,00 mg/dL = 88 µmol/L

| Detalhes do resultado | |
| --- | --- |
| Fator (mg/dL → µmol/L) | × 88,4 |


### 3

5,00 mmol/L = 193 mg/dL

| Detalhes do resultado | |
| --- | --- |
| Fator (mg/dL → mmol/L) | × 0,0259 |


### 4

40 mg/dL = 6,66 mmol/L

| Detalhes do resultado | |
| --- | --- |
| BUN equivalente | 18,7 mg/dL |
| Fator (mg/dL → mmol/L) | × 0,1665 |


### 5

20 mg/dL = 7,14 mmol/L de ureia

| Detalhes do resultado | |
| --- | --- |
| Ureia equivalente | 42,9 mg/dL |
| Fator (mg/dL → mmol/L de ureia) | × 0,3570 |


### 6

17 µmol/L = 1,0 mg/dL

| Detalhes do resultado | |
| --- | --- |
| Fator (mg/dL → µmol/L) | × 17,1 |


### 7

10,0 mg/dL = 2,50 mmol/L

| Detalhes do resultado | |
| --- | --- |
| Fator (mg/dL → mmol/L) | × 0,2495 |

