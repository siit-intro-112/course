function sumOddNumbers() {
    const n = Number(document.getElementById('nr-1').value);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    document.getElementById('result').textContent = sum;
}

function printDivisibleBy3or5() {
    const n = Number(document.getElementById('nr-2').value);
  
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result = result + i; 
            result = result + ', '; 
        }
    }
    document.getElementById('result-2').textContent = result;
}

function findMinNumber() {
    var array = document.getElementById('nr-3').value;
    var splitArray = array.split(',');

    var minNumber = Number(splitArray[0]);

    for (var i = 1; i < splitArray.length; i++) {
        var num = Number(splitArray[i]);
        if (num < minNumber) {
            minNumber = num;
        }
    }

    document.getElementById('result-3').textContent = minNumber;
}

function countElements() {
    var input = document.getElementById('nr-4').value;
    var elements = input.split(',');
    var count = elements.length;

    document.getElementById('result-4').textContent = count;
}