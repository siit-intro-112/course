let userNr = prompt('Input a value please : ');
userNr = Number(userNr);

let i = 1;
let sum = 0;
let output = '';

while (i <= userNr) {
    //  QUEST 01
    if (i % 2 != 0) {
        sum = sum + i;
    }
    //  QUEST 02
    if ((i % 3 === 0) || (i % 5 === 0) ) {
        output = output + i + ' ';
    }
    i++;
}

alert(`The sum of odd numbers from 1 to ${userNr} is : ${sum}`);
alert(`The numbers from 1 to ${userNr} dividing with 3 or 5 are : ${output}`);

//  QUEST 03
let arrayLength = prompt('How many elements will the array contain?');
arrayLength = Number(arrayLength);

let array = [];
let y = 0;

while (y < arrayLength) {
    array[y] = prompt(`Input element ${y + 1}`);
    array[y] = Number(array[y]);

    y++;
}

let max = array[0];
y = 1;

while (y < arrayLength) {
    if (max < array[y]) {
        max = array[y];
    }

    y++;
}

alert(`The maximum value of the array is : ${max}`);














console.log(sum);
console.log(output);
console.log(array);
console.log(max);

