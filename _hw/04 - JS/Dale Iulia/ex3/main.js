console.log ('Exercitiul 3')

function sumBetween() {
    const n = parseInt(document.getElementById("n").value);
    const m = parseInt(document.getElementById("m").value);

    if (isNaN(n) || isNaN(m)) {
    alert("Trebuie sa introduci doua numere intregi.");
    return;
  }

    const start = Math.min(n, m);
    const end = Math.max(n, m);
    let sum = 0;

    for (let i = start; i <= end; i++) {
    sum += i;
  }

  alert("Suma numerelor între " + start + " și " + end + " este: " + sum);
  
}