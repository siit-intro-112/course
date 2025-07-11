console.log('Sums the numbers from 1 to a given value');

// data input 
let userNr = prompt('Input a value:');
userNr = Number(userNr);

// sum the numbers from 1 to the given value (in the userNr variable)
let sum = 0;

let i = 1;
while (i <= userNr) {
    sum = sum + i;

    i = i + 1;
}

alert(sum);