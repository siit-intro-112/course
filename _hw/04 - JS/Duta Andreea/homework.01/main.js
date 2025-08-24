console.log('Compute the sum of odd numbers from 1 to n');

let userNr = prompt('Enter a number:');
userNr = Number(userNr);

let sum = 0;
let i = 1;

while (i <= userNr) {
  if (i % 2 !== 0) {
    sum = sum + i;
  }
  i = i + 1;
}

alert('Sum of odd numbers:'+sum);