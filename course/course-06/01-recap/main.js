console.log('main.js  loaded...');

/**
 * The browser asks the user for a response representing the sum of 2 randomly generated numbers
 */

// STEP 1 - generate the first number and store it in a variable
const nr1 = Math.floor(Math.random() * 10) + 1;

// STEP 2 - generate the second number and store it in a variable
const nr2 = Math.floor(Math.random() * 10) + 1;

// STEP 3 - prompt the user for a response representing the sum of the 2  generated numbers, and store the response in a variable
let userReponse = prompt(nr1 + ' + ' + nr2 + ' = ?');
userReponse = Number(userReponse);

// STEP 4 - check if the user response is the correct response; display the result
if (userReponse === nr1 + nr2) {
    alert('🥳 Your response was correct!');
} 
else {
    alert('😞 Your respone is wrong. The correct answer is: ' + (nr1 + nr2))
}