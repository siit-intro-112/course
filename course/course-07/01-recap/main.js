console.log(`Iterations recap!`);

/**
 *  User provides an integer (positive or negative)
 * 
 * The program outputs all the numbers between the absolute negative value to the absolute positive value
 * 
 * e.g.
 *   3  => each value on one output: -3 | -2 | -1 | 0 | 1 | 2 | 3
 *  -3  => each value on one output: -3 | -2 | -1 | 0 | 1 | 2 | 3
 */

let userNr = prompt(`Input a number (positive or negative):`);
userNr = Number(userNr);

if(userNr < 0){
    userNr = -userNr;
}

let i = -userNr;
while (i <= userNr){
    console.log(i);

    i++;
}

