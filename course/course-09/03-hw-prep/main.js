console.log('Sums the numbers given by the user');

// data input 
let userNr = prompt('Input the number of numbers to add:');
userNr = Number(userNr);

// sum the numbers of given values
let sum = 0;

let i = 1;
while (i <= userNr) {
    let newNumber = prompt('Input a new value: ');
    newNumber = Number(newNumber);

    sum = sum + newNumber;

    i = i + 1;
}

alert(sum);