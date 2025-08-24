console.log('Find the minimum number in an array');

let userInput = prompt('Enter an array:');
let parts = userInput.split(',');
let i = 0;
let min = Number(parts[0]);

while (i < parts.length) {
  let value = Number(parts[i]);
  if (value < min) {
    min = value;
  }
  i = i + 1;
}

alert(`Minimum number is: ` + min);