console.log('main.js  loaded...');

/**
 * The browser asks the user for a response representing the sum or subtraction of 2 randomly generated numbers
 * The sum or subtraction should also be random
 */

// STEP 1 - generate the first number and store it in a variable
const nr1 = Math.floor(Math.random() * 10) + 1;

// STEP 2 - generate the second number and store it in a variable
const nr2 = Math.floor(Math.random() * 10) + 1;

// STEP 3 - generate randomly the operation / operator
let operator;
if(Math.random() > 0.5){ // 50% - chances to be true, 50% chances to be false
    operator = '+';
}
else{ 
    operator = '-';
}

// STEP 4 - prompt the user for a response representing the sum of the 2  generated numbers, and store the response in a variable
let userReponse = prompt(nr1 + ' ' + operator + ' ' + nr2 + ' = ?');
userReponse = Number(userReponse);

// STEP 5 - check if the user response is the correct response; display the result
if ( (operator === '+' && userReponse === nr1 + nr2) || (operator === '-' && userReponse === nr1 - nr2) ) {
    alert('🥳 Your response was correct!');
} 
else {
    if(operator === '+'){
        alert('😞 Your respone is wrong. The correct answer is: ' + (nr1 + nr2))
    }
    else{
        alert('😞 Your respone is wrong. The correct answer is: ' + (nr1 - nr2))
    }
}