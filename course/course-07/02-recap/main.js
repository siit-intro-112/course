console.log('Display even numbers from 0 to the given number');

let userNr = prompt('Input a value');
userNr = Number(userNr);

// SOLUTION 1
/*
let i = 0;
while (i <= userNr) {
    if(i % 2 === 0){
        console.log(i);
    }
    
    // i = i + 1;
    i++;
}
*/

// SOLUTION 2
let i = 0;
while (i <= userNr) {
    console.log(i);
    i = i + 2;
}
