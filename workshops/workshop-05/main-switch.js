// implementation using switch
const randomNr = Math.floor(Math.random() * 6) + 1;

let prize;
switch (randomNr){
    case 1:
        prize = '🍔';
        break;

    case 2:
        prize = `🍕`;
        break;

    case 3: 
        prize = '🥪';
        break;

    case 4: 
        prize = '🥗';
        break;

    case 5: 
        prize = '🍰';
        break;

    default: 
        prize = '🌮';
        break;
}

console.log(randomNr);
// alert(prize);
alert(`Your prize is: ${prize}`);
