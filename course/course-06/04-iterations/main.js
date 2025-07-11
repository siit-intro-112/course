/**
 * Simulate the rolling 6 dice
 */

let i = 1;

while (i < 5) {
    const diceRoll = Math.floor(Math.random() * 6) + 1
    console.log('Rolling dice ' + i + ': ' + diceRoll);

    // increments the iteration count
    i = i + 1;   // after executing the instruction of an iteration, the condition is checked once again
}

console.log('Iteration finished!');
