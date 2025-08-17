let n = parseInt(prompt("Introduceți numărul de elemente din tablou:"));
let tablou = [];

for (let i = 0; i < n; i++) {
    let element = parseFloat(prompt(`Introduceți elementul ${i + 1}:`));
    tablou.push(element);
}

let minim = tablou[0];
for (let i = 1; i < tablou.length; i++) {
    if (tablou[i] < minim) {
        minim = tablou[i];
    }
}

console.log("Numărul minim din tablou este: " + minim);
