console.log('Exercitiul 2')

function findMax() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;

    const values = [a, b, c].filter(v => v !== "").map(Number);

    if (values.length === 0) {
    alert('Introduceti cel putin un numar.');
    return;
  }

  const max = Math.max(...values);
  alert("Maximul introdus este: " + max);

}