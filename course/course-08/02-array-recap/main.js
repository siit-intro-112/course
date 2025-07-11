console.log('Arrays recap');

/**
 * TASK:
 * Read the daily temperature for a set on days and display the average temperature
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

let sum = 0;
i = 0;
while (i < days) {
    sum = sum + temperatures[i];
    i++;
}

alert(`Average temperature is: ${sum / days}`);

// console.log(temperatures);
// console.log(sum);
// console.log(sum / days);