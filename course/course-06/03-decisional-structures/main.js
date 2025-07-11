console.log('Other decisional structures..');

/**
 * Check if the provided user number is even or odd!
 */

// let userNumber = prompt('Input a number');
// userNumber = Number(userNumber);

// if(userNumber % 2 === 0){
//     alert('Your provided number, ' + userNumber + ' is even!')
// }
// else{
//     alert('Your provided number, ' + userNumber + ' is odd!')
// }

// if(userNumber % 2 === 1){
//     alert('Your provided number, ' + userNumber + ' is odd!')
// }
// else{
//     alert('Your provided number, ' + userNumber + ' is even!')
// }

// if(userNumber % 2 !== 0){
//     alert('Your provided number, ' + userNumber + ' is odd!')
// }
// else{
//     alert('Your provided number, ' + userNumber + ' is even!')
// }



/**
 * Returns the absolute value of a given number
 */
// let userNumber = prompt('Input a number');
// userNumber = Number(userNumber);

// if(userNumber < 0){
//     userNumber = -userNumber;
// }

// alert('The absolute value is: ' + userNumber)

/**
 * Let the user pick an option of dessert
 */
let userNumber = prompt('Input a number to receive somethign sweet');
userNumber = Number(userNumber);

// if(userNumber == 0){
//     alert('You get 🍫!');
// }
// else{
//     if(userNumber == 1){
//         alert('You get 🍨!');
//     }
//     else{
//         if(userNumber == 2){
//             alert('You get an 🍊!');
//         }
//         else{
//             alert('You get a 🍬!');
//         }
//     }
// }

// if(userNumber == 0)
//     alert('You get 🍫!');
// else if(userNumber == 1)
//     alert('You get 🍨!');
// else if(userNumber == 2)
//     alert('You get an 🍊!');
// else{
//     alert('You get a 🍬!');
// }


switch (userNumber) {
    case 0:
        alert('You get 🍫!') 
        break;

    case 1:
        alert('You get 🍨!') 
        break;

    case 2:
        alert('You get an 🍊!') 
        break;

    default:
        alert('You get a 🍬!');
        break;
}
