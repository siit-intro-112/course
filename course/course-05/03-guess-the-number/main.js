console.log('REQUIREMENT: Guess the user number!');

// settings
const maxValue = 10;

// generate a random number, between 0, 1, ... maxValue -1
const randomNr = Math.floor(Math.random() * maxValue);
console.log(randomNr);

let userNr = prompt('Guess the number between 0 and ' + (maxValue - 1) + ': ');
userNr = Number(userNr);

if(userNr === randomNr){
    alert('Great! You guessed the number.')
}
else{
    alert('Wrong guess. The number was: ' + randomNr + '!');
}

alert('Thank you for playing the game!');