console.log('Reads a number from the user, displays if the given number is divisible with 3 AND 5');

let userNr = prompt('Input a number');
userNr = Number(userNr);

if(userNr % 3 === 0 && userNr % 5 === 0) {
    alert('Your number is divisible with 3 AND 5');
}
else {
    alert('Your number is NOT divisible with 3 AND 5');
}