<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · it · no clinical/professional/rights approval -->

# Conversione delle unità di laboratorio

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/conversao-de-unidades-laboratoriais)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Esame

`an`

- `glicose` — Glucosio
- `colesterol` — Colesterolo (totale, HDL, LDL)
- `triglicerideos` — Trigliceridi
- `creatinina` — Creatinina
- `ureia` — Urea
- `bun` — BUN (azoto ureico ematico)
- `calcio` — Calcio totale
- `acido_urico` — Acido urico
- `bilirrubina` — Bilirubina

### Converti

`dir`

- `si` — Da mg/dL a unità SI
- `conv` — Da unità SI a mg/dL

### Valore

`val`

intervallo: 0–100000

## Edizione del metodo

Conversioni SI/Young 1987: masse molari e fattori arrotondati esplicitati; BUN≠urea

## Formula documentata

mmol/L = mg/dL × 10 ÷ massa molare; µmol/L = mg/dL × 10000 ÷ massa molare.

Glucosio (180,16 g/mol): × 0,0555 · colesterolo (386,65): × 0,02586 · trigliceridi (come trioleina, 885,7): × 0,01129

Creatinina (113,12): × 88,4 µmol/L · acido urico (168,11): × 59,48 µmol/L · bilirubina (584,66): × 17,1 µmol/L

Urea (60,06): × 0,1665 · BUN (28 g di azoto per mole di urea): × 0,357 mmol/L di urea · BUN = urea × 0,466 (urea = BUN × 2,14)

Calcio (40,08): × 0,2495

## Limiti e popolazione

Selezionare analita e unità: concentrazione di massa e concentrazione di quantità di sostanza sono grandezze diverse, collegate dalla massa molare dell’entità specificata. I fattori di questa interfaccia sono arrotondati; per i trigliceridi si usa la base trioleina. BUN esprime azoto ureico, non massa di urea, quindi non sono intercambiabili. La conversione non modifica il metodo di laboratorio né stabilisce un intervallo di riferimento. Le tabelle originali di Young 1987 non sono state interamente verificate; non si dichiara la certificazione di tutti i fattori da quella fonte.

## Riferimenti

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

100 mg/dL = 5,55 mmol/L

| Dettagli del risultato | |
| --- | --- |
| Fattore (mg/dL → mmol/L) | × 0,0555 |


### 2

1,00 mg/dL = 88 µmol/L

| Dettagli del risultato | |
| --- | --- |
| Fattore (mg/dL → µmol/L) | × 88,4 |


### 3

5,00 mmol/L = 193 mg/dL

| Dettagli del risultato | |
| --- | --- |
| Fattore (mg/dL → mmol/L) | × 0,0259 |


### 4

40 mg/dL = 6,66 mmol/L

| Dettagli del risultato | |
| --- | --- |
| BUN equivalente | 18,7 mg/dL |
| Fattore (mg/dL → mmol/L) | × 0,1665 |


### 5

20 mg/dL = 7,14 mmol/L di urea

| Dettagli del risultato | |
| --- | --- |
| Urea equivalente | 42,9 mg/dL |
| Fattore (mg/dL → mmol/L di urea) | × 0,3570 |


### 6

17 µmol/L = 1,0 mg/dL

| Dettagli del risultato | |
| --- | --- |
| Fattore (mg/dL → µmol/L) | × 17,1 |


### 7

10,0 mg/dL = 2,50 mmol/L

| Dettagli del risultato | |
| --- | --- |
| Fattore (mg/dL → mmol/L) | × 0,2495 |

