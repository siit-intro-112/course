## 1. Calculul punctajului

| Nr. | Criteriu                                                    | Max | Acordat | Comentariu                                                                 |
|-----|-------------------------------------------------------------|-----|---------|---------------------------------------------------------------------------|
| 1   | Numele fișierului = `homework.html`                         | 10  | ✅ **10** | Numele fișierului este exact conform cerinței.                            |
| 2   | Structura HTML corectă                                      | 10  | ✅ **10** | Structura este validă și completă (`DOCTYPE`, `html`, `head`, `body`).    |
| 3   | Conține tag `<h1>` corect                                   | 20  | ✅ **20** | Tagul este unic, bine poziționat și fără erori.                           |
| 4   | Conține hyperlink corect                                    | 20  | ✅ **20** | Linkul este valid, cu text clar și URL complet.                           |
| 5   | Conține imagine cu sursă de pe internet                     | 20  | ✅ **20** | Imaginea este dintr-o sursă online, iar tagul este complet.               |
| 6   | Indentarea tagurilor (≈ 95%)                                | 10  | ⚠️ **9**  | Tagul `<img>` nu este indentat față de tagul `<div>` care îl conține.     |
| 7   | Punctaj din oficiu                                          | 10  | ✅ **10** | Inclus automat.                                                           |
|     | **Total**                                                   |100  | **99**   |                                                                           |
                                                                        |


## 2. Observații pentru fiecare eroare întâlnită

### Indentare tag imagine
- Tagul `<img>` este poziționat corect din punct de vedere structural, dar nu este indentat în interiorul tagului `<div>`, ceea ce reduce lizibilitatea:
```html
<div>
<img src="..." alt="...">
</div>
```
**Corect**
```html
<div>
    <img src="..." alt="...">
</div>
```

## 3. Feedback general
Tema este completă, cu structură corectă și taguri bine utilizate. 

Singura observație este legată de indentarea unui tag. Codul este curat și ușor de urmărit.