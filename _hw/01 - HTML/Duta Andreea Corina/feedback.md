## 1. Calculul punctajului

| Nr. | Criteriu                                                    | Max | Acordat | Comentariu                                                                 |
|-----|-------------------------------------------------------------|-----|---------|---------------------------------------------------------------------------|
| 1   | Numele fișierului = `homework.html`                         | 10  | ⚠️ **9**  | Numele este corect ca extensie, diferă doar prin majusculă (`H`).        |
| 2   | Structura HTML corectă                                      | 10  | ✅ **10** | Structura este completă și corectă.                                       |
| 3   | Conține tag `<h1>` corect                                   | 20  | ✅ **20** | Tagul `<h1>` este unic, bine poziționat și clar.                         |
| 4   | Conține hyperlink corect                                    | 20  | ⚠️ **18** | Linkul este valid, dar atributul `target="_blank"` este scris greșit.    |
| 5   | Conține imagine cu sursă de pe internet                     | 20  | ⚠️ **10** | Imaginea este locală, dar tagul este corect.                             |
| 6   | Indentarea tagurilor (100% consecventă)                     | 10  | ✅ **10** | Codul este indentat corect și uniform.                                   |
| 7   | Punctaj din oficiu                                          | 10  | ✅ **10** | Inclus automat.                                                          |
|     | **Total**                                                   |100  | **87**   |                                                                           |

## 2. Observații pentru fiecare eroare întâlnită

### Nume fișier
- Numele fișierului este `Homework.html`, diferind doar prin majuscula „H”. Se acordă 90% din punctaj.

### Hyperlink - atribut `target`
- Atributul `target` este scris greșit în interiorul tagului `<a>`:
  ```html
  <a href="..."_blank">google</a>
 ```
- Corect ar fi:
```html
  <a href="..." target="_blank">google</a>
 ```

### Imagine locală
- Imaginea folosește sursă locală (it.jpg), nu de pe internet. Conform cerințelor, sursa ar trebui să fie un link complet (https://...), dar tagul este corect construit.


## 3. Feedback general
Tema este completă și bine structurată. Doar câteva detalii tehnice minore (target și imagine) trebuie corectate pentru a atinge punctajul maxim.