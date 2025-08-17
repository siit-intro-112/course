let n = parseInt(prompt('Enter the number of elements:'));
let arr = [];

for (let i = 0; i < n; i++){
    arr [i] = parseInt(prompt(`Enter element ${i + 1}:`));
}
let min = arr [0];
for (let i = 1; i < n; i++){
    if (arr[i] < min){
        min = arr[i];
    }
}
console.log('Minimum number:', min);
