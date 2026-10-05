<!-- ELUCENIA technical documentation · conversao-de-unidades-laboratoriais · es · no clinical/professional/rights approval -->

# Conversión de unidades de laboratorio

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/conversao-de-unidades-laboratoriais)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Examen

`an`

- `glicose` — Glucosa
- `colesterol` — Colesterol (total, HDL, LDL)
- `triglicerideos` — Triglicéridos
- `creatinina` — Creatinina
- `ureia` — Urea
- `bun` — BUN (nitrógeno ureico en sangre)
- `calcio` — Calcio total
- `acido_urico` — Ácido úrico
- `bilirrubina` — Bilirrubina

### Convertir

`dir`

- `si` — De mg/dL a unidades SI
- `conv` — De unidades SI a mg/dL

### Valor

`val`

intervalo: 0–100000

## Edición del método

Conversiones SI/Young 1987: masas molares y factores redondeados explícitos; BUN≠urea

## Fórmula documentada

mmol/L = mg/dL × 10 ÷ masa molar; µmol/L = mg/dL × 10000 ÷ masa molar.

Glucosa (180,16 g/mol): × 0,0555 · colesterol (386,65): × 0,02586 · triglicéridos (como trioleína, 885,7): × 0,01129

Creatinina (113,12): × 88,4 µmol/L · ácido úrico (168,11): × 59,48 µmol/L · bilirrubina (584,66): × 17,1 µmol/L

Urea (60,06): × 0,1665 · BUN (28 g de nitrógeno por mol de urea): × 0,357 mmol/L de urea · BUN = urea × 0,466 (urea = BUN × 2,14)

Calcio (40,08): × 0,2495

## Límites y población

Seleccione el analito y la unidad: concentración de masa y concentración de cantidad de sustancia son magnitudes distintas, vinculadas por la masa molar de la entidad especificada. Los factores de esta interfaz están redondeados; los triglicéridos usan la base trioleína. BUN expresa nitrógeno ureico, no masa de urea, por lo que no son intercambiables. La conversión no cambia el método de laboratorio ni establece un intervalo de referencia. Las tablas originales de Young 1987 no se han comprobado íntegramente; no se declara certificación de todos los factores por esa fuente.

## Referencias

- [Young DS. Implementation of SI units for clinical laboratory data: style specifications and conversion tables. Ann Intern Med, 1987.](https://doi.org/10.7326/0003-4819-106-1-114)

- [BIPM,SI9th edition,version1.11](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1671101192839&version=1.11)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
