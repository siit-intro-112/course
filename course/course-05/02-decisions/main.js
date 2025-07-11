console.log('testing that main.js is loaded');

/* 
    REQUIREMENTS: 
    Ask the user for a number.
    Output the message the number is positive / the number is negative, depending of the given value 
*/

let userNumber = prompt('Input a number');
userNumber = Number(userNumber);

console.log(userNumber, typeof userNumber); // not required for the algortithm, just for testing

if (userNumber >= 0) {
    alert('The given number was positive');
} 
else {
    alert('The given number was negative');
}
