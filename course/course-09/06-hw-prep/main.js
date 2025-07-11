console.log('Displays the minimum in an array');

// read the array elements
let arrayLength = prompt('How many elements will the array contain?')
arrayLength = Number(arrayLength);

let arr = [];
let i = 0; 
while (i < arrayLength) {
    arr[i] = prompt('Input element ' + (i + 1) + ': ' );
    arr[i] = Number(arr[i]);
 
    i++;
}

console.log(arr);

// finding the min
let min = arr[0];

i = 1;
while (i < arrayLength) {
    if(min > arr[i]){
        min = arr[i];
    }

    i++;
}

alert('The minimum value of the array is: ' + min);