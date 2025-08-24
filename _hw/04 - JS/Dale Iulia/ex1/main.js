console.log(`Exercitiul 1`)

function calculateExpression() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const result = ((a*b) + (b*c)) / (a+b);

    alert ('Rezultatul este:' + result);


}