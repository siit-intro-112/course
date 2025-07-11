console.log('Outputs the numbers from 1 to a given value');

// data input 
let userNr = prompt('Input a value:');
userNr = Number(userNr);

// generate the numbers from 1 to the given value (in the userNr variable)
let i = 1;
while (i <= userNr) {
    alert(i);

    i++;
}