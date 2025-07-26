## 1. Calculul punctajului

| Nr. | Criteriu                                                    | Max | Acordat | Comentariu                                                                 |
|-----|-------------------------------------------------------------|-----|---------|---------------------------------------------------------------------------|
| 1   | Numele fișierului = `homework.html`                         | 10  | ✅ **10** | Numele fișierului este exact conform cerinței.                            |
| 2   | Structura HTML corectă                                      | 10  | ❌ **0**  | Tagurile `<a>` din `<head>` încalcă structura HTML standard.              |
| 3   | Conține tag `<h1>` corect                                   | 20  | ✅ **20** | Există un singur tag `<h1>`, corect plasat și scris.                      |
| 4   | Conține hyperlink corect                                    | 20  | ⚠️ **10** | Există un link, dar este gol (fără text între taguri).                   |
| 5   | Conține imagine cu sursă de pe internet                     | 20  | ⚠️ **10** | Imaginea este locală, dar tagul `<img>` este corect.                     |
| 6   | Indentarea tagurilor (100% consecventă)                     | 10  | ✅ **10** | Toate tagurile din `<body>` au indentare consecventă și corectă.         |
| 7   | Punctaj din oficiu                                          | 10  | ✅ **10** | Inclus automat.                                                          |
|     | **Total**         


## 2. Observații pentru fiecare eroare întâlnită

### Structură HTML
- Tagurile `<a>` sunt amplasate greșit în interiorul tagului `<head>`, ceea ce încalcă standardele HTML. Acestea trebuie mutate în interiorul secțiunii `<body>`.

### Hyperlink gol
- Linkul:
  ```html
  <a href="https://www.google.com" target="_blank"></a>
  ```
  nu conține niciun text ancoră între tagurile `<a>` și `</a>`. Este necesar să existe un text vizibil pentru ca linkul să fie funcțional și accesibil (ex: `Google`).

### Imagine locală
- Imaginea este locală, cu `src="imgs.png/cat.png"`. Cerința solicită folosirea unei imagini de pe internet (cu `src` care începe cu `https://`).
- Totuși, tagul `<img>` este corect din punct de vedere al structurii și atributelor.

### Indentare
- Toate tagurile sunt indentate consecvent. Nu există erori de indentare.

## 3. Feedback general

Tema este corect structurată în mare parte și conține toate elementele cerute.

Tema este bine structurată și include majoritatea elementelor cerute. Este necesară corectarea structurii din `<head>` și completarea conținutului linkului pentru a respecta cerințele.