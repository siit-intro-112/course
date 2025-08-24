console.log('Output numbers from 1 to n divisible by 3 or 5');

let userNr = prompt('Enter a number:');
userNr = Number(userNr);

let i = 1;
let result = '';

while (i <= userNr) {
  if (i % 3 === 0 || i % 5 === 0) {
    result = result + i + ' ';
  }
  i = i + 1;
}

alert('Numbers divisible by 3 or 5:\n' +result);