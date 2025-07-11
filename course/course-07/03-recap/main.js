console.log('Display odd numbers from 0 to the given number');

let userNr = prompt('Input a value');
userNr = Number(userNr);

// SOLUTION 1
let i = 1;
while (i <= userNr) {
    if(i % 2 === 1){
        console.log(i);
    }
    
    // i = i + 1;
    i++;
}

// SOLUTION 2
// let i = 1;
// while (i <= userNr) {
//     console.log(i);
//     i = i + 2;
//     // i += 2;
// }
