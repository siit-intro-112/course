/**
 * Simulate the rolling of a number of dice provided by the user and summing the points
 */

let diceNumber = prompt('How many dice do we have?');
diceNumber = Number(diceNumber);

let score = 0;

let i = 1;
while (i <= diceNumber) {
    const diceRoll = Math.floor(Math.random() * 6) + 1
    console.log('Rolling dice ' + i + ': ' + diceRoll);

    // adding the new dice roll to the score!
    score = score + diceRoll;

    // increments the iteration count
    i = i + 1;   // after executing the instruction of an iteration, the condition is checked once again
}

console.log('FInal score: '  + score);
