<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · fr · no clinical/professional/rights approval -->

# Conversion des unités de laboratoire

[conditions, sources et autorisations](https://elucenia.org/fr/outils/conversao-de-unidades-laboratoriais)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Examen

`an`

- `glicose` — Glucose
- `colesterol` — Cholestérol (total, HDL, LDL)
- `triglicerideos` — Triglycérides
- `creatinina` — Créatinine
- `ureia` — Urée
- `bun` — BUN (azote uréique sanguin)
- `calcio` — Calcium total
- `acido_urico` — Acide urique
- `bilirrubina` — Bilirubine

### Convertir

`dir`

- `si` — De mg/dL aux unités SI
- `conv` — Des unités SI vers mg/dL

### Valeur

`val`

intervalle: 0–100000

## Édition de la méthode

Conversions SI/Young 1987 : masses molaires et facteurs arrondis explicités ; BUN≠urée

## Formule documentée

mmol/L = mg/dL × 10 ÷ masse molaire; µmol/L = mg/dL × 10000 ÷ masse molaire.

Glucose (180,16 g/mol): × 0,0555 · cholestérol (386,65): × 0,02586 · triglycérides (sous forme de trioléine, 885,7): × 0,01129

Créatinine (113,12): × 88,4 µmol/L · acide urique (168,11): × 59,48 µmol/L · bilirubine (584,66): × 17,1 µmol/L

Urée (60,06): × 0,1665 · BUN (28 g d’azote par mole d’urée): × 0,357 mmol/L d’urée · BUN = urée × 0,466 (urée = BUN × 2,14)

Calcium (40,08): × 0,2495

## Limites et population

Sélectionnez l’analyte et l’unité : la concentration massique et la concentration en quantité de matière sont des grandeurs différentes, reliées par la masse molaire de l’entité spécifiée. Les facteurs de cette interface sont arrondis ; les triglycérides utilisent la base trioléine. BUN exprime l’azote uréique, et non la masse d’urée : ils ne sont donc pas interchangeables. La conversion ne modifie pas la méthode de laboratoire et n’établit pas d’intervalle de référence. Les tableaux originaux de Young 1987 n’ont pas été intégralement vérifiés ; aucune certification de tous les facteurs par cette source n’est revendiquée.

## Références

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

100 mg/dL = 5,55 mmol/L

| Détails du résultat | |
| --- | --- |
| Facteur (mg/dL → mmol/L) | × 0,0555 |


### 2

1,00 mg/dL = 88 µmol/L

| Détails du résultat | |
| --- | --- |
| Facteur (mg/dL → µmol/L) | × 88,4 |


### 3

5,00 mmol/L = 193 mg/dL

| Détails du résultat | |
| --- | --- |
| Facteur (mg/dL → mmol/L) | × 0,0259 |


### 4

40 mg/dL = 6,66 mmol/L

| Détails du résultat | |
| --- | --- |
| BUN équivalent | 18,7 mg/dL |
| Facteur (mg/dL → mmol/L) | × 0,1665 |


### 5

20 mg/dL = 7,14 mmol/L d’urée

| Détails du résultat | |
| --- | --- |
| Urée équivalente | 42,9 mg/dL |
| Facteur (mg/dL → mmol/L d’urée) | × 0,3570 |


### 6

17 µmol/L = 1,0 mg/dL

| Détails du résultat | |
| --- | --- |
| Facteur (mg/dL → µmol/L) | × 17,1 |


### 7

10,0 mg/dL = 2,50 mmol/L

| Détails du résultat | |
| --- | --- |
| Facteur (mg/dL → mmol/L) | × 0,2495 |

