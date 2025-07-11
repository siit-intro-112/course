console.log('Arrays recap');

/**
 * TASK:
 * Read the daily temperature for a set of days and display the minimum temperature
 */

// read the temperatures set
let days = prompt(`How many days are tracked?`);
days = Number(days);

let temperatures = [];

let i = 0;
while (i < days){
    temperatures[i] = prompt(`Input temperature for day ${i + 1}: `);
    temperatures[i] = Number(temperatures[i]);

    i++;
}

// finding the minimum
console.log(temperatures);
// console.log(`Min is considered the fist element of the array: ${temperatures[0]}`);
let min = temperatures[0];

i = 1;
while (i < days) {
    // console.log(``);
    // console.log(`i is now: ${i}, the coresponding array element is: ${temperatures[i]}`);
    // console.log(`We compare current min value(${min}) with the current element (${temperatures[i]})`);
    // console.log(`If min is smaller than the current element, there is nothing to do...`);
    if(min > temperatures[i]){
        // console.log(`But it seems that min is bigger than the current element!`);
        min = temperatures[i];
        // console.log(`Therefore, we save a new min: ${min}`);
    }

    i++;
}

// console.log(``);
// console.log(`Final min value is: ${min}`);

alert(`The minimum temperature is: ${min}`);