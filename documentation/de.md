<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · de · no clinical/professional/rights approval -->

# Umrechnung von Laboreinheiten

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/conversao-de-unidades-laboratoriais)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Untersuchung

`an`

- `glicose` — Glukose
- `colesterol` — Cholesterin (Gesamt, HDL, LDL)
- `triglicerideos` — Triglyzeride
- `creatinina` — Kreatinin
- `ureia` — Harnstoff
- `bun` — BUN (Blutharnstoffstickstoff)
- `calcio` — Gesamtkalzium
- `acido_urico` — Harnsäure
- `bilirrubina` — Bilirubin

### Umrechnen

`dir`

- `si` — Von mg/dL in SI-Einheiten
- `conv` — Von SI-Einheiten in mg/dL

### Wert

`val`

Bereich: 0–100000

## Fassung der Methode

SI-Umrechnung/Young 1987: explizite Molmassen und gerundete Faktoren; BUN≠Harnstoff

## Dokumentierte Formel

mmol/L = mg/dL × 10 ÷ Molmasse; µmol/L = mg/dL × 10000 ÷ Molmasse.

Glukose (180,16 g/mol): × 0,0555 · Cholesterin (386,65): × 0,02586 · Triglyzeride (als Triolein, 885,7): × 0,01129

Kreatinin (113,12): × 88,4 µmol/L · Harnsäure (168,11): × 59,48 µmol/L · Bilirubin (584,66): × 17,1 µmol/L

Harnstoff (60,06): × 0,1665 · BUN (28 g Stickstoff je Mol Harnstoff): × 0,357 mmol/L Harnstoff · BUN = Harnstoff × 0,466 (Harnstoff = BUN × 2,14)

Kalzium (40,08): × 0,2495

## Grenzen und Population

Wählen Sie Analyt und Einheit: Massenkonzentration und Stoffmengenkonzentration sind unterschiedliche Größen, die über die molare Masse der angegebenen chemischen Entität verbunden sind. Die Faktoren dieser Oberfläche sind gerundet; für Triglyceride wird Triolein als Grundlage verwendet. BUN bezeichnet Harnstoffstickstoff und nicht die Harnstoffmasse; beide sind daher nicht austauschbar. Die Umrechnung ändert weder die Labormethode noch legt sie ein Referenzintervall fest. Die Originaltabellen von Young 1987 wurden nicht vollständig geprüft; eine Zertifizierung aller Faktoren durch diese Quelle wird nicht behauptet.

## Referenzen

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
