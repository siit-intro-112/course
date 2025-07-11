console.log('Ex. 2');

/**
 * Prompt the user for 5 values. 
 *  1. Display the sum of the given values e.g. input: 1; 3; 6; 5; 10  output: 25
 *  2. Display for the given numbers as output "The sum of the given numbers is: 25"
 *  3. Display for the given numbers as output "1 + 3 + 6 + 5 + 10 = 25"
 */

let sum = 0;

let output = '';

// initializing the counter
let i = 0;

// the iterative block - set the contition for stopping the loop
while (i < 5) {
    let userNumber = prompt('Input a value');
    userNumber = Number(userNumber);

    // add the given number to the existing sum
    sum = sum + userNumber;

    // 
    if(i < 4){
        output = output + userNumber + ' + ';
    }
    else {
        output = output + userNumber
    }
    
    // increasing the counter
    i = i + 1;
}

// REQUIREMENT 1
alert(sum);

// REQUIREMENT 2
alert('The sum of the given numbers is: ' + sum);

// REQUIREMENT 3
alert(output + ' = ' + sum);